import { useTheme } from "@/providers/theme-provider";
import { MoonStar, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

export default function ThemeButton() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    return (
        <Button
            className="z-20 fixed top-4 right-4 text-xl"
            variant="outline"
            onClick={() => {
                if (theme === "light") setTheme("dark");
                else setTheme("light");
            }}
        >
            {theme === "light" ? <Sun /> : <MoonStar />}
        </Button>
    );
}
