import { ResumeCreatorProvider } from "@/providers/resume-creator-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import ResumePreview from "./components/resume-preview";

export default function App() {
    return (
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
            <ResumeCreatorProvider>
                <ResumePreview />
            </ResumeCreatorProvider>
        </ThemeProvider>
    );
}
