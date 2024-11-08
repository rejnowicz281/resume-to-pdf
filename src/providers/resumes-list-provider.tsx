import { Resume } from "@/lib/types/resume";
import { formatDate } from "@/lib/utils/date";
import { db, getResumes } from "@/lib/utils/db";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

export type ResumesListContextType = {
    resumes: Resume[];
    getResume: (id: string) => Resume | undefined;
    addResume: (resume: Resume) => Promise<void>;
    editResume: (resume: Partial<Resume>) => Promise<void>;
    removeResume: (resume: Resume) => Promise<void>;
    addManyResumes: (resumes: Resume[]) => Promise<void>;
};

const ResumesListContext = createContext<ResumesListContextType | undefined>(undefined);

export const ResumesListProvider = ({ children }: { children: ReactNode }) => {
    const [resumes, setResumes] = useState<Resume[] | null>(null);

    useEffect(() => {
        getResumes().then((resumes) => {
            setResumes(resumes);
        });
    }, []);

    // TODO: This shouldn't be here?
    if (!resumes) return "...";

    const getResume = (id: string) => {
        return resumes.find((resume) => resume._id === id);
    };

    const removeResume = async (resume: Resume) => {
        const deleteId = resume._id;

        setResumes((prev) => {
            const newResumes = prev.filter((resume) => resume._id !== deleteId);

            return newResumes;
        });

        await db.remove(resume);
    };

    const addResume = async (resume: Resume) => {
        setResumes((prev) => {
            const newResumes = prev;

            newResumes.push(resume);

            return [...newResumes];
        });

        await db.put(resume);
    };

    const editResume = async (resume: Partial<Resume>) => {
        const _id = resume._id;

        if (!_id) return;

        const newResumes = [...resumes];

        const index = newResumes.findIndex((resume) => resume._id === _id);
        const newResume = { ...newResumes[index], ...resume };

        newResumes[index] = newResume;

        setResumes(newResumes);

        await db.put(newResume);
    };

    const addManyResumes = async (resumesArray: Resume[]) => {
        const newResumes = [...resumes];

        resumesArray.forEach((resume) => {
            if (newResumes.find((r) => r._id === resume._id))
                newResumes.push({
                    ...resume,
                    _id: `${resume._id}-copy`,
                    createdAt: formatDate(new Date(), "dd.mm.yyyy hh:mm")
                });
            else newResumes.push(resume);
        });

        await db.bulkDocs(resumesArray);

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
