const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;

exports.authenticate = (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");
  if (!token) return res.status(401).json({ error: "Access denied" });

  try {
    req.user = jwt.verify(token, JWT_SECRET);
    next();
  } catch (error) {
    res.status(401).json({ error: "Invalid token" });
  }
};

exports.authorize = (roles = []) => {
    return (req,res, next) => {
        if(!roles.includes(req.user.role)) {
            return res.status(403).json({ error: 'Insufficient permissions'})
        }
        next();
    }
}
