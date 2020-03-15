const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const signToken = require("../../../utils/authUtils");

const auth = require("../../../middleware/tokenAuthentication");

const User = require("../../../models/User");

const { check, validationResult } = require("express-validator");

// @route GET api/auth
// @desc Test route
// @access Public
router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    return res.json(user);
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ errors: [{ msg: "Internal Server Error." }] });
  }
});

// @route POST api/auth
// @desc Authenticate User and get token
// @access Public
router.post(
  "/",
  [
    check("email", "Please include a valid email.").isEmail(),
    check("password", "Please enter a password.").exists()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      // Check if user exists
      let user = await User.findOne({ email });

      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid credentials." }] });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid credentials." }] });
      }

      const payload = {
        user: {
          id: user.id
        }
      };

      // Create token
      return signToken(payload, res);
    } catch (err) {
      console.error(err.message);
      return res
        .status(500)
        .json({ errors: [{ msg: "Internal Server Error." }] });
    }
  }
);

module.exports = router;
