import DownloadResumesButton from "@/components/resume/download-resumes-button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useTranslation } from "react-i18next";

export default function SettingsPage() {
    const { t, i18n } = useTranslation();

    return (
        <div className="flex-1 flex justify-center">
            <div className="py-12 px-7 max-w-[900px] w-full">
                <div className="border-b border-b-neutral-300 dark:border-b-neutral-800 pb-4 mb-8">
                    <h1 className="text-3xl font-semibold">{t("settings")}</h1>
                </div>
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-4 items-start">
                        <div className="flex flex-col gap-1">
                            <h2 className="font-semibold text-xl">{t("settingsPage.downloadResumes")}</h2>
                            <p className="text-gray-500 dark:text-gray-400">
                                {t("settingsPage.downloadResumesDescription")}
                            </p>
                        </div>
                        <DownloadResumesButton />
                    </div>

                    <div className="flex flex-col gap-4 items-start">
                        <div className="flex flex-col gap-1">
                            <h2 className="font-semibold text-xl">{t("language")}</h2>
                            <p className="text-gray-500 dark:text-gray-400">
                                {t("settingsPage.changeLanguageDescription")}
                            </p>
                        </div>
                        <div>
                            <Select value={i18n.language} onValueChange={(val) => i18n.changeLanguage(val)}>
                                <SelectTrigger className="flex gap-3">
                                    <SelectValue placeholder="Select app language" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="en">English</SelectItem>
                                    <SelectItem value="pl-PL">Polski</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
