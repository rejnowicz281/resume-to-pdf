import uniqid from "uniqid";
import { Resume } from "../types/resume";
import { formatTimestamp } from "./date";

export const getResumeName = (resume: Resume) => {
    if (resume.name) return resume.name;

    if (resume.firstName && resume.lastName) return `${resume.firstName} ${resume.lastName}`;

    if (resume.email) return resume.email;

    if (resume.phone) return resume.phone;

    if (resume.id) return resume.id;

    return "Resume";
};

export const newEmptyResume = (id: string = uniqid()): Resume => {
    return {
        id,
        imageOptions: { show: false, url: "" },
        createdAt: formatTimestamp(new Date())
    };
};

export const getResumeProgress = (resume: Resume) => {
    const { id, name, createdAt, description, imageOptions, ...progressFields } = resume;

    const totalFields = Object.keys(progressFields).length;
    const filledFields = Object.values(progressFields).filter((value) => {
        if (Array.isArray(value)) {
            return value.length > 0;
        }
        return value !== undefined && value !== null && value !== "";
    }).length;

    return Math.floor((filledFields / totalFields) * 100);
};
