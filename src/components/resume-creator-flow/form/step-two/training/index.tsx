import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useResumeCreator } from "@/providers/resume-creator-provider";
import AddTraining from "./add-training";
import DeleteTraining from "./delete-training";
import EditTraining from "./edit-training";

export default function Training() {
    const { training } = useResumeCreator();

    return (
        <div className="flex flex-col">
            <h2 className="text-3xl font-bold">Training</h2>

            <div className="flex flex-col gap-9 my-6">
                {training.map((training) => (
                    <Card className="relative break-words" key={training.id}>
                        <div className="absolute top-6 right-6">
                            <EditTraining training={training} />
                            <DeleteTraining training={training} />
                        </div>
                        <CardHeader>
                            <CardTitle>{training.name}</CardTitle>
                            <CardDescription>
                                {training.issueDate} | {training.organization}
                            </CardDescription>
                        </CardHeader>
                        {training.description && (
                            <CardContent className="whitespace-pre-line">{training.description}</CardContent>
                        )}
                    </Card>
                ))}
            </div>

            <AddTraining />
        </div>
    );
}
