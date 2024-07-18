import { Resume } from "@/lib/types/resume";
import { makeUnderscore } from "@/lib/utils/general";
import { getResumeName } from "@/lib/utils/resume";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { ReactNode } from "react";
import ResumeDocument from "./resume-pdf/resume-document";

export default function DownloadPdfButton({
    resume,
    content
}: {
    resume: Resume;
    content: (loading: boolean) => ReactNode;
}) {
    return (
        <PDFDownloadLink
            document={<ResumeDocument resume={resume} />}
            fileName={`${makeUnderscore(getResumeName(resume))}_Resume.pdf`}
        >
            {({ loading }) => content(loading)}
        </PDFDownloadLink>
    );
}
