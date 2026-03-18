import { createContext, useContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { loginUser, logoutUser } from "../api/authApis/authApi";
import { setAccessToken } from "../api/api";

interface DecodedToken {
  id: number;
  name: string;
  imagen: string;
  role: number;
  roleName: string;
  netsuiteId: number | null;
  exp: number;
  iat: number;
}

interface AuthType {
  user: DecodedToken | null;
  login: (data: any) => Promise<void>;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<DecodedToken | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const restoreSession = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/auth/refresh`,
          {
            method: "POST",
            credentials: "include",
          }
        );

        if (!res.ok) throw new Error();

        const data = await res.json();

        setAccessToken(data.accessToken);

        const decoded = jwtDecode<DecodedToken>(data.accessToken);

        setUser(decoded);
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    restoreSession();
  }, []);

  const login = async (data: any) => {
    const res = await loginUser(data);

    setAccessToken(res.accessToken);

    const decoded = jwtDecode<DecodedToken>(res.accessToken);

    setUser(decoded);
  };

  const logout = () => {
    logoutUser()
    setAccessToken(null);
    setUser(null);
    localStorage.removeItem("accessToken");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth debe usarse dentro de AuthProvider");
  return context;
};
