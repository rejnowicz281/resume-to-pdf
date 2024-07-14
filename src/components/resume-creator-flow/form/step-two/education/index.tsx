import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useResumeCreator } from "@/providers/resume-creator-provider";
import AddEducation from "./add-education";
import DeleteEducation from "./delete-education";
import EditEducation from "./edit-education";

export default function Education() {
    const { education } = useResumeCreator();

    return (
        <div>
            <h2 className="text-3xl font-bold">Education</h2>

            <div className="flex flex-col gap-9 my-6">
                {education.map((edu) => (
                    <Card className="relative break-words" key={edu.id}>
                        <div className="absolute top-6 right-6">
                            <EditEducation education={edu} />
                            <DeleteEducation education={edu} />
                        </div>
                        <CardHeader>
                            <CardTitle>{edu.institution}</CardTitle>
                            <CardDescription>
                                {edu.level} | {edu.specialization ? `${edu.specialization} | ` : ""}
                                {edu.startDate} - {edu.endDate || "Present"} | {edu.duration}
                            </CardDescription>
                        </CardHeader>
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
