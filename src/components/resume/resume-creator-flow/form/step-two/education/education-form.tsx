import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useEducationForm } from "@/hooks/step-two-forms";
import { Education } from "@/lib/types/resume";
import { useResumeCreator } from "@/providers/resume-creator-provider";
import { Plus } from "lucide-react";

export default function EducationForm({ education, afterSubmit }: { education?: Education; afterSubmit?: () => void }) {
    const { form, onSubmit } = useEducationForm(education);
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
                    name="institution"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>{t("resumeCreator.stepTwo.educationForm.institution")} *</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder={t("resumeCreator.stepTwo.educationForm.institutionPlaceholder")}
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="level"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>{t("resumeCreator.stepTwo.educationForm.level")} *</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder={t("resumeCreator.stepTwo.educationForm.levelPlaceholder")}
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="specialization"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>{t("resumeCreator.stepTwo.educationForm.specialization")}</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder={t("resumeCreator.stepTwo.educationForm.specializationPlaceholder")}
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="startDate"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>{t("resumeCreator.stepTwo.educationForm.startDate")} *</FormLabel>
                            <FormControl>
                                <Input type="date" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="endDate"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>{t("resumeCreator.stepTwo.educationForm.endDate")}</FormLabel>
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
                            <FormLabel>{t("resumeCreator.stepTwo.educationForm.description")}</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder={t("resumeCreator.stepTwo.educationForm.descriptionPlaceholder")}
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
