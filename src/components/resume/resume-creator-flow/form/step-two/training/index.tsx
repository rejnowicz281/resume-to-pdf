import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils/general";
import { useResumeCreator } from "@/providers/resume-creator-provider";
import AddTraining from "./add-training";
import DeleteTraining from "./delete-training";
import EditTraining from "./edit-training";
import HideTraining from "./hide-training";
import MoveTraining from "./move-training";

export default function Training() {
    const {
        resume: { training },
        t
    } = useResumeCreator();

    return (
        <div className="flex flex-col">
            <h2 className="text-3xl font-bold">{t("resumeCreator.stepTwo.training.title")}</h2>

            <div className="flex flex-col gap-9 my-6">
                {training.map((training) => (
                    <Card
                        className={cn(
                            training.hidden && "text-sm text-zinc-500 dark:text-zinc-400",
                            "relative break-words"
                        )}
                        key={training._id}
                    >
                        <div className="flex justify-between pr-6">
                            <CardHeader className="truncate">
                                <CardTitle className="truncate">{training.name}</CardTitle>
                                <CardDescription className="flex flex-col">
                                    <span className="truncate">
                                        {t("resumeCreator.stepTwo.training.issueDate")}: {training.issueDate}
                                    </span>
                                    <span className="truncate">
                                        {t("resumeCreator.stepTwo.training.organization")}: {training.organization}
                                    </span>
                                </CardDescription>
                            </CardHeader>
                            <div className="flex pt-4">
                                <MoveTraining _id={training._id} direction="up" />
                                <MoveTraining _id={training._id} direction="down" />
                                <HideTraining training={training} />
                                <EditTraining training={training} />
                                <DeleteTraining training={training} />
                            </div>
                        </div>
                        {training.description && (
                            <CardContent className="whitespace-pre-line">{training.description}</CardContent>
                        )}
                    </Card>
                ))}
            </div>

            <AddTraining />
        </div>
    );
}
