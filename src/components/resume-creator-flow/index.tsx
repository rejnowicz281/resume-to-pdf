import ResumePDF from "@/components/resume-pdf";
import { useResumeCreator } from "@/providers/resume-creator-provider";
import { PDFViewer } from "@react-pdf/renderer";
import ResumeCreatorForm from "./form";

const ResumeCreatorFlow = () => {
    const {
        imageOptions,
        firstName,
        lastName,
        dateOfBirth,
        country,
        city,
        email,
        phone,
        workExperience,
        education,
        languages,
        training,
        skills,
        activities,
        interests,
        links
    } = useResumeCreator();

    return (
        <div className="flex flex-1">
            <PDFViewer className="w-[45%]">
                <ResumePDF
                    imageOptions={imageOptions}
                    firstName={firstName}
                    lastName={lastName}
                    dateOfBirth={dateOfBirth}
                    country={country}
                    city={city}
                    email={email}
                    phone={phone}
                    workExperience={workExperience}
                    education={education}
                    languages={languages}
                    training={training}
                    skills={skills}
                    activities={activities}
                    interests={interests}
                    links={links}
                />
            </PDFViewer>
            <ResumeCreatorForm />
        </div>
    );
};

export default ResumeCreatorFlow;
