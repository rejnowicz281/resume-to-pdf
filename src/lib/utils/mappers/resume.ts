import { Resume } from "@/lib/types/resume";
import uniqid from "uniqid";
import { formatTimestamp } from "../date";

const mapString = (str: any) => (typeof str === "string" && str.length > 0 ? str : "");

const mapWorkExperience = (arr: any[]) => {
    if (!Array.isArray(arr)) return [];

    return arr.map((obj) => {
        return {
            id: mapString(obj.id) || uniqid(),
            title: mapString(obj.title),
            company: mapString(obj.company),
            location: mapString(obj.location),
            startDate: mapString(obj.startDate),
            endDate: mapString(obj.endDate),
            duration: mapString(obj.duration),
            description: mapString(obj.description)
        };
    });
};

const mapEducation = (arr: any[]) => {
    if (!Array.isArray(arr)) return [];

    return arr.map((obj) => {
        return {
            id: mapString(obj.id) || uniqid(),
            institution: mapString(obj.institution),
            startDate: mapString(obj.startDate),
            endDate: mapString(obj.endDate),
            duration: mapString(obj.duration),
            specialization: mapString(obj.specialization),
            level: mapString(obj.level),
            description: mapString(obj.description)
        };
    });
};

const mapLanguages = (arr: any[]) => {
    if (!Array.isArray(arr)) return [];

    return arr.map((obj) => {
        return {
            id: mapString(obj.id) || uniqid(),
            language: mapString(obj.language),
            level: mapString(obj.level)
        };
    });
};

const mapTraining = (arr: any[]) => {
    if (!Array.isArray(arr)) return [];

    return arr.map((obj) => {
        return {
            id: mapString(obj.id) || uniqid(),
            name: mapString(obj.name),
            issueDate: mapString(obj.issueDate),
            organization: mapString(obj.organization),
            description: mapString(obj.description)
        };
    });
};

const mapSkills = (arr: any[]) => {
    if (!Array.isArray(arr)) return [];

    return arr.map((obj) => {
        return {
            id: mapString(obj.id) || uniqid(),
            name: mapString(obj.name)
        };
    });
};

const mapActivities = (arr: any[]) => {
    if (!Array.isArray(arr)) return [];

    return arr.map((obj) => {
        return {
            id: mapString(obj.id) || uniqid(),
            name: mapString(obj.name),
            location: mapString(obj.location),
            startDate: mapString(obj.startDate),
            endDate: mapString(obj.endDate),
            duration: mapString(obj.duration),
            description: mapString(obj.description)
        };
    });
};

const mapLinks = (arr: any[]) => {
    if (!Array.isArray(arr)) return [];

    return arr.map((obj) => {
        return {
            id: mapString(obj.id) || uniqid(),
            description: mapString(obj.description),
            url: mapString(obj.url)
        };
    });
};

export const mapResume = (object: Record<string, any>): Resume => {
    const resume: Resume = {
        id: mapString(object.id) || uniqid(),
        createdAt: mapString(object.createdAt) || formatTimestamp(new Date()),
        firstName: mapString(object.firstName),
        imageOptions: {
            show: object.imageOptions?.show || false,
            url: mapString(object.imageOptions?.url)
        },
        lastName: mapString(object.lastName),
        dateOfBirth: mapString(object.dateOfBirth),
        country: mapString(object.country),
        city: mapString(object.city),
        email: mapString(object.email),
        phone: mapString(object.phone),
        workExperience: mapWorkExperience(object.workExperience),
        education: mapEducation(object.education),
        languages: mapLanguages(object.languages),
        training: mapTraining(object.training),
        skills: mapSkills(object.skills),
        activities: mapActivities(object.activities),
        interests: mapString(object.interests),
        links: mapLinks(object.links)
    };

    return resume;
};
