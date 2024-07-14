import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { useState } from "react";
import LanguageForm from "./language-form";

export default function AddLanguage() {
    const [open, setOpen] = useState(false);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="self-center flex gap-2">
                    <Plus />
                    Insert Language
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogTitle className="text-3xl font-bold">Add Language</DialogTitle>
                <LanguageForm afterSubmit={() => setOpen(false)} />
            </DialogContent>
        </Dialog>
    );
}
