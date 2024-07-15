import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Education } from "@/lib/types/resume";
import { useResumeCreator } from "@/providers/resume-creator-provider";
import { Trash } from "lucide-react";

export default function DeleteEducation({ education }: { education: Education }) {
    const { removeEducation } = useResumeCreator();

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button size="icon" variant="ghost">
                    <Trash size={20} className="text-gray-500" />
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        You are about to delete the <b>{education.institution}</b> education. This action cannot be
                        undone.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={() => removeEducation(education.id)}>Delete</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
