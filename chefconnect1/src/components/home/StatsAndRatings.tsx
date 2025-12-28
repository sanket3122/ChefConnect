function StatCard() {
  return (
    <div
      className="card"
      style={{
        minHeight: 260,
        borderRadius: 18,
        background: "linear-gradient(180deg, #151515, #0b0b0b)",
        color: "white",
        padding: 22,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div style={{ fontSize: 34, fontWeight: 900, lineHeight: 1.1 }}>
        More than <span style={{ color: "var(--red)" }}>83.9k</span> users
        <br />
        have already enjoyed
        <br />
        the experience
      </div>

      <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
        <button className="btn" type="button">View Chefs</button>
        <button className="btn" type="button">Explore Menus</button>
      </div>
    </div>
  );
}

function RatingCard({ score, title, desc }: { score: string; title: string; desc: string }) {
  return (
    <div className="card" style={{ padding: 18, borderRadius: 18 }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
        <div style={{ fontSize: 22, fontWeight: 900, color: "var(--red)" }}>{score}</div>
        <div style={{ fontWeight: 900 }}>{title}</div>
      </div>
      <p className="muted" style={{ margin: "10px 0 0", lineHeight: 1.5 }}>
        {desc}
      </p>
    </div>
  );
}

export default function StatsAndRatings() {
  return (
    <div style={{ padding: "10px 0 34px" }}>
      <div
        className="grid"
        style={{
          gridTemplateColumns: "1.1fr 1fr",
          alignItems: "stretch",
        }}
      >
        <StatCard />

        <div className="grid" style={{ gridTemplateColumns: "1fr", alignContent: "start" }}>
          <RatingCard
            score="5.0"
            title="Chef Overall"
            desc="Overall score across verified bookings. Chefs are rated on professionalism, food quality, and communication."
          />
          <RatingCard
            score="5.0"
            title="Cleanliness"
            desc="A clean kitchen is part of the experience. Chefs follow prep standards and leave the cooking area tidy."
          />
          <RatingCard
            score="5.0"
            title="Reliability"
            desc="On-time arrival and consistent service. Bookings are protected with confirmation and support."
          />
        </div>
      </div>
    </div>
  );
}
