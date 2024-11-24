import { Button } from "@/components/ui/button";
import { Education } from "@/lib/types/resume";
import { useResumeCreator } from "@/providers/resume-creator-provider";
import { Eye, EyeOff } from "lucide-react";

export default function HideEducation({ education }: { education: Education }) {
    const { toggleEducationVisibility } = useResumeCreator();

    return (
        <Button onClick={() => toggleEducationVisibility(education)} size="icon" variant="ghost">
            {education.hidden ? (
                <EyeOff size={20} className="text-gray-500" />
            ) : (
                <Eye size={20} className="text-gray-500" />
            )}
        </Button>
    );
}
