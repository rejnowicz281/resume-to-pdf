import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getDuration } from "@/lib/utils/date";
import { useResumeCreator } from "@/providers/resume-creator-provider";
import { useTranslation } from "react-i18next";
import AddActivity from "./add-activity";
import DeleteActivity from "./delete-activity";
import EditActivity from "./edit-activity";

export default function Activities() {
    const { activities } = useResumeCreator();
    const { t } = useTranslation();

    return (
        <div className="flex flex-col">
            <h2 className="text-3xl font-bold">{t("resumeCreator.stepThree.activities.title")}</h2>

            <div className="flex flex-col gap-9 my-6">
                {activities.map((activity) => (
                    <Card className="relative break-words" key={activity.id}>
                        <div className="flex justify-between pr-6">
                            <CardHeader className="truncate">
                                <CardTitle className="truncate">{activity.name}</CardTitle>
                                <CardDescription className="flex flex-col">
                                    {activity.location && (
                                        <span className="truncate">
                                            {t("resumeCreator.stepThree.activities.location")}: {activity.location}
                                        </span>
                                    )}
                                    <span className="flex flex-wrap gap-1">
                                        <span className="truncate">
                                            {t("resumeCreator.stepThree.activities.duration")}: {activity.startDate} -{" "}
                                            {activity.endDate || "Present"}
                                        </span>
                                        <span className="truncate">[{getDuration(activity)}]</span>
                                    </span>
                                </CardDescription>
                            </CardHeader>
                            <div className="flex pt-4">
                                <EditActivity activity={activity} />
                                <DeleteActivity activity={activity} />
                            </div>
                        </div>
                        {activity.description && (
                            <CardContent className="whitespace-pre-line">{activity.description}</CardContent>
                        )}
                    </Card>
                ))}
            </div>

            <AddActivity />
        </div>
    );
}
