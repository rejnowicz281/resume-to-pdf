import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import AuthContainer from "./auth-container";

export default function AuthDialog() {
    const [open, setOpen] = useState(false);
    const [action, setAction] = useState<"login" | "register">("login");

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button>Log in</Button>
            </DialogTrigger>
            <DialogContent className="p-10">
                <AuthContainer
                    action={action}
                    closeDialog={() => {
                        setOpen(false);
                        setAction("login");
                    }}
                />
                <Button
                    variant="outline"
                    className="flex gap-1"
                    onClick={action === "login" ? () => setAction("register") : () => setAction("login")}
                >
                    {action === "login" ? "Register" : "Login"}
                    <ArrowRight size={16} />
                </Button>
            </DialogContent>
        </Dialog>
    );
}
