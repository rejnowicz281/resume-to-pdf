import { Button } from "@/components/ui/button";
import { Resume } from "@/lib/types/resume";
import { makeUnderscore } from "@/lib/utils/general";
import { getResumeName } from "@/lib/utils/resume";
import { FileJson } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function DownloadJsonButton({ resume }: { resume: Resume }) {
    const { t } = useTranslation();

    const onClick = () => {
        const { imageOptions, ...resumeToParse } = resume;

        const data = JSON.stringify(resumeToParse, null, 2);
        const blob = new Blob([data], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `${makeUnderscore(getResumeName(resume))}_${t("resume")}.json`;
        a.click();
        URL.revokeObjectURL(url);
    };

    return (
        <Button onClick={onClick} size="icon" variant="ghost">
            <FileJson size={20} className="text-gray-500" />
        </Button>
    );
}
