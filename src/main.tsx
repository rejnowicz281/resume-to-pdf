import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./lib/utils/i18n.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.ready.then((registration) => {
        registration.update();
    });
}
