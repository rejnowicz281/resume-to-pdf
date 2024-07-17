import ResumeCard from "@/components/resume/resume-card";
import { Button } from "@/components/ui/button";
import { useLocalResumes } from "@/providers/local-resumes-provider";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";
import uniqid from "uniqid";

export default function HomePage() {
    const { resumes } = useLocalResumes();

    return (
        <div className="flex max-w-[800px] md:px-24 py-16 px-6 mx-auto w-full flex-1 flex-col gap-6">
            <h1 className="text-4xl">Resumes</h1>
            <div className="flex flex-col gap-6">
                {Object.values(resumes).map((resume) => (
                    <ResumeCard key={resume.id} resume={resume} />
                ))}
            </div>
            <Button className="self-center flex gap-2" asChild>
                <Link to={`/resumes/${uniqid()}`}>
                    <Plus />
                    Insert Resume
                </Link>
            </Button>
        </div>
    );
}
