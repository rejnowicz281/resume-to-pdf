import { Button } from "@/components/ui/button";
import { Home, Settings } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function SettingsButton() {
    const location = useLocation();

    return (
        <Button variant="outline" className="fixed bottom-4 right-4" asChild>
            <Link to={location.pathname === "/settings" ? "/" : "/settings"}>
                {location.pathname === "/settings" ? <Home /> : <Settings />}
            </Link>
        </Button>
    );
}
