import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useTrainingForm } from "@/hooks/step-two-forms";
import { Training } from "@/lib/types/resume";
import { useResumeCreator } from "@/providers/resume-creator-provider";
import { Plus } from "lucide-react";

export default function TrainingForm({ training, afterSubmit }: { training?: Training; afterSubmit?: () => void }) {
    const { form, onSubmit } = useTrainingForm(training);
    const { t } = useResumeCreator();

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
                            <FormLabel>{t("resumeCreator.stepTwo.trainingForm.name")} *</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder={t("resumeCreator.stepTwo.trainingForm.namePlaceholder")}
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="organization"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>{t("resumeCreator.stepTwo.trainingForm.organization")} *</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder={t("resumeCreator.stepTwo.trainingForm.organizationPlaceholder")}
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="issueDate"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>{t("resumeCreator.stepTwo.trainingForm.issueDate")} *</FormLabel>
                            <FormControl>
                                <Input type="date" {...field} />
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
                            <FormLabel>{t("resumeCreator.stepTwo.trainingForm.description")}</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder={t("resumeCreator.stepTwo.trainingForm.descriptionPlaceholder")}
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
