import Loading from "@/components/general/loading";
import ResumeCreatorForm from "@/components/resume/resume-creator-flow/form";
import ResumePDF from "@/components/resume/resume-pdf";
import { Resume } from "@/lib/types/resume";
import { newEmptyResume } from "@/lib/utils/resume";
import { usePouchDB } from "@/providers/pouchdb-provider";
import { ResumeCreatorProvider } from "@/providers/resume-creator-provider";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ResumePage() {
    const { id } = useParams();
    const [resume, setResume] = useState<Resume>({} as Resume);
    const { db, getResumeById } = usePouchDB();

    const getResumeFromDb = async () => {
        const resume = await getResumeById(id || "");

        if (!resume) {
            setResume(newEmptyResume());
            return;
        }

        setResume(resume);
    };

    useEffect(() => {
        getResumeFromDb();

        const changes = db
            .changes({
                since: "now",
                live: true
            })
            .on("change", () => {
                getResumeFromDb();
            });

        return () => {
            changes.cancel();
        };
    }, [id]);

    if (!Object.keys(resume).length) return <Loading />;

    return (
        <ResumeCreatorProvider resume={resume} setResume={setResume}>
            <div className="flex flex-1">
                <ResumePDF />

                <ResumeCreatorForm />
            </div>
        </ResumeCreatorProvider>
    );
}
