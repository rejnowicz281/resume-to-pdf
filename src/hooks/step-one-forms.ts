import { dateToString, stringToDate } from "@/lib/utils/date";
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
    const { firstName, lastName, setFirstName, setLastName, dateOfBirth, setDateOfBirth } = useResumeCreator();

    const form = useForm<z.infer<typeof basicInfoSchema>>({
        resolver: zodResolver(basicInfoSchema),
        defaultValues: {
            firstName,
            lastName,
            dateOfBirth: dateOfBirth ? dateToString(stringToDate(dateOfBirth), "yyyy-mm-dd") : ""
        }
    });

    function onSubmit(values: z.infer<typeof basicInfoSchema>) {
        setFirstName(values.firstName);
        setLastName(values.lastName);
        setDateOfBirth(values.dateOfBirth ? dateToString(new Date(values.dateOfBirth), "dd.mm.yyyy") : "");
    }

    return { form, onSubmit };
}

const locationSchema = z.object({
    country: z.string().optional(),
    city: z.string().optional()
});

export function useLocationForm() {
    const { country, city, setCountry, setCity } = useResumeCreator();

    const form = useForm<z.infer<typeof locationSchema>>({
        resolver: zodResolver(locationSchema),
        defaultValues: {
            country,
            city
        }
    });

    function onSubmit(values: z.infer<typeof locationSchema>) {
        setCountry(values.country || "");
        setCity(values.city || "");
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
    const { email, phone, setEmail, setPhone } = useResumeCreator();

    const form = useForm<z.infer<typeof contactSchema>>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            phone,
            email
        }
    });

    function onSubmit(values: z.infer<typeof contactSchema>) {
        setEmail(values.email);
        setPhone(values.phone || "");
    }

    return { form, onSubmit };
}
