import { GITHUB_AUTH_URL } from "@/lib/utils/config";
import { Github, LoaderCircle } from "lucide-react";
import { Button } from "../ui/button";

export default function GithubLoginButton({
    loading,
    setLoading
}: {
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    return (
        <Button
            className="gap-1"
            variant="outline"
            disabled={loading}
            onClick={() => {
                setLoading(true);
                window.location.assign(GITHUB_AUTH_URL);
            }}
        >
            {loading ? (
                <>
                    <LoaderCircle className="animate-spin" size={20} />
                    Github Login
                </>
            ) : (
                <>
                    <Github size={20} />
                    Github Login
                </>
            )}
        </Button>
    );
}
