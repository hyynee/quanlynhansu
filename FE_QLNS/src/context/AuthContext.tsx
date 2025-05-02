import { User } from "@/types/User";
import { jwtDecode } from "jwt-decode";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { clearStorageJSON, getStorageJSON, http, saveStorageJSON, USERLOGIN } from "../config/config";

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = getStorageJSON(USERLOGIN) as User | null;
    if (!userData?.token) return;

    http
      .get("/account/currentUser")
      .then((res) => setUser(res.data))
      .catch(() => logout());
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const res = await http.post("/auth/login", { email, password });
      if (res.data.status === 200) {
        const { token } = res.data;
        const decodedToken = jwtDecode(token) as any;
        const role = decodedToken?.data?.role as "ADMIN" | "GUEST";
        const userLoginData: User = { email, token, role }; 
        saveStorageJSON(USERLOGIN, userLoginData);
        setUser(userLoginData);

        if (role === "ADMIN") {
          navigate("/admin");
        } else if (role === "GUEST") {
          navigate("/user");
        } else {
          console.error("Invalid role:", role);
          navigate("/");
        }
      }
    } catch (error: any) {
      console.error("Login failed:", error.response?.data?.message);
    }
  };

  const logout = () => {
    clearStorageJSON(USERLOGIN);
    setUser(null);
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within the AuthProvider");
  return context;
};