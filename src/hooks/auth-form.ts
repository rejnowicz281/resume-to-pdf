import { useAuth } from "@/providers/auth-provider";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const authSchema = z.object({
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

export const useAuthForm = () => {
    const { login, register } = useAuth();

    const form = useForm<z.infer<typeof authSchema>>({
        resolver: zodResolver(authSchema)
    });

    function onLoginSubmit(values: z.infer<typeof authSchema>) {
        const { name, password } = values;

        login(name, password);
    }

    function onRegisterSubmit(values: z.infer<typeof authSchema>) {
        const { name, password } = values;

        register(name, password);
    }

    return { form, onLoginSubmit, onRegisterSubmit };
};
