import { Resume } from "@/lib/types/resume";
import { ResumeCreatorProvider } from "@/providers/resume-creator-provider";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import ResumePDF from "../resume-pdf";
import ResumeCreatorForm from "./form";

const ResumeCreatorFlow = ({ initialResume }: { initialResume?: Resume }) => {
    return (
        <ResumeCreatorProvider initialResume={initialResume}>
            <Creator />
        </ResumeCreatorProvider>
    );
};

const Creator = () => {
    return (
        <div className="flex flex-1">
            <ResumePDF />

            <ResumeCreatorForm />
        </div>
    );
};

export default ResumeCreatorFlow;
