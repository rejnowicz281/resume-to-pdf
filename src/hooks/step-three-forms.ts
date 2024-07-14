import { dateToString, getDurationBetweenDates, stringToDate } from "@/lib/utils/date";
import { withID } from "@/lib/utils/general";
import { Activity, ActivityNoId, Link, useResumeCreator } from "@/providers/resume-creator-provider";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
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
        addSkill(withID(values));
    }

    return { form, onSubmit };
}

const activitySchema = z.object({
    name: z.string().min(1, {
        message: "Name is required"
    }),
    location: z.string().optional(),
    startDate: z.string().date("Please select a valid date"),
    endDate: z.string().optional(),
    description: z.string().optional()
});

export function useActivityForm(initialActivity?: Activity) {
    const { addActivity, editActivity } = useResumeCreator();

    const form = useForm<z.infer<typeof activitySchema>>({
        resolver: zodResolver(activitySchema),
        defaultValues: {
            ...initialActivity,
            startDate: initialActivity?.startDate
                ? dateToString(stringToDate(initialActivity.startDate), "yyyy-mm-dd")
                : "",
            endDate: initialActivity?.endDate ? dateToString(stringToDate(initialActivity.endDate), "yyyy-mm-dd") : ""
        }
    });

    function onSubmit(values: z.infer<typeof activitySchema>) {
        const startDate = new Date(values.startDate);

        const endDate = values.endDate ? new Date(values.endDate) : new Date();
        const duration = getDurationBetweenDates(startDate, endDate);

        const newActivity: ActivityNoId = {
            name: values.name,
            startDate: dateToString(startDate, "mm.yyyy"),
            endDate: values.endDate ? dateToString(endDate, "mm.yyyy") : "",
            description: values.description,
            location: values.location,
            duration
        };

        if (initialActivity?.id) {
            editActivity(initialActivity.id, newActivity);
        } else {
            addActivity(withID(newActivity));
        }
    }

    return { form, onSubmit };
}

const interestsSchema = z.object({
    interests: z.string().optional()
});

export function useInterestsForm() {
    const { setInterests, interests, setShowImage } = useResumeCreator();

    const form = useForm<z.infer<typeof interestsSchema>>({
        resolver: zodResolver(interestsSchema),
        defaultValues: {
            interests
        }
    });

    function onSubmit(values: z.infer<typeof interestsSchema>) {
        setInterests(values.interests || "");
        setShowImage(true);
    }

    return { form, onSubmit };
}

const linkSchema = z.object({
    url: z.string().url("Please enter a valid URL"),
    description: z.string().optional()
});

export function useLinkForm(initialLink?: Link) {
    const { addLink, editLink } = useResumeCreator();

    const form = useForm<z.infer<typeof linkSchema>>({
        resolver: zodResolver(linkSchema),
        defaultValues: initialLink
    });

    function onSubmit(values: z.infer<typeof linkSchema>) {
        if (initialLink) {
            editLink(initialLink.id, values);
        } else {
            addLink(withID(values));
        }
    }

    return { form, onSubmit };
}
