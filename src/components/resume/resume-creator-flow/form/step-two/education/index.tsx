import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getDuration } from "@/lib/utils/date";
import { cn } from "@/lib/utils/general";
import { useResumeCreator } from "@/providers/resume-creator-provider";
import AddEducation from "./add-education";
import DeleteEducation from "./delete-education";
import EditEducation from "./edit-education";
import HideEducation from "./hide-education";
import MoveEducation from "./move-education";

export default function Education() {
    const {
        resume: { education },
        t
    } = useResumeCreator();

    return (
        <div className="flex flex-col">
            <h2 className="text-3xl font-bold">{t("resumeCreator.stepTwo.education.title")}</h2>

            <div className="flex flex-col gap-9 my-6">
                {education.map((education) => (
                    <Card
                        className={cn(
                            education.hidden && "text-sm text-zinc-500 dark:text-zinc-400",
                            "relative break-words"
                        )}
                        key={education._id}
                    >
                        <div className="flex justify-between pr-6">
                            <CardHeader className="truncate">
                                <CardTitle className="truncate">{education.institution}</CardTitle>
                                <CardDescription className="flex flex-col">
                                    <span className="truncate">
                                        {t("resumeCreator.stepTwo.education.level")}: {education.level}
                                    </span>
                                    {education.specialization && (
                                        <span className="truncate">
                                            {t("resumeCreator.stepTwo.education.specialization")}:{" "}
                                            {education.specialization}
                                        </span>
                                    )}
                                    <span className="flex flex-wrap gap-1">
                                        <span className="truncate">
                                            {t("resumeCreator.stepTwo.education.duration")}: {education.startDate} -{" "}
                                            {education.endDate || t("present")}
                                        </span>
                                        <span className="truncate">[{getDuration(education)}]</span>
                                    </span>
                                </CardDescription>
                            </CardHeader>
                            <div className="flex pt-4">
                                <MoveEducation _id={education._id} direction="up" />
                                <MoveEducation _id={education._id} direction="down" />
                                <HideEducation education={education} />
                                <EditEducation education={education} />
                                <DeleteEducation education={education} />
                            </div>
                        </div>
                        {education.description && (
                            <CardContent className="whitespace-pre-line">{education.description}</CardContent>
                        )}
                    </Card>
                ))}
            </div>

            <AddEducation />
        </div>
    );
}
