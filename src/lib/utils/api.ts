import { expressAPI } from "./axios";

export const register = async (username: string, password: string) => {
    try {
        const res = await expressAPI.post("register", { username, password });
        console.log("post express register response", res);
        return res;
    } catch (error: any) {
        console.error("Registration failed", error.response.data);
        throw error;
    }
};
