import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Edit } from "lucide-react";
import { useState } from "react";
import ExperienceForm from "./experience-form";

export default function EditExperience({ experienceId }: { experienceId: string }) {
    const [open, setOpen] = useState(false);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button size="icon" variant="ghost">
                    <Edit size={20} className="text-gray-500" />
                </Button>
            </DialogTrigger>
            <DialogContent>
                <ExperienceForm experienceId={experienceId} afterSubmit={() => setOpen(false)} />
            </DialogContent>
        </Dialog>
    );
}
