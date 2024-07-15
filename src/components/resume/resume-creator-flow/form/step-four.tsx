import ResumePDF from "@/components/resume/resume-pdf";
import { Button } from "@/components/ui/button";
import { useResumeCreator } from "@/providers/resume-creator-provider";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { Download, LoaderCircle } from "lucide-react";

export default function StepFour() {
    return (
        <div className="flex flex-col flex-1 justify-center items-center gap-6">
            <h1 className="text-6xl">Your Resume is ready!</h1>
            <p>Click the button below to download your resume.</p>
            <DownloadLink />
        </div>
    );
}

const DownloadLink = () => {
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
        <PDFDownloadLink
            document={
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
            }
            fileName={`${firstName}_${lastName}_Resume.pdf`}
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
    );
};
