import Activities from "./additional-activities";
import InterestsForm from "./interests-form";
import LinksForm from "./links-form";
import Skills from "./skills";

export default function StepThree() {
    return (
        <div className="flex flex-col gap-12">
            <Skills />
            <Activities />
            <InterestsForm />
            <LinksForm />
        </div>
    );
}
