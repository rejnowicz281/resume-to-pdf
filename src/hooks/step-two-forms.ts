import { dateToString, getDurationBetweenDates, stringToDate } from "@/lib/utils/date";
import {
    Education,
    EducationNoId,
    useResumeCreator,
    WorkExperience,
    WorkExperienceNoId
} from "@/providers/resume-creator-provider";
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

export function useWorkExperienceForm(initialExperience?: WorkExperience) {
    const { addWorkExperience, editWorkExperience } = useResumeCreator();

    const form = useForm<z.infer<typeof workExperienceSchema>>({
        resolver: zodResolver(workExperienceSchema),
        defaultValues: {
            ...initialExperience,
            startDate: initialExperience?.startDate
                ? dateToString(stringToDate(initialExperience.startDate), "yyyy-mm-dd")
                : "",
            endDate: initialExperience?.endDate
                ? dateToString(stringToDate(initialExperience.endDate), "yyyy-mm-dd")
                : ""
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

        if (initialExperience?.id) {
            editWorkExperience(initialExperience.id, newExperience);
        } else {
            addWorkExperience({ ...newExperience, id: uniqid() });
        }
    }

    return { form, onSubmit };
}

const educationSchema = z.object({
    institution: z.string().min(1, {
        message: "Institution is required"
    }),
    startDate: z.string().date("Please select a valid date"),
    endDate: z.string().optional(),
    specialization: z.string().optional(),
    level: z.string().min(1, {
        message: "Education level is required"
    }),
    description: z.string().optional()
});

export function useEducationForm(initialEducation?: Education) {
    const { addEducation, editEducation } = useResumeCreator();

    const form = useForm<z.infer<typeof educationSchema>>({
        resolver: zodResolver(educationSchema),
        defaultValues: {
            ...initialEducation,
            startDate: initialEducation?.startDate
                ? dateToString(stringToDate(initialEducation.startDate), "yyyy-mm-dd")
                : "",
            endDate: initialEducation?.endDate ? dateToString(stringToDate(initialEducation.endDate), "yyyy-mm-dd") : ""
        }
    });

    function onSubmit(values: z.infer<typeof educationSchema>) {
        const startDate = new Date(values.startDate);

        const endDate = values.endDate ? new Date(values.endDate) : new Date();
        const duration = getDurationBetweenDates(startDate, endDate);

        const newEducation: EducationNoId = {
            institution: values.institution,
            startDate: dateToString(startDate, "mm.yyyy"),
            endDate: values.endDate ? dateToString(endDate, "mm.yyyy") : "",
            description: values.description,
            specialization: values.specialization,
            level: values.level,
            duration
        };

        if (initialEducation?.id) {
            editEducation(initialEducation.id, newEducation);
        } else {
            addEducation({ ...newEducation, id: uniqid() });
        }
    }

    return { form, onSubmit };
}

const languageSchema = z.object({
    language: z.string().min(1, {
        message: "Language is required"
    }),
    level: z.string().min(1, {
        message: "Level is required"
    })
});

export const useLanguageForm = (initialLanguage?: { language: string; level: string }) => {
    const { addLanguage, editLanguage } = useResumeCreator();

    const form = useForm<z.infer<typeof languageSchema>>({
        resolver: zodResolver(languageSchema),
        defaultValues: initialLanguage
    });

    const onSubmit = (values: z.infer<typeof languageSchema>) => {
        if (initialLanguage) {
            editLanguage(initialLanguage.language, values);
        } else {
            addLanguage({ ...values, id: uniqid() });
        }
    };

    return { form, onSubmit };
};
