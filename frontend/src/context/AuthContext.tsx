import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import axios from "axios";

interface User {
  id: number;
  name: string;
  email: string;
}

interface AuthContextProps {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (email: string, password: string) => {
    const res = await axios.post("http://localhost:3000/api/users/login", {
      email,
      password,
    });
    setUser(res.data.user);
    localStorage.setItem("user", JSON.stringify(res.data.user)); // ✅ Guarda
  };

  const register = async (name: string, email: string, password: string) => {
    const res = await axios.post("http://localhost:3000/api/users/register", {
      name,
      email,
      password,
    });
    setUser(res.data.user);
    localStorage.setItem("user", JSON.stringify(res.data.user)); // ✅ Guarda
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user"); // ✅ Limpia
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
