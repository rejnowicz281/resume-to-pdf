import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getDuration } from "@/lib/utils/date";
import { cn } from "@/lib/utils/general";
import { useResumeCreator } from "@/providers/resume-creator-provider";
import AddActivity from "./add-activity";
import DeleteActivity from "./delete-activity";
import EditActivity from "./edit-activity";
import HideActivity from "./hide-activity";
import MoveActivity from "./move-activity";

export default function Activities() {
    const {
        resume: { activities },
        t
    } = useResumeCreator();

    return (
        <div className="flex flex-col">
            <h2 className="text-3xl font-bold">{t("resumeCreator.stepThree.activities.title")}</h2>

            <div className="flex flex-col gap-9 my-6">
                {activities.map((activity) => (
                    <Card
                        className={cn(
                            activity.hidden && "text-sm text-zinc-500 dark:text-zinc-400",
                            "relative break-words"
                        )}
                        key={activity._id}
                    >
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
                                            {activity.endDate || t("present")}
                                        </span>
                                        <span className="truncate">[{getDuration(activity)}]</span>
                                    </span>
                                </CardDescription>
                            </CardHeader>
                            <div className="flex pt-4">
                                <MoveActivity _id={activity._id} direction="up" />
                                <MoveActivity _id={activity._id} direction="down" />
                                <HideActivity activity={activity} />
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
