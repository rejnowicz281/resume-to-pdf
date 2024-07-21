import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLocationForm } from "@/hooks/step-one-forms";
import { getCountryNames } from "@/lib/constants/country-names";
import { Plus } from "lucide-react";
import { useTranslation } from "react-i18next";

export function LocationForm() {
    const { form, onSubmit } = useLocationForm();
    const { t, i18n } = useTranslation();

    const countryNames = getCountryNames(i18n.language);

    return (
        <div>
            <h2 className="mb-6 text-3xl font-bold">{t("resumeCreator.stepOne.locationForm.title")}</h2>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col space-y-8">
                    <FormField
                        control={form.control}
                        name="country"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{t("resumeCreator.stepOne.locationForm.country")}</FormLabel>
                                <FormControl>
                                    <Select onValueChange={field.onChange} defaultValue={field.value || ""}>
                                        <SelectTrigger>
                                            <SelectValue
                                                placeholder={t("resumeCreator.stepOne.locationForm.countryPlaceholder")}
                                            />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value=" ">
                                                {t("resumeCreator.stepOne.locationForm.noCountry")}
                                            </SelectItem>

                                            {countryNames.map((country) => (
                                                <SelectItem key={country} value={country}>
                                                    {country}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="city"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{t("resumeCreator.stepOne.locationForm.city")}</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder={t("resumeCreator.stepOne.locationForm.cityPlaceholder")}
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
