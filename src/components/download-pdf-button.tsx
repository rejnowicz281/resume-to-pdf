export default function DownloadPdfButton() {
    const downloadPDF = async () => {
        const body = document.getElementById("resume-preview")?.innerHTML || "Could not find resume";

        const response = await fetch("http://localhost:8080/pdf/generate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ body })
        });

        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "resume.pdf";
        a.click();
    };

    return <button onClick={downloadPDF}>Download PDF</button>;
}
