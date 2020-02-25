const express = require("express");
const router = express.Router();
const auth = require("../../../middleware/tokenAuthentication");
const { check, validationResult } = require("express-validator");

const Profile = require("../../../models/Profile");
const User = require("../../../models/User");

// @route PUT api/profile/experience
// @desc Add experience entry to profile
// @access Private
router.put(
  "/experience",
  [
    auth,
    [
      check("jobTitle", "Job title is required.")
        .not()
        .isEmpty(),
      check("company", "Company is required.")
        .not()
        .isEmpty(),
      check("from", "From date is required.")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      jobTitle,
      company,
      companyIcon,
      location,
      from,
      to,
      current,
      description
    } = req.body;

    const newExp = {
      jobTitle,
      company,
      companyIcon,
      location,
      from,
      to,
      current,
      description
    };

    try {
      // Check whether user exists
      let user = await User.findById(req.user.id);
      if (!user) {
        return res.status(404).json({ errors: [{ msg: "User not found." }] });
      }

      const profile = await Profile.findOne({ user: req.user.id });

      // Check whether there is a profile
      if (!profile) {
        return res
          .status(404)
          .json({ errors: [{ msg: "There is no profile defined." }] });
      }

      profile.experience.unshift(newExp);
      await profile.save();

      return res.json(profile);
    } catch (err) {
      console.error(err.message);
      return res
        .status(500)
        .json({ errors: [{ msg: "Internal Server Error." }] });
    }
  }
);

// @route DELETE api/profile/experience/:exp_id
// @desc Delete profile experience entry
// @access Private
router.delete("/experience/:exp_id", auth, async (req, res) => {
  try {
    // Check whether user exists
    let user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ errors: [{ msg: "User not found." }] });
    }

    const profile = await Profile.findOne({ user: req.user.id });
    // Check whether there is a profile
    if (!profile) {
      return res
        .status(404)
        .json({ errors: [{ msg: "There is no profile defined." }] });
    }

    // Get the remove index
    const removeIndex = profile.experience
      .map(item => item.id)
      .indexOf(req.params.exp_id);

    if (removeIndex < 0) {
      return res
        .status(404)
        .json({ errors: [{ msg: "Experience entry not found." }] });
    }

    profile.experience.splice(removeIndex, 1);
    await profile.save();

    return res.send(profile);
  } catch (err) {
    console.error(err.message);
    return res
      .status(500)
      .json({ errors: [{ msg: "Internal Server Error." }] });
  }
});

module.exports = router;
