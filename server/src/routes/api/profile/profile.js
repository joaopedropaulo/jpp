const express = require("express");
const router = express.Router();
const auth = require("../../../middleware/tokenAuthentication");
const { check, validationResult } = require("express-validator");

const Profile = require("../../../models/Profile");
const User = require("../../../models/User");

// @route GET api/profile
// @desc Gets the profile of the registered user
// @access Public
router.get("/", async (req, res) => {
  try {
    const profile = await Profile.findOne();

    if (!profile) {
      return res.status(400).json({ errors: [{ msg: "Profile not found." }] });
    }

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    if (err.kind == "ObjectId") {
      return res.status(400).json({ errors: [{ msg: "Profile not found." }] });
    }
    res.status(500).json({ errors: [{ msg: "Internal Server Error." }] });
  }
});

// @route POST api/profile
// @desc Create or update a profile
// @access Private
router.post(
  "/",
  [
    auth,
    [
      check("skills", "Skills are not properly formatted.").isArray(),
      check("skills", "Skills cannot be empty.").notEmpty(),
      check("skills.*.name", "Skill name is required.").notEmpty(),
      check(
        "skills.*.experienceLevel",
        "Experience level must be a number between 1 and 5."
      ).isIn([1, 2, 3, 4, 5]),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      currentCompany,
      location,
      currentJobTitle,
      profilePicURL,
      profileBackgroundImageURL,
      profileMobileBackgroundImageURL,
      skills,
      bio,
      youtube,
      facebook,
      twitter,
      instagram,
      linkedin,
      github,
    } = req.body;

    // Build profile object
    const profileFields = {};

    profileFields.user = req.user.id;
    if (currentCompany) {
      profileFields.currentCompany = currentCompany;
    }
    if (location) {
      profileFields.location = location;
    }
    if (currentJobTitle) {
      profileFields.currentJobTitle = currentJobTitle;
    }
    if (profilePicURL) {
      profileFields.profilePicURL = profilePicURL;
    }
    if (profileBackgroundImageURL) {
      profileFields.profileBackgroundImageURL = profileBackgroundImageURL;
    }
    if (profileMobileBackgroundImageURL) {
      profileFields.profileMobileBackgroundImageURL = profileMobileBackgroundImageURL;
    }
    if (skills) {
      profileFields.skills = skills;
    }
    if (bio) {
      profileFields.bio = bio;
    }

    // Build social object
    profileFields.social = {};
    if (youtube) {
      profileFields.social.youtube = youtube;
    }
    if (twitter) {
      profileFields.social.twitter = twitter;
    }
    if (facebook) {
      profileFields.social.facebook = facebook;
    }
    if (linkedin) {
      profileFields.social.linkedin = linkedin;
    }
    if (instagram) {
      profileFields.social.instagram = instagram;
    }
    if (github) {
      profileFields.social.github = github;
    }

    try {
      // Check whether user exists
      let user = await User.findById(req.user.id);
      if (!user) {
        return res.status(404).json({ errors: [{ msg: "User not found." }] });
      }

      // Check whether there is a profile already
      let profile = await Profile.findOne({ user: req.user.id });
      if (profile) {
        //Update
        profile = await Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        );
        return res.json(profile);
      }

      // Create
      profileFields.email = user.email;
      profile = new Profile(profileFields);
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

// @route DELETE api/profile
// @desc Delete user profile
// @access Private
router.delete("/", auth, async (req, res) => {
  try {
    let user = await User.findById(req.user.id);
    // Check whether user exists
    if (!user) {
      return res.status(404).json({ errors: [{ msg: "User not found." }] });
    }

    let profile = await Profile.findOne({ user: req.user.id });
    // Check whether there is a profile
    if (!profile) {
      return res
        .status(404)
        .json({ errors: [{ msg: "Profile does not exist." }] });
    }

    // Remove profile
    await Profile.findOneAndRemove({
      user: req.user.id,
    });

    return res.json({ msg: "User profile deleted." });
  } catch (err) {
    console.error(err.message);
    return res
      .status(500)
      .json({ errors: [{ msg: "Internal Server Error." }] });
  }
});

module.exports = router;
