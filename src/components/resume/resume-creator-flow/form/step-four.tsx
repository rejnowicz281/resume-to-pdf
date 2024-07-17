import { Button } from "@/components/ui/button";
import { useResumeCreator } from "@/providers/resume-creator-provider";
import { Download, LoaderCircle } from "lucide-react";
import DownloadPdfButton from "../../download-pdf-button";

export default function StepFour() {
    return (
        <div className="flex flex-col flex-1 justify-center items-center gap-6">
            <h1 className="text-6xl">Your Resume is ready!</h1>
            <p>Click the button below to download your resume.</p>
            <DownloadLink />
        </div>
    );
}

const DownloadLink = () => {
    const { resumeToSave } = useResumeCreator();

    return (
        <DownloadPdfButton
            resume={resumeToSave}
            content={(loading: boolean) => (
                <Button
                    disabled={loading}
                    className="flex items-center gap-2 disabled:cursor-not-allowed disabled:text-gray-500 disabled:bg-slate-200"
                >
                    Download Resume
                    {loading ? <LoaderCircle className="animate-spin" /> : <Download />}
                </Button>
            )}
        />
    );
};
