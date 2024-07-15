import React, { createContext, ReactNode, useContext, useState } from "react";

export type ImageOptions = {
    show: boolean;
    url: string;
};

export type WorkExperience = {
    id: string;
    title: string;
    company?: string;
    location?: string;
    startDate: string;
    endDate?: string;
    duration: string;
    description?: string;
};

export type WorkExperienceNoId = Omit<WorkExperience, "id">;

export type Education = {
    id: string;
    institution: string;
    startDate: string;
    endDate?: string;
    duration: string;
    specialization?: string;
    level: string;
    description?: string;
};

export type EducationNoId = Omit<Education, "id">;

export type Language = {
    id: string;
    language: string;
    level: string;
};

export type LanguageNoId = Omit<Language, "id">;

export type Training = {
    id: string;
    name: string;
    issueDate: string;
    organization: string;
    description?: string;
};

export type TrainingNoId = Omit<Training, "id">;

export type Activity = {
    id: string;
    name: string;
    location?: string;
    startDate: string;
    endDate?: string;
    duration: string;
    description?: string;
};

export type ActivityNoId = Omit<Activity, "id">;

export type Skill = {
    id: string;
    name: string;
};

export type SkillNoId = Omit<Skill, "id">;

export type Link = {
    id: string;
    description?: string;
    url: string;
};

export type LinkNoId = Omit<Link, "id">;

export type ResumeCreatorContextType = {
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
    phone?: string;
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

export type Resume = {
    imageOptions: ImageOptions;
    firstName: string;
    lastName: string;
    dateOfBirth?: string;
    country?: string;
    city?: string;
    email: string;
    phone?: string;
    workExperience: WorkExperience[];
    education: Education[];
    languages: Language[];
    training: Training[];
    skills: Skill[];
    activities: Activity[];
    interests?: string;
    links: Link[];
};

const ResumeCreatorContext = createContext<ResumeCreatorContextType | undefined>(undefined);

export const ResumeCreatorProvider = ({ children, initialResume }: { children: ReactNode; initialResume?: Resume }) => {
    const [imageOptions, setImageOptions] = useState<ImageOptions>(
        initialResume?.imageOptions || { show: false, url: "" }
    );
    const [firstName, setFirstName] = useState(initialResume?.firstName || "");
    const [lastName, setLastName] = useState(initialResume?.lastName || "");
    const [dateOfBirth, setDateOfBirth] = useState(initialResume?.dateOfBirth || "");
    const [country, setCountry] = useState(initialResume?.country || "");
    const [city, setCity] = useState(initialResume?.city || "");
    const [email, setEmail] = useState(initialResume?.email || "");
    const [phone, setPhone] = useState(initialResume?.phone || "");

    const [workExperience, setWorkExperience] = useState<WorkExperience[]>(initialResume?.workExperience || []);

    const addWorkExperience = (experience: WorkExperience) => {
        setWorkExperience([...workExperience, experience]);
    };

    const editWorkExperience = (id: string, experience: WorkExperienceNoId) => {
        setWorkExperience(workExperience.map((exp) => (exp.id === id ? { ...exp, ...experience } : exp)));
    };

    const removeWorkExperience = (id: string) => {
        setWorkExperience(workExperience.filter((experience) => experience.id !== id));
    };

    const [education, setEducation] = useState<Education[]>(initialResume?.education || []);

    const addEducation = (educationToAdd: Education) => {
        setEducation([...education, educationToAdd]);
    };

    const editEducation = (id: string, educationToEdit: EducationNoId) => {
        setEducation(education.map((edu) => (edu.id === id ? { ...edu, ...educationToEdit } : edu)));
    };

    const removeEducation = (id: string) => {
        setEducation(education.filter((edu) => edu.id !== id));
    };

    const [languages, setLanguages] = useState<Language[]>(initialResume?.languages || []);

    const addLanguage = (language: Language) => {
        setLanguages([...languages, language]);
    };

    const editLanguage = (id: string, language: LanguageNoId) => {
        setLanguages(languages.map((lang) => (lang.id === id ? { ...lang, ...language } : lang)));
    };

    const removeLanguage = (id: string) => {
        setLanguages(languages.filter((lang) => lang.id !== id));
    };

    const [training, setTraining] = useState<Training[]>(initialResume?.training || []);

    const addTraining = (trainingToAdd: Training) => {
        setTraining([...training, trainingToAdd]);
    };

    const editTraining = (id: string, trainingToEdit: TrainingNoId) => {
        setTraining(training.map((t) => (t.id === id ? { ...t, ...trainingToEdit } : t)));
    };

    const removeTraining = (id: string) => {
        setTraining(training.filter((t) => t.id !== id));
    };

    const [skills, setSkills] = useState<Skill[]>(initialResume?.skills || []);

    const addSkill = (skill: Skill) => {
        setSkills([...skills, skill]);
    };

    const removeSkill = (id: string) => {
        setSkills(skills.filter((skill) => skill.id !== id));
    };

    const [activities, setActivities] = useState<Activity[]>(initialResume?.activities || []);

    const addActivity = (activity: Activity) => {
        setActivities([...activities, activity]);
    };

    const editActivity = (id: string, activity: ActivityNoId) => {
        setActivities(activities.map((act) => (act.id === id ? { ...act, ...activity } : act)));
    };

    const removeActivity = (id: string) => {
        setActivities(activities.filter((act) => act.id !== id));
    };

    const [interests, setInterests] = useState<string>(initialResume?.interests || "");

    const [links, setLinks] = useState<Link[]>(initialResume?.links || []);

    const addLink = (link: Link) => {
        setLinks([...links, link]);
    };

    const editLink = (id: string, link: LinkNoId) => {
        setLinks(links.map((l) => (l.id === id ? { ...l, ...link } : l)));
    };

    const removeLink = (id: string) => {
        setLinks(links.filter((l) => l.id !== id));
    };

    const [step, setStep] = useState(1);

    const getStepName = () => {
        switch (step) {
            case 1:
                return "Basic Info";
            case 2:
                return "Experience";
            case 3:
                return "Skills";
            case 4:
                return "Download Resume";
            default:
                return "Basic Info";
        }
    };

    return (
        <ResumeCreatorContext.Provider
            value={{
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
