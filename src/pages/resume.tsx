import ResumeCreatorFlow from "@/components/resume/resume-creator-flow";
import { useSavedResumes } from "@/providers/saved-resumes-provider";
import { useParams } from "react-router-dom";

export default function ResumePage() {
    const { getResume } = useSavedResumes();

    const { id } = useParams();

    const resume = getResume(id as string);

    if (!resume) return <div>Resume not found</div>;

    return <ResumeCreatorFlow initialResume={resume} />;
}
