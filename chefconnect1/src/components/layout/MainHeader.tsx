import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import AuthModal from "../../features/auth/AuthModal";
import { useAuth } from "../../features/auth/AuthContext";

type NavItem = { label: string; to: string };

const nav: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "How It Works", to: "/#how-it-works" },
  { label: "Reviews", to: "/#reviews" },
  { label: "FAQ", to: "/faq" },
  { label: "About Us", to: "/about" },
  { label: "Be a Chef", to: "/#be-a-chef" },
  { label: "Contact Us", to: "/#contact" },
];

function PhoneSvg() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.8.3 1.6.6 2.3a2 2 0 0 1-.5 2.1L8.1 9.2a16 16 0 0 0 6.7 6.7l1.1-1.1a2 2 0 0 1 2.1-.5c.7.3 1.5.5 2.3.6A2 2 0 0 1 22 16.9Z"
        stroke="#d61f26"
        strokeWidth="2"
      />
    </svg>
  );
}

function MailSvg() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M4 4h16v16H4V4Z" stroke="#d61f26" strokeWidth="2" />
      <path d="m4 6 8 7 8-7" stroke="#d61f26" strokeWidth="2" />
    </svg>
  );
}

export default function MainHeader() {
  const [authOpen, setAuthOpen] = useState(false);
  const location = useLocation();
  const { user, logout } = useAuth();

  const isActive = (to: string) => {
    if (to === "/") return location.pathname === "/";
    if (to.startsWith("/#")) return false;
    return location.pathname === to;
  };

  return (
    <>
      <header className="header">
        <div className="container headerRow">
          <Link to="/" className="brand">
            <div className="brandMark">CS</div>
            <div className="brandText">
              <div className="brandName">ChefConnect</div>
              <div className="brandTag">Private chef booking</div>
            </div>
          </Link>

          <nav className="nav">
            {nav.map((x) =>
              x.to.startsWith("/#") ? (
                <a key={x.label} className="navLink" href={x.to}>
                  {x.label}
                </a>
              ) : (
                <Link
                  key={x.label}
                  className={`navLink ${isActive(x.to) ? "navLinkActive" : ""}`}
                  to={x.to}
                >
                  {x.label}
                </Link>
              )
            )}

            {user ? (
              <>
                <span className="navLink" style={{ fontWeight: 900, color: "#111" }}>
                  Hi, {user.name}
                </span>

                <button
                  className="navLink"
                  type="button"
                  style={{ background: "transparent", border: 0, cursor: "pointer" }}
                  onClick={logout}
                >
                  Logout
                </button>
              </>
            ) : (
              <button
                className="navLink"
                type="button"
                style={{ background: "transparent", border: 0, cursor: "pointer" }}
                onClick={() => setAuthOpen(true)}
              >
                Login/Signup
              </button>
            )}
          </nav>

          <div className="headerIcons">
            <button className="iconBtn" aria-label="phone" type="button">
              <PhoneSvg />
            </button>
            <button className="iconBtn" aria-label="email" type="button">
              <MailSvg />
            </button>
          </div>
        </div>

        <div className="hr-thick" />
      </header>

      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />
    </>
  );
}
