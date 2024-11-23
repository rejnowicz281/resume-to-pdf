import axios from "axios";
import { COUCHDB_URL, EXPRESS_URL } from "./config";

export const couchAPI = axios.create({
    baseURL: COUCHDB_URL,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json"
    }
});

export const expressAPI = axios.create({
    baseURL: EXPRESS_URL,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json"
    }
});
