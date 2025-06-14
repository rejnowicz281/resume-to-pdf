import { dateToString, stringToDate } from "@/lib/utils/date";
import { usePouchDB } from "@/providers/pouchdb-provider";
import { useResumeCreator } from "@/providers/resume-creator-provider";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export function useBasicInfoForm() {
    const { resume, setFirstName, setLastName, setDateOfBirth, t } = useResumeCreator();
    const { db } = usePouchDB();

    const basicInfoSchema = z.object({
        firstName: z.string().min(1, {
            message: t("resumeCreator.stepOne.basicInfoForm.firstNameIsRequired")
        }),
        lastName: z.string().min(1, {
            message: t("resumeCreator.stepOne.basicInfoForm.lastNameIsRequired")
        }),
        dateOfBirth: z.string().optional()
    });

    const { firstName, lastName, dateOfBirth } = resume;

    const form = useForm<z.infer<typeof basicInfoSchema>>({
        resolver: zodResolver(basicInfoSchema),
        values: {
            firstName,
            lastName,
            dateOfBirth: dateOfBirth ? dateToString(stringToDate(dateOfBirth), "yyyy-mm-dd") : ""
        }
    });

    function onSubmit(values: z.infer<typeof basicInfoSchema>) {
        const { firstName, lastName, dateOfBirth } = values;

        const date = dateOfBirth ? dateToString(new Date(dateOfBirth), "dd.mm.yyyy") : "";

        setFirstName(firstName);
        setLastName(lastName);
        setDateOfBirth(date);
        db.put({ ...resume, firstName, lastName, dateOfBirth: date });
    }

    return { form, onSubmit };
}

export function useLocationForm() {
    const { resume, setCountry, setCity } = useResumeCreator();
    const { db } = usePouchDB();

    const locationSchema = z.object({
        country: z.string().optional(),
        city: z.string().optional()
    });

    const { country, city } = resume;

    const form = useForm<z.infer<typeof locationSchema>>({
        resolver: zodResolver(locationSchema),
        values: {
            country,
            city
        }
    });

    function onSubmit(values: z.infer<typeof locationSchema>) {
        const country = values.country?.trim() || "";
        const city = values.city || "";
        setCountry(country);
        setCity(city);

        db.put({
            ...resume,
            country,
            city
        });
    }

    return { form, onSubmit };
}

export function useContactForm() {
    const { resume, setEmail, setPhone, t } = useResumeCreator();
    const { db } = usePouchDB();

    const contactSchema = z.object({
        phone: z.string().optional(),
        email: z
            .string()
            .email({
                message: t("resumeCreator.stepOne.contactForm.invalidEmail")
            })
            .min(1, {
                message: t("resumeCreator.stepOne.contactForm.emailIsRequired")
            })
    });

    const { phone, email } = resume;

    const form = useForm<z.infer<typeof contactSchema>>({
        resolver: zodResolver(contactSchema),
        values: {
            phone,
            email
        }
    });

    function onSubmit(values: z.infer<typeof contactSchema>) {
        const phone = values.phone?.trim() || "";
        const email = values.email.trim();

        setEmail(email);
        setPhone(phone);

        db.put({ ...resume, phone, email });
    }

    return { form, onSubmit };
}
