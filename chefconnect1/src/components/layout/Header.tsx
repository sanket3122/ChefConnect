function Icon({ children }: { children: React.ReactNode }) {
  return (
    <button
      type="button"
      aria-label="header icon"
      style={{
        width: 44,
        height: 44,
        display: "grid",
        placeItems: "center",
        border: "1px solid transparent",
        background: "transparent",
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
}

function PhoneSvg() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.8.3 1.6.6 2.3a2 2 0 0 1-.5 2.1L8.1 9.2a16 16 0 0 0 6.7 6.7l1.1-1.1a2 2 0 0 1 2.1-.5c.7.3 1.5.5 2.3.6A2 2 0 0 1 22 16.9Z" stroke="#d61f26" strokeWidth="2" />
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

function MenuSvg() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M4 6h16M4 12h16M4 18h16" stroke="#d61f26" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default function Header() {
  return (
    <header className="container" style={{ padding: "18px 0" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              width: 64,
              height: 64,
              border: "1px solid var(--border)",
              display: "grid",
              placeItems: "center",
              fontWeight: 900,
              letterSpacing: 1,
            }}
          >
            CS
          </div>
          <div style={{ lineHeight: 1.1 }}>
            <div style={{ fontWeight: 900, fontSize: 16 }}>ChefConnect</div>
            <div className="muted" style={{ fontSize: 12 }}>Private chef booking</div>
          </div>
        </div>

        <nav style={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Icon><PhoneSvg /></Icon>
          <Icon><MailSvg /></Icon>
          <Icon><MenuSvg /></Icon>
        </nav>
      </div>

      <div className="hr-thick" />
    </header>
  );
}
