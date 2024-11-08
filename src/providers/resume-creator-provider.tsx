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
import { db } from "@/lib/utils/db";
import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export type ResumeCreatorContextType = {
    previewState: boolean;
    togglePreviewState: () => void;
    draftResume: Resume;
    imageOptions: ImageOptions;
    setImageOptions: React.Dispatch<React.SetStateAction<ImageOptions>>;
    firstName: string;
    setFirstName: React.Dispatch<React.SetStateAction<string>>;
    lastName: string;
    setLastName: React.Dispatch<React.SetStateAction<string>>;
    dateOfBirth?: string;
    setDateOfBirth: React.Dispatch<React.SetStateAction<string>>;
    country?: string;
    setCountry: React.Dispatch<React.SetStateAction<string>>;
    city?: string;
    setCity: React.Dispatch<React.SetStateAction<string>>;
    email: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    phone: string;
    setPhone: React.Dispatch<React.SetStateAction<string>>;
    workExperience: WorkExperience[];
    setWorkExperience: React.Dispatch<React.SetStateAction<WorkExperience[]>>;
    addWorkExperience: (experience: WorkExperience) => void;
    editWorkExperience: (id: string, experience: WorkExperienceNoId) => void;
    removeWorkExperience: (id: string) => void;
    education: Education[];
    setEducation: React.Dispatch<React.SetStateAction<Education[]>>;
    addEducation: (education: Education) => void;
    editEducation: (id: string, education: EducationNoId) => void;
    removeEducation: (id: string) => void;
    languages: Language[];
    addLanguage: (language: Language) => void;
    editLanguage: (id: string, language: LanguageNoId) => void;
    removeLanguage: (id: string) => void;
    setLanguages: React.Dispatch<React.SetStateAction<Language[]>>;
    training: Training[];
    setTraining: React.Dispatch<React.SetStateAction<Training[]>>;
    addTraining: (training: Training) => void;
    editTraining: (id: string, training: TrainingNoId) => void;
    removeTraining: (id: string) => void;
    skills: Skill[];
    setSkills: React.Dispatch<React.SetStateAction<Skill[]>>;
    addSkill: (skill: Skill) => void;
    removeSkill: (id: string) => void;
    activities: Activity[];
    setActivities: React.Dispatch<React.SetStateAction<Activity[]>>;
    addActivity: (activity: Activity) => void;
    editActivity: (id: string, activity: ActivityNoId) => void;
    removeActivity: (id: string) => void;
    interests?: string;
    setInterests: React.Dispatch<React.SetStateAction<string>>;
    links: Link[];
    setLinks: React.Dispatch<React.SetStateAction<Link[]>>;
    addLink: (link: Link) => void;
    editLink: (id: string, link: LinkNoId) => void;
    removeLink: (id: string) => void;
    step: number;
    setStep: React.Dispatch<React.SetStateAction<number>>;
    getStepName: () => string;
};

const ResumeCreatorContext = createContext<ResumeCreatorContextType | undefined>(undefined);

