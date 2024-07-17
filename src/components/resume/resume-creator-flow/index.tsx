import ResumePDF from "@/components/resume/resume-pdf";
import { Resume } from "@/lib/types/resume";
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
    const { resumeToSave } = useResumeCreator();

    return (
        <div className="flex flex-1">
            <PDFViewer className="w-[45%]">
                <ResumePDF resume={resumeToSave} />
            </PDFViewer>
            <ResumeCreatorForm />
        </div>
    );
};

export default ResumeCreatorFlow;
