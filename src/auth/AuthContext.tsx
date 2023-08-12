import React, { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import { User } from "../interfaces/user";
import axios from "axios";
import { viteBackendUrl } from "../configs/env";
import { AuthEndpoints } from "../api/backend-endpoints";

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

    window.location.replace("/");
  };

  const logout = () => {
    Cookies.remove("accessToken");
    setUser(null);
    window.location.reload();
  };

  useEffect(() => {
    async function fetchProfileData() {
      return await axios.get(AuthEndpoints.PROFILE);
    }

    const accessToken = Cookies.get("accessToken");
    if (accessToken) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
      fetchProfileData().then((response) => {
        setUser(response.data.data);
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
