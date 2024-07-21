import { dateToString } from "@/lib/utils/date";
import { useLocalResumes } from "@/providers/local-resumes-provider";
import { useTranslation } from "react-i18next";
import { Button } from "../ui/button";

export default function DownloadResumesButton() {
    const { resumes } = useLocalResumes();
    const { t } = useTranslation();

    const onClick = () => {
        const resumesToDownload = resumes.map((resume) => {
            const { imageOptions, ...rest } = resume;
            return rest;
        });
        const data = JSON.stringify(resumesToDownload, null, 2);
        const blob = new Blob([data], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `${t("resumes")}-${dateToString(new Date(), "yyyy-mm-dd")}.json`;
        a.click();
        URL.revokeObjectURL(url);
    };

    return <Button onClick={onClick}>{t("download")}</Button>;
}
