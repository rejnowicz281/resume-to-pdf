import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useResumeCreator } from "@/providers/resume-creator-provider";
import { useTranslation } from "react-i18next";
import AddLanguage from "./add-language";
import DeleteLanguage from "./delete-language";
import EditLanguage from "./edit-language";

export default function Languages() {
    const { languages } = useResumeCreator();
    const { t } = useTranslation();

    return (
        <div className="flex flex-col">
            <h2 className="text-3xl font-bold">{t("resumeCreator.stepTwo.languages.title")}</h2>

            <div className="flex flex-col gap-9 my-6">
                {languages.map((lang) => (
                    <Card className="relative break-words" key={lang.id}>
                        <div className="flex justify-between pr-6">
                            <CardHeader className="truncate">
                                <CardTitle className="truncate">{lang.language}</CardTitle>
                                <CardDescription className="truncate">{lang.level}</CardDescription>
                            </CardHeader>
                            <div className="flex pt-4">
                                <EditLanguage language={lang} />
                                <DeleteLanguage language={lang} />
                            </div>
                        </div>
                    </Card>
                ))}
            </div>

            <AddLanguage />
        </div>
    );
}
