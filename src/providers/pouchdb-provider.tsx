import { getSampleResume } from "@/lib/constants/sample-resume";
import { Resume } from "@/lib/types/resume";
import { COUCHDB_URL } from "@/lib/utils/config";
import { withID } from "@/lib/utils/general";
import { mapResume } from "@/lib/utils/mappers/resume";
import { newEmptyResume } from "@/lib/utils/resume";
import PouchDB from "pouchdb";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { useAuth } from "./auth-provider";

export type PouchDBContextType = {
    db: PouchDB.Database;
    getResumes: () => Promise<Resume[]>;
    getResumeById: (id: string) => Promise<Resume | null>;
};

const PouchDBContext = createContext<PouchDBContextType | undefined>(undefined);

export const PouchDBProvider = ({ children }: { children: ReactNode }) => {
    const { user, token } = useAuth();
    const [db] = useState(new PouchDB("resume-to-pdf"));

    useEffect(() => {
        if (user) {
            const remoteCouch = new PouchDB(`${COUCHDB_URL}/resumes-${user.name}`, {
                // @ts-ignore
                headers: { Authorization: `Bearer ${token}` }
            });

            const sync = db
                .sync(remoteCouch, { live: true, retry: true })
                .on("complete", () => {
                    console.log("Replicating to", remoteCouch);
                })
                .on("error", (err) => {
                    console.log(err);
                });

            return () => {
                console.log("Canceling sync for user", user.name);
                sync.cancel();
            };
        }
    }, [token]);

    useEffect(() => {
        const localResumes = localStorage.getItem("resumes");

        if (localResumes) {
            const resumes = JSON.parse(localResumes);

            const values = typeof resumes === "object" ? Object.values(resumes) : Array.isArray(resumes) ? resumes : [];

            if (values.length > 0)
                values.forEach((resume: any) => {
                    db.put(mapResume(withID(resume)));
                });

            localStorage.removeItem("resumes");
        }

        db.allDocs().then((res) => {
            const length = res.total_rows;

            if (length === 0) {
                const sampleResume = getSampleResume() as Resume;
                db.put(sampleResume);
            }
        });
    }, []);

    const getResumes = async () => {
        const resumes = await db.allDocs({ include_docs: true });

        return resumes.rows.map((row) => row.doc) as Resume[];
    };

    const getResumeById = async (id: string) => {
        try {
            const resume = await db.get(id);

            return resume as Resume;
        } catch (error) {
            const sampleResume = newEmptyResume(id) as Resume;

            const newRes = await db.put(sampleResume);

            const newResume = { ...sampleResume, _rev: newRes.rev };

            return newResume;
        }
    };

    return <PouchDBContext.Provider value={{ db, getResumes, getResumeById }}>{children}</PouchDBContext.Provider>;
};

export const usePouchDB = () => {
    const context = useContext(PouchDBContext);

    if (context === undefined) throw new Error("usePouchDB must be used within an PouchDBProvider");

    return context;
};
