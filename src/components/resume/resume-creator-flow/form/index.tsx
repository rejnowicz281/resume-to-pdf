import { Button } from "@/components/ui/button";
import { getResumeProgress } from "@/lib/utils/resume";
import { useResumeCreator } from "@/providers/resume-creator-provider";
import { ArrowLeft, ArrowRight } from "lucide-react";
import StepFour from "./step-four";
import StepOne from "./step-one";
import StepThree from "./step-three";
import StepTwo from "./step-two";

export default function ResumeCreatorForm() {
    const { step, setStep, getStepName, resumeToSave } = useResumeCreator();

    const renderStep = () => {
        switch (step) {
            case 1:
                return <StepOne />;
            case 2:
                return <StepTwo />;
            case 3:
                return <StepThree />;
            case 4:
                return <StepFour />;
            default:
                return <StepOne />;
        }
    };

    return (
        <div className="flex-1 relative flex flex-col">
            <div className="flex-1 relative">
                <div className="absolute inset-0 overflow-y-scroll p-8 flex flex-col">
                    <h1 className="mb-6 pb-6 text-4xl font-semibold border-b-zinc-200 dark:border-b-zinc-800 border-b">
                        Step {step} - {getStepName()}
                    </h1>
                    {renderStep()}
                </div>
            </div>
            <div className="flex items-center justify-between px-8 py-6 border-t border-t-zinc-200 dark:border-t-zinc-800">
                <div className="text-sm text-gray-500">{getResumeProgress(resumeToSave)}% Complete</div>
                <div className={"flex justify-end gap-8"}>
                    {step !== 1 && (
                        <Button variant="outline" className="flex gap-2 self-start" onClick={() => setStep(step - 1)}>
                            <ArrowLeft />
                            Previous Step
                        </Button>
                    )}
                    {step !== 4 && (
                        <Button className="flex gap-2" onClick={() => setStep(step + 1)}>
                            Next Step <ArrowRight />
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
}
