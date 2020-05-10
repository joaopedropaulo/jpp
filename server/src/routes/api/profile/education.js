const express = require("express");
const router = express.Router();
const auth = require("../../../middleware/tokenAuthentication");
const { check, validationResult } = require("express-validator");

const Profile = require("../../../models/Profile");
const User = require("../../../models/User");

// @route PUT api/profile/education
// @desc Add education entry to profile
// @access Private
router.put(
  "/education",
  [
    auth,
    [
      check("school", "School is required.").not().isEmpty(),
      check("degree", "Degree is required.").not().isEmpty(),
      check("fieldOfStudy", "Field of study is required.").not().isEmpty(),
      check("from", "From date is required.").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
    }

    const {
      school,
      degree,
      fieldOfStudy,
      from,
      to,
      current,
      description,
    } = req.body;

    const newEdu = {
      school,
      degree,
      fieldOfStudy,
      from,
      to,
      current,
      description,
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

      profile.education.unshift(newEdu);

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

// @route DELETE api/profile/education/:edu_id
// @desc Delete profile education entry
// @access Private
router.delete("/education/:edu_id", auth, async (req, res) => {
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
    const removeIndex = profile.education
      .map((item) => item.id)
      .indexOf(req.params.edu_id);

    if (removeIndex < 0) {
      return res
        .status(404)
        .json({ errors: [{ msg: "Education entry not found." }] });
    }

    profile.education.splice(removeIndex, 1);
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
