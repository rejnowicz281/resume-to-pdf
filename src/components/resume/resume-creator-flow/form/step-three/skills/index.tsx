import { Badge } from "@/components/ui/badge";
import { useResumeCreator } from "@/providers/resume-creator-provider";
import { X } from "lucide-react";
import { useTranslation } from "react-i18next";
import SkillForm from "./skill-form";

export default function Skills() {
    const {
        resume: { skills },
        removeSkill
    } = useResumeCreator();
    const { t } = useTranslation();

    return (
        <div className="flex flex-col">
            <h2 className="text-3xl font-bold">{t("resumeCreator.stepThree.skills.title")}</h2>

            <div className="flex gap-3 my-6 flex-wrap">
                {skills.map((skill) => (
                    <Badge className="flex gap-2 truncate" key={skill._id}>
                        <span className="truncate">{skill.name}</span>
                        <button onClick={() => removeSkill(skill._id)}>
                            <X size={18} />
                        </button>
                    </Badge>
                ))}
            </div>

            <SkillForm />
        </div>
    );
}
