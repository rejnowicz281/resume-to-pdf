import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useResumeCreator } from "@/providers/resume-creator-provider";
import AddLanguage from "./add-language";
import DeleteLanguage from "./delete-language";
import EditLanguage from "./edit-language";

export default function Languages() {
    const { languages } = useResumeCreator();

    return (
        <div className="flex flex-col">
            <h2 className="text-3xl font-bold">Languages</h2>

            <div className="flex flex-col gap-9 my-6">
                {languages.map((lang) => (
                    <Card className="relative break-words" key={lang.id}>
                        <div className="absolute top-6 right-6">
                            <EditLanguage language={lang} />
                            <DeleteLanguage language={lang} />
                        </div>
                        <CardHeader>
                            <CardTitle>{lang.language}</CardTitle>
                            <CardDescription>{lang.level}</CardDescription>
                        </CardHeader>
                    </Card>
                ))}
            </div>

            <AddLanguage />
        </div>
    );
}
