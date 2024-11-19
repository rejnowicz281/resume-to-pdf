import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { getSampleResume } from "@/lib/constants/sample-resume";
import { Resume } from "@/lib/types/resume";
import { mapResume } from "@/lib/utils/mappers/resume";
import { useResumesList } from "@/providers/resumes-list-provider";
import { FileJson2 } from "lucide-react";
import { useRef, useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import uniqid from "uniqid";

export default function Importer({ onSuccess }: { onSuccess?: () => void }) {
    const { addManyResumes } = useResumesList();
    const inputRef = useRef<HTMLInputElement>(null);
    const [resumes, setResumes] = useState<Resume[]>([]);
    const [jsonInput, setJsonInput] = useState<string>("");
    const { t } = useTranslation();

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const maxSizeInBytes = 6 * 1024 * 1024; // 6MB

            if (file.size > maxSizeInBytes) {
                alert("File is too large. Max file size is 6MB.");
                return;
            }

            const reader = new FileReader();
            reader.onload = (event) => {
                if (event.target?.result) {
                    const parsed = parseJSON(event.target.result as string);

                    setResumes(parsed);
                }
            };

            reader.readAsText(file);
        }
    };

    const parseJSON = (json: string) => {
        try {
            const parsed = JSON.parse(json);

            const array = Array.isArray(parsed) ? parsed : [parsed];

            return array.map((resume: Record<string, any>) => {
                return mapResume({ ...resume, _id: uniqid() });
            });
        } catch (error) {
            alert("Failed to parse JSON data\n" + error);
            return [];
        }
    };

    const onImport = () => {
        addManyResumes(resumes);
        if (onSuccess) onSuccess();
    };

    return (
        <div className="flex flex-col">
            {resumes.length > 0 ? (
                <div className="flex flex-col gap-6">
                    <div className="flex gap-3">
                        <Button variant="outline" onClick={() => setResumes([])}>
                            {t("resumeJsonImport.importer.clearButtonContent")}
                        </Button>
                        <Button onClick={onImport}>{t("resumeJsonImport.importer.importButtonContent")}</Button>
                    </div>
                    <div className="flex flex-col gap-6">
                        <div className="p-4 border border-gray-300 rounded-md">
                            <pre>{JSON.stringify(resumes, null, 2)}</pre>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col gap-4">
                    <button className="flex items-center flex-col relative hover:opacity-70 transition-opacity gap-6 max-w-[400px] p-9 w-full border border-dashed rounded-xl border-neutral-300 dark:border-neutral-600">
                        <input
                            className="absolute inset-0 opacity-0 cursor-pointer"
                            ref={inputRef}
                            type="file"
                            name="avatar"
                            accept=".json"
                            onChange={handleFileChange}
                        />
                        <div className="flex flex-col items-center">
                            <FileJson2 size={50} className="text-gray-700 dark:text-gray-300" />
                            <div className="text-gray-700 dark:text-gray-300">
                                {t("resumeJsonImport.importer.upload")}
                            </div>
                            <span className="text-center text-gray-500 text-sm">
                                {t("resumeJsonImport.importer.uploadOr")}
                            </span>
                        </div>
                    </button>
                    <div className="flex flex-col gap-3 items-start">
                        <span className="text-sm text-zinc-500 dark:text-zinc-400">
                            {t("resumeJsonImport.importer.paste")}
                        </span>
                        <Textarea value={jsonInput} onChange={(e) => setJsonInput(e.target.value)} />
                        <Button
                            onClick={() => {
                                const parsed = parseJSON(jsonInput);

                                setResumes(parsed);
                            }}
                        >
                            {t("parse")}
                        </Button>
                    </div>
                    <Accordion type="single" collapsible>
                        <AccordionItem className="border-b-0" value="item-1">
                            <AccordionTrigger>{t("resumeJsonImport.importer.lookLikeTitle")}</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4">
                                <Trans
                                    i18nKey="resumeJsonImport.importer.lookLikeDescription"
                                    components={{ br: <br /> }}
                                />
                                <div className="p-4 border border-gray-300 rounded-md">
                                    <pre>
                                        {JSON.stringify(
                                            [
                                                getSampleResume(),
                                                {
                                                    _id: "sample-resume-2",
                                                    name: "An empty resume",
                                                    description: "This resume is empty."
                                                }
                                            ],
                                            null,
                                            2
                                        )}
                                    </pre>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            )}
        </div>
    );
}
