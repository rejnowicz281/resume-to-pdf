import SAMPLE_RESUME from "@/lib/constants/sample-resume";
import { Resume, ResumeNoId } from "@/lib/types/resume";
import { createContext, ReactNode, useContext, useState } from "react";
import uniqid from "uniqid";

export type SavedResumesContextType = {
    resumes: Resume[];
    getResume: (id: string) => Resume | undefined;
    addResume: (resume: Resume) => void;
    editResume: (id: string, resume: ResumeNoId) => void;
    removeResume: (id: string) => void;
    createEmptyResume: () => Resume;
    getOrCreateResume: (id: string) => Resume;
    setName: (id: string, name: string) => void;
    setDescription: (id: string, description: string) => void;
};

const SavedResumesContext = createContext<SavedResumesContextType | undefined>(undefined);

export const SavedResumesProvider = ({ children }: { children: ReactNode }) => {
    const [resumes, setResumes] = useState<Resume[]>([SAMPLE_RESUME]);

    const getResume = (id: string) => {
        return resumes.find((r) => r.id === id);
    };

    const addResume = (resume: Resume) => {
        setResumes((prev) => [...prev, resume]);
    };

    const editResume = (id: string, resume: ResumeNoId) => {
        setResumes((prev) => prev.map((r) => (r.id === id ? { ...r, ...resume } : r)));
    };

    const setName = (id: string, name: string) => {
        setResumes((prev) => prev.map((r) => (r.id === id ? { ...r, name } : r)));
    };

    const setDescription = (id: string, description: string) => {
        setResumes((prev) => prev.map((r) => (r.id === id ? { ...r, description } : r)));
    };

    const removeResume = (id: string) => {
        setResumes((prev) => prev.filter((r) => r.id !== id));
    };

    const getOrCreateResume = (id: string): Resume => {
        let resume = getResume(id);

        if (!resume) {
            resume = createEmptyResume();
            addResume(resume);
        }

        return resume;
    };

    const createEmptyResume = (): Resume => {
        return {
            id: uniqid(),
            imageOptions: { show: false, url: "" },
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
    };

    return (
        <SavedResumesContext.Provider
            value={{
                resumes,
                getResume,
                addResume,
                editResume,
                removeResume,
                createEmptyResume,
                getOrCreateResume,
                setName,
                setDescription
            }}
        >
            {children}
        </SavedResumesContext.Provider>
    );
};

export const useSavedResumes = () => {
    const context = useContext(SavedResumesContext);

    if (context === undefined) throw new Error("useSavedResumes must be used within a SavedResumesContext");

    return context;
};
