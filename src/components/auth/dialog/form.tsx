import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useAuthForm } from "@/hooks/auth-form";
import { useTranslation } from "react-i18next";
import PasswordInputControl from "../password-input/control-version";

export default function AuthForm({ closeDialog }: { closeDialog: () => void }) {
    const { form, onLoginSubmit, onRegisterSubmit } = useAuthForm();
    const { isSubmitting } = form.formState;
    const { t } = useTranslation();

    return (
        <Form {...form}>
            <form className="flex flex-col gap-6">
                <div className="flex flex-col">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem className="grid grid-cols-4 items-center">
                                <FormLabel className="text-right pr-3">{t("authForm.username")}</FormLabel>
                                <FormControl className="col-span-3">
                                    <Input placeholder={t("authForm.usernamePlaceholder")} {...field} />
                                </FormControl>
                                <FormMessage className="col-start-2 pl-3 py-1 col-span-3 !text-red-500 text-sm" />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem className="grid grid-cols-4 items-center">
                                <FormLabel className="text-right pr-3">{t("authForm.password")}</FormLabel>
                                <PasswordInputControl
                                    placeholder={t("authForm.passwordMustBeThreeCharacters")}
                                    className="col-span-3"
                                    field={field}
                                />
                                <FormMessage className="col-start-2 pl-3 py-1 col-span-3 !text-red-500 text-sm" />
                            </FormItem>
                        )}
                    />
                </div>

                <div className="flex flex-col gap-3">
                    <Button
                        disabled={isSubmitting}
                        onClick={form.handleSubmit(async (e) => {
                            const res = await onLoginSubmit(e);

                            if (res.status === 200) closeDialog();
                            else {
                                form.setError("name", {
                                    type: "manual",
                                    message: t("authForm.invalidUsernameOrPassword")
                                });
                                form.setError("password", {
                                    type: "manual",
                                    message: t("authForm.invalidUsernameOrPassword")
                                });
                            }
                        })}
                        className="dark:bg-zinc-800 dark:text-white dark:border dark:border-neutral-700 dark:hover:bg-zinc-700 font-semibold flex items-center gap-1"
                    >
                        {t("login")}
                    </Button>
                    <Button
                        disabled={isSubmitting}
                        variant="outline"
                        className="dark:bg-zinc-800 dark:text-white dark:border dark:border-neutral-700 dark:hover:bg-zinc-700 font-semibold flex items-center gap-1"
                        onClick={form.handleSubmit(async (e) => {
                            const res = await onRegisterSubmit(e);

                            if (res.status === 200) closeDialog();
                            else
                                form.setError("name", {
                                    type: "manual",
                                    message: t("authForm.usernameAlreadyTaken")
                                });
                        })}
                    >
                        {t("register")}
                    </Button>
                </div>
            </form>
        </Form>
    );
}
