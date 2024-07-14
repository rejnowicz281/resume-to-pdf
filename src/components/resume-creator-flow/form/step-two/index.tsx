import Education from "./education";
import Languages from "./languages";
import Training from "./training";
import WorkExperience from "./work-experience";

export default function StepTwo() {
    return (
        <div className="flex flex-col gap-12">
            <WorkExperience />
            <Education />
            <Languages />
            <Training />
        </div>
    );
}
