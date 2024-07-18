import { default as ResumeDocument } from "@/components/resume/resume-pdf/resume-document";
import { cn } from "@/lib/utils/general";
import { useResumeCreator } from "@/providers/resume-creator-provider";
import { BlobProvider } from "@react-pdf/renderer";
import { LucideLoader } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

export default function ResumePDF() {
    const { resumeToSave, previewState } = useResumeCreator();
    const containerRef = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(200);

    useEffect(() => {
        setWidth(getWidth());
    }, [previewState]);

    useEffect(() => {
        const handleResize = () => {
            setWidth(getWidth());
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const getWidth = () => {
        if (containerRef.current) return containerRef.current.getBoundingClientRect().width;

        return 200;
    };

    const Loading = () => (
        <div className={cn("flex flex-col justify-center items-center flex-1 w-full h-full")}>
            <LucideLoader className="animate-spin" />
            Your PDF is being generated...
        </div>
    );

    return (
        <div
            ref={containerRef}
            className={cn(
                previewState ? "fixed z-50 w-screen h-screen flex" : "hidden",
                "xl:relative xl:h-auto xl:w-[45%] bg-white text-gray-500 xl:flex justify-center flex-col text-center items-center"
            )}
        >
            <div className="absolute inset-0 overflow-y-auto">
                <BlobProvider document={<ResumeDocument resume={resumeToSave} />}>
                    {({ loading, url, blob }) => {
                        return loading || !blob ? (
                            <Loading />
                        ) : (
                            <Document renderMode="canvas" file={url} loading={null} noData={null}>
                                <Page pageNumber={1} width={width} />
                            </Document>
                        );
                    }}
                </BlobProvider>
            </div>
        </div>
    );
}
