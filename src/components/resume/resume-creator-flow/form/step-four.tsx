import { Button } from "@/components/ui/button";
import { useResumeCreator } from "@/providers/resume-creator-provider";
import { Download, LoaderCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import DownloadPdfButton from "../../download-pdf-button";

export default function StepFour() {
    const { t } = useTranslation();
    const { resume } = useResumeCreator();

    return (
        <div className="flex flex-col flex-1 justify-center items-center gap-6">
            <h1 className="text-4xl md:text-6xl text-center">{t("resumeCreator.stepFour.title")}</h1>
            <p className="text-gray-500 text-sm md:text-base text-center">{t("resumeCreator.stepFour.description")}</p>
            <DownloadPdfButton
                resume={resume}
                content={(loading: boolean) => (
                    <Button
                        disabled={loading}
                        className="flex items-center gap-2 disabled:cursor-not-allowed disabled:text-gray-500 disabled:bg-slate-200"
                    >
                        {t("resumeCreator.stepFour.downloadButton")}
                        {loading ? <LoaderCircle className="animate-spin" /> : <Download />}
                    </Button>
                )}
            />
        </div>
    );
}
