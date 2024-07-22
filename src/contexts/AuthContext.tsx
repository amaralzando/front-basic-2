"use client";

import { useRouter } from "next/navigation";
import { destroyCookie, parseCookies, setCookie } from "nookies";
import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";
import { recoverUserInformaation, signInRequest } from "../services/auth";

type User = {
  name: string;
  email: string;
};

type SignInData = {
  email: string;
  password: string;
};

type AuthContextType = {
  isAuthenticated: boolean;
  user?: User;
  signIn: (data: SignInData) => Promise<void>;
  logOut: () => void;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>({ name: "", email: "" });
  const router = useRouter();
  const isAuthenticated = !!user;

  useEffect(() => {
    const { "frontbasic2.token": token } = parseCookies();
    if (token) {
      recoverUserInformaation().then((res) => {
        setUser(res.user);
      });
    }
  }, []);

  async function signIn({ email, password }: SignInData) {
    // TODO: Implementar login
    const { token, user } = await signInRequest({
      email,
      password,
    });

    setCookie(undefined, "frontbasic2.token", token, {
      maxAge: 60 * 60 * 24, // 1 day
    });

    api.defaults.headers["Authorization"] = `Bearer ${token}`;

    setUser(user);

    router.push("/");
  }

  async function logOut() {
    destroyCookie(undefined, "frontbasic2.token");

    console.log("Logged out. Redirecting");
    router.push("/");
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}
