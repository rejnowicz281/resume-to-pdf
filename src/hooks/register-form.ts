import { z } from "zod";

import { useAuth } from "@/providers/auth-provider";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const registerSchema = z.object({
    name: z
        .string()
        .trim()
        .min(1, "Username is required")
        .refine((name) => name === name.toLowerCase(), {
            message: "Username must be lowercase"
        })
        .refine((name) => !name.startsWith("_"), {
            message: "Username cannot start with an underscore (_)"
        })
        .refine((name) => !name.includes(":"), {
            message: "Username cannot contain a colon (:)"
        }),
    password: z.string().trim().min(3, "Password must be at least 3 characters")
});

export const useRegisterForm = () => {
    const { register } = useAuth();

    const form = useForm<z.infer<typeof registerSchema>>({
        resolver: zodResolver(registerSchema)
    });

    function onSubmit(values: z.infer<typeof registerSchema>) {
        const { name, password } = values;

        register(name, password);
    }

    return { form, onSubmit };
};
