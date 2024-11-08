import PouchDB from "pouchdb";
import { getSampleResume } from "../constants/sample-resume";

export const db = new PouchDB("resume-to-pdf");

export const getResumes = async () => {
    const resumes = await db.allDocs({ include_docs: true });

    if (resumes.total_rows === 0) {
        const sampleResume = getSampleResume();
        const newRes = await db.put(sampleResume);

        return { ...sampleResume, _rev: newRes.rev };
    }

    return resumes.rows.map((row) => row.doc);
};

export const getResumeById = async (_id: string) => {
    try {
        return await db.get(_id);
    } catch (error) {
        return null;
    }
};
