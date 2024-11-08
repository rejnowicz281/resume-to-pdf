import { ThemeProvider } from "@/providers/theme-provider";
import { pdfjs } from "react-pdf";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import SettingsButton from "./components/general/settings-button";
import ThemeButton from "./components/general/theme-button";
import HomePage from "./pages";
import ResumePage from "./pages/resume";
import SettingsPage from "./pages/settings";
import { ResumesListProvider } from "./providers/resumes-list-provider";

pdfjs.GlobalWorkerOptions.workerSrc = new URL("pdfjs-dist/build/pdf.worker.min.mjs", import.meta.url).toString();

export default function App() {
    return (
        <div className="min-h-[100vh] flex flex-col bg-white text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50">
            <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
                <ThemeButton />
                <BrowserRouter>
                    <Routes>
                        <Route
                            element={
                                <ResumesListProvider>
                                    <SettingsButton />
                                    <Outlet />
                                </ResumesListProvider>
                            }
                        >
                            <Route path="/" element={<HomePage />} />
                            <Route path="/settings" element={<SettingsPage />} />
                        </Route>
                        <Route path="/resumes/:id" element={<ResumePage />} />
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </div>
    );
}
