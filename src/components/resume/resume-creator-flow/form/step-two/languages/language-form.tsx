import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLanguageForm } from "@/hooks/step-two-forms";
import { getLanguageLevels } from "@/lib/constants/language-levels";

import { Language } from "@/lib/types/resume";
import { Plus } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function LanguageForm({ language, afterSubmit }: { language?: Language; afterSubmit?: () => void }) {
    const { form, onSubmit } = useLanguageForm(language);
    const { t, i18n } = useTranslation();

    const languageLevels = getLanguageLevels(i18n.language);

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
                            <FormLabel>{t("resumeCreator.stepTwo.languageForm.language")} *</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder={t("resumeCreator.stepTwo.languageForm.languagePlaceholder")}
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
                            <FormLabel>{t("resumeCreator.stepTwo.languageForm.level")} *</FormLabel>
                            <FormControl>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <SelectTrigger>
                                        <SelectValue
                                            placeholder={t("resumeCreator.stepTwo.languageForm.levelPlaceholder")}
                                        />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {languageLevels.map((level) => (
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
                    {t("submit")}
                </Button>
            </form>
        </Form>
    );
}
