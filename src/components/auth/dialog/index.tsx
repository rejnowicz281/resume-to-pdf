import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { apiGithubLogin } from "@/lib/utils/api";
import { useAuth } from "@/providers/auth-provider";
import { useEffect, useState } from "react";
import GithubLoginButton from "../github-login-button";
import AuthForm from "./form";

export default function AuthDialog() {
    const [open, setOpen] = useState(false);
    const { setUser, setToken } = useAuth();
    const [loading, setLoading] = useState(false);

    const githubInit = async () => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);

        const codeParam = urlParams.get("code");

        if (codeParam) {
            setLoading(true);
            const res = await apiGithubLogin(codeParam);
            setLoading(false);

            const accessToken = res.data.accessToken;
            const username = res.data.username;

            if (accessToken && username) {
                setUser({ name: username });
                setToken(accessToken);
            }

            urlParams.delete("code");

            const newUrl =
                window.location.protocol +
                "//" +
                window.location.host +
                window.location.pathname +
                "?" +
                urlParams.toString();

            window.history.pushState({ path: newUrl }, "", newUrl);
        }
    };

    useEffect(() => {
        githubInit();
    }, []);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button>Log in</Button>
            </DialogTrigger>
            <DialogContent className="p-10">
                <AuthForm closeDialog={() => setOpen(false)} />

                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t border-t-neutral-300 dark:border-t-neutral-600"></span>
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="dark:bg-[#121212] bg-white px-2 font-semibold tracking-widest text-gray-500">
                            OR CONTINUE WITH
                        </span>
                    </div>
                </div>
                <GithubLoginButton loading={loading} setLoading={setLoading} />
            </DialogContent>
        </Dialog>
    );
}
