import { useAuth } from "@/providers/auth-provider";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { z } from "zod";

export const useAuthForm = () => {
    const { login, register } = useAuth();
    const { t } = useTranslation();

    const authSchema = z.object({
        name: z
            .string()
            .trim()
            .min(1, t("authForm.usernameIsRequired"))
            .refine((name) => name === name.toLowerCase(), {
                message: t("authForm.usernameMustBeLowercase")
            })
            .refine((name) => !name.startsWith("_"), {
                message: t("authForm.usernameCannotStartWithUnderscore")
            })
            .refine((name) => !name.includes(":"), {
                message: t("authForm.usernameCannotContainColon")
            }),
        password: z.string().trim().min(3, t("authForm.passwordMustBeThreeCharacters"))
    });

    const form = useForm<z.infer<typeof authSchema>>({
        resolver: zodResolver(authSchema)
    });

    async function onLoginSubmit(values: z.infer<typeof authSchema>) {
        const { name, password } = values;

        const res = await login(name, password);

        return res;
    }

    async function onRegisterSubmit(values: z.infer<typeof authSchema>) {
        const { name, password } = values;

        const res = await register(name, password);

        return res;
    }

    return { form, onLoginSubmit, onRegisterSubmit };
};
