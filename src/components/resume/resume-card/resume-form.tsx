import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useResumeForm } from "@/hooks/resume-form";
import { Resume } from "@/lib/types/resume";
import { getResumeName } from "@/lib/utils/resume";
import { Plus } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function ResumeForm({ resume, afterSubmit }: { resume: Resume; afterSubmit?: () => void }) {
    const { form, onSubmit } = useResumeForm(resume.id);
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
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>{t("resumeForm.name")}</FormLabel>
                            <FormControl>
                                <Input placeholder={getResumeName(resume)} {...field} />
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
                            <FormLabel>{t("resumeForm.description")}</FormLabel>
                            <FormControl>
                                <Input placeholder={t("resumeForm.descriptionPlaceholder")} {...field} />
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
