import { Button } from "@/components/ui/button";
import { Language } from "@/lib/types/resume";
import { useResumeCreator } from "@/providers/resume-creator-provider";
import { Eye, EyeOff } from "lucide-react";

export default function HideLanguage({ language }: { language: Language }) {
    const { toggleLanguageVisibility } = useResumeCreator();

    return (
        <Button onClick={() => toggleLanguageVisibility(language)} size="icon" variant="ghost">
            {language.hidden ? (
                <EyeOff size={20} className="text-gray-500" />
            ) : (
                <Eye size={20} className="text-gray-500" />
            )}
        </Button>
    );
}
