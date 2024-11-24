import axios from "axios";
import { EXPRESS_URL } from "./config";

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
        console.log("post express register response", res);
        return res;
    } catch (error: any) {
        console.error("Registration failed", error.response.data);
        throw error;
    }
};

export const apiLogin = async (username: string, password: string) => {
    try {
        const res = await API.post("login", { username, password });
        console.log("post express login response", res);
        return res;
    } catch (error: any) {
        console.error("Login failed", error.response.data);
        throw error;
    }
};

export const apiLogout = async () => {
    try {
        const res = await API.delete("logout");
        console.log("delete express logout response", res);
        return res;
    } catch (error: any) {
        console.error("Logout failed", error.response.data);
        throw error;
    }
};

export const apiRefresh = async () => {
    try {
        const res = await API.post("refresh");
        console.log("post express refresh response", res);
        return res;
    } catch (error: any) {
        console.error("Refresh failed", error.response.data);
        throw error;
    }
};
