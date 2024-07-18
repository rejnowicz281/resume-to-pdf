import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useResumeCreator } from "@/providers/resume-creator-provider";
import AddEducation from "./add-education";
import DeleteEducation from "./delete-education";
import EditEducation from "./edit-education";

export default function Education() {
    const { education } = useResumeCreator();

    return (
        <div className="flex flex-col">
            <h2 className="text-3xl font-bold">Education</h2>

            <div className="flex flex-col gap-9 my-6">
                {education.map((edu) => (
                    <Card className="relative break-words" key={edu.id}>
                        <div className="flex justify-between pr-6">
                            <CardHeader className="truncate">
                                <CardTitle className="truncate">{edu.institution}</CardTitle>
                                <CardDescription className="flex flex-col">
                                    <span className="truncate">Level: {edu.level}</span>
                                    {edu.specialization && (
                                        <span className="truncate">Specialization: {edu.specialization}</span>
                                    )}
                                    <span className="flex flex-wrap gap-1">
                                        <span className="truncate">
                                            Duration: {edu.startDate} - {edu.endDate || "Present"}
                                        </span>
                                        <span className="truncate">[{edu.duration}]</span>
                                    </span>
                                </CardDescription>
                            </CardHeader>
                            <div className="flex pt-4">
                                <EditEducation education={edu} />
                                <DeleteEducation education={edu} />
                            </div>
                        </div>
                        {edu.description && (
                            <CardContent className="whitespace-pre-line">{edu.description}</CardContent>
                        )}
                    </Card>
                ))}
            </div>

            <AddEducation />
        </div>
    );
}
