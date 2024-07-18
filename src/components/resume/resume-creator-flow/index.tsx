import ResumePDF from "@/components/resume/resume-pdf";
import { Resume } from "@/lib/types/resume";
import { cn } from "@/lib/utils/general";
import { ResumeCreatorProvider, useResumeCreator } from "@/providers/resume-creator-provider";
import { PDFViewer } from "@react-pdf/renderer";
import ResumeCreatorForm from "./form";

const ResumeCreatorFlow = ({ initialResume }: { initialResume?: Resume }) => {
    return (
        <ResumeCreatorProvider initialResume={initialResume}>
            <Creator />
        </ResumeCreatorProvider>
    );
};

const Creator = () => {
    const { resumeToSave, previewState } = useResumeCreator();

    return (
        <div className="flex flex-1">
            <PDFViewer
                className={cn(
                    previewState ? "block fixed z-40 h-screen w-screen" : "hidden",
                    "xl:w-[45%] xl:block xl:static xl:h-auto"
                )}
            >
                <ResumePDF resume={resumeToSave} />
            </PDFViewer>
            <ResumeCreatorForm />
        </div>
    );
};

export default ResumeCreatorFlow;
