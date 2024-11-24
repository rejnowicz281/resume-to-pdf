import { Resume } from "@/lib/types/resume";
import { formatDate } from "@/lib/utils/date";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { usePouchDB } from "./pouchdb-provider";

export type ResumesListContextType = {
    resumes: Resume[] | null;
    getResume: (id: string) => Resume | undefined;
    addResume: (resume: Resume) => Promise<void>;
    editResume: (resume: Partial<Resume>) => Promise<void>;
    removeResume: (resume: Resume) => Promise<void>;
    addManyResumes: (resumes: Resume[]) => Promise<void>;
};

const ResumesListContext = createContext<ResumesListContextType | undefined>(undefined);

export const ResumesListProvider = ({ children }: { children: ReactNode }) => {
    const [resumes, setResumes] = useState<Resume[] | null>(null);
    const { db, getResumes } = usePouchDB();

    const updateResumes = async () => {
        const newResumes = await getResumes();

        setResumes(newResumes);
    };

    useEffect(() => {
        updateResumes();

        const changes = db
            .changes({
                since: "now",
                live: true
            })
            .on("change", () => {
                updateResumes();
            });

        return () => {
            changes.cancel();
        };
    }, []);

    const getResume = (id: string) => {
        return resumes?.find((resume) => resume._id === id);
    };

    const removeResume = async (resume: Resume) => {
        if (!resumes) return;

        const deleteId = resume._id;

        setResumes((prev) => {
            const newResumes = prev?.filter((resume) => resume._id !== deleteId);

            return newResumes || [];
        });

        await db.remove(resume as PouchDB.Core.RemoveDocument);
    };

    const addResume = async (resume: Resume) => {
        if (!resumes) return;

        setResumes((prev) => {
            const newResumes = prev;

            newResumes?.push(resume);

            return [...(newResumes || [])];
        });

        await db.put(resume);
    };

    const editResume = async (resume: Partial<Resume>) => {
        if (!resumes) return;

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
        if (!resumes) return;

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

        setResumes(newResumes);

        await db.bulkDocs(resumesArray);
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
