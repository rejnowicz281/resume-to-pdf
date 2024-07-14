import AdditionalActivityForm from "./additional-activity-form";
import InterestsForm from "./interests-form";
import LinksForm from "./links-form";
import Skills from "./skills";

export default function StepThree() {
    return (
        <div className="flex flex-col gap-12">
            <Skills />
            <AdditionalActivityForm />
            <InterestsForm />
            <LinksForm />
        </div>
    );
}
