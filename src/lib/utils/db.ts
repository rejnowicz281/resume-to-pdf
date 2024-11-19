import { couchAPI } from "./axios";

export const login = async (name: string, password: string) => {
    try {
        const res = await couchAPI.post("_session", { name, password });
        console.log("post _session response", res);

        return res.data;
    } catch (error: any) {
        console.error("Login failed", error.response.data);
        throw error;
    }
};

export const logout = async () => {
    try {
        const res = await couchAPI.delete("_session");
        console.log("delete _session response", res);

        return res.data;
    } catch (error: any) {
        console.error("Logout failed", error.response.data);
        throw error;
    }
};

export const authenticate = async () => {
    try {
        const res = await couchAPI.get("_session");
        console.log("get _session response", res);

        return res.data;
    } catch (error: any) {
        console.error("Authentication failed", error.response.data);
        throw error;
    }
};
