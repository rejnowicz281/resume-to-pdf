import { User } from "@/lib/types/auth";
import { register as expressRegister } from "@/lib/utils/api";
import { authenticate, login as dbLogin, logout as dbLogout } from "@/lib/utils/db";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

export type AuthContextType = {
    login: (username: string, password: string) => Promise<void>;
    register: (username: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
    user: User | null;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const checkAuth = async () => {
            const res = await authenticate();

            if (res.userCtx.name) setUser({ name: res.userCtx.name });
        };

        checkAuth();
    }, []);

    const login = async (name: string, password: string) => {
        const res = await dbLogin(name, password);

        if (res.ok) setUser({ name });
    };

    const register = async (name: string, password: string) => {
        const res = await expressRegister(name, password);

        if (res.status === 201) await login(name, password);
    };

    const logout = async () => {
        const res = await dbLogout();

        if (res.ok) setUser(null);
    };

    return <AuthContext.Provider value={{ login, register, logout, user }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    const context = useContext(AuthContext);

    if (context === undefined) throw new Error("useAuth must be used within an AuthProvider");

    return context;
};
