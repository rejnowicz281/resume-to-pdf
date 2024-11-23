import axios from "axios";

export const couchAPI = axios.create({
    baseURL: "https://custom-couchdb-railway-template-production.up.railway.app",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json"
    }
});

export const expressAPI = axios.create({
    baseURL: "https://gentle-thicket-79000-425b824260de.herokuapp.com",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json"
    }
});
