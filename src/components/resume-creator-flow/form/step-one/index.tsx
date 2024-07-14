import BasicInfoForm from "./basic-info-form";
import ContactForm from "./contact-form";
import { LocationForm } from "./location-form";

export default function StepOne() {
    return (
        <div className="flex flex-col gap-12">
            <BasicInfoForm />
            <LocationForm />
            <ContactForm />
        </div>
    );
}
