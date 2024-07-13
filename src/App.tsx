import DownloadPdfButton from "@/components/download-pdf-button";
import ResumePreview from "@/components/resume-preview";
import { ResumeCreatorProvider } from "@/providers/resume-creator-provider";
import { ThemeProvider } from "@/providers/theme-provider";

export default function App() {
    return (
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
            <ResumeCreatorProvider>
                <DownloadPdfButton />
                <ResumePreview />
            </ResumeCreatorProvider>
        </ThemeProvider>
    );
}
