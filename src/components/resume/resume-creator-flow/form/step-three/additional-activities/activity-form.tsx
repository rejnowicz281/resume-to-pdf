import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useActivityForm } from "@/hooks/step-three-forms";
import { Activity } from "@/lib/types/resume";
import { Plus } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function ActivityForm({ activity, afterSubmit }: { activity?: Activity; afterSubmit?: () => void }) {
    const { form, onSubmit } = useActivityForm(activity);
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
                            <FormLabel>{t("resumeCreator.stepThree.activityForm.name")} *</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder={t("resumeCreator.stepThree.activityForm.namePlaceholder")}
                                    {...field}
                                />
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
                            <FormLabel>{t("resumeCreator.stepThree.activityForm.location")}</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder={t("resumeCreator.stepThree.activityForm.locationPlaceholder")}
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
                            <FormLabel>{t("resumeCreator.stepThree.activityForm.startDate")} *</FormLabel>
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
                            <FormLabel>{t("resumeCreator.stepThree.activityForm.endDate")}</FormLabel>
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
                            <FormLabel>{t("resumeCreator.stepThree.activityForm.description")}</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder={t("resumeCreator.stepThree.activityForm.descriptionPlaceholder")}
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
