import { Resume } from "@/lib/types/resume";
import { formatTimestamp } from "@/lib/utils/date";
import { getResumes as getLocalResumes } from "@/lib/utils/local-storage";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import uniqid from "uniqid";

export type LocalResumesContextType = {
    resumes: Resume[];
    getResume: (id: string) => Resume | undefined;
    addResume: (resume: Resume) => void;
    editResume: (resume: Partial<Resume>) => void;
    removeResume: (id: string) => void;
    addManyResumes: (resumes: Resume[]) => void;
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

    const addManyResumes = (resumesArray: Resume[]) => {
        setResumes((prev) => {
            const newResumes = { ...prev };

            resumesArray.forEach((resume) => {
                if (newResumes[resume.id]) {
                    const id = uniqid();
                    const createdAt = formatTimestamp(new Date());
                    newResumes[id] = { ...resume, id, createdAt };
                } else newResumes[resume.id] = resume;
            });

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
                removeResume,
                addManyResumes
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
