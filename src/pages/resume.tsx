import ResumeCreatorFlow from "@/components/resume/resume-creator-flow";
import { useSavedResumes } from "@/providers/saved-resumes-provider";
import { useParams } from "react-router-dom";

export default function ResumePage() {
    const { getOrInitializeResume } = useSavedResumes();

    const { id } = useParams();

    const resume = getOrInitializeResume(`${id}`);

    return <ResumeCreatorFlow initialResume={resume} />;
}
