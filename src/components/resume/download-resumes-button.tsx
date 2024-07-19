import { dateToString } from "@/lib/utils/date";
import { useLocalResumes } from "@/providers/local-resumes-provider";
import { Button } from "../ui/button";

export default function DownloadResumesButton() {
    const { resumes } = useLocalResumes();

    const onClick = () => {
        const data = JSON.stringify(resumes, null, 2);
        const blob = new Blob([data], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `resumes-${dateToString(new Date(), "yyyy-mm-dd")}.json`;
        a.click();
        URL.revokeObjectURL(url);
    };

    return <Button onClick={onClick}>Download</Button>;
}
