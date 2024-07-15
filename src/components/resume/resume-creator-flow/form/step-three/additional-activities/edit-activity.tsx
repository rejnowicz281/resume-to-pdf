import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Activity } from "@/lib/types/resume";
import { Edit } from "lucide-react";
import { useState } from "react";
import ActivityForm from "./activity-form";

export default function EditActivity({ activity }: { activity: Activity }) {
    const [open, setOpen] = useState(false);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button size="icon" variant="ghost">
                    <Edit size={20} className="text-gray-500" />
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogTitle className="text-3xl font-bold">Edit Activity</DialogTitle>
                <ActivityForm activity={activity} afterSubmit={() => setOpen(false)} />
            </DialogContent>
        </Dialog>
    );
}
