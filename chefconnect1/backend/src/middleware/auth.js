const { verifyToken } = require("../utils/jwt");

function auth(req, res, next) {
  const header = req.headers.authorization || "";
  const [type, token] = header.split(" ");

  if (type !== "Bearer" || !token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = verifyToken(token);
    req.user = decoded; // { sub: userId, email: ... }
    return next();
  } catch {
    return res.status(401).json({ message: "Invalid token" });
  }
}

module.exports = { auth };
