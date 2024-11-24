import { Button } from "@/components/ui/button";
import { Activity } from "@/lib/types/resume";
import { useResumeCreator } from "@/providers/resume-creator-provider";
import { Eye, EyeOff } from "lucide-react";

export default function HideActivity({ activity }: { activity: Activity }) {
    const { toggleActivityVisibility } = useResumeCreator();

    return (
        <Button onClick={() => toggleActivityVisibility(activity)} size="icon" variant="ghost">
            {activity.hidden ? (
                <EyeOff size={20} className="text-gray-500" />
            ) : (
                <Eye size={20} className="text-gray-500" />
            )}
        </Button>
    );
}
