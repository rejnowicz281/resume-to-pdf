import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils/general";
import { useResumeCreator } from "@/providers/resume-creator-provider";
import AddLanguage from "./add-language";
import DeleteLanguage from "./delete-language";
import EditLanguage from "./edit-language";
import HideLanguage from "./hide-language";
import MoveLanguage from "./move-language";

export default function Languages() {
    const {
        resume: { languages },
        t
    } = useResumeCreator();

    return (
        <div className="flex flex-col">
            <h2 className="text-3xl font-bold">{t("resumeCreator.stepTwo.languages.title")}</h2>

            <div className="flex flex-col gap-9 my-6">
                {languages.map((language) => (
                    <Card
                        className={cn(
                            language.hidden && "text-sm text-zinc-500 dark:text-zinc-400",
                            "relative break-words"
                        )}
                        key={language._id}
                    >
                        <div className="flex justify-between pr-6">
                            <CardHeader className="truncate">
                                <CardTitle className="truncate">{language.language}</CardTitle>
                                <CardDescription className="truncate">{language.level}</CardDescription>
                            </CardHeader>
                            <div className="flex pt-4">
                                <MoveLanguage _id={language._id} direction="up" />
                                <MoveLanguage _id={language._id} direction="down" />
                                <HideLanguage language={language} />
                                <EditLanguage language={language} />
                                <DeleteLanguage language={language} />
                            </div>
                        </div>
                    </Card>
                ))}
            </div>

            <AddLanguage />
        </div>
    );
}
