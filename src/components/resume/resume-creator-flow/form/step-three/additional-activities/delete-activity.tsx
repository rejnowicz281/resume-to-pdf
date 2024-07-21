import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Activity } from "@/lib/types/resume";
import { useResumeCreator } from "@/providers/resume-creator-provider";
import { Trash } from "lucide-react";
import { Trans, useTranslation } from "react-i18next";

export default function DeleteActivity({ activity }: { activity: Activity }) {
    const { removeActivity } = useResumeCreator();
    const { t } = useTranslation();

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button size="icon" variant="ghost">
                    <Trash size={20} className="text-gray-500" />
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>{t("resumeCreator.stepThree.deleteActivity.dialogTitle")}</AlertDialogTitle>
                    <AlertDialogDescription>
                        <Trans
                            i18nKey="resumeCreator.stepThree.deleteActivity.dialogDescription"
                            values={{ activity: activity.name }}
                            components={{ b: <strong /> }}
                        />
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>{t("resumeCreator.stepThree.deleteActivity.cancelButton")}</AlertDialogCancel>
                    <AlertDialogAction onClick={() => removeActivity(activity.id)}>
                        {t("resumeCreator.stepThree.deleteActivity.deleteButton")}
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
