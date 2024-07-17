import { newEmptyResume } from "@/lib/utils/resume";
import { useLocalResumes } from "@/providers/local-resumes-provider";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const resumeSchema = z.object({
    name: z.string().optional(),
    description: z.string().optional()
});

export function useResumeForm(id: string) {
    const { getResume, addResume, editResume } = useLocalResumes();

    const resume = getResume(id);

    const form = useForm<z.infer<typeof resumeSchema>>({
        resolver: zodResolver(resumeSchema),
        defaultValues: {
            name: resume?.name,
            description: resume?.description
        }
    });

    function onSubmit(values: z.infer<typeof resumeSchema>) {
        if (!resume) addResume({ ...newEmptyResume(id), ...values });
        else editResume({ id, ...values });
    }

    return { form, onSubmit };
}
