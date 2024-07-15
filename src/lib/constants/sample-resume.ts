import React from "react";
import uniqid from "uniqid";

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

const SAMPLE_RESUME: Resume = {
    imageOptions: {
        show: false,
        url: ""
    },
    firstName: "John",
    lastName: "Doe",
    dateOfBirth: "01.01.1990",
    country: "USA",
    city: "New York",
    email: "john@doe.com",
    phone: "+1234567890",
    workExperience: [
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
    ],
    education: [
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
    ],
    languages: [
        { id: uniqid(), language: "English", level: "Native" },
        { id: uniqid(), language: "Spanish", level: "Intermediate" }
    ],
    training: [
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
    ],
    skills: [
        { id: uniqid(), name: "JavaScript" },
        { id: uniqid(), name: "React" },
        { id: uniqid(), name: "Node.js" }
    ],
    activities: [
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
            name: "Hackathon",
            startDate: "01.2020",
            endDate: "01.2021",
            duration: "1 year",
            description: "Participated in a hackathon and developed a web application."
        }
    ],
    interests: "Reading, hiking, and playing guitar.",
    links: [
        { id: uniqid(), description: "LinkedIn", url: "https://www.linkedin.com/in/johndoe" },
        { id: uniqid(), description: "GitHub", url: "https://github.com/rejnowicz281" }
    ]
};

export default SAMPLE_RESUME;
