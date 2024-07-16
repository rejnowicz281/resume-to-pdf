import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Resume } from "@/lib/types/resume";
import { getResumeName } from "@/lib/utils/resume";
import { MoveDiagonal2 } from "lucide-react";
import { Link } from "react-router-dom";
import DeleteResume from "./delete-resume";
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
                <EditResume resume={resume} />

                <DeleteResume resume={resume} />
            </div>
            <CardHeader>
                <CardTitle>{getResumeName(resume)}</CardTitle>
                <CardDescription className="flex flex-col">
                    <span>Created {resume.createdAt}</span>
                    {resume.createdAt != resume.updatedAt && <span>Updated {resume.updatedAt}</span>}
                </CardDescription>
            </CardHeader>
            {resume.description && <CardContent className="whitespace-pre-line">{resume.description}</CardContent>}
        </Card>
    );
}
