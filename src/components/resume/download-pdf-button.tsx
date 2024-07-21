import { Resume } from "@/lib/types/resume";
import { makeUnderscore } from "@/lib/utils/general";
import { getResumeName } from "@/lib/utils/resume";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import ResumeDocument from "./resume-pdf/resume-document";

export default function DownloadPdfButton({
    resume,
    content
}: {
    resume: Resume;
    content: (loading: boolean) => ReactNode;
}) {
    const { t } = useTranslation();

    return (
        <PDFDownloadLink
            document={<ResumeDocument resume={resume} />}
            fileName={`${makeUnderscore(getResumeName(resume))}_${t("resume")}.pdf`}
        >
            {({ loading }) => content(loading)}
        </PDFDownloadLink>
    );
}
