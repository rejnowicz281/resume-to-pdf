import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useAuthForm } from "@/hooks/auth-form";
import PasswordInputControl from "../password-input/control-version";

export default function AuthForm({ closeDialog }: { closeDialog: () => void }) {
    const { form, onLoginSubmit, onRegisterSubmit } = useAuthForm();

    return (
        <Form {...form}>
            <form className="flex flex-col gap-6">
                <div className="flex flex-col">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem className="grid grid-cols-4 items-center">
                                <FormLabel className="text-right pr-3">Username</FormLabel>
                                <FormControl className="col-span-3">
                                    <Input placeholder="John Doe" {...field} />
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
                                <FormLabel className="text-right pr-3">Password</FormLabel>
                                <PasswordInputControl
                                    placeholder="Must be at least 3 characters"
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
                        onClick={form.handleSubmit((e) => {
                            onLoginSubmit(e);
                            closeDialog();
                        })}
                        className="dark:bg-zinc-800 dark:text-white dark:border dark:border-neutral-700 dark:hover:bg-zinc-700 font-semibold flex items-center gap-1"
                    >
                        Login
                    </Button>
                    <Button
                        variant="outline"
                        className="dark:bg-zinc-800 dark:text-white dark:border dark:border-neutral-700 dark:hover:bg-zinc-700 font-semibold flex items-center gap-1"
                        onClick={form.handleSubmit((e) => {
                            onRegisterSubmit(e);
                            closeDialog();
                        })}
                    >
                        Register
                    </Button>
                </div>
            </form>
        </Form>
    );
}
