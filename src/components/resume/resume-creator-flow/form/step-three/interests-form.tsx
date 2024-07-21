import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { useInterestsForm } from "@/hooks/step-three-forms";
import { Plus } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function InterestsForm() {
    const { form, onSubmit } = useInterestsForm();
    const { t } = useTranslation();

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col space-y-8">
                <FormField
                    control={form.control}
                    name="interests"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                <h2 className="mb-6 text-3xl font-bold">
                                    {t("resumeCreator.stepThree.interestsForm.interests")}
                                </h2>
                            </FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder={t("resumeCreator.stepThree.interestsForm.interestsPlaceholder")}
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
