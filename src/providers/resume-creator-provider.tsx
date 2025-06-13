import {
    Activity,
    ActivityNoId,
    Education,
    EducationNoId,
    ImageOptions,
    Language,
    LanguageNoId,
    Link,
    LinkNoId,
    Resume,
    Skill,
    Training,
    TrainingNoId,
    WorkExperience,
    WorkExperienceNoId
} from "@/lib/types/resume";
import React, { createContext, ReactNode, useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { usePouchDB } from "./pouchdb-provider";

export type ResumeCreatorContextType = {
    previewState: boolean;
    togglePreviewState: () => void;

    resume: Resume;

    setIncludeRodoClause: (includeRodoClause: boolean) => void;
    setIncludeDataProcessingConsent: (includeDataProcessingConsent: boolean) => void;

    setImageOptions: (options: ImageOptions) => void;
    setFirstName: (name: string) => void;
    setLastName: (name: string) => void;
    setDateOfBirth: (date: string) => void;
    setCountry: (country: string) => void;
    setCity: (city: string) => void;
    setEmail: (email: string) => void;
    setPhone: (phone: string) => void;

    moveWorkExperience: (_id: string, direction: "up" | "down") => void;
    addWorkExperience: (experience: WorkExperience) => void;
    editWorkExperience: (id: string, experience: WorkExperienceNoId) => void;
    toggleWorkExperienceVisibility: (experience: WorkExperience) => void;
    removeWorkExperience: (id: string) => void;

    moveEducation: (_id: string, direction: "up" | "down") => void;
    addEducation: (education: Education) => void;
    editEducation: (id: string, education: EducationNoId) => void;
    toggleEducationVisibility: (education: Education) => void;
    removeEducation: (id: string) => void;

    moveLanguage: (_id: string, direction: "up" | "down") => void;
    addLanguage: (language: Language) => void;
    editLanguage: (id: string, language: LanguageNoId) => void;
    toggleLanguageVisibility: (language: Language) => void;
    removeLanguage: (id: string) => void;

    moveTraining: (_id: string, direction: "up" | "down") => void;
    addTraining: (training: Training) => void;
    editTraining: (id: string, training: TrainingNoId) => void;
    toggleTrainingVisibility: (training: Training) => void;
    removeTraining: (id: string) => void;

    moveSkill: (_id: string, _idTarget: string) => void;
    addSkill: (skill: Skill) => void;
    removeSkill: (id: string) => void;

    moveActivity: (_id: string, direction: "up" | "down") => void;
    addActivity: (activity: Activity) => void;
    editActivity: (id: string, activity: ActivityNoId) => void;
    toggleActivityVisibility: (activity: Activity) => void;
    removeActivity: (id: string) => void;

    setInterests: (interests: string) => void;

    moveLink: (id: string, direction: "up" | "down") => void;
    addLink: (link: Link) => void;
    editLink: (id: string, link: LinkNoId) => void;
    toggleLinkVisibility: (link: Link) => void;
    removeLink: (id: string) => void;

    step: number;
    setStep: React.Dispatch<React.SetStateAction<number>>;
    getStepName: () => string;
};

const ResumeCreatorContext = createContext<ResumeCreatorContextType | undefined>(undefined);

export const ResumeCreatorProvider = ({
    children,
    resume,
    setResume
}: {
    children: ReactNode;
    resume: Resume;
    setResume: React.Dispatch<React.SetStateAction<Resume>>;
}) => {
    const { t } = useTranslation();
    const { db } = usePouchDB();

    const [previewState, setPreviewState] = useState(false);

    const togglePreviewState = () => setPreviewState(!previewState);

    const setIncludeRodoClause = (includeRodoClause: boolean) => {
        const newResume = { ...resume, includeRodoClause };

        setResume(newResume);

        db.put(newResume);
    };

    const setIncludeDataProcessingConsent = (includeDataProcessingConsent: boolean) => {
        const newResume = { ...resume, includeDataProcessingConsent };

        setResume(newResume);

        db.put(newResume);
    };

    const setImageOptions = (options: ImageOptions) => setResume({ ...resume, imageOptions: options });

    const setFirstName = (name: string) => setResume({ ...resume, firstName: name });

    const setLastName = (name: string) => setResume({ ...resume, lastName: name });

    const setDateOfBirth = (date: string) => setResume({ ...resume, dateOfBirth: date });

    const setCountry = (country: string) => setResume({ ...resume, country });

    const setCity = (city: string) => setResume({ ...resume, city });

    const setEmail = (email: string) => setResume({ ...resume, email });

    const setPhone = (phone: string) => setResume({ ...resume, phone });

    const setWorkExperience = (experience: WorkExperience[]) => {
        const newResume = { ...resume, workExperience: experience };

        setResume(newResume);

        db.put(newResume);
    };

    const moveWorkExperience = (_id: string, direction: "up" | "down") => {
        const index = resume.workExperience.findIndex((exp) => exp._id === _id);

        if (index === -1) return;

        const newWorkExperience = [...resume.workExperience];
        if (direction === "up" && index > 0) {
            [newWorkExperience[index], newWorkExperience[index - 1]] = [
                newWorkExperience[index - 1],
                newWorkExperience[index]
            ];
        } else if (direction === "down" && index < newWorkExperience.length - 1) {
            [newWorkExperience[index], newWorkExperience[index + 1]] = [
                newWorkExperience[index + 1],
                newWorkExperience[index]
            ];
        }

        setWorkExperience(newWorkExperience);
    };

    const addWorkExperience = (experience: WorkExperience) => setWorkExperience([...resume.workExperience, experience]);

    const editWorkExperience = (_id: string, experience: WorkExperienceNoId) =>
        setWorkExperience(resume.workExperience.map((exp) => (exp._id === _id ? { ...exp, ...experience } : exp)));

    const toggleWorkExperienceVisibility = (experience: WorkExperience) => {
        const newExperience = { ...experience, hidden: !experience.hidden };

        editWorkExperience(experience._id, newExperience);
    };

    const removeWorkExperience = (_id: string) =>
        setWorkExperience(resume.workExperience.filter((experience) => experience._id !== _id));

    const setEducation = (education: Education[]) => {
        const newResume = { ...resume, education };

        setResume(newResume);

        db.put(newResume);
    };

    const moveEducation = (_id: string, direction: "up" | "down") => {
        const index = resume.education.findIndex((edu) => edu._id === _id);
        if (index === -1) return;
        const newEducation = [...resume.education];
        if (direction === "up" && index > 0) {
            [newEducation[index], newEducation[index - 1]] = [newEducation[index - 1], newEducation[index]];
        } else if (direction === "down" && index < newEducation.length - 1) {
            [newEducation[index], newEducation[index + 1]] = [newEducation[index + 1], newEducation[index]];
        }
        setEducation(newEducation);
    };

    const addEducation = (educationToAdd: Education) => setEducation([...resume.education, educationToAdd]);

    const editEducation = (_id: string, educationToEdit: EducationNoId) =>
        setEducation(resume.education.map((edu) => (edu._id === _id ? { ...edu, ...educationToEdit } : edu)));

    const toggleEducationVisibility = (education: Education) => {
        const newEducation = { ...education, hidden: !education.hidden };

        editEducation(education._id, newEducation);
    };

    const removeEducation = (_id: string) => setEducation(resume.education.filter((edu) => edu._id !== _id));

    const setLanguages = (languages: Language[]) => {
        const newResume = { ...resume, languages };

        setResume(newResume);

        db.put(newResume);
    };

    const moveLanguage = (_id: string, direction: "up" | "down") => {
        const index = resume.languages.findIndex((lang) => lang._id === _id);
        if (index === -1) return;
        const newLanguages = [...resume.languages];
        if (direction === "up" && index > 0) {
            [newLanguages[index], newLanguages[index - 1]] = [newLanguages[index - 1], newLanguages[index]];
        } else if (direction === "down" && index < newLanguages.length - 1) {
            [newLanguages[index], newLanguages[index + 1]] = [newLanguages[index + 1], newLanguages[index]];
        }
        setLanguages(newLanguages);
    };

    const addLanguage = (language: Language) => setLanguages([...resume.languages, language]);

    const editLanguage = (_id: string, language: LanguageNoId) =>
        setLanguages(resume.languages.map((lang) => (lang._id === _id ? { ...lang, ...language } : lang)));

    const toggleLanguageVisibility = (language: Language) => {
        const newLanguage = { ...language, hidden: !language.hidden };

        editLanguage(language._id, newLanguage);
    };

    const removeLanguage = (_id: string) => setLanguages(resume.languages.filter((lang) => lang._id !== _id));

    const setTraining = (training: Training[]) => {
        const newResume = { ...resume, training };

        setResume(newResume);

        db.put(newResume);
    };

    const moveTraining = (_id: string, direction: "up" | "down") => {
        const index = resume.training.findIndex((train) => train._id === _id);
        if (index === -1) return;
        const newTraining = [...resume.training];
        if (direction === "up" && index > 0) {
            [newTraining[index], newTraining[index - 1]] = [newTraining[index - 1], newTraining[index]];
        } else if (direction === "down" && index < newTraining.length - 1) {
            [newTraining[index], newTraining[index + 1]] = [newTraining[index + 1], newTraining[index]];
        }
        setTraining(newTraining);
    };

    const addTraining = (trainingToAdd: Training) => setTraining([...resume.training, trainingToAdd]);

    const editTraining = (_id: string, trainingToEdit: TrainingNoId) =>
        setTraining(resume.training.map((t) => (t._id === _id ? { ...t, ...trainingToEdit } : t)));

    const toggleTrainingVisibility = (training: Training) => {
        const newTraining = { ...training, hidden: !training.hidden };

        editTraining(training._id, newTraining);
    };

    const removeTraining = (_id: string) => setTraining(resume.training.filter((t) => t._id !== _id));

    const setSkills = (skills: Skill[]) => {
        const newResume = { ...resume, skills };

        setResume(newResume);

        db.put(newResume);
    };

    const moveSkill = (_id: string, _idTarget: string) => {
        const fromIndex = resume.skills.findIndex((skill) => skill._id === _id);
        const toIndex = resume.skills.findIndex((skill) => skill._id === _idTarget);

        if (fromIndex === -1 || toIndex === -1 || fromIndex === toIndex) return;

        const newSkills = [...resume.skills];

        const [movedSkill] = newSkills.splice(fromIndex, 1);

        const insertAt = fromIndex < toIndex ? toIndex : toIndex;

        newSkills.splice(insertAt, 0, movedSkill);

        setSkills(newSkills);
    };

    const addSkill = (skill: Skill) => setSkills([...resume.skills, skill]);

    const removeSkill = (_id: string) => setSkills(resume.skills.filter((skill) => skill._id !== _id));

    const setActivities = (activities: Activity[]) => {
        const newResume = { ...resume, activities };

        setResume(newResume);

        db.put(newResume);
    };

    const moveActivity = (_id: string, direction: "up" | "down") => {
        const index = resume.activities.findIndex((act) => act._id === _id);
        if (index === -1) return;
        const newActivities = [...resume.activities];
        if (direction === "up" && index > 0) {
            [newActivities[index], newActivities[index - 1]] = [newActivities[index - 1], newActivities[index]];
        } else if (direction === "down" && index < newActivities.length - 1) {
            [newActivities[index], newActivities[index + 1]] = [newActivities[index + 1], newActivities[index]];
        }
        setActivities(newActivities);
    };

    const addActivity = (activity: Activity) => setActivities([...resume.activities, activity]);

    const editActivity = (_id: string, activity: ActivityNoId) =>
        setActivities(resume.activities.map((act) => (act._id === _id ? { ...act, ...activity } : act)));

    const toggleActivityVisibility = (activity: Activity) => {
        const newActivity = { ...activity, hidden: !activity.hidden };

        editActivity(activity._id, newActivity);
    };

    const removeActivity = (_id: string) => setActivities(resume.activities.filter((act) => act._id !== _id));

    const setInterests = (interests: string) => setResume({ ...resume, interests });

    const setLinks = (links: Link[]) => {
        const newResume = { ...resume, links };

        setResume(newResume);

        db.put(newResume);
    };

    const moveLink = (_id: string, direction: "up" | "down") => {
        const index = resume.links.findIndex((link) => link._id === _id);
        if (index === -1) return;
        const newLinks = [...resume.links];
        if (direction === "up" && index > 0) {
            [newLinks[index], newLinks[index - 1]] = [newLinks[index - 1], newLinks[index]];
        } else if (direction === "down" && index < newLinks.length - 1) {
            [newLinks[index], newLinks[index + 1]] = [newLinks[index + 1], newLinks[index]];
        }
        setLinks(newLinks);
    };

    const addLink = (link: Link) => setLinks([...resume.links, link]);

    const editLink = (_id: string, link: LinkNoId) =>
        setLinks(resume.links.map((l) => (l._id === _id ? { ...l, ...link } : l)));

    const toggleLinkVisibility = (link: Link) => {
        const newLink = { ...link, hidden: !link.hidden };

        editLink(link._id, newLink);
    };

    const removeLink = (_id: string) => setLinks(resume.links.filter((l) => l._id !== _id));

    const [step, setStep] = useState(1);

    const getStepName = () => {
        switch (step) {
            case 1:
                return t("resumeCreator.stepOne.name");
            case 2:
                return t("resumeCreator.stepTwo.name");
            case 3:
                return t("resumeCreator.stepThree.name");
            case 4:
                return t("resumeCreator.stepFour.name");
            default:
                return t("resumeCreator.stepOne.name");
        }
    };

    return (
        <ResumeCreatorContext.Provider
            value={{
                previewState,
                togglePreviewState,

                resume,

                setIncludeRodoClause,
                setIncludeDataProcessingConsent,

                setImageOptions,
                setFirstName,
                setLastName,
                setDateOfBirth,
                setCountry,
                setCity,
                setEmail,
                setPhone,

                moveWorkExperience,
                addWorkExperience,
                editWorkExperience,
                toggleWorkExperienceVisibility,
                removeWorkExperience,

                moveEducation,
                addEducation,
                editEducation,
                toggleEducationVisibility,
                removeEducation,

                moveLanguage,
                addLanguage,
                editLanguage,
                toggleLanguageVisibility,
                removeLanguage,

                moveTraining,
                addTraining,
                editTraining,
                toggleTrainingVisibility,
                removeTraining,

                moveSkill,
                addSkill,
                removeSkill,

                moveActivity,
                addActivity,
                editActivity,
                toggleActivityVisibility,
                removeActivity,

                setInterests,

                moveLink,
                addLink,
                editLink,
                toggleLinkVisibility,
                removeLink,

                step,
                setStep,
                getStepName
            }}
        >
            {children}
        </ResumeCreatorContext.Provider>
    );
};

export const useResumeCreator = () => {
    const context = useContext(ResumeCreatorContext);

    if (context === undefined) throw new Error("useResumeCreator must be used within a ResumeCreatorProvider");

    return context;
};
