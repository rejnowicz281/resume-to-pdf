import { z } from "zod";

import { useAuth } from "@/providers/auth-provider";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const loginSchema = z.object({
    name: z.string().trim().min(1, "Username is required"),
    password: z.string().trim().min(1, "Please type in a password")
});

export const useLoginForm = () => {
    const { login } = useAuth();

    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema)
    });

    function onSubmit(values: z.infer<typeof loginSchema>) {
        const { name, password } = values;

        login(name, password);
    }

    return { form, onSubmit };
};
