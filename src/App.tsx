import { ResumeCreatorProvider } from "@/providers/resume-creator-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import ResumeCreatorFlow from "./components/resume-creator-flow";

export default function App() {
    return (
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
            <ResumeCreatorProvider>
                <ResumeCreatorFlow />
            </ResumeCreatorProvider>
        </ThemeProvider>
    );
}
