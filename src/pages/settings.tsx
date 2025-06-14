import AuthDialog from "@/components/auth/dialog";
import { LanguageSelect } from "@/components/general/language-select";
import DownloadResumesButton from "@/components/resume/download-resumes-button";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/providers/auth-provider";
import { Trans, useTranslation } from "react-i18next";

export default function SettingsPage() {
    const { t, i18n } = useTranslation();
    const { logout, user } = useAuth();

    return (
        <div className="flex-1 flex justify-center">
            <div className="py-12 px-7 max-w-[900px] w-full">
                <div className="border-b border-b-neutral-300 dark:border-b-neutral-800 pb-4 mb-8">
                    <h1 className="text-3xl font-semibold">{t("settings")}</h1>
                </div>
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-4 items-start">
                        <div className="flex flex-col gap-1">
                            <h2 className="font-semibold text-xl">{user ? t("logout") : t("login")}</h2>
                            <p className="text-gray-500 dark:text-gray-400">
                                {user ? (
                                    <Trans
                                        i18nKey="settingsPage.loggedInDescription"
                                        values={{ username: user.name }}
                                        components={{ b: <strong /> }}
                                    />
                                ) : (
                                    t("settingsPage.loginDescription")
                                )}
                            </p>
                        </div>
                        {user ? <Button onClick={logout}>{t("logout")}</Button> : <AuthDialog />}
                    </div>

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
                            <LanguageSelect
                                placeholder="Select app language"
                                value={i18n.language}
                                onValueChange={(val) => i18n.changeLanguage(val)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
