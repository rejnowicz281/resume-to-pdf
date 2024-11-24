import { Button } from "@/components/ui/button";
import { Link } from "@/lib/types/resume";
import { useResumeCreator } from "@/providers/resume-creator-provider";
import { Eye, EyeOff } from "lucide-react";

export default function HideLink({ link }: { link: Link }) {
    const { toggleLinkVisibility } = useResumeCreator();

    return (
        <Button onClick={() => toggleLinkVisibility(link)} size="icon" variant="ghost">
            {link.hidden ? <EyeOff size={20} className="text-gray-500" /> : <Eye size={20} className="text-gray-500" />}
        </Button>
    );
}
