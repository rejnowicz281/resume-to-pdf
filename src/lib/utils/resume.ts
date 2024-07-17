import uniqid from "uniqid";
import { Resume } from "../types/resume";
import { formatTimestamp } from "./date";

export const getResumeName = (
    resume:
        | Resume
        | {
              name?: string;
              firstName?: string;
              lastName?: string;
              email?: string;
              phone?: string;
              id?: string;
          }
) => {
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
