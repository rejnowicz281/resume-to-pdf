import uniqid from "uniqid";
import { Resume } from "../types/resume";

export const getResumeName = (resume: Resume) => {
    if (resume.name) return resume.name;

    if (resume.firstName && resume.lastName) return `${resume.firstName} ${resume.lastName}`;

    if (resume.email) return resume.email;

    if (resume.phone) return resume.phone;

    return resume.id;
};

export const newEmptyResume = (id: string = uniqid()): Resume => {
    return {
        id,
        imageOptions: { show: false, url: "" },
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };
};
