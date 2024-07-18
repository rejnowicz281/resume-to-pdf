import { default as ResumeDocument } from "@/components/resume/resume-pdf/resume-document";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationNext,
    PaginationPrevious
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils/general";
import { useResumeCreator } from "@/providers/resume-creator-provider";
import { BlobProvider } from "@react-pdf/renderer";
import { LucideLoader } from "lucide-react";
import type { PDFDocumentProxy } from "pdfjs-dist";
import { useEffect, useRef, useState } from "react";
import { Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

export default function ResumePDF() {
    const { resumeToSave, previewState } = useResumeCreator();
    const containerRef = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(200);
    const [numPages, setNumPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);

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

    function onDocumentLoadSuccess({ numPages: nextNumPages }: PDFDocumentProxy): void {
        setNumPages(nextNumPages);
    }

    return (
        <div
            ref={containerRef}
            className={cn(
                previewState ? "fixed z-50 w-screen h-screen flex" : "hidden",
                "xl:relative xl:h-auto xl:w-[45%] bg-white text-gray-500 xl:flex justify-center flex-col text-center items-center"
            )}
        >
            <div className={cn("absolute inset-0 overflow-y-auto", numPages > 1 && "pb-9")}>
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
                    <Pagination>
                        <PaginationContent className="gap-3">
                            <PaginationItem onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}>
                                <PaginationPrevious className="rounded-l-full" href="#" />
                            </PaginationItem>
                            <PaginationItem className="text-sm">
                                Page {currentPage} / {numPages}
                            </PaginationItem>

                            <PaginationItem onClick={() => setCurrentPage((prev) => Math.min(prev + 1, numPages))}>
                                <PaginationNext className="rounded-r-full" href="#" />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </div>
            )}
        </div>
    );
}
