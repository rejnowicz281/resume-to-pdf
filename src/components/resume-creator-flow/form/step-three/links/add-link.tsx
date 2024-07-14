import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { useState } from "react";
import LinkForm from "./link-form";

export default function AddLink() {
    const [open, setOpen] = useState(false);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="self-center flex gap-2">
                    <Plus />
                    Insert Link
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogTitle className="text-3xl font-bold">Add Link</DialogTitle>
                <LinkForm afterSubmit={() => setOpen(false)} />
            </DialogContent>
        </Dialog>
    );
}
