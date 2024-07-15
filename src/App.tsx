import { ThemeProvider } from "@/providers/theme-provider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ThemeButton from "./components/general/theme-button";
import HomePage from "./pages";
import ResumePage from "./pages/resume";
import { SavedResumesProvider } from "./providers/saved-resumes-provider";

export default function App() {
    return (
        <div className="min-h-[100vh] flex flex-col bg-white text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50">
            <SavedResumesProvider>
                <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
                    <ThemeButton />
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/resumes/:id" element={<ResumePage />} />
                        </Routes>
                    </BrowserRouter>
                </ThemeProvider>
            </SavedResumesProvider>
        </div>
    );
}
