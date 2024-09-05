const jwt = require("jsonwebtoken");

const jwtAuthMiddleware = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (!authorization)
    return res.status(401).json({ error: "Token Not Found..." });

  const token = req.headers.authorization.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Unauthorized...." });
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });
    res.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: "Invalid Token..." });
  }
};

const generateToken = (userData) => {
  const token = jwt.sign({ user: userData }, process.env.SECRET_KEY, {
    expiresIn: "1h",
  });
  return token;
};

module.exports = { jwtAuthMiddleware, generateToken };
