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
import { Education } from "@/lib/types/resume";
import { useResumeCreator } from "@/providers/resume-creator-provider";
import { Trash } from "lucide-react";
import { Trans } from "react-i18next";

export default function DeleteEducation({ education }: { education: Education }) {
    const { removeEducation, t } = useResumeCreator();

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button size="icon" variant="ghost">
                    <Trash size={20} className="text-gray-500" />
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>{t("resumeCreator.stepTwo.deleteEducation.dialogTitle")}</AlertDialogTitle>
                    <AlertDialogDescription>
                        <Trans
                            i18nKey="resumeCreator.stepTwo.deleteEducation.dialogDescription"
                            values={{ institution: education.institution }}
                            components={{ b: <strong /> }}
                        />
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>{t("resumeCreator.stepTwo.deleteEducation.cancelButton")}</AlertDialogCancel>
                    <AlertDialogAction onClick={() => removeEducation(education._id)}>
                        {t("resumeCreator.stepTwo.deleteEducation.deleteButton")}
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
