import { Button } from "@/components/ui/button";
import { useResumeCreator } from "@/providers/resume-creator-provider";

export default function StepOne() {
    const { showImage, setShowImage } = useResumeCreator();

    return (
        <Button
            onClick={() => {
                setShowImage(!showImage);
            }}
        >
            Toggle Photo
        </Button>
    );
}
