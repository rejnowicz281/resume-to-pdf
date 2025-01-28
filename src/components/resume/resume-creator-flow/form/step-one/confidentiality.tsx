import { Checkbox } from "@/components/ui/checkbox"; // Ensure Checkbox component accepts onChange of type React.ChangeEvent<HTMLInputElement>
import { Label } from "@/components/ui/label";
import { useResumeCreator } from "@/providers/resume-creator-provider";
import { useTranslation } from "react-i18next";

export default function Confidentiality() {
    const { t } = useTranslation();
    const {
        resume: { includeDataProcessingConsent, includeRodoClause },
        setIncludeDataProcessingConsent,
        setIncludeRodoClause
    } = useResumeCreator();

    return (
        <div>
            <h2 className="mb-6 text-3xl font-bold">{t("resumeCreator.stepOne.confidentiality.title")}</h2>
            <div className="flex items-center gap-3">
                <Checkbox
                    checked={includeRodoClause}
                    onClick={() => setIncludeRodoClause(!includeRodoClause)}
                    name="include-rodo-clause"
                    id="include-rodo-clause"
                />
                <Label htmlFor="include-rodo-clause" className="font-semibold">
                    {t("resumeCreator.stepOne.confidentiality.includeRodoClause")}
                </Label>
            </div>
            <div className="flex items-center gap-3 mt-4">
                <Checkbox
                    checked={includeDataProcessingConsent}
                    name="include-data-processing-consent"
                    onClick={() => setIncludeDataProcessingConsent(!includeDataProcessingConsent)}
                    id="include-data-processing-consent"
                />
                <Label htmlFor="include-data-processing-consent" className="font-semibold">
                    {t("resumeCreator.stepOne.confidentiality.includeDataProcessingConsent")}
                </Label>
            </div>
        </div>
    );
}
