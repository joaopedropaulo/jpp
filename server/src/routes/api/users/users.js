const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const signToken = require("../../../utils/authUtils");
const config = require("config");
const jwt = require("jsonwebtoken");

const { check, validationResult } = require("express-validator");

const User = require("../../../models/User");

// @route POST api/users
// @desc Register User - if a user already exists in the DB, then it is not possible to register another one.
// @access Public
router.post(
  "/",
  [
    check("name", "Name is a required field.").not().isEmpty(),
    check("email", "Please include a valid email.").isEmail(),
    check(
      "password",
      "Please enter a password with 8 or more characters."
    ).isLength({ min: 8 }),
  ],
  async (req, res) => {
    let user = await User.findOne();
    if (user) {
      return res
        .status(500)
        .json({ errors: [{ msg: "Internal Server Error." }] });
    }

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      user = new User({
        name,
        email,
        password,
      });

      // Encrypt password
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      // Save user in DB
      await user.save();

      // Prepare response
      const payload = {
        user: {
          id: user.id,
        },
      };

      // Create token
      signToken(payload, res);
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ errors: [{ msg: "Internal Server Error." }] });
    }
  }
);

module.exports = router;
