import SAMPLE_RESUME from "@/lib/constants/sample-resume";
import uniqid from "uniqid";
import { Resume, ResumeNoId } from "../types/resume";
import { newEmptyResume } from "./resume";

const STORAGE_KEY = "resumes";

export const getResumes = (): Record<string, Resume> => {
    const localResumes = localStorage.getItem(STORAGE_KEY);

    if (!localResumes) {
        const initialData = { [SAMPLE_RESUME.id]: SAMPLE_RESUME };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(initialData));

        return initialData;
    }

    return JSON.parse(localResumes);
};

export const createResume = (resume: ResumeNoId) => {
    const resumes = getResumes();
    const id = uniqid();
    resumes[id] = { ...resume, id };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(resumes));
    return resumes;
};

export const getResumeById = (id: string) => {
    const resumes = getResumes();
    return resumes[id] || null;
};

export const updateResume = (resume: Partial<Resume>) => {
    const resumes = getResumes();
    const id = resume.id;
    if (id && resumes[id]) {
        resumes[id] = { ...resumes[id], ...resume };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(resumes));
        return resumes[id];
    }
    return null;
};

export const deleteResume = (id: string) => {
    const resumes = getResumes();
    if (resumes[id]) {
        delete resumes[id];
        localStorage.setItem(STORAGE_KEY, JSON.stringify(resumes));
    }
    return resumes;
};

export const saveResume = (resume: Resume) => {
    const resumes = getResumes();
    resumes[resume.id] = resume;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(resumes));

    return resumes;
};

export const getOrInitializeResume = (id: string) => {
    let resume = getResumeById(id);

    if (!resume) resume = newEmptyResume(id);

    return resume;
};
