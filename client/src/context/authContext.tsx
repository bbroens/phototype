import React from "react";
import axios from "axios";
import { createContext, useEffect, useState, ReactNode } from "react";

type ContextProviderProps = {
  children: ReactNode;
};

type LoginParams = {
  username: string;
  password: string;
};

export type User = {
  user_id: number;
  username: string;
  firstname: string;
  lastname: string;
  handle: string;
  profile_img: string;
  cover_img: string;
};

export type AuthContextType = {
  currentUser: User;
  login?: React.Dispatch<React.SetStateAction<any>>;
};

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

export const AuthContextProvider = ({ children }: ContextProviderProps) => {
  // If available, get logged in user properties from localstorage
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user") || "{}") || null
  );

  const login = async (inputs: LoginParams) => {
    const res = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL_PORT}/api/auth/login`,
      inputs,
      {
        withCredentials: true,
      }
    );
    setCurrentUser(res.data);
  };

  // Store logged in user properties in localstorage
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};
