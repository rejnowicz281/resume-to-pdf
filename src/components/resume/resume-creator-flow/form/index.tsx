import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils/general";
import { useResumeCreator } from "@/providers/resume-creator-provider";
import { ArrowLeft, ArrowRight, Edit, FileSearch2, Home } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import ProgressBar from "./progress-bar";
import StepFour from "./step-four";
import StepOne from "./step-one";
import StepThree from "./step-three";
import StepTwo from "./step-two";

export default function ResumeCreatorForm() {
    const { step, setStep, getStepName, togglePreviewState, previewState } = useResumeCreator();
    const { t } = useTranslation();

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
                <div className="absolute inset-0 overflow-y-scroll p-8 flex flex-col">{renderStep()}</div>
                <Button
                    variant="outline"
                    className={cn(previewState ? "fixed" : "absolute", "xl:hidden bottom-6 right-6 z-50")}
                    onClick={togglePreviewState}
                >
                    {previewState ? <Edit /> : <FileSearch2 />}
                </Button>
            </div>
            <div className="flex flex-col py-6 px-8 gap-4 border-t border-t-zinc-200 dark:border-t-zinc-800">
                <h1 className="text-2xl text-center">
                    {t("step")} {step} - {getStepName()}
                </h1>
                <div className="flex gap-8 items-center justify-between">
                    {step === 1 ? (
                        <Button variant="outline" className="flex gap-2" asChild>
                            <Link to="/">
                                <Home />
                                <span className="hidden xl:inline">{t("home")}</span>
                            </Link>
                        </Button>
                    ) : (
                        <Button variant="outline" className="flex gap-2" onClick={() => setStep(step - 1)}>
                            <ArrowLeft />
                            <span className="hidden xl:inline">{t("previousStep")}</span>
                        </Button>
                    )}
                    <div className="flex-1">
                        <ProgressBar />
                    </div>
                    {step === 4 ? (
                        <Button className="flex gap-2" asChild>
                            <Link to="/">
                                <Home />
                                <span className="hidden xl:inline">{t("home")}</span>
                            </Link>
                        </Button>
                    ) : (
                        <Button className="flex gap-2" onClick={() => setStep(step + 1)}>
                            <span className="hidden xl:inline">{t("nextStep")}</span> <ArrowRight />
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
}
