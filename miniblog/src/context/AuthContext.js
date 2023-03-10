import { createContext, useContext } from "react";

const AuthContext = createContext();

export function AuthProvider({ children, value }) {
    // value will receive the logged user
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthValue() {
    return useContext(AuthContext);
}