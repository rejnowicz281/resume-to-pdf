export type ImageOptions = {
    show: boolean;
    url: string;
};

export type WorkExperience = {
    _id: string;
    title: string;
    company?: string;
    location?: string;
    startDate: string;
    endDate?: string;
    description?: string;
};

export type WorkExperienceNoId = Omit<WorkExperience, "_id">;

export type Education = {
    _id: string;
    institution: string;
    startDate: string;
    endDate?: string;
    specialization?: string;
    level: string;
    description?: string;
};

export type EducationNoId = Omit<Education, "_id">;

export type Language = {
    _id: string;
    language: string;
    level: string;
};

export type LanguageNoId = Omit<Language, "_id">;

export type Training = {
    _id: string;
    name: string;
    issueDate: string;
    organization: string;
    description?: string;
};

export type TrainingNoId = Omit<Training, "_id">;

export type Activity = {
    _id: string;
    name: string;
    location?: string;
    startDate: string;
    endDate?: string;
    description?: string;
};

export type ActivityNoId = Omit<Activity, "_id">;

export type Skill = {
    _id: string;
    name: string;
};

export type SkillNoId = Omit<Skill, "_id">;

export type Link = {
    _id: string;
    description?: string;
    url: string;
};

export type LinkNoId = Omit<Link, "_id">;

export type Resume = {
    _id: string;
    _rev: string;
    name: string;
    createdAt: string;
    description: string;
    imageOptions: ImageOptions;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    country: string;
    city: string;
    email: string;
    phone: string;
    workExperience: WorkExperience[];
    education: Education[];
    languages: Language[];
    training: Training[];
    skills: Skill[];
    activities: Activity[];
    interests: string;
    links: Link[];
};

export type ResumeNoId = Omit<Resume, "_id">;

export type ResumeNoRev = Omit<Resume, "_rev">;
