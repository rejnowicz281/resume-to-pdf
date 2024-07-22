import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getDuration } from "@/lib/utils/date";
import { useResumeCreator } from "@/providers/resume-creator-provider";
import { useTranslation } from "react-i18next";
import AddEducation from "./add-education";
import DeleteEducation from "./delete-education";
import EditEducation from "./edit-education";

export default function Education() {
    const { education } = useResumeCreator();
    const { t } = useTranslation();

    return (
        <div className="flex flex-col">
            <h2 className="text-3xl font-bold">{t("resumeCreator.stepTwo.education.title")}</h2>

            <div className="flex flex-col gap-9 my-6">
                {education.map((edu) => (
                    <Card className="relative break-words" key={edu.id}>
                        <div className="flex justify-between pr-6">
                            <CardHeader className="truncate">
                                <CardTitle className="truncate">{edu.institution}</CardTitle>
                                <CardDescription className="flex flex-col">
                                    <span className="truncate">
                                        {t("resumeCreator.stepTwo.education.level")}: {edu.level}
                                    </span>
                                    {edu.specialization && (
                                        <span className="truncate">
                                            {t("resumeCreator.stepTwo.education.specialization")}: {edu.specialization}
                                        </span>
                                    )}
                                    <span className="flex flex-wrap gap-1">
                                        <span className="truncate">
                                            {t("resumeCreator.stepTwo.education.duration")}: {edu.startDate} -{" "}
                                            {edu.endDate || t("present")}
                                        </span>
                                        <span className="truncate">[{getDuration(edu)}]</span>
                                    </span>
                                </CardDescription>
                            </CardHeader>
                            <div className="flex pt-4">
                                <EditEducation education={edu} />
                                <DeleteEducation education={edu} />
                            </div>
                        </div>
                        {edu.description && (
                            <CardContent className="whitespace-pre-line">{edu.description}</CardContent>
                        )}
                    </Card>
                ))}
            </div>

            <AddEducation />
        </div>
    );
}
