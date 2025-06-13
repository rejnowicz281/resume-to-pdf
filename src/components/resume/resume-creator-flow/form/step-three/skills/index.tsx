import { Badge, BadgeProps } from "@/components/ui/badge";
import { Skill } from "@/lib/types/resume";
import { cn } from "@/lib/utils/general";
import { useResumeCreator } from "@/providers/resume-creator-provider";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useTranslation } from "react-i18next";
import SkillForm from "./skill-form";

interface SkillDragItem {
    _id: string;
}

export default function Skills() {
    const {
        resume: { skills }
    } = useResumeCreator();

    const { t } = useTranslation();

    return (
        <div className="flex flex-col">
            <h2 className="text-3xl font-bold">
                {t("resumeCreator.stepThree.skills.title")} ({skills.length})
            </h2>
            <div className="flex gap-3 my-6 flex-wrap">
                <DndProvider backend={HTML5Backend}>
                    {skills.map((skill, idx) => (
                        <DroppableBadgeWrapper skill={skill} key={skill._id + idx} />
                    ))}
                </DndProvider>
            </div>
            <SkillForm />
        </div>
    );
}

const DroppableBadgeWrapper = ({ skill }: { skill: Skill }) => {
    const { removeSkill, moveSkill } = useResumeCreator();

    const [dragSkillId, setDragSkillId] = useState<string | null>(null);

    useEffect(() => {
        if (dragSkillId) {
            moveSkill(dragSkillId, skill._id);

            setDragSkillId(null);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dragSkillId]);

    const onDrop = (dragSkill: SkillDragItem) => {
        if (dragSkill._id === skill._id) return;

        setDragSkillId(dragSkill._id);
    };

    const [{ isOver, canDrop }, drop] = useDrop(() => ({
        accept: "badge",
        drop: onDrop,
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop()
        })
    }));

    return (
        <div ref={drop} className="rounded-full">
            <DraggableBadge className={isOver && canDrop ? "opacity-50" : undefined} skillId={skill._id}>
                <span className="truncate">{skill.name}</span>
                <button onClick={() => removeSkill(skill._id)}>
                    <X size={18} />
                </button>
            </DraggableBadge>
        </div>
    );
};

const DraggableBadge = ({
    skillId,
    className,
    ...props
}: BadgeProps & {
    skillId: string;
}) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "badge",
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        }),
        item: { _id: skillId } as SkillDragItem
    }));

    return (
        <Badge
            {...props}
            ref={drag}
            className={cn(
                className,
                "flex gap-2 truncate transition-opacity transform translate-x-0 translate-y-0 cursor-pointer",
                isDragging && "opacity-50"
            )}
        />
    );
};
