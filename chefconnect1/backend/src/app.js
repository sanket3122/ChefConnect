const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth.routes");

function createApp() {
  const app = express();

  app.use(
    cors({
      origin: process.env.CORS_ORIGIN || "http://localhost:5173",
      credentials: true,
    })
  );

  app.use(express.json({ limit: "1mb" }));
  app.use(express.urlencoded({ extended: false }));

  // tiny request logger (helps when “response not coming”)
  app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
  });

  app.get("/health", (req, res) => res.json({ ok: true }));

  app.use("/api/auth", authRoutes);

  return app;
}

module.exports = { createApp };
