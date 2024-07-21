import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import ActivityForm from "./activity-form";

export default function AddActivity() {
    const [open, setOpen] = useState(false);
    const { t } = useTranslation();

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="self-center flex gap-2">
                    <Plus />
                    {t("resumeCreator.stepThree.addActivity.buttonContent")}
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogTitle className="text-3xl font-bold">
                    {t("resumeCreator.stepThree.addActivity.dialogTitle")}
                </DialogTitle>
                <ActivityForm afterSubmit={() => setOpen(false)} />
            </DialogContent>
        </Dialog>
    );
}
