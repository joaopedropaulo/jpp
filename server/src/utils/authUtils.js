const jwt = require("jsonwebtoken");
const config = require("config");

const signToken = function(payload, res) {
  jwt.sign(
    payload,
    config.get("jwtSecret"),
    { expiresIn: config.get("tokenExpirationTime") },
    (err, token) => {
      if (err) {
        throw err;
      }
      res.json({ token });
    }
  );
};

module.exports = signToken;
