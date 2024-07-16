import SAMPLE_RESUME from "@/lib/constants/sample-resume";
import { Resume, ResumeNoId } from "@/lib/types/resume";
import { newEmptyResume } from "@/lib/utils/resume";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

export type SavedResumesContextType = {
    resumes: Resume[];
    getResume: (id: string) => Resume | undefined;
    addResume: (resume: Resume) => void;
    editResume: (id: string, resume: ResumeNoId) => void;
    removeResume: (id: string) => void;
    getOrInitializeResume: (id: string) => Resume;
    setName: (id: string, name: string) => void;
    setDescription: (id: string, description: string) => void;
};

const SavedResumesContext = createContext<SavedResumesContextType | undefined>(undefined);

export const SavedResumesProvider = ({ children }: { children: ReactNode }) => {
    const [resumes, setResumes] = useState<Resume[]>(() => {
        const localResumes = localStorage.getItem("resumes");

        if (!localResumes) localStorage.setItem("resumes", JSON.stringify([SAMPLE_RESUME]));

        const parsed = JSON.parse(localResumes || "[]");

        if (!parsed.length) parsed.push(SAMPLE_RESUME);

        return parsed;
    });

    useEffect(() => {
        localStorage.setItem("resumes", JSON.stringify(resumes));
    }, [resumes]);

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

    const getOrInitializeResume = (id: string): Resume => {
        let resume = getResume(id);

        if (!resume) resume = newEmptyResume(id);

        return resume;
    };

    return (
        <SavedResumesContext.Provider
            value={{
                resumes,
                getResume,
                addResume,
                editResume,
                removeResume,

                getOrInitializeResume,
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
