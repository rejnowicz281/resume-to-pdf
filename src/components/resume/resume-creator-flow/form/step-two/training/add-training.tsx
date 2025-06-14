import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useResumeCreator } from "@/providers/resume-creator-provider";
import { Plus } from "lucide-react";
import { useState } from "react";
import TrainingForm from "./training-form";

export default function AddTraining() {
    const [open, setOpen] = useState(false);
    const { t } = useResumeCreator();

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="self-center flex gap-2">
                    <Plus />
                    {t("resumeCreator.stepTwo.addTraining.buttonContent")}
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogTitle className="text-3xl font-bold">
                    {t("resumeCreator.stepTwo.addTraining.dialogTitle")}
                </DialogTitle>
                <TrainingForm afterSubmit={() => setOpen(false)} />
            </DialogContent>
        </Dialog>
    );
}
