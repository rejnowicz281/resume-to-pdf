import { Badge } from "@/components/ui/badge";
import { useResumeCreator } from "@/providers/resume-creator-provider";
import { X } from "lucide-react";
import SkillForm from "./skill-form";

export default function Skills() {
    const { skills, removeSkill } = useResumeCreator();

    return (
        <div className="flex flex-col">
            <h2 className="text-3xl font-bold">Skills</h2>

            <div className="flex gap-3 my-6 flex-wrap">
                {skills.map((skill) => (
                    <Badge className="flex gap-2 truncate" key={skill.id}>
                        <span className="truncate">{skill.name}</span>
                        <button onClick={() => removeSkill(skill.id)}>
                            <X size={18} />
                        </button>
                    </Badge>
                ))}
            </div>

            <SkillForm />
        </div>
    );
}
