import ResumePDF from "@/components/resume-pdf";
import { useResumeCreator } from "@/providers/resume-creator-provider";
import { PDFViewer } from "@react-pdf/renderer";
import ResumeCreatorForm from "./form";

const ResumeCreatorFlow = () => {
    const {
        showImage,
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
        trainingAndCertification,
        skills,
        additionalActivities,
        interests,
        links
    } = useResumeCreator();

    return (
        <div className="flex flex-1">
            <PDFViewer width="45%" className="h-[100vh]">
                <ResumePDF
                    showImage={showImage}
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
                    trainingAndCertification={trainingAndCertification}
                    skills={skills}
                    additionalActivities={additionalActivities}
                    interests={interests}
                    links={links}
                />
            </PDFViewer>
            <ResumeCreatorForm />
        </div>
    );
};

export default ResumeCreatorFlow;
