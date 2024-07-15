import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useResumeCreator } from "@/providers/resume-creator-provider";
import AddActivity from "./add-activity";
import DeleteActivity from "./delete-activity";
import EditActivity from "./edit-activity";

export default function Activities() {
    const { activities } = useResumeCreator();

    return (
        <div className="flex flex-col">
            <h2 className="text-3xl font-bold">Additional Activities</h2>

            <div className="flex flex-col gap-9 my-6">
                {activities.map((activity) => (
                    <Card className="relative break-words" key={activity.id}>
                        <div className="absolute top-6 right-6">
                            <EditActivity activity={activity} />
                            <DeleteActivity activity={activity} />
                        </div>
                        <CardHeader>
                            <CardTitle>{activity.name}</CardTitle>
                            <CardDescription>
                                {activity.location ? `${activity.location} | ` : ""}
                                {activity.startDate} - {activity.endDate || "Present"} | {activity.duration}
                            </CardDescription>
                        </CardHeader>
                        {activity.description && (
                            <CardContent className="whitespace-pre-line">{activity.description}</CardContent>
                        )}
                    </Card>
                ))}
            </div>

            <AddActivity />
        </div>
    );
}
