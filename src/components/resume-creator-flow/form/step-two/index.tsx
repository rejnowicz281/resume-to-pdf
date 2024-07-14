import Education from "./education";
import Languages from "./languages";
import TrainingAndCertification from "./training-and-certification";
import WorkExperience from "./work-experience";

export default function StepTwo() {
    return (
        <div className="flex flex-col gap-12">
            <WorkExperience />
            <Education />
            <Languages />
            <TrainingAndCertification />
        </div>
    );
}
