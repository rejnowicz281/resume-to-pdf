import { ResumeCreatorProvider } from "@/providers/resume-creator-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import ResumeCreatorFlow from "./components/resume-creator-flow";
import SAMPLE_RESUME from "./lib/constants/sample-resume";

export default function App() {
    return (
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
            <ResumeCreatorProvider initialResume={SAMPLE_RESUME}>
                <ResumeCreatorFlow />
            </ResumeCreatorProvider>
        </ThemeProvider>
    );
}
