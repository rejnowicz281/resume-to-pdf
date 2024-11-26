import { Activity, ActivityNoId, Link } from "@/lib/types/resume";
import { dateToString, stringToDate } from "@/lib/utils/date";
import { withID } from "@/lib/utils/general";
import { usePouchDB } from "@/providers/pouchdb-provider";
import { useResumeCreator } from "@/providers/resume-creator-provider";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { z } from "zod";

export function useSkillForm() {
    const { addSkill } = useResumeCreator();

    const { t } = useTranslation();

    const skillSchema = z.object({
        name: z.string().min(1, {
            message: t("resumeCreator.stepThree.skillForm.skillIsRequired")
        })
    });

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

export function useActivityForm(initialActivity?: Activity) {
    const { addActivity, editActivity } = useResumeCreator();

    const { t } = useTranslation();

    const activitySchema = z.object({
        name: z.string().min(1, {
            message: t("resumeCreator.stepThree.activityForm.nameIsRequired")
        }),
        location: z.string().optional(),
        startDate: z.string().date(t("resumeCreator.stepThree.activityForm.startDateMustBeDate")),
        endDate: z.string().optional(),
        description: z.string().optional()
    });

    const form = useForm<z.infer<typeof activitySchema>>({
        resolver: zodResolver(activitySchema),
        values: {
            ...initialActivity,
            name: initialActivity?.name || "",
            startDate: initialActivity?.startDate
                ? dateToString(stringToDate(initialActivity.startDate), "yyyy-mm-dd")
                : "",
            endDate: initialActivity?.endDate ? dateToString(stringToDate(initialActivity.endDate), "yyyy-mm-dd") : ""
        }
    });

    function onSubmit(values: z.infer<typeof activitySchema>) {
        const startDate = new Date(values.startDate);

        const endDate = values.endDate ? new Date(values.endDate) : new Date();

        const newActivity: ActivityNoId = {
            name: values.name,
            startDate: dateToString(startDate, "mm.yyyy"),
            endDate: values.endDate ? dateToString(endDate, "mm.yyyy") : "",
            description: values.description,
            location: values.location
        };

        if (initialActivity?._id) {
            editActivity(initialActivity._id, newActivity);
        } else {
            addActivity(withID(newActivity));
        }
    }

    return { form, onSubmit };
}

export function useInterestsForm() {
    const { setInterests, resume } = useResumeCreator();
    const { db } = usePouchDB();

    const interestsSchema = z.object({
        interests: z.string().optional()
    });

    const { interests } = resume;

    const form = useForm<z.infer<typeof interestsSchema>>({
        resolver: zodResolver(interestsSchema),
        values: {
            interests
        }
    });

    function onSubmit(values: z.infer<typeof interestsSchema>) {
        const interests = values.interests || "";

        setInterests(interests);

        db.put({
            ...resume,
            interests
        });
    }

    return { form, onSubmit };
}

export function useLinkForm(initialLink?: Link) {
    const { addLink, editLink } = useResumeCreator();
    const { t } = useTranslation();

    const linkSchema = z.object({
        url: z.string().url(t("resumeCreator.stepThree.linkForm.urlMustBeValid")),
        description: z.string().optional()
    });

    const form = useForm<z.infer<typeof linkSchema>>({
        resolver: zodResolver(linkSchema),
        values: initialLink
    });

    function onSubmit(values: z.infer<typeof linkSchema>) {
        if (initialLink) {
            editLink(initialLink._id, values);
        } else {
            addLink(withID(values));
        }
    }

    return { form, onSubmit };
}
