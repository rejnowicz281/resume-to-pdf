import axios, { AxiosResponse } from "axios";
import { EXPRESS_URL } from "./config";
import debug from "./debug";

export const API = axios.create({
    baseURL: EXPRESS_URL,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json"
    }
});

export const apiRegister = async (username: string, password: string): Promise<AxiosResponse<any>> => {
    try {
        const res = await API.post("register", { username, password });

        debug.log("post express register response", res);

        return res;
    } catch (error: any) {
        debug.error("Registration failed", error.response.data);
        return error.response;
    }
};

export const apiLogin = async (username: string, password: string): Promise<AxiosResponse<any>> => {
    try {
        const res = await API.post("login", { username, password });

        debug.log("post express login response", res);

        return res;
    } catch (error: any) {
        debug.error("Login failed", error.response.data);
        return error.response;
    }
};

export const apiLogout = async (): Promise<AxiosResponse<any>> => {
    try {
        const res = await API.delete("logout");

        debug.log("delete express logout response", res);

        return res;
    } catch (error: any) {
        debug.error("Logout failed", error.response.data);
        return error.response;
    }
};

export const apiRefresh = async (): Promise<AxiosResponse<any>> => {
    try {
        const res = await API.post("refresh");

        debug.log("post express refresh response", res);

        return res;
    } catch (error: any) {
        debug.error("Refresh failed", error.response.data);
        return error.response;
    }
};

export const apiGithubLogin = async (code: string): Promise<AxiosResponse<any>> => {
    try {
        const tokenRes = await API.post("github/token", { code });

        debug.log("post express github token response", tokenRes);

        if (!tokenRes.data.token) throw new Error("Could not get github access token");

        const loginRes = await API.post("github/login", { access_token: tokenRes.data.token });

        debug.log("post express github login response", loginRes);

        return loginRes;
    } catch (error: any) {
        debug.error("Github token failed", error.response.data);
        return error.response;
    }
};
