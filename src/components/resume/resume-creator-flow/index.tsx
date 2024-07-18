import ResumePDF from "@/components/resume/resume-pdf";
import { Resume } from "@/lib/types/resume";
import { cn } from "@/lib/utils/general";
import { ResumeCreatorProvider, useResumeCreator } from "@/providers/resume-creator-provider";
import { BlobProvider, PDFViewer } from "@react-pdf/renderer";
import { LucideLoader } from "lucide-react";
import { Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
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
    const { resumeToSave, previewState } = useResumeCreator();

    return (
        <div className="flex flex-1">
            <BlobProvider document={<ResumePDF resume={resumeToSave} />}>
                {({ url, loading }) => {
                    return loading ? (
                        <LucideLoader className="animate-spin" />
                    ) : (
                        <Document file={url}>
                            <Page pageNumber={1} />
                            <Page pageNumber={2} />
                        </Document>
                    );
                }}
            </BlobProvider>

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
