import { useResumeCreator } from "@/providers/resume-creator-provider";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import { Download, LoaderCircle } from "lucide-react";
import { Button } from "../ui/button";
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
        <div className="flex">
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
            <div className="flex-1 relative p-6">
                <Button
                    onClick={() => {
                        setShowImage(!showImage);
                    }}
                >
                    Toggle Photo
                </Button>
                <div className="absolute bottom-0 right-0 left-0 flex p-6">
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
                        {({ loading }) => (
                            <Button
                                disabled={loading}
                                className="flex items-center gap-2 disabled:cursor-not-allowed disabled:text-gray-500 disabled:bg-slate-200"
                            >
                                Download Resume
                                {loading ? <LoaderCircle className="animate-spin" /> : <Download />}
                            </Button>
                        )}
                    </PDFDownloadLink>
                </div>
            </div>
        </div>
    );
};

export default ResumePreview;
