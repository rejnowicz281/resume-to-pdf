import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useResumeCreator } from "@/providers/resume-creator-provider";
import { ArrowLeft, ArrowRight } from "lucide-react";
import StepFour from "./step-four";
import StepOne from "./step-one";
import StepThree from "./step-three";
import StepTwo from "./step-two";

export default function ResumeCreatorForm() {
    const { step, setStep, getStepName } = useResumeCreator();

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
                    <h1 className="mb-12 text-4xl font-semibold">
                        Step {step}: {getStepName()}
                    </h1>
                    {renderStep()}
                </div>
            </div>
            <div className={"flex p-8 justify-between gap-8"}>
                {step !== 1 && (
                    <Button className="flex gap-2" onClick={() => setStep(step - 1)}>
                        <ArrowLeft />
                        Previous Step
                    </Button>
                )}
                <div className="flex-1 self-center">
                    <Progress value={step * 25} />
                </div>
                {step !== 4 && (
                    <Button className="flex gap-2" onClick={() => setStep(step + 1)}>
                        Next Step <ArrowRight />
                    </Button>
                )}
            </div>
        </div>
    );
}
