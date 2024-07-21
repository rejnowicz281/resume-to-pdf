import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useLinkForm } from "@/hooks/step-three-forms";
import { Link } from "@/lib/types/resume";
import { Plus } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function LinkForm({ link, afterSubmit }: { link?: Link; afterSubmit?: () => void }) {
    const { form, onSubmit } = useLinkForm(link);
    const { t } = useTranslation();

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit((e) => {
                    onSubmit(e);
                    if (afterSubmit) afterSubmit();
                })}
                className="space-y-8"
            >
                <FormField
                    control={form.control}
                    name="url"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>{t("resumeCreator.stepThree.linkForm.url")} *</FormLabel>
                            <FormControl>
                                <Input placeholder="https://linkedin.com" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>{t("resumeCreator.stepThree.linkForm.description")}</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder={t("resumeCreator.stepThree.linkForm.descriptionPlaceholder")}
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button className="flex gap-2 self-center" type="submit">
                    <Plus />
                    {t("submit")}
                </Button>
            </form>
        </Form>
    );
}
