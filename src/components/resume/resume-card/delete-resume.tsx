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
import { Resume } from "@/lib/types/resume";
import { getResumeName } from "@/lib/utils/resume";
import { useResumesList } from "@/providers/resumes-list-provider";
import { Trash } from "lucide-react";
import { Trans, useTranslation } from "react-i18next";

export default function DeleteResume({ resume }: { resume: Resume }) {
    const { removeResume } = useResumesList();
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
                    <AlertDialogTitle>{t("deleteResume.title")}</AlertDialogTitle>
                    <AlertDialogDescription>
                        <Trans
                            i18nKey="deleteResume.description"
                            values={{ name: getResumeName(resume) }}
                            components={{ b: <strong /> }}
                        />
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>{t("deleteResume.cancel")}</AlertDialogCancel>
                    <AlertDialogAction onClick={() => removeResume(resume)}>
                        {t("deleteResume.delete")}
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
