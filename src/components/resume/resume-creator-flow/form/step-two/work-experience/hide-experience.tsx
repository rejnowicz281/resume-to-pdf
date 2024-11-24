import { Button } from "@/components/ui/button";
import { WorkExperience } from "@/lib/types/resume";
import { useResumeCreator } from "@/providers/resume-creator-provider";
import { Eye, EyeOff } from "lucide-react";

export default function HideExperience({ experience }: { experience: WorkExperience }) {
    const { toggleWorkExperienceVisibility } = useResumeCreator();

    return (
        <Button onClick={() => toggleWorkExperienceVisibility(experience)} size="icon" variant="ghost">
            {experience.hidden ? (
                <EyeOff size={20} className="text-gray-500" />
            ) : (
                <Eye size={20} className="text-gray-500" />
            )}
        </Button>
    );
}
