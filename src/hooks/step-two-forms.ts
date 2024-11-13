import { Education, EducationNoId, Language, Training, WorkExperience, WorkExperienceNoId } from "@/lib/types/resume";
import { dateToString, stringToDate } from "@/lib/utils/date";
import { withID } from "@/lib/utils/general";
import { useResumeCreator } from "@/providers/resume-creator-provider";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
        values: {
            ...initialExperience,
            title: initialExperience?.title || "",
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

        const newExperience: WorkExperienceNoId = {
            title: values.title,
            startDate: dateToString(startDate, "mm.yyyy"),
            endDate: values.endDate ? dateToString(endDate, "mm.yyyy") : "",
            description: values.description,
            company: values.company,
            location: values.location
        };

        if (initialExperience?._id) {
            editWorkExperience(initialExperience._id, newExperience);
        } else {
            addWorkExperience(withID(newExperience));
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
        values: {
            ...initialEducation,
            institution: initialEducation?.institution || "",
            level: initialEducation?.level || "",
            startDate: initialEducation?.startDate
                ? dateToString(stringToDate(initialEducation.startDate), "yyyy-mm-dd")
                : "",
            endDate: initialEducation?.endDate ? dateToString(stringToDate(initialEducation.endDate), "yyyy-mm-dd") : ""
        }
    });

    function onSubmit(values: z.infer<typeof educationSchema>) {
        const startDate = new Date(values.startDate);

        const endDate = values.endDate ? new Date(values.endDate) : new Date();

        const newEducation: EducationNoId = {
            institution: values.institution,
            startDate: dateToString(startDate, "mm.yyyy"),
            endDate: values.endDate ? dateToString(endDate, "mm.yyyy") : "",
            description: values.description,
            specialization: values.specialization,
            level: values.level
        };

        if (initialEducation?._id) {
            editEducation(initialEducation._id, newEducation);
        } else {
            addEducation(withID(newEducation));
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

export const useLanguageForm = (initialLanguage?: Language) => {
    const { addLanguage, editLanguage } = useResumeCreator();

    const form = useForm<z.infer<typeof languageSchema>>({
        resolver: zodResolver(languageSchema),
        values: initialLanguage
    });

    const onSubmit = (values: z.infer<typeof languageSchema>) => {
        if (initialLanguage) {
            editLanguage(initialLanguage._id, values);
        } else {
            addLanguage(withID(values));
        }
    };

    return { form, onSubmit };
};

const trainingSchema = z.object({
    name: z.string().min(1, {
        message: "Name is required"
    }),
    issueDate: z.string().date("Please select a valid date"),
    organization: z.string().min(1, {
        message: "Organization is required"
    }),
    description: z.string().optional()
});

export const useTrainingForm = (initialTraining?: Training) => {
    const { addTraining, editTraining } = useResumeCreator();

    const form = useForm<z.infer<typeof trainingSchema>>({
        resolver: zodResolver(trainingSchema),
        values: {
            ...initialTraining,
            name: initialTraining?.name || "",
            organization: initialTraining?.organization || "",
            issueDate: initialTraining?.issueDate
                ? dateToString(stringToDate(initialTraining.issueDate), "yyyy-mm-dd")
                : ""
        }
    });

    const onSubmit = (values: z.infer<typeof trainingSchema>) => {
        const newTraining = {
            ...values,
            issueDate: dateToString(new Date(values.issueDate), "mm.yyyy")
        };

        if (initialTraining) {
            editTraining(initialTraining._id, newTraining);
        } else {
            addTraining(withID(newTraining));
        }
    };

    return { form, onSubmit };
};
