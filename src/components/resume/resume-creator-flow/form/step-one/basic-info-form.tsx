import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useBasicInfoForm } from "@/hooks/step-one-forms";
import { Plus } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function BasicInfoForm() {
    const { form, onSubmit } = useBasicInfoForm();
    const { t } = useTranslation();

    return (
        <div>
            <h2 className="mb-6 text-3xl font-bold">{t("resumeCreator.stepOne.basicInfoForm.title")}</h2>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col space-y-8">
                    <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{t("resumeCreator.stepOne.basicInfoForm.firstName")} *</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder={t("resumeCreator.stepOne.basicInfoForm.firstNamePlaceholder")}
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{t("resumeCreator.stepOne.basicInfoForm.lastName")} *</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder={t("resumeCreator.stepOne.basicInfoForm.lastNamePlaceholder")}
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="dateOfBirth"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{t("resumeCreator.stepOne.basicInfoForm.dateOfBirth")}</FormLabel>
                                <FormControl>
                                    <Input type="date" {...field} />
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
        </div>
    );
}
