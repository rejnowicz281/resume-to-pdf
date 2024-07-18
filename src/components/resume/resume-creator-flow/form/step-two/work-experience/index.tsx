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
                        <div className="flex justify-between pr-6">
                            <CardHeader className="truncate">
                                <CardTitle className="truncate">{experience.title}</CardTitle>
                                <CardDescription className="flex flex-col">
                                    {experience.company && (
                                        <span className="truncate">Company: {experience.company}</span>
                                    )}
                                    {experience.location && (
                                        <span className="truncate">Location: {experience.location}</span>
                                    )}
                                    <span className="flex flex-wrap gap-1">
                                        <span className="truncate">
                                            Duration: {experience.startDate} - {experience.endDate || "Present"}
                                        </span>
                                        <span className="truncate">[{experience.duration}]</span>
                                    </span>
                                </CardDescription>
                            </CardHeader>
                            <div className="flex pt-4">
                                <EditExperience experience={experience} />
                                <DeleteExperience experience={experience} />
                            </div>
                        </div>
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
