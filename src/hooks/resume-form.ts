import { newEmptyResume } from "@/lib/utils/resume";
import { useResumesList } from "@/providers/resumes-list-provider";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const resumeSchema = z.object({
    name: z.string().optional(),
    description: z.string().optional()
});

export function useResumeForm(_id: string) {
    const { getResume, addResume, editResume } = useResumesList();

    const resume = getResume(_id);

    const form = useForm<z.infer<typeof resumeSchema>>({
        resolver: zodResolver(resumeSchema),
        values: {
            name: resume?.name,
            description: resume?.description
        }
    });

    function onSubmit(values: z.infer<typeof resumeSchema>) {
        if (!resume) addResume({ ...newEmptyResume(_id), ...values });
        else editResume({ _id, ...values });
    }

    return { form, onSubmit };
}
