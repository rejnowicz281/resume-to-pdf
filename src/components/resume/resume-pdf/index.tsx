import { default as ResumeDocument } from "@/components/resume/resume-pdf/resume-document";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils/general";
import { useResumeCreator } from "@/providers/resume-creator-provider";
import { BlobProvider } from "@react-pdf/renderer";
import { ChevronLeft, ChevronRight, LucideLoader } from "lucide-react";
import type { PDFDocumentProxy } from "pdfjs-dist";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

export default function ResumePDF() {
    const { resumeToSave, previewState } = useResumeCreator();
    const containerRef = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(200);
    const [numPages, setNumPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const { t } = useTranslation();

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
            {t("resumePdf.generating")}
        </div>
    );

    function onDocumentLoadSuccess({ numPages: nextNumPages }: PDFDocumentProxy): void {
        setNumPages(nextNumPages);
    }

    return (
        <div
            ref={containerRef}
            className={cn(
                previewState ? "fixed z-50 w-screen h-screen flex" : "hidden",
                "xl:relative xl:h-auto xl:w-[45%] border-r border-r-zinc-200 dark:border-r-zinc-800 bg-white text-gray-500 xl:flex justify-center flex-col text-center items-center"
            )}
        >
            <div className={cn("absolute inset-0 overflow-x-hidden overflow-y-auto", numPages > 1 && "pb-9")}>
                <BlobProvider document={<ResumeDocument resume={resumeToSave} />}>
                    {({ loading, url, blob }) => {
                        return loading || !blob ? (
                            <Loading />
                        ) : (
                            <Document
                                renderMode="canvas"
                                onLoadSuccess={onDocumentLoadSuccess}
                                file={url}
                                loading={null}
                                noData={null}
                            >
                                <Page pageNumber={currentPage} width={width} />
                            </Document>
                        );
                    }}
                </BlobProvider>
            </div>
            {numPages > 1 && (
                <div className="absolute border z-50 text-zinc-950 dark:text-zinc-50 bg-zinc-50 dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 bottom-6 rounded-full">
                    <div className="flex items-center gap-3">
                        <Button
                            className="rounded-l-full cursor-pointer"
                            variant="ghost"
                            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                        >
                            <ChevronLeft size={20} />
                        </Button>
                        <div className="text-sm">
                            {t("page")} {currentPage} / {numPages}
                        </div>

                        <Button
                            className="rounded-r-full cursor-pointer"
                            variant="ghost"
                            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, numPages))}
                        >
                            <ChevronRight size={20} />
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
}
