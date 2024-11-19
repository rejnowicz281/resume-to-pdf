import { Resume } from "@/lib/types/resume";
import uniqid from "uniqid";
import { formatDate } from "../date";

const mapString = (str: any) => (typeof str === "string" && str.length > 0 ? str : "");

const mapWorkExperience = (arr: any[]) => {
    if (!Array.isArray(arr)) return [];

    return arr.map((obj) => {
        return {
            _id: mapString(obj._id) || uniqid(),
            title: mapString(obj.title),
            company: mapString(obj.company),
            location: mapString(obj.location),
            startDate: mapString(obj.startDate),
            endDate: mapString(obj.endDate),
            description: mapString(obj.description)
        };
    });
};

const mapEducation = (arr: any[]) => {
    if (!Array.isArray(arr)) return [];

    return arr.map((obj) => {
        return {
            _id: mapString(obj._id) || uniqid(),
            institution: mapString(obj.institution),
            startDate: mapString(obj.startDate),
            endDate: mapString(obj.endDate),
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
            _id: mapString(obj._id) || uniqid(),
            language: mapString(obj.language),
            level: mapString(obj.level)
        };
    });
};

const mapTraining = (arr: any[]) => {
    if (!Array.isArray(arr)) return [];

    return arr.map((obj) => {
        return {
            _id: mapString(obj._id) || uniqid(),
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
            _id: mapString(obj._id) || uniqid(),
            name: mapString(obj.name)
        };
    });
};

const mapActivities = (arr: any[]) => {
    if (!Array.isArray(arr)) return [];

    return arr.map((obj) => {
        return {
            _id: mapString(obj._id) || uniqid(),
            name: mapString(obj.name),
            location: mapString(obj.location),
            startDate: mapString(obj.startDate),
            endDate: mapString(obj.endDate),
            description: mapString(obj.description)
        };
    });
};

const mapLinks = (arr: any[]) => {
    if (!Array.isArray(arr)) return [];

    return arr.map((obj) => {
        return {
            _id: mapString(obj._id) || uniqid(),
            description: mapString(obj.description),
            url: mapString(obj.url)
        };
    });
};

export const mapResume = (object: Record<string, any>): Resume => {
    const resume: Resume = {
        _id: mapString(object._id) || uniqid(),
        name: mapString(object.name),
        description: mapString(object.description),
        createdAt: mapString(object.createdAt) || formatDate(new Date(), "dd.mm.yyyy hh:mm"),
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
