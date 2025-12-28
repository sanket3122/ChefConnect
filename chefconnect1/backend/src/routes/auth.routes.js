const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const { signToken } = require("../utils/jwt");
const { auth } = require("../middleware/auth");

const router = express.Router();

// POST /api/auth/signup
router.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body || {};

    if (!name || !email || !password) {
      return res.status(400).json({ message: "name, email, password are required" });
    }
    if (password.length < 6) {
      return res.status(400).json({ message: "password must be at least 6 characters" });
    }

    const existing = await User.findOne({ email: email.toLowerCase() });
    if (existing) return res.status(409).json({ message: "Email already in use" });

    const passwordHash = await bcrypt.hash(password, 12);

    const user = await User.create({
      name,
      email: email.toLowerCase(),
      passwordHash,
    });

    const token = signToken({ sub: user._id.toString(), email: user.email });

    return res.status(201).json({ token, user: user.toJSON() });
  } catch (err) {
    return res.status(500).json({ message: "Signup failed" });
  }
});

// POST /api/auth/login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body || {};
    if (!email || !password) {
      return res.status(400).json({ message: "email and password are required" });
    }

    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) return res.status(401).json({ message: "Invalid credentials" });

    const ok = await bcrypt.compare(password, user.passwordHash);
    if (!ok) return res.status(401).json({ message: "Invalid credentials" });

    const token = signToken({ sub: user._id.toString(), email: user.email });

    return res.json({ token, user: user.toJSON() });
  } catch {
    return res.status(500).json({ message: "Login failed" });
  }
});

// GET /api/auth/me
router.get("/me", auth, async (req, res) => {
  try {
    const userId = req.user?.sub;
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });
    return res.json({ user: user.toJSON() });
  } catch {
    return res.status(500).json({ message: "Failed" });
  }
});

module.exports = router;
