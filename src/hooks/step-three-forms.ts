import { useResumeCreator } from "@/providers/resume-creator-provider";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import uniqid from "uniqid";
import { z } from "zod";

const skillSchema = z.object({
    name: z.string().min(1, {
        message: "Skill is required"
    })
});

export function useSkillForm() {
    const { addSkill } = useResumeCreator();

    const form = useForm<z.infer<typeof skillSchema>>({
        resolver: zodResolver(skillSchema)
    });

    useEffect(() => {
        form.reset({ name: "" });
    }, [form.formState.isSubmitSuccessful]);

    function onSubmit(values: z.infer<typeof skillSchema>) {
        addSkill({ ...values, id: uniqid() });
    }

    return { form, onSubmit };
}
