import React, { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import { User } from "../interfaces/user";
import axios from "axios";
import { viteBackendUrl } from "../configs/env";

interface UserContextType {
  user: User | null;
  login: (token: string, user: User) => void;
  logout: () => void;
}

export const AuthContext = createContext<UserContextType>({
  user: null,
  login: () => {},
  logout: () => {},
});

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  axios.defaults.baseURL = viteBackendUrl;

  const [user, setUser] = useState<User | null>(null);

  const login = (token: string, user: User) => {
    Cookies.set("accessToken", token, { expires: 7 });
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    setUser(user);
  };

  const logout = () => {
    Cookies.remove("accessToken");
    setUser(null);
  };

  useEffect(() => {
    const accessToken = Cookies.get("accessToken");
    if (accessToken) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
      const user = { id: 1, username: "example_user" };
      setUser(user);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
