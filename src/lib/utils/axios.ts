import axios from "axios";

export const couchAPI = axios.create({
    baseURL: "https://custom-couchdb-railway-template-production.up.railway.app",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json"
    }
});

export const expressAPI = axios.create({
    baseURL: "https://calm-anchorage-52600-ec637b7ee2c6.herokuapp.com",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json"
    }
});
