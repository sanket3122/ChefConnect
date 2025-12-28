function MiniIcon({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        width: 46,
        height: 46,
        borderRadius: 999,
        border: "1px solid #f2c8ca",
        background: "#fff5f5",
        display: "grid",
        placeItems: "center",
      }}
    >
      {children}
    </div>
  );
}

function ShieldSvg() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M12 2 20 6v6c0 5-3.4 9.4-8 10-4.6-.6-8-5-8-10V6l8-4Z" stroke="#d61f26" strokeWidth="2" />
    </svg>
  );
}
function LockSvg() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M7 11V8a5 5 0 0 1 10 0v3" stroke="#d61f26" strokeWidth="2" />
      <path d="M6 11h12v10H6V11Z" stroke="#d61f26" strokeWidth="2" />
    </svg>
  );
}
function CardSvg() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M3 7h18v10H3V7Z" stroke="#d61f26" strokeWidth="2" />
      <path d="M3 10h18" stroke="#d61f26" strokeWidth="2" />
    </svg>
  );
}
function ChatSvg() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M4 4h16v12H7l-3 3V4Z" stroke="#d61f26" strokeWidth="2" />
      <path d="M7 8h10M7 12h7" stroke="#d61f26" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

const items = [
  { title: "Certified Chefs", icon: <ShieldSvg /> },
  { title: "Insurance", icon: <LockSvg /> },
  { title: "Payment Protection", icon: <CardSvg /> },
  { title: "Customer Care", icon: <ChatSvg /> },
];

export default function GuaranteeStrip() {
  return (
    <div style={{ padding: "10px 0 18px" }}>
      <div className="subTitleCenter">
        Culinary<span style={{ color: "var(--red)" }}>Slot</span> Guarantee
      </div>

      <div
        className="grid"
        style={{
          gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
          alignItems: "center",
          marginTop: 14,
        }}
      >
        {items.map((it) => (
          <div
            key={it.title}
            style={{
              display: "flex",
              gap: 12,
              alignItems: "center",
              justifyContent: "center",
              padding: "10px 8px",
            }}
          >
            <MiniIcon>{it.icon}</MiniIcon>
            <div style={{ fontWeight: 800 }}>{it.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
