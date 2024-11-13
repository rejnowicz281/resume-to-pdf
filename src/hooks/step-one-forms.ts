import { dateToString, stringToDate } from "@/lib/utils/date";
import { db } from "@/lib/utils/db";
import { useResumeCreator } from "@/providers/resume-creator-provider";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const basicInfoSchema = z.object({
    firstName: z.string().min(1, {
        message: "First name is required"
    }),
    lastName: z.string().min(1, {
        message: "Last name is required"
    }),
    dateOfBirth: z.string().optional()
});

export function useBasicInfoForm() {
    const { resume, setFirstName, setLastName, setDateOfBirth } = useResumeCreator();

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

        const date = dateOfBirth ? dateToString(stringToDate(dateOfBirth), "dd.mm.yyyy") : "";

        setFirstName(firstName);
        setLastName(lastName);
        setDateOfBirth(date);
        db.put({ ...resume, firstName, lastName, dateOfBirth: date });
    }

    return { form, onSubmit };
}

const locationSchema = z.object({
    country: z.string().optional(),
    city: z.string().optional()
});

export function useLocationForm() {
    const { resume, setCountry, setCity } = useResumeCreator();

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

const contactSchema = z.object({
    phone: z.string().optional(),
    email: z
        .string()
        .email({
            message: "Email address is invalid"
        })
        .min(1, {
            message: "Email address is required"
        })
});

export function useContactForm() {
    const { resume, setEmail, setPhone } = useResumeCreator();

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
