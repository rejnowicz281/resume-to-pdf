import { z } from "zod";

import { useAuth } from "@/providers/auth-provider";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const registerSchema = z.object({
    name: z.string().trim().min(1, "Username is required"),
    password: z.string().trim().min(3, "Password must be at least 3 characters")
});

export const useRegisterForm = () => {
    const { register, login } = useAuth();

    const form = useForm<z.infer<typeof registerSchema>>({
        resolver: zodResolver(registerSchema)
    });

    async function onSubmit(values: z.infer<typeof registerSchema>) {
        const { name, password } = values;

        await register(name, password);

        await login(name, password);
    }

    return { form, onSubmit };
};
