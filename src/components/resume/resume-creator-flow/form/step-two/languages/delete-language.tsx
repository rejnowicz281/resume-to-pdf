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
import { Language } from "@/lib/types/resume";
import { useResumeCreator } from "@/providers/resume-creator-provider";
import { Trash } from "lucide-react";
import { Trans } from "react-i18next";

export default function DeleteLanguage({ language }: { language: Language }) {
    const { removeLanguage, t } = useResumeCreator();

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button size="icon" variant="ghost">
                    <Trash size={20} className="text-gray-500" />
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>{t("resumeCreator.stepTwo.deleteLanguage.dialogTitle")}</AlertDialogTitle>
                    <AlertDialogDescription>
                        <Trans
                            i18nKey="resumeCreator.stepTwo.deleteLanguage.dialogDescription"
                            values={{ language: language.language }}
                            components={{ b: <strong /> }}
                        />
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>{t("resumeCreator.stepTwo.deleteLanguage.cancelButton")}</AlertDialogCancel>
                    <AlertDialogAction onClick={() => removeLanguage(language._id)}>
                        {t("resumeCreator.stepTwo.deleteLanguage.deleteButton")}
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
