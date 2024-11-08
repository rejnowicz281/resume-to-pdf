import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Resume } from "@/lib/types/resume";
import { getResumeName, getResumeProgress } from "@/lib/utils/resume";
import { FileDown, MoveDiagonal2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import DownloadPdfButton from "../download-pdf-button";
import DeleteResume from "./delete-resume";
import DownloadJsonButton from "./download-json-button";
import EditResume from "./edit-resume";

export default function ResumeCard({ resume }: { resume: Resume }) {
    const { t } = useTranslation();

    return (
        <Card className="break-words">
            <Link
                state={{ resume }}
                className="hover:text-gray-500 text-center xsm:text-start"
                to={`/resumes/${resume._id}`}
            >
                <CardHeader>
                    <CardTitle>{getResumeName(resume)}</CardTitle>
                    <CardDescription>
                        <span>
                            {getResumeProgress(resume)}% {t("complete")}
                        </span>
                    </CardDescription>
                </CardHeader>
                {resume.description && <CardContent className="whitespace-pre-line">{resume.description}</CardContent>}
            </Link>
            <CardFooter className="border-t border-t-zinc-200 dark:border-t-zinc-800 py-3 gap-2 flex-col xsm:flex-row xsm:justify-between">
                <Link to={`/resumes/${resume._id}`} className="flex-1 text-gray-500 text-sm">
                    {t("created")} {resume.createdAt}
                </Link>
                <div>
                    <Button size="icon" variant="ghost" asChild>
                        <Link to={`/resumes/${resume._id}`}>
                            <MoveDiagonal2 size={20} className="text-gray-500" />
                        </Link>
                    </Button>
                    <DownloadPdfButton
                        resume={resume}
                        content={() => (
                            <Button size="icon" variant="ghost">
                                <FileDown size={20} className="text-gray-500" />
                            </Button>
                        )}
                    />
                    <DownloadJsonButton resume={resume} />
                    <EditResume resume={resume} />
                    <DeleteResume resume={resume} />
                </div>
            </CardFooter>
        </Card>
    );
}
