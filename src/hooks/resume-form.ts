import { useSavedResumes } from "@/providers/saved-resumes-provider";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const resumeSchema = z.object({
    name: z.string().optional(),
    description: z.string().optional()
});

export function useResumeForm(id: string) {
    const { getResume, setName, setDescription } = useSavedResumes();

    const resume = getResume(id);

    const form = useForm<z.infer<typeof resumeSchema>>({
        resolver: zodResolver(resumeSchema),
        defaultValues: {
            name: resume?.name,
            description: resume?.description
        }
    });

    function onSubmit(values: z.infer<typeof resumeSchema>) {
        setName(id, `${values.name}`);
        setDescription(id, `${values.description}`);
    }

    return { form, onSubmit };
}
