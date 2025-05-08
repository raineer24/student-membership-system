const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const { JWT_SECRET } = process.env;

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = User.findByEmail(email);
  if (!user) return res.status(401).json({ error: "Invalid credentials" });

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword)
    return res.status(401).json({ error: "Invalid Credentials" });

  const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, {
    expiresIn: "1h",
  });

  res.json({ token, role: user.role });
};
exports.register = async (req, res) => {
  const { email, password, role } = req.body;

  // Validate input
  if (!email || password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  // Check if user exists
  if(User.findByEmail(email)) {
    return res.status(400).json({ error: 'Email and password are required'});
  }

  try {
    const newUser = await User.create({email, password, role});
    res.status(201).json({
        id: newUser.id,
        email: newUser.email,
        role: newUser.role
    });
  } catch (error) {
    res.status(500).json({ error: 'Registration failed'});
  }


};
