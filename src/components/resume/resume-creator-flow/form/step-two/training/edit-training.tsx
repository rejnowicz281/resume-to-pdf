import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Training } from "@/lib/types/resume";
import { Edit } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import TrainingForm from "./training-form";

export default function EditTraining({ training }: { training: Training }) {
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
                    {t("resumeCreator.stepTwo.editTraining.dialogTitle")}
                </DialogTitle>
                <TrainingForm training={training} afterSubmit={() => setOpen(false)} />
            </DialogContent>
        </Dialog>
    );
}
