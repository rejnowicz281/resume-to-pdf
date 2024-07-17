import ResumeCreatorFlow from "@/components/resume/resume-creator-flow";
import { getOrInitializeResume } from "@/lib/utils/local-storage";
import { useParams } from "react-router-dom";

export default function ResumePage() {
    const { id } = useParams();

    const resume = getOrInitializeResume(`${id}`);

    return <ResumeCreatorFlow initialResume={resume} />;
}
