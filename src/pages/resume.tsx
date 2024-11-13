import Loading from "@/components/general/loading";
import ResumeCreatorForm from "@/components/resume/resume-creator-flow/form";
import ResumePDF from "@/components/resume/resume-pdf";
import { Resume } from "@/lib/types/resume";
import { db, getResumeById } from "@/lib/utils/db";
import { newEmptyResume } from "@/lib/utils/resume";
import { ResumeCreatorProvider } from "@/providers/resume-creator-provider";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ResumePage() {
    const { id } = useParams();
    const [resume, setResume] = useState<Resume | null>(null);

    const initializeResume = () => setResume(newEmptyResume());

    const getResumeFromDb = async () => {
        if (!id) return;

        const resume = await getResumeById(id);

        if (!resume) {
            initializeResume();
            return;
        }

        setResume(resume);
    };

    useEffect(() => {
        if (!id) initializeResume();
        else {
            getResumeById(id).then((resume) => {
                if (!resume) initializeResume();
                else setResume(resume);
            });
        }

        db.changes({
            since: "now",
            live: true
        }).on("change", () => {
            getResumeFromDb();
            console.log("change");
        });
    }, [id]);

    if (!resume) return <Loading />;

    return (
        <ResumeCreatorProvider initialResume={resume}>
            <div className="flex flex-1">
                <ResumePDF />

                <ResumeCreatorForm />
            </div>
        </ResumeCreatorProvider>
    );
}
