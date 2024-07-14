import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useResumeCreator } from "@/providers/resume-creator-provider";
import AddExperience from "./add-experience";
import DeleteExperience from "./delete-experience";
import EditExperience from "./edit-experience";

export default function WorkExperience() {
    const { workExperience } = useResumeCreator();

    return (
        <div className="flex flex-col">
            <h2 className="text-3xl font-bold">Work Experience</h2>

            <div className="flex flex-col gap-9 my-6">
                {workExperience.map((experience) => (
                    <Card className="relative break-words" key={experience.id}>
                        <div className="absolute top-6 right-6">
                            <EditExperience experience={experience} />
                            <DeleteExperience experience={experience} />
                        </div>
                        <CardHeader>
                            <CardTitle>{experience.title}</CardTitle>
                            <CardDescription>
                                {experience.company && `${experience.company} | `}
                                {experience.location ? `${experience.location} | ` : ""} {experience.startDate} -{" "}
                                {experience.endDate || "Present"} | {experience.duration}
                            </CardDescription>
                        </CardHeader>
                        {experience.description && (
                            <CardContent className="whitespace-pre-line">{experience.description}</CardContent>
                        )}
                    </Card>
                ))}
            </div>

            <AddExperience />
        </div>
    );
}
