import axios from "axios";
import { EXPRESS_URL } from "./config";
import debug from "./debug";

export const API = axios.create({
    baseURL: EXPRESS_URL,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json"
    }
});

export const apiRegister = async (username: string, password: string) => {
    try {
        const res = await API.post("register", { username, password });

        debug.log("post express register response", res);

        return res;
    } catch (error: any) {
        debug.error("Registration failed", error.response.data);
        return error.response;
    }
};

export const apiLogin = async (username: string, password: string) => {
    try {
        const res = await API.post("rf", { username, password });

        debug.log("post express login response", res);

        return res;
    } catch (error: any) {
        debug.error("Login failed", error.response.data);
        return error.response;
    }
};

export const apiLogout = async () => {
    try {
        const res = await API.delete("logout");

        debug.log("delete express logout response", res);

        return res;
    } catch (error: any) {
        debug.error("Logout failed", error.response.data);
        return error.response;
    }
};

export const apiRefresh = async () => {
    try {
        const res = await API.post("refresh");

        debug.log("post express refresh response", res);

        return res;
    } catch (error: any) {
        debug.error("Refresh failed", error.response.data);
        return error.response;
    }
};
