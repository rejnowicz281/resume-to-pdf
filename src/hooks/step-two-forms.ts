import { useResumeCreator, WorkExperienceNoId } from "@/providers/resume-creator-provider";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import uniqid from "uniqid";
import { z } from "zod";

const workExperienceSchema = z.object({
    title: z.string().min(1, {
        message: "Title is required"
    }),
    company: z.string().optional(),
    location: z.string().optional(),
    startDate: z.string().min(1, {
        message: "Start date is required"
    }),
    endDate: z.string().optional(),
    description: z.string().optional()
});

export function useWorkExperienceForm(experienceId?: string) {
    const { workExperience, addWorkExperience, editWorkExperience } = useResumeCreator();

    const foundExperience = workExperience.find((experience) => experience.id === experienceId);

    const form = useForm<z.infer<typeof workExperienceSchema>>({
        resolver: zodResolver(workExperienceSchema),
        defaultValues: foundExperience
    });

    function onSubmit(values: z.infer<typeof workExperienceSchema>) {
        const newExperience: WorkExperienceNoId = {
            title: values.title,
            startDate: values.startDate,
            endDate: values.endDate,
            description: values.description,
            company: values.company,
            location: values.location,
            duration: "3 months"
        };

        if (experienceId) {
            editWorkExperience(experienceId, newExperience);
        } else {
            addWorkExperience({ ...newExperience, id: uniqid() });
        }
    }

    return { form, onSubmit, defaultValues: foundExperience };
}
