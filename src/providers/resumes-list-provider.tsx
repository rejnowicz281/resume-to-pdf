import { Resume } from "@/lib/types/resume";
import { formatTimestamp } from "@/lib/utils/date";
import { db, getResumes } from "@/lib/utils/db";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

export type ResumesListContextType = {
    resumes: Resume[];
    getResume: (id: string) => Resume | undefined;
    addResume: (resume: Resume) => void;
    editResume: (resume: Partial<Resume>) => void;
    removeResume: (id: string) => void;
    addManyResumes: (resumes: Resume[]) => void;
};

const ResumesListContext = createContext<ResumesListContextType | undefined>(undefined);

export const ResumesListProvider = ({ children }: { children: ReactNode }) => {
    const [resumes, setResumes] = useState(null);

    useEffect(() => {
        getResumes().then((resumes) => {
            setResumes(resumes);
        });
    }, []);

    const getResume = (id: string) => {
        return resumes.find((resume) => resume._id === id);
    };

    const removeResume = (resume: Resume) => {
        db.remove(resume);

        const deleteId = resume._id;

        setResumes((prev) => {
            const newResumes = prev.filter((resume) => resume._id !== deleteId);

            return newResumes;
        });
    };

    const addResume = (resume: Resume) => {
        db.put(resume);

        setResumes((prev) => {
            const newResumes = prev;

            newResumes.push(resume);

            return [...newResumes];
        });
    };

    const editResume = (resume: Partial<Resume>) => {
        const _id = resume._id;

        if (!_id) return;

        const newResumes = [...resumes];

        const index = newResumes.findIndex((resume) => resume._id === _id);
        const newResume = { ...newResumes[index], ...resume };

        db.put(newResume);

        newResumes[index] = newResume;

        setResumes(newResumes);
    };

    const addManyResumes = (resumesArray: Resume[]) => {
        const newResumes = [...resumes];

        resumesArray.forEach((resume) => {
            if (newResumes.find((r) => r._id === resume._id))
                newResumes.push({ ...resume, _id: `${resume._id}-copy`, createdAt: formatTimestamp(new Date()) });
            else newResumes.push(resume);
        });

        db.bulkDocs(resumesArray);

        setResumes(newResumes);
    };

    return (
        <ResumesListContext.Provider
            value={{
                resumes,
                getResume,
                addResume,
                editResume,
                removeResume,
                addManyResumes
            }}
        >
            {children}
        </ResumesListContext.Provider>
    );
};

export const useResumesList = () => {
    const context = useContext(ResumesListContext);

    if (context === undefined) throw new Error("useResumesList must be used within a ResumesListContext");

    return context;
};
