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

export type Resume = {
    id: string;
    name?: string;
    createdAt: string;
    updatedAt: string;
    description?: string;

    imageOptions: ImageOptions;
    firstName?: string;
    lastName?: string;
    dateOfBirth?: string;
    country?: string;
    city?: string;
    email?: string;
    phone?: string;
    workExperience?: WorkExperience[];
    education?: Education[];
    languages?: Language[];
    training?: Training[];
    skills?: Skill[];
    activities?: Activity[];
    interests?: string;
    links?: Link[];
};

export type ResumeNoId = Omit<Resume, "id">;
