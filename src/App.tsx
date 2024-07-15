import { ResumeCreatorProvider } from "@/providers/resume-creator-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import ThemeButton from "./components/general/theme-button";
import ResumeCreatorFlow from "./components/resume-creator-flow";
import SAMPLE_RESUME from "./lib/constants/sample-resume";

export default function App() {
    return (
        <div className="min-h-[100vh] flex flex-col bg-white text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50">
            <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
                <ThemeButton />
                <ResumeCreatorProvider initialResume={SAMPLE_RESUME}>
                    <ResumeCreatorFlow />
                </ResumeCreatorProvider>
            </ThemeProvider>
        </div>
    );
}
