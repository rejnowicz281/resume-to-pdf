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
import Importer from "./importer";

export default function ResumeJsonImport() {
    const [open, setOpen] = useState(false);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="outline" className="self-center flex gap-2">
                    <Plus />
                    Import Resume
                </Button>
            </DialogTrigger>
            <DialogContent className="max-w-[1000px]">
                <DialogHeader>
                    <DialogTitle>Import Resumes</DialogTitle>
                    <DialogDescription>Here you can add new resumes by importing a JSON file.</DialogDescription>
                </DialogHeader>
                <Importer onSuccess={() => setOpen(false)} />
            </DialogContent>
        </Dialog>
    );
}
