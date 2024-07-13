import { useResumeCreator } from "@/providers/resume-creator-provider";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import ResumePDF from "./resume-pdf";

const ResumePreview = () => {
    const {
        showImage,
        setShowImage,
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
        <div>
            <PDFViewer showToolbar={false} width="100%" height={900}>
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
            <div>
                <button
                    onClick={() => {
                        setShowImage(!showImage);
                    }}
                >
                    Toggle Photo
                </button>
            </div>
            <PDFDownloadLink
                document={
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
                }
                fileName="resume.pdf"
            >
                {({ loading }) => (loading ? "Loading document..." : "Download Resume")}
            </PDFDownloadLink>
        </div>
    );
};

export default ResumePreview;
