import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useWorkExperienceForm } from "@/hooks/step-two-forms";
import { WorkExperience } from "@/lib/types/resume";
import { useResumeCreator } from "@/providers/resume-creator-provider";
import { Plus } from "lucide-react";

export default function ExperienceForm({
    experience,
    afterSubmit
}: {
    experience?: WorkExperience;
    afterSubmit?: () => void;
}) {
    const { form, onSubmit } = useWorkExperienceForm(experience);
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
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>{t("resumeCreator.stepTwo.workExperienceForm.title")} *</FormLabel>
                            <FormControl>
                                <Input placeholder="Software Developer" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>{t("resumeCreator.stepTwo.workExperienceForm.company")}</FormLabel>
                            <FormControl>
                                <Input placeholder="Google" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>{t("resumeCreator.stepTwo.workExperienceForm.location")}</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder={t("resumeCreator.stepTwo.workExperienceForm.locationPlaceholder")}
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
                            <FormLabel>{t("resumeCreator.stepTwo.workExperienceForm.startDate")} *</FormLabel>
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
                            <FormLabel>{t("resumeCreator.stepTwo.workExperienceForm.endDate")}</FormLabel>
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
                            <FormLabel>{t("resumeCreator.stepTwo.workExperienceForm.description")}</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder={t("resumeCreator.stepTwo.workExperienceForm.descriptionPlaceholder")}
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
