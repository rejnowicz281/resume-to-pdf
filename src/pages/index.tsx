import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getResumeName } from "@/lib/utils/resume";
import { useSavedResumes } from "@/providers/saved-resumes-provider";
import { Edit, Plus, Trash } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function HomePage() {
    const { resumes } = useSavedResumes();
    const navigate = useNavigate();

    return (
        <div className="p-24 flex flex-1 flex-col gap-6">
            <div className="flex flex-col gap-6">
                {resumes.map((resume) => (
                    <Card
                        onClick={() => navigate(`/resumes/${resume.id}`)}
                        className="relative break-words cursor-pointer hover:bg-gray-50 dark:hover:bg-neutral-900"
                        key={resume.id}
                    >
                        <div className="absolute top-6 right-6">
                            <Button size="icon" variant="ghost">
                                <Edit size={20} className="text-gray-500" />
                            </Button>

                            <Button size="icon" variant="ghost">
                                <Trash size={20} className="text-gray-500" />
                            </Button>
                        </div>
                        <CardHeader>
                            <CardTitle>{getResumeName(resume)}</CardTitle>
                            <CardDescription>
                                <div>Created {resume.createdAt}</div>
                                {resume.createdAt != resume.updatedAt && <div>Updated {resume.updatedAt}</div>}
                            </CardDescription>
                        </CardHeader>
                        {resume.description && (
                            <CardContent className="whitespace-pre-line">{resume.description}</CardContent>
                        )}
                    </Card>
                ))}
            </div>
            <Link className="self-center" to="/resumes/create">
                <Button className="flex gap-2">
                    <Plus />
                    Insert Resume
                </Button>
            </Link>
        </div>
    );
}
