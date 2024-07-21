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
import { Link } from "@/lib/types/resume";
import { useResumeCreator } from "@/providers/resume-creator-provider";
import { Trash } from "lucide-react";
import { Trans, useTranslation } from "react-i18next";

export default function DeleteLink({ link }: { link: Link }) {
    const { removeLink } = useResumeCreator();
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
                    <AlertDialogTitle>{t("resumeCreator.stepThree.deleteLink.dialogTitle")}</AlertDialogTitle>
                    <AlertDialogDescription>
                        <Trans
                            i18nKey="resumeCreator.stepThree.deleteLink.dialogDescription"
                            values={{ url: link.url }}
                            components={{ b: <strong /> }}
                            tOptions={{ interpolation: { escapeValue: false } }}
                        />
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>{t("resumeCreator.stepThree.deleteLink.cancelButton")}</AlertDialogCancel>
                    <AlertDialogAction onClick={() => removeLink(link.id)}>
                        {t("resumeCreator.stepThree.deleteLink.deleteButton")}
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
