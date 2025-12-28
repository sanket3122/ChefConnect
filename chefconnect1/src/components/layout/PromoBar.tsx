export default function PromoBar() {
  return (
    <div
      style={{
        background: "linear-gradient(90deg, #b90f17, #2a0000)",
        color: "white",
        padding: "10px 0",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 14,
          flexWrap: "wrap",
        }}
      >
        <div style={{ fontWeight: 800 }}>Your Private Chef Experience Begins Here</div>
        <button className="btn" type="button">View Chefs and Menus</button>
      </div>
    </div>
  );
}
