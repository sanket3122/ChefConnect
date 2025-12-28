require("dotenv").config();
const { createApp } = require("./app");
const { connectDB } = require("./config/db");

async function start() {
  await connectDB(process.env.MONGO_URI);

  const app = createApp();
  const port = process.env.PORT || 5050;

  app.listen(port, () => {
    console.log(` API running on http://localhost:${port}`);
  });
}

start().catch((err) => {
  console.error("Server failed:", err.message);
  process.exit(1);
});
