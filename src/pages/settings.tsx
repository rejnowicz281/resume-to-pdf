import DownloadResumesButton from "@/components/resume/download-resumes-button";

export default function SettingsPage() {
    return (
        <div className="flex-1 flex justify-center">
            <div className="py-12 px-7 max-w-[900px] w-full">
                <div className="border-b border-b-neutral-300 dark:border-b-neutral-800 pb-4 mb-8">
                    <h1 className="text-3xl font-semibold">Settings</h1>
                </div>
                <div className="flex flex-col gap-4 items-start">
                    <div className="flex flex-col gap-1">
                        <h2 className="font-semibold text-xl">Download Resumes</h2>
                        <p className="text-gray-500 dark:text-gray-400">Download all of your resumes as a JSON file</p>
                    </div>
                    <DownloadResumesButton />
                </div>
            </div>
        </div>
    );
}
