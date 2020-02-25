const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function(req, res, next) {
  // Get token from the header
  const tokenHeader = req.header("Authorization");

  // Check if not token
  if (!tokenHeader) {
    res
      .status(401)
      .json({ errors: [{ msg: "No token, authorization denied." }] });
  }

  // Verify token
  try {
    let token = tokenHeader.split(" ")[1];
    const decoded = jwt.verify(token, config.get("jwtSecret"));
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ errors: [{ msg: "Token is not valid." }] });
  }
};
