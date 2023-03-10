import React from "react";
import axios from "axios";
import { createContext, useEffect, useState, ReactNode } from "react";
import { IInputs } from "../pages/login/Login";

type ContextProviderProps = {
  children: ReactNode;
};

export interface IUser {
  user_id: number;
  username: string;
  firstname: string;
  lastname: string;
  handle: string;
  profile_img: string;
  cover_img: string;
}

type AuthContext = {
  currentUser: IUser;
  login?: React.Dispatch<React.SetStateAction<any>>;
};

export const AuthContext = createContext<AuthContext>({
  currentUser: {
    user_id: 0,
    username: "",
    firstname: "",
    lastname: "",
    handle: "",
    profile_img: "",
    cover_img: "",
  },
});

export const AuthContextProvider = ({ children }: ContextProviderProps) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user") || "{}") || null
  );

  const login = async (inputs: IInputs) => {
    const res = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL_PORT}/api/auth/login`,
      inputs,
      {
        withCredentials: true,
      }
    );
    setCurrentUser(res.data);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};
