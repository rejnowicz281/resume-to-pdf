import { Resume } from "@/lib/types/resume";
import { getResumes as getLocalResumes } from "@/lib/utils/local-storage";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

export type LocalResumesContextType = {
    resumes: Resume[];
    getResume: (id: string) => Resume | undefined;
    addResume: (resume: Resume) => void;
    editResume: (resume: Partial<Resume>) => void;
    removeResume: (id: string) => void;
};

const LocalResumesContext = createContext<LocalResumesContextType | undefined>(undefined);

export const LocalResumesProvider = ({ children }: { children: ReactNode }) => {
    const [resumes, setResumes] = useState<Record<string, Resume>>(getLocalResumes);

    useEffect(() => {
        localStorage.setItem("resumes", JSON.stringify(resumes));
    }, [resumes]);

    const getResumes = (): Resume[] => {
        return Object.values(resumes);
    };

    const getResume = (id: string) => {
        return resumes[id];
    };

    const removeResume = (id: string) => {
        setResumes((prev) => {
            const newResumes = { ...prev };
            delete newResumes[id];
            return newResumes;
        });
    };

    const addResume = (resume: Resume) => {
        setResumes((prev) => ({ ...prev, [resume.id]: resume }));
    };

    const editResume = (resume: Partial<Resume>) => {
        const id = resume.id;
        if (!id) return;

        setResumes((prev) => {
            const newResumes = { ...prev };
            newResumes[id] = { ...newResumes[id], ...resume };
            return newResumes;
        });
    };

    return (
        <LocalResumesContext.Provider
            value={{
                resumes: getResumes(),
                getResume,
                addResume,
                editResume,
                removeResume
            }}
        >
            {children}
        </LocalResumesContext.Provider>
    );
};

export const useLocalResumes = () => {
    const context = useContext(LocalResumesContext);

    if (context === undefined) throw new Error("useLocalResumes must be used within a LocalResumesContext");

    return context;
};
