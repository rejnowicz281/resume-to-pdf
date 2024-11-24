import { User } from "@/lib/types/auth";
import { apiLogin, apiLogout, apiRefresh, apiRegister } from "@/lib/utils/api";
import { jwtDecode } from "jwt-decode";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

export type AuthContextType = {
    login: (username: string, password: string) => Promise<void>;
    register: (username: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
    user: User | null;
    token: string | null;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(null);

    useEffect(() => {
        async function refreshToken() {
            if (!token) {
                const response = await apiRefresh();

                if (response.status === 200) {
                    try {
                        const token = response.data.accessToken;
                        const decodedToken = jwtDecode(token);

                        setToken(token);
                        setUser({ name: decodedToken.sub! });
                    } catch (error: any) {
                        console.error("Token decode fail", error);
                        setToken(null);
                    }
                }
            }
        }

        refreshToken();
    }, []);

    const login = async (name: string, password: string) => {
        const res = await apiLogin(name, password);

        if (res.status === 200) {
            setUser({ name });
            setToken(res.data.accessToken);
        }
    };

    const register = async (name: string, password: string) => {
        const res = await apiRegister(name, password);

        if (res.status === 200) {
            setUser({ name });
            setToken(res.data.accessToken);
        }
    };

    const logout = async () => {
        const res = await apiLogout();

        if (res.status === 200) {
            setUser(null);
            setToken(null);
        }
    };

    return <AuthContext.Provider value={{ token, login, register, logout, user }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    const context = useContext(AuthContext);

    if (context === undefined) throw new Error("useAuth must be used within an AuthProvider");

    return context;
};
