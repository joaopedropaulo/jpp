import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import connect from "react-redux";
import { Typography } from "@material-ui/core";

const CreateProfile = (props) => {
  const [formData, setFormData] = useState({
    currentCompany: "",
    location: "",
    currentJobTitle: "",
    skills: [],
    bio: "",
    youtube: "",
    instagram: "",
    linkedin: "",
    twitter: "",
    github: "",
    facebook: "",
  });

  const [numSkills, setSkillCount] = useState(0);

  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  // Need to see how to add multiple skills and experience levels
  const {
    currentCompany,
    location,
    currentJobTitle,
    skills,
    bio,
    youtube,
    instagram,
    linkedin,
    twitter,
    github,
    facebook,
  } = formData;

  const skillsArray = [];

  for (var i = 0; i < numSkills; i++) {
    skillsArray.push(
      <Fragment key={i} number={i}>
        <input type="text" placeholder="* Skills" name="skills" />
        <input
          type="text"
          placeholder="* Experience Level"
          name="experienceLevel"
        />
      </Fragment>
    );
  }

  return (
    <Fragment>
      <Typography variant="h3">Create Profile</Typography>
      <small>* = required field</small>
      <form class="form">
        <div>
          <input type="text" placeholder="Company" name="currentCompany" />
          <small class="form-text">Where do you currently work?</small>
        </div>
        <div class="form-group">
          <input type="text" placeholder="Location" name="location" />
          <small class="form-text">City & Country suggested</small>
        </div>
        <div class="form-group">
          <small class="form-text">
            Please enter a skill and corresponding experience level.
          </small>
          {skillsArray}
          <button
            type="button"
            href="#"
            onClick={() => setSkillCount(numSkills + 1)}
          >
            Add Skill
          </button>
          <button
            type="button"
            href="#"
            onClick={() =>
              numSkills == 0 ? setSkillCount(0) : setSkillCount(numSkills - 1)
            }
          >
            Remove Skill
          </button>
        </div>
        <div class="form-group">
          <textarea placeholder="A short bio of yourself" name="bio"></textarea>
          <small class="form-text">Tell us a little about yourself</small>
        </div>

        <div class="my-2">
          <button
            type="button"
            class="btn btn-light"
            onClick={() => toggleSocialInputs(!displaySocialInputs)}
          >
            Add Social Network Links
          </button>
          <span>Optional</span>
        </div>
        {displaySocialInputs ? (
          <Fragment>
            <div class="form-group social-input">
              <i class="fab fa-twitter fa-2x"></i>
              <input type="text" placeholder="Twitter URL" name="twitter" />
            </div>

            <div class="form-group social-input">
              <i class="fab fa-facebook fa-2x"></i>
              <input type="text" placeholder="Facebook URL" name="facebook" />
            </div>

            <div class="form-group social-input">
              <i class="fab fa-youtube fa-2x"></i>
              <input type="text" placeholder="YouTube URL" name="youtube" />
            </div>

            <div class="form-group social-input">
              <i class="fab fa-linkedin fa-2x"></i>
              <input type="text" placeholder="Linkedin URL" name="linkedin" />
            </div>

            <div class="form-group social-input">
              <i class="fab fa-instagram fa-2x"></i>
              <input type="text" placeholder="Instagram URL" name="instagram" />
            </div>
            <div class="form-group social-input">
              <i class="fab fa-instagram fa-2x"></i>
              <input type="text" placeholder="Github URL" name="github" />
            </div>
          </Fragment>
        ) : (
          <Fragment></Fragment>
        )}

        <input type="submit" class="btn btn-primary my-1" />
        <a class="btn btn-light my-1" href="dashboard.html">
          Go Back
        </a>
      </form>
    </Fragment>
  );
};

CreateProfile.propTypes = {};

export default CreateProfile;
