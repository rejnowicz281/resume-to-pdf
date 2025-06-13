import { Button } from "@/components/ui/button";
import { useResumeCreator } from "@/providers/resume-creator-provider";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function MoveLanguage({ _id, direction }: { _id: string; direction: "up" | "down" }) {
    const { moveLanguage } = useResumeCreator();

    return (
        <Button onClick={() => moveLanguage(_id, direction)} variant="ghost" size="icon">
            {direction === "up" ? (
                <ChevronUp size={24} className="text-gray-500" />
            ) : (
                <ChevronDown size={24} className="text-gray-500" />
            )}
        </Button>
    );
}
