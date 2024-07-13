import React, { createContext, ReactNode, useContext, useState } from "react";

export type WorkExperience = {
    title: string;
    company?: string;
    location?: string;
    startDate: string;
    endDate?: string;
    description?: string;
};

export type Education = {
    institution: string;
    startDate: string;
    endDate?: string;
    specialization?: string;
    level: string;
    description?: string;
};

export type Language = {
    language: string;
    level: string;
};

export type TrainingAndCertification = {
    name: string;
    issueDate: string;
    organization: string;
    description?: string;
};

export type AdditionalActivity = {
    name: string;
    location?: string;
    startDate: string;
    endDate?: string;
    description?: string;
};

export type Link = {
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
    education: Education[];
    setEducation: React.Dispatch<React.SetStateAction<Education[]>>;
    languages: Language[];
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
    const [dateOfBirth, setDateOfBirth] = useState("1990.01.01");
    const [country, setCountry] = useState("USA");
    const [city, setCity] = useState("New York");
    const [email, setEmail] = useState("john.doe@example.com");
    const [phone, setPhone] = useState("123-456-7890");

    const [workExperience, setWorkExperience] = useState<WorkExperience[]>([
        {
            title: "Software Engineer",
            company: "Tech Company",
            location: "New York, USA",
            startDate: "01.2018",
            endDate: "04.2018",
            description: "Worked on various projects using React and Node.js."
        },
        {
            title: "Frontend Developer",
            company: "Startup",
            location: "San Francisco, USA",
            startDate: "01.2021",
            endDate: "09.2021",
            description: "Developed web applications using React."
        }
    ]);

    const [education, setEducation] = useState<Education[]>([
        {
            institution: "University",
            startDate: "2010.01.01",
            endDate: "2014.01.01",
            specialization: "Computer Science",
            level: "Bachelor",
            description: "Studied various subjects including algorithms, data structures, and web development."
        },
        {
            institution: "High School",
            startDate: "2006.01.01",
            endDate: "2010.01.01",
            level: "High School",
            description: "Graduated with honors."
        }
    ]);

    const [languages, setLanguages] = useState<Language[]>([
        { language: "English", level: "Native" },
        { language: "Spanish", level: "Intermediate" }
    ]);

    const [trainingAndCertification, setTrainingAndCertification] = useState<TrainingAndCertification[]>([
        {
            name: "React Certification",
            issueDate: "2021.01.01",
            organization: "Online Course",
            description: "Completed an online course on React."
        },
        {
            name: "Node.js Certification",
            issueDate: "2020.01.01",
            organization: "Online Course",
            description: "Completed an online course on Node.js."
        }
    ]);

    const [skills, setSkills] = useState<string[]>(["JavaScript", "React", "Node.js"]);

    const [additionalActivities, setAdditionalActivities] = useState<AdditionalActivity[]>([
        {
            name: "Volunteer",
            location: "Local Community Center",
            startDate: "2019.01.01",
            endDate: "Present",
            description: "Organized community events and activities."
        },
        {
            name: "Hobbies",
            startDate: "2010.01.01",
            description: "Reading, hiking, and playing guitar."
        }
    ]);

    const [interests, setInterests] = useState<string>("I like reading and stuff.");

    const [links, setLinks] = useState<Link[]>([
        {
            description: "LinkedIn",
            url: "https://www.linkedin.com/in/johndoe"
        },
        {
            description: "GitHub",
            url: "https://github.com/rejnowicz281"
        }
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
                education,
                setEducation,
                languages,
                setLanguages,
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
