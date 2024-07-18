import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useResumeCreator } from "@/providers/resume-creator-provider";
import AddLink from "./add-link";
import DeleteLink from "./delete-link";
import EditLink from "./edit-link";

export default function Links() {
    const { links } = useResumeCreator();

    return (
        <div className="flex flex-col">
            <h2 className="text-3xl font-bold">Links</h2>

            <div className="flex flex-col gap-9 my-6">
                {links.map((link) => (
                    <Card className="relative break-words" key={link.id}>
                        <div className="flex justify-between pr-6">
                            <CardHeader className="truncate">
                                <CardTitle className="truncate">
                                    <a className="truncate" href={link.url}>
                                        {link.url}
                                    </a>
                                </CardTitle>
                            </CardHeader>
                            <div className="flex pt-4">
                                <EditLink link={link} />
                                <DeleteLink link={link} />
                            </div>
                        </div>
                        {link.description && (
                            <CardContent className="whitespace-pre-line">{link.description}</CardContent>
                        )}
                    </Card>
                ))}
            </div>

            <AddLink />
        </div>
    );
}
