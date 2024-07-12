import "./App.css";

function App() {
    const downloadPDF = async () => {
        const response = await fetch("http://localhost:8080/pdf/generate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ body: "<h1>Some Sample Header</h1>" })
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

export default App;
