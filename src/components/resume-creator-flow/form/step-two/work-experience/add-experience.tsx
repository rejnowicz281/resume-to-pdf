import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { useState } from "react";
import ExperienceForm from "./experience-form";

export default function AddExperience() {
    const [open, setOpen] = useState(false);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="flex gap-2">
                    <Plus />
                    Insert Work Experience
                </Button>
            </DialogTrigger>
            <DialogContent>
                <ExperienceForm afterSubmit={() => setOpen(false)} />
            </DialogContent>
        </Dialog>
    );
}
