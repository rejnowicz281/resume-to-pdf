import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useContactForm } from "@/hooks/step-one-forms";
import { useResumeCreator } from "@/providers/resume-creator-provider";
import { Plus } from "lucide-react";

export default function ContactForm() {
    const { form, onSubmit } = useContactForm();
    const { t } = useResumeCreator();

    return (
        <div>
            <h2 className="mb-6 text-3xl font-bold">{t("resumeCreator.stepOne.contactForm.title")}</h2>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col space-y-8">
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{t("phone")}</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder={t("resumeCreator.stepOne.contactForm.phonePlaceholder")}
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>E-mail *</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder={t("resumeCreator.stepOne.contactForm.emailPlaceholder")}
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
        </div>
    );
}
