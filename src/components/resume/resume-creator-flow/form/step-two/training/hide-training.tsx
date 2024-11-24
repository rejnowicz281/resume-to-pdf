import { Button } from "@/components/ui/button";
import { Training } from "@/lib/types/resume";
import { useResumeCreator } from "@/providers/resume-creator-provider";
import { Eye, EyeOff } from "lucide-react";

export default function HideTraining({ training }: { training: Training }) {
    const { toggleTrainingVisibility } = useResumeCreator();

    return (
        <Button onClick={() => toggleTrainingVisibility(training)} size="icon" variant="ghost">
            {training.hidden ? (
                <EyeOff size={20} className="text-gray-500" />
            ) : (
                <Eye size={20} className="text-gray-500" />
            )}
        </Button>
    );
}
