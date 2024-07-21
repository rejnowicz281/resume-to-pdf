import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Language } from "@/lib/types/resume";
import { Edit } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageForm from "./language-form";

export default function EditLanguage({ language }: { language: Language }) {
    const [open, setOpen] = useState(false);
    const { t } = useTranslation();

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button size="icon" variant="ghost">
                    <Edit size={20} className="text-gray-500" />
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogTitle className="text-3xl font-bold">
                    {t("resumeCreator.stepTwo.editLanguage.dialogTitle")}
                </DialogTitle>
                <LanguageForm language={language} afterSubmit={() => setOpen(false)} />
            </DialogContent>
        </Dialog>
    );
}
