import PouchDB from "pouchdb";
import { getSampleResume } from "../constants/sample-resume";
import { Resume } from "../types/resume";

export const db = new PouchDB("resume-to-pdf");

const remoteCouch = "http://alan:123@127.0.0.1:5984/resume-to-pdf";

var opts = { live: true };
db.replicate.to(remoteCouch, opts);
db.replicate.from(remoteCouch, opts);

export const getResumes = async () => {
    const resumes = await db.allDocs({ include_docs: true });

    if (resumes.total_rows === 0) {
        const sampleResume = getSampleResume();
        const newRes = await db.put(sampleResume);

        return [{ ...sampleResume, _rev: newRes.rev }];
    }

    return resumes.rows.map((row) => row.doc) as Resume[];
};

export const getResumeById = async (_id: string) => {
    try {
        return (await db.get(_id)) as Resume;
    } catch (error) {
        return null;
    }
};
