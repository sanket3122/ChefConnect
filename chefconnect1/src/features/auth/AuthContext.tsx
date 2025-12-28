import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { apiGet } from "../../lib/api";
import { clearToken, getToken, setToken } from "../../lib/auth";
import type { User } from "./types";

type AuthState = {
  user: User | null;
  token: string | null;
  setAuth: (token: string, user: User) => void;
  logout: () => void;
  refreshMe: () => Promise<void>;
};

const Ctx = createContext<AuthState | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [token, setTok] = useState<string | null>(getToken());
  const [user, setUser] = useState<User | null>(null);

  const setAuth = (t: string, u: User) => {
    setToken(t);
    setTok(t);
    setUser(u);
  };

  const logout = () => {
    clearToken();
    setTok(null);
    setUser(null);
  };

  const refreshMe = async () => {
    const t = getToken();
    if (!t) return;
    try {
      const resp = await apiGet<{ user: User }>("/api/auth/me", t);
      setTok(t);
      setUser(resp.user);
    } catch {
      logout();
    }
  };

  useEffect(() => {
    refreshMe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const value = useMemo(() => ({ user, token, setAuth, logout, refreshMe }), [user, token]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useAuth() {
  const v = useContext(Ctx);
  if (!v) throw new Error("useAuth must be used inside AuthProvider");
  return v;
}
