import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLanguageForm } from "@/hooks/step-two-forms";
import LANGUAGE_LEVELS from "@/lib/constants/language-levels";
import { Language } from "@/lib/types/resume";
import { Plus } from "lucide-react";

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
                                <Input placeholder="English" {...field} />
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
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select language level" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {LANGUAGE_LEVELS.map((level) => (
                                            <SelectItem key={level} value={level}>
                                                {level}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button className="flex gap-2 self-center" type="submit">
                    <Plus />
                    Submit
                </Button>
            </form>
        </Form>
    );
}
