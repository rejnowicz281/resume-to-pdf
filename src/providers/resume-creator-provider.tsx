import React, { createContext, ReactNode, useContext, useState } from "react";
import uniqid from "uniqid";

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

export type TrainingAndCertification = {
    id: string;
    name: string;
    issueDate: string;
    organization: string;
    description?: string;
};

export type AdditionalActivity = {
    id: string;
    name: string;
    location?: string;
    startDate: string;
    endDate?: string;
    duration: string;
    description?: string;
};

export type Link = {
    id: string;
    description?: string;
    url: string;
};

export type ResumeCreatorContextType = {
    showImage: boolean;
    setShowImage: React.Dispatch<React.SetStateAction<boolean>>;
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
    trainingAndCertification: TrainingAndCertification[];
    setTrainingAndCertification: React.Dispatch<React.SetStateAction<TrainingAndCertification[]>>;
    skills: string[];
    setSkills: React.Dispatch<React.SetStateAction<string[]>>;
    additionalActivities: AdditionalActivity[];
    setAdditionalActivities: React.Dispatch<React.SetStateAction<AdditionalActivity[]>>;
    interests: string;
    setInterests: React.Dispatch<React.SetStateAction<string>>;
    links: Link[];
    setLinks: React.Dispatch<React.SetStateAction<Link[]>>;
    step: number;
    setStep: React.Dispatch<React.SetStateAction<number>>;
    getStepName: () => string;
};

const ResumeCreatorContext = createContext<ResumeCreatorContextType | undefined>(undefined);

export const ResumeCreatorProvider = ({ children }: { children: ReactNode }) => {
    const [showImage, setShowImage] = useState(true);
    const [firstName, setFirstName] = useState("John");
    const [lastName, setLastName] = useState("Doe");
    const [dateOfBirth, setDateOfBirth] = useState("01.01.1990");
    const [country, setCountry] = useState("USA");
    const [city, setCity] = useState("New York");
    const [email, setEmail] = useState("john.doe@example.com");
    const [phone, setPhone] = useState("123-456-7890");

    const [workExperience, setWorkExperience] = useState<WorkExperience[]>([
        {
            id: uniqid(),
            title: "Software Engineer",
            company: "Tech Company",
            location: "New York, USA",
            startDate: "01.2018",
            endDate: "04.2018",
            duration: "3 months",
            description: "Developed web applications using React and Node.js."
        },
        {
            id: uniqid(),
            title: "Frontend Developer",
            company: "Startup",
            location: "San Francisco, USA",
            startDate: "01.2021",
            endDate: "09.2021",
            duration: "9 months",
            description: "Developed web applications using React."
        }
    ]);

    const addWorkExperience = (experience: WorkExperience) => {
        setWorkExperience([...workExperience, experience]);
    };

    const editWorkExperience = (id: string, experience: WorkExperienceNoId) => {
        setWorkExperience(workExperience.map((exp) => (exp.id === id ? { ...exp, ...experience } : exp)));
    };

    const removeWorkExperience = (id: string) => {
        setWorkExperience(workExperience.filter((experience) => experience.id !== id));
    };

    const [education, setEducation] = useState<Education[]>([
        {
            id: uniqid(),
            institution: "University",
            startDate: "01.2024",
            endDate: "01.2020",
            duration: "4 years",
            specialization: "Computer Science",
            level: "Bachelor",
            description: "Studied various subjects including algorithms, data structures, and web development."
        },
        {
            id: uniqid(),
            institution: "High School",
            startDate: "01.2025",
            endDate: "01.2028",
            duration: "4 years",
            level: "High School",
            description: "Graduated with honors."
        }
    ]);

    const addEducation = (educationToAdd: Education) => {
        setEducation([...education, educationToAdd]);
    };

    const editEducation = (id: string, educationToEdit: EducationNoId) => {
        setEducation(education.map((edu) => (edu.id === id ? { ...edu, ...educationToEdit } : edu)));
    };

    const removeEducation = (id: string) => {
        setEducation(education.filter((edu) => edu.id !== id));
    };

    const [languages, setLanguages] = useState<Language[]>([
        { id: uniqid(), language: "English", level: "Native" },
        { id: uniqid(), language: "Spanish", level: "Intermediate" }
    ]);

    const addLanguage = (language: Language) => {
        setLanguages([...languages, language]);
    };

    const editLanguage = (id: string, language: LanguageNoId) => {
        setLanguages(languages.map((lang) => (lang.id === id ? { ...lang, ...language } : lang)));
    };

    const removeLanguage = (id: string) => {
        setLanguages(languages.filter((lang) => lang.id !== id));
    };

    const [trainingAndCertification, setTrainingAndCertification] = useState<TrainingAndCertification[]>([
        {
            id: uniqid(),
            name: "React Certification",
            issueDate: "01.2026",
            organization: "Online Course",
            description: "Completed an online course on React."
        },
        {
            id: uniqid(),
            name: "Node.js Certification",
            issueDate: "01.2028",
            organization: "Online Course",
            description: "Completed an online course on Node.js."
        }
    ]);

    const [skills, setSkills] = useState<string[]>(["JavaScript", "React", "Node.js"]);

    const [additionalActivities, setAdditionalActivities] = useState<AdditionalActivity[]>([
        {
            id: uniqid(),
            name: "Volunteer",
            location: "Local Community Center",
            startDate: "05.2000",
            endDate: "Present",
            duration: "3 years",
            description: "Organized community events and activities."
        },
        {
            id: uniqid(),
            name: "Hobbies",
            startDate: "01.2010",
            duration: "10 years",
            description: "Reading, hiking, and playing guitar."
        }
    ]);

    const [interests, setInterests] = useState<string>("I like reading and stuff.");

    const [links, setLinks] = useState<Link[]>([
        { id: uniqid(), description: "LinkedIn", url: "https://www.linkedin.com/in/johndoe" },
        { id: uniqid(), description: "GitHub", url: "https://github.com/rejnowicz281" }
    ]);

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
                showImage,
                setShowImage,
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
                trainingAndCertification,
                setTrainingAndCertification,
                skills,
                setSkills,
                additionalActivities,
                setAdditionalActivities,
                interests,
                setInterests,
                links,
                setLinks,
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
