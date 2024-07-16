import { Resume } from "../types/resume";

export const getResumeName = (resume: Resume) => {
    if (resume.name) return resume.name;

    if (resume.firstName && resume.lastName) return `${resume.firstName} ${resume.lastName}`;

    if (resume.email) return resume.email;

    if (resume.phone) return resume.phone;

    return resume.id;
};