export const ResumeCreatorProvider = ({ children, initialResume }: { children: ReactNode; initialResume: Resume }) => {
    const { t } = useTranslation();

    const [previewState, setPreviewState] = useState(false);

    const togglePreviewState = () => setPreviewState(!previewState);

    const [rev, setRev] = useState(initialResume._rev);

    const [imageOptions, setImageOptions] = useState<ImageOptions>(
        initialResume.imageOptions || { show: false, url: "" }
    );
    const [firstName, setFirstName] = useState(initialResume.firstName || "");
    const [lastName, setLastName] = useState(initialResume.lastName || "");
    const [dateOfBirth, setDateOfBirth] = useState(initialResume.dateOfBirth || "");
    const [country, setCountry] = useState(initialResume.country || "");
    const [city, setCity] = useState(initialResume.city || "");
    const [email, setEmail] = useState(initialResume.email || "");
    const [phone, setPhone] = useState(initialResume.phone || "");

    const [workExperience, setWorkExperience] = useState<WorkExperience[]>(initialResume.workExperience || []);

    const addWorkExperience = (experience: WorkExperience) => {
        setWorkExperience([...workExperience, experience]);
    };

    const editWorkExperience = (_id: string, experience: WorkExperienceNoId) => {
        setWorkExperience(workExperience.map((exp) => (exp._id === _id ? { ...exp, ...experience } : exp)));
    };

    const removeWorkExperience = (_id: string) => {
        setWorkExperience(workExperience.filter((experience) => experience._id !== _id));
    };

    const [education, setEducation] = useState<Education[]>(initialResume.education || []);

    const addEducation = (educationToAdd: Education) => {
        setEducation([...education, educationToAdd]);
    };

    const editEducation = (_id: string, educationToEdit: EducationNoId) => {
        setEducation(education.map((edu) => (edu._id === _id ? { ...edu, ...educationToEdit } : edu)));
    };

    const removeEducation = (_id: string) => {
        setEducation(education.filter((edu) => edu._id !== _id));
    };

    const [languages, setLanguages] = useState<Language[]>(initialResume.languages || []);

    const addLanguage = (language: Language) => {
        setLanguages([...languages, language]);
    };

    const editLanguage = (_id: string, language: LanguageNoId) => {
        setLanguages(languages.map((lang) => (lang._id === _id ? { ...lang, ...language } : lang)));
    };

    const removeLanguage = (_id: string) => {
        setLanguages(languages.filter((lang) => lang._id !== _id));
    };

    const [training, setTraining] = useState<Training[]>(initialResume.training || []);

    const addTraining = (trainingToAdd: Training) => {
        setTraining([...training, trainingToAdd]);
    };

    const editTraining = (_id: string, trainingToEdit: TrainingNoId) => {
        setTraining(training.map((t) => (t._id === _id ? { ...t, ...trainingToEdit } : t)));
    };

    const removeTraining = (_id: string) => {
        setTraining(training.filter((t) => t._id !== _id));
    };

    const [skills, setSkills] = useState<Skill[]>(initialResume.skills || []);

    const addSkill = (skill: Skill) => {
        setSkills([...skills, skill]);
    };

    const removeSkill = (_id: string) => {
        setSkills(skills.filter((skill) => skill._id !== _id));
    };

    const [activities, setActivities] = useState<Activity[]>(initialResume.activities || []);

    const addActivity = (activity: Activity) => {
        setActivities([...activities, activity]);
    };

    const editActivity = (_id: string, activity: ActivityNoId) => {
        setActivities(activities.map((act) => (act._id === _id ? { ...act, ...activity } : act)));
    };

    const removeActivity = (_id: string) => {
        setActivities(activities.filter((act) => act._id !== _id));
    };

    const [interests, setInterests] = useState(initialResume.interests || "");

    const [links, setLinks] = useState<Link[]>(initialResume.links || []);

    const addLink = (link: Link) => {
        setLinks([...links, link]);
    };

    const editLink = (_id: string, link: LinkNoId) => {
        setLinks(links.map((l) => (l._id === _id ? { ...l, ...link } : l)));
    };

    const removeLink = (_id: string) => {
        setLinks(links.filter((l) => l._id !== _id));
    };

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

    const draftResume = {
        imageOptions,
        firstName,
        lastName,
        dateOfBirth,
        country,
        city,
        email,
        phone,
        workExperience,
        education,
        languages,
        training,
        skills,
        activities,
        interests,
        links,
        createdAt: initialResume.createdAt,
        name: initialResume.name,
        description: initialResume.description,
        _id: initialResume._id,
        _rev: rev
    };

    useEffect(() => {
        db.put(draftResume).then((res) => {
            setRev(res.rev);
        });
    }, [
        imageOptions,
        firstName,
        lastName,
        dateOfBirth,
        country,
        city,
        email,
        phone,
        workExperience,
        education,
        languages,
        training,
        skills,
        activities,
        interests,
        links
    ]);

    return (
        <ResumeCreatorContext.Provider
            value={{
                previewState,
                togglePreviewState,
                draftResume: { ...draftResume, _rev: rev },
                imageOptions,
                setImageOptions,
                firstName,
                setFirstName,
                lastName,
                setLastName,
                dateOfBirth,
                setDateOfBirth,
                country,
                setCountry,
                city,
                setCity,
                email,
                setEmail,
                phone,
                setPhone,
                workExperience,
                setWorkExperience,
                addWorkExperience,
                editWorkExperience,
                removeWorkExperience,
                education,
                setEducation,
                addEducation,
                editEducation,
                removeEducation,
                languages,
                setLanguages,
                addLanguage,
                editLanguage,
                removeLanguage,
                training,
                setTraining,
                addTraining,
                editTraining,
                removeTraining,
                skills,
                setSkills,
                addSkill,
                removeSkill,
                activities,
                setActivities,
                addActivity,
                editActivity,
                removeActivity,
                interests,
                setInterests,
                links,
                setLinks,
                addLink,
                editLink,
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
