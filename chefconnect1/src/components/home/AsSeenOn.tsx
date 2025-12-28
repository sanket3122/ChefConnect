const brands = ["The New York Times", "ABC", "CBS", "FOX", "NBC", "BuzzFeed"];

export default function AsSeenOn() {
  return (
    <div style={{ padding: "18px 0 10px" }}>
      <h2 className="sectionTitle">
        As <span className="accent">Seen</span> On
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(6, minmax(0, 1fr))",
          gap: 18,
          alignItems: "center",
          opacity: 0.5,
          padding: "10px 0 6px",
        }}
      >
        {brands.map((b) => (
          <div
            key={b}
            style={{
              textAlign: "center",
              fontWeight: 800,
              color: "#666",
              letterSpacing: 0.2,
              fontSize: 16,
              userSelect: "none",
            }}
          >
            {b}
          </div>
        ))}
      </div>
    </div>
  );
}
