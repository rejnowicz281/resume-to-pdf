import Loading from "@/components/general/loading";
import ResumeCreatorForm from "@/components/resume/resume-creator-flow/form";
import ResumePDF from "@/components/resume/resume-pdf";
import { Resume } from "@/lib/types/resume";
import { getResumeById } from "@/lib/utils/db";
import { newEmptyResume } from "@/lib/utils/resume";
import { ResumeCreatorProvider } from "@/providers/resume-creator-provider";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

export default function ResumePage() {
    const { state } = useLocation();
    const { id } = useParams();
    const [resume, setResume] = useState<Resume | null>(null);

    const initializeResume = () => setResume(newEmptyResume());

    useEffect(() => {
        if (!id) initializeResume();
        else if (state?.resume) setResume(state.resume);
        else {
            getResumeById(id).then((resume) => {
                if (!resume) {
                    initializeResume();
                    return;
                }

                setResume(resume);
            });
        }
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
