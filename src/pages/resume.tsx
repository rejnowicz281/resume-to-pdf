import ResumeCreatorForm from "@/components/resume/resume-creator-flow/form";
import ResumePDF from "@/components/resume/resume-pdf";
import { getOrInitializeResume } from "@/lib/utils/db";
import { ResumeCreatorProvider } from "@/providers/resume-creator-provider";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ResumePage() {
    const { id } = useParams();
    const [resume, setResume] = useState(null);

    useEffect(() => {
        getOrInitializeResume(id)
            .then((resume) => {
                setResume(resume);
            })
            .catch((e) => {
                console.error("erra", e);
            });
    }, [id]);

    // TODO: Add loading screen
    if (!resume) return null;

    return (
        <ResumeCreatorProvider initialResume={resume}>
            <div className="flex flex-1">
                <ResumePDF />

                <ResumeCreatorForm />
            </div>
        </ResumeCreatorProvider>
    );
}
