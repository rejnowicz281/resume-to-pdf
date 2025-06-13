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
import { Training } from "@/lib/types/resume";
import { useResumeCreator } from "@/providers/resume-creator-provider";
import { Trash } from "lucide-react";
import { Trans, useTranslation } from "react-i18next";

export default function DeleteTraining({ training }: { training: Training }) {
    const { removeTraining } = useResumeCreator();
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
                    <AlertDialogTitle>{t("resumeCreator.stepTwo.deleteTraining.dialogTitle")}</AlertDialogTitle>
                    <AlertDialogDescription>
                        <Trans
                            i18nKey="resumeCreator.stepTwo.deleteTraining.dialogDescription"
                            values={{ name: training.name }}
                            components={{ b: <strong /> }}
                        />
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>{t("resumeCreator.stepTwo.deleteTraining.cancelButton")}</AlertDialogCancel>
                    <AlertDialogAction onClick={() => removeTraining(training._id)}>
                        {t("resumeCreator.stepTwo.deleteTraining.deleteButton")}
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
