import axios from "axios";

export const couchAPI = axios.create({
    baseURL: "http://localhost:5984",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json"
    }
});

export const expressAPI = axios.create({
    baseURL: "http://localhost:3000",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json"
    }
});
