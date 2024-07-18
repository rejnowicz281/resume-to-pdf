import ResumePDF from "@/components/resume/resume-pdf";
import { Resume } from "@/lib/types/resume";
import { ResumeCreatorProvider, useResumeCreator } from "@/providers/resume-creator-provider";
import { BlobProvider } from "@react-pdf/renderer";
import { LucidePersonStanding } from "lucide-react";
import { Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";
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
            <BlobProvider document={<ResumePDF resume={resumeToSave} />}>
                {({ url, loading }) => {
                    return loading ? (
                        <LucidePersonStanding className="animate-spin" />
                    ) : (
                        <Document file={url}>
                            <Page pageNumber={1} />
                            <Page pageNumber={2} />
                        </Document>
                    );
                }}
            </BlobProvider>

            <ResumeCreatorForm />
        </div>
    );
};

export default ResumeCreatorFlow;
