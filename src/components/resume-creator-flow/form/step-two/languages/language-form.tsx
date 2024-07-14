import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useLanguageForm } from "@/hooks/step-two-forms";
import { Language } from "@/providers/resume-creator-provider";

export default function LanguageForm({ language, afterSubmit }: { language?: Language; afterSubmit?: () => void }) {
    const { form, onSubmit } = useLanguageForm(language);

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
                    name="language"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Language *</FormLabel>
                            <FormControl>
                                <Input defaultValue={language?.language} placeholder="English" {...field} />
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
                            <FormLabel>Level *</FormLabel>
                            <FormControl>
                                <Input defaultValue={language?.level} placeholder="Native" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit">Submit</Button>
            </form>
        </Form>
    );
}
