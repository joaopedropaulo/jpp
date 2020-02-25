const express = require("express");
const router = express.Router();
const auth = require("../../../middleware/tokenAuthentication");
const { check, validationResult } = require("express-validator");

const Profile = require("../../../models/Profile");
const User = require("../../../models/User");

// @route PUT api/profile/generic
// @desc Add a generic entry to profile
// @access Private
router.put(
  "/generic",
  [
    auth,
    [
      check("title", "Title is required.")
        .not()
        .isEmpty(),
      check("body", "Body is required.")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
    }

    const { title, subtitle, body, media } = req.body;

    const newGenericSection = {
      title,
      subtitle,
      body,
      media
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

      profile.genericSections.unshift(newGenericSection);

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

// @route DELETE api/profile/generic/:gen_id
// @desc Delete profile generic entry
// @access Private
router.delete("/generic/:gen_id", auth, async (req, res) => {
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
    const removeIndex = profile.genericSections
      .map(item => item.id)
      .indexOf(req.params.gen_id);

    if (removeIndex < 0) {
      return res
        .status(404)
        .json({ errors: [{ msg: "Generic sections entry not found." }] });
    }

    profile.genericSections.splice(removeIndex, 1);
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
