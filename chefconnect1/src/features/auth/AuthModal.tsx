import { useState } from "react";
import { apiPost } from "../../lib/api";
import { useAuth } from "./AuthContext";
import type { AuthResponse } from "./types";

export default function AuthModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const { setAuth } = useAuth();
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  if (!open) return null;

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErr(null);
    setLoading(true);

    try {
      if (mode === "signup") {
        const resp = await apiPost<AuthResponse>("/api/auth/signup", {
          name: name.trim(),
          email: email.trim(),
          password,
        });
        setAuth(resp.token, resp.user);
      } else {
        const resp = await apiPost<AuthResponse>("/api/auth/login", {
          email: email.trim(),
          password,
        });
        setAuth(resp.token, resp.user);
      }
      onClose();
    } catch (ex: any) {
      setErr(ex?.message || "Auth failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modalOverlay" role="dialog" aria-modal="true">
      <div className="modalCard">
        <button className="modalClose" onClick={onClose} aria-label="close">✕</button>

        <h2 className="modalTitle">{mode === "login" ? "Sign In" : "Sign Up"}</h2>

        <div className="modalTabs">
          <button
            className={`tabBtn ${mode === "login" ? "tabActive" : ""}`}
            onClick={() => setMode("login")}
            type="button"
          >
            Sign In
          </button>
          <button
            className={`tabBtn ${mode === "signup" ? "tabActive" : ""}`}
            onClick={() => setMode("signup")}
            type="button"
          >
            Sign Up
          </button>
        </div>

        <form onSubmit={submit} className="modalForm">
          {mode === "signup" && (
            <input
              className="modalInput"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          )}

          <input
            className="modalInput"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="modalInput"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {err && <div className="modalError">{err}</div>}

          <button className="modalPrimaryBtn" disabled={loading} type="submit">
            {loading ? "Please wait..." : mode === "login" ? "Sign In" : "Create Account"}
          </button>
        </form>

        <div className="modalFooter">
          {mode === "login" ? (
            <span>
              Don&apos;t have an account?{" "}
              <button type="button" className="linkBtn" onClick={() => setMode("signup")}>
                Sign Up
              </button>
            </span>
          ) : (
            <span>
              Already have an account?{" "}
              <button type="button" className="linkBtn" onClick={() => setMode("login")}>
                Sign In
              </button>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
