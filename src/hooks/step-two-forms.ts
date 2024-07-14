import { dateToString, getDurationBetweenDates, stringToDate } from "@/lib/utils/date";
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
    startDate: z.string().date("Please select a valid date"),
    endDate: z.string().optional(),
    description: z.string().optional()
});

export function useWorkExperienceForm(experienceId?: string) {
    const { workExperience, addWorkExperience, editWorkExperience } = useResumeCreator();

    const foundExperience = workExperience.find((experience) => experience.id === experienceId);
    const form = useForm<z.infer<typeof workExperienceSchema>>({
        resolver: zodResolver(workExperienceSchema),
        defaultValues: {
            ...foundExperience,
            startDate: foundExperience?.startDate
                ? dateToString(stringToDate(foundExperience.startDate), "yyyy-mm-dd")
                : "",
            endDate: foundExperience?.endDate ? dateToString(stringToDate(foundExperience.endDate), "yyyy-mm-dd") : ""
        }
    });

    function onSubmit(values: z.infer<typeof workExperienceSchema>) {
        const startDate = new Date(values.startDate);

        const endDate = values.endDate ? new Date(values.endDate) : new Date();
        const duration = getDurationBetweenDates(startDate, endDate);

        const newExperience: WorkExperienceNoId = {
            title: values.title,
            startDate: dateToString(startDate, "mm.yyyy"),
            endDate: values.endDate ? dateToString(endDate, "mm.yyyy") : "",
            description: values.description,
            company: values.company,
            location: values.location,
            duration
        };

        if (experienceId) {
            editWorkExperience(experienceId, newExperience);
        } else {
            addWorkExperience({ ...newExperience, id: uniqid() });
        }
    }

    return { form, onSubmit, defaultValues: foundExperience };
}
