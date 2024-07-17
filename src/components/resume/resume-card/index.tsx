import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Resume } from "@/lib/types/resume";
import { getResumeName } from "@/lib/utils/resume";
import { FileDown, MoveDiagonal2 } from "lucide-react";
import { Link } from "react-router-dom";
import DownloadPdfButton from "../download-pdf-button";
import DeleteResume from "./delete-resume";
import DownloadJsonButton from "./download-json-button";
import EditResume from "./edit-resume";

export default function ResumeCard({ resume }: { resume: Resume }) {
    return (
        <Card className="relative break-words">
            <div className="absolute top-6 right-6">
                <Button size="icon" variant="ghost" asChild>
                    <Link to={`/resumes/${resume.id}`}>
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
            <CardHeader>
                <CardTitle>{getResumeName(resume)}</CardTitle>
                <CardDescription className="flex flex-col">
                    <span>Created {resume.createdAt}</span>
                </CardDescription>
            </CardHeader>
            {resume.description && <CardContent className="whitespace-pre-line">{resume.description}</CardContent>}
        </Card>
    );
}
