import { useState } from "react";
import LoginModal from "../auth/LoginModal";

const nav = [
  "Home",
  "How It Works",
  "Reviews",
  "Event Ideas",
  "Gift Cards",
  "Blog",
  "Be a Chef",
  "Contact Us",
  "Login/Signup",
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
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <>
      <header className="header">
        <div className="container headerRow">
          <div className="brand">
            <div className="brandMark">CS</div>
            <div className="brandText">
              <div className="brandName">ChefConnect</div>
              <div className="brandTag">Private chef booking</div>
            </div>
          </div>

          <nav className="nav">
            {nav.map((x) =>
              x === "Login/Signup" ? (
                <button
                  key={x}
                  className="navLink"
                  style={{ background: "transparent", border: 0, cursor: "pointer" }}
                  onClick={() => setLoginOpen(true)}
                >
                  {x}
                </button>
              ) : (
                <a key={x} className="navLink" href="#">
                  {x}
                </a>
              )
            )}
          </nav>

          <div className="headerIcons">
            <button className="iconBtn" aria-label="phone"><PhoneSvg /></button>
            <button className="iconBtn" aria-label="email"><MailSvg /></button>
          </div>
        </div>

        <div className="hr-thick" />
      </header>

      <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} />
    </>
  );
}
