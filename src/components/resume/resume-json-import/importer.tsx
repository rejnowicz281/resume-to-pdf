import { Button } from "@/components/ui/button";
import { Resume } from "@/lib/types/resume";
import { mapResume } from "@/lib/utils/mappers/resume";
import { useLocalResumes } from "@/providers/local-resumes-provider";
import { FileJson2 } from "lucide-react";
import { useRef, useState } from "react";

export default function Importer({ onSuccess }: { onSuccess?: () => void }) {
    const { addManyResumes } = useLocalResumes();
    const inputRef = useRef<HTMLInputElement>(null);
    const [resumes, setResumes] = useState<Resume[]>(null);
    const [jsonInput, setJsonInput] = useState<string>(null);

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
                return mapResume(resume);
            });
        } catch (error) {
            alert("Failed to parse JSON data\n" + error);
            return null;
        }
    };

    const onImport = () => {
        addManyResumes(resumes);
        if (onSuccess) onSuccess();
    };

    return (
        <div className="flex flex-col">
            {resumes ? (
                <div className="flex flex-col gap-6">
                    <div className="flex gap-3">
                        <Button variant="outline" onClick={() => setResumes(null)}>
                            Clear Data
                        </Button>
                        <Button onClick={onImport}>Import</Button>
                    </div>
                    <div className="flex flex-col gap-6">
                        <div className="p-4 border border-gray-300 rounded-md">
                            <pre>{JSON.stringify(resumes, null, 2)}</pre>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col gap-4">
                    <button className="flex flex-col relative hover:opacity-70 transition-opacity gap-6 max-w-[400px] p-9 w-full border border-dashed rounded-xl border-neutral-300 dark:border-neutral-600">
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
                            <div className="text-gray-700 dark:text-gray-300">Upload a JSON file from disk</div>
                            <span className="text-center text-gray-500 text-sm">Or drag and drop a file here</span>
                        </div>
                    </button>
                    <div className="flex flex-col gap-3 items-start">
                        <span className="text-sm text-zinc-500 dark:text-zinc-400">
                            You can also paste your JSON data here:
                        </span>
                        <textarea
                            value={jsonInput}
                            onChange={(e) => setJsonInput(e.target.value)}
                            className="w-full p-2 mt-2 border border-gray-300 rounded-md"
                        />
                        <Button
                            onClick={() => {
                                const parsed = parseJSON(jsonInput);

                                setResumes(parsed);

                                setJsonInput(null);
                            }}
                        >
                            Parse
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
}
