import { useMemo, useState } from "react";
import Modal from "../ui/Modal";

type Props = {
  open: boolean;
  onClose: () => void;
};

function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 6l12 12M18 6 6 18" stroke="#111" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function EyeIcon({ open }: { open: boolean }) {
  return open ? (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"
        stroke="#6b7280"
        strokeWidth="2"
      />
      <circle cx="12" cy="12" r="3" stroke="#6b7280" strokeWidth="2" />
    </svg>
  ) : (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M3 3l18 18"
        stroke="#6b7280"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M10.6 10.6A3 3 0 0 0 12 15a3 3 0 0 0 2.4-4.4"
        stroke="#6b7280"
        strokeWidth="2"
      />
      <path
        d="M5.1 5.1C3.2 6.6 2 8.6 2 12c0 0 3.5 7 10 7 1.9 0 3.6-.6 5-1.5"
        stroke="#6b7280"
        strokeWidth="2"
      />
      <path
        d="M9.5 4.4A10 10 0 0 1 12 5c6.5 0 10 7 10 7a16 16 0 0 1-3.4 4.5"
        stroke="#6b7280"
        strokeWidth="2"
      />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.8 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.7 1.1 7.8 2.9l5.7-5.7C34.7 6.1 29.6 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.2-.4-3.5z"/>
      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.2 19 12 24 12c3 0 5.7 1.1 7.8 2.9l5.7-5.7C34.7 6.1 29.6 4 24 4 16.3 4 9.6 8.3 6.3 14.7z"/>
      <path fill="#4CAF50" d="M24 44c5.2 0 10-2 13.6-5.2l-6.3-5.3C29.3 36 26.8 37 24 37c-5.3 0-9.8-3.4-11.4-8.1l-6.6 5.1C9.2 40.1 16 44 24 44z"/>
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-1.3 3.4-4.4 6-8.3 6l6.3 5.3C36 38.4 44 33.6 44 24c0-1.3-.1-2.2-.4-3.5z"/>
    </svg>
  );
}

export default function LoginModal({ open, onClose }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [touched, setTouched] = useState({ email: false, password: false });

  const errors = useMemo(() => {
    return {
      email: touched.email && !email.trim() ? "Required Field" : "",
      password: touched.password && !password.trim() ? "Required Field" : "",
    };
  }, [email, password, touched]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ email: true, password: true });

    if (!email.trim() || !password.trim()) return;

    // TODO: call backend auth
    alert("Login submitted (wire backend next).");
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <div className="authModal">
        <button className="authClose" onClick={onClose} aria-label="close">
          <CloseIcon />
        </button>

        <h2 className="authTitle">Sign In</h2>

        <form onSubmit={onSubmit} className="authForm">
          <div className="field">
            <input
              className={`input ${errors.email ? "inputError" : ""}`}
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => setTouched((t) => ({ ...t, email: true }))}
            />
            {errors.email ? <div className="fieldError">{errors.email}</div> : null}
          </div>

          <div className="field">
            <div className="pwWrap">
              <input
                className={`input ${errors.password ? "inputError" : ""}`}
                placeholder="Password"
                type={showPw ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={() => setTouched((t) => ({ ...t, password: true }))}
              />
              <button
                type="button"
                className="pwToggle"
                onClick={() => setShowPw((s) => !s)}
                aria-label="toggle password visibility"
              >
                <EyeIcon open={showPw} />
              </button>
            </div>
            {errors.password ? <div className="fieldError">{errors.password}</div> : null}
          </div>

          <div className="authRow">
            <a className="authLink" href="#">Forgot / Reset Password</a>
          </div>

          <button className="authPrimary" type="submit">Sign In</button>

          <div className="authAlt">
            <span className="authLine" />
            <span className="authOr">OR</span>
            <span className="authLine" />
          </div>

          <button className="authGoogle" type="button">
            <GoogleIcon />
            <span>Continue With Google</span>
          </button>

          <div className="authTerms">
            By clicking Continue with Google, you agree to our{" "}
            <a className="authLink" href="#">Terms &amp; Conditions</a>
          </div>

          <div className="authFooter">
            Don't have an account? <a className="authLinkAccent" href="#">Sign Up</a>
          </div>
        </form>
      </div>
    </Modal>
  );
}
