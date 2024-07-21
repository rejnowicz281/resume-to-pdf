import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Importer from "./importer";

export default function ResumeJsonImport() {
    const [open, setOpen] = useState(false);
    const { t } = useTranslation();

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="outline" className="self-center flex gap-2">
                    <Plus />
                    {t("resumeJsonImport.buttonContent")}
                </Button>
            </DialogTrigger>
            <DialogContent className="max-w-[1000px]">
                <DialogHeader>
                    <DialogTitle>{t("resumeJsonImport.title")}</DialogTitle>
                    <DialogDescription>{t("resumeJsonImport.description")}</DialogDescription>
                </DialogHeader>
                <Importer onSuccess={() => setOpen(false)} />
            </DialogContent>
        </Dialog>
    );
}
