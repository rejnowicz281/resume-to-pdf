import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Link } from "@/providers/resume-creator-provider";
import { Edit } from "lucide-react";
import { useState } from "react";
import LinkForm from "./link-form";

export default function EditLink({ link }: { link: Link }) {
    const [open, setOpen] = useState(false);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button size="icon" variant="ghost">
                    <Edit size={20} className="text-gray-500" />
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogTitle className="text-3xl font-bold">Edit Link</DialogTitle>
                <LinkForm link={link} afterSubmit={() => setOpen(false)} />
            </DialogContent>
        </Dialog>
    );
}
