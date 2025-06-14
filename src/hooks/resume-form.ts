import { newEmptyResume } from "@/lib/utils/resume";
import { useResumesList } from "@/providers/resumes-list-provider";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export function useResumeForm(_id: string) {
    const { getResume, addResume, editResume } = useResumesList();

    const resumeSchema = z.object({
        name: z.string().optional(),
        description: z.string().optional(),
        lang: z.string().optional()
    });

    const resume = getResume(_id);

    const form = useForm<z.infer<typeof resumeSchema>>({
        resolver: zodResolver(resumeSchema),
        defaultValues: {
            name: resume?.name,
            description: resume?.description,
            lang: resume?.lang
        }
    });

    function onSubmit(values: z.infer<typeof resumeSchema>) {
        if (values.lang === "inherit") values.lang = undefined;

        if (!resume) addResume({ ...newEmptyResume(_id), ...values });
        else editResume({ _id, ...values });
    }

    return { form, onSubmit };
}
