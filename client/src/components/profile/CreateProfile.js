import React, { useState, Fragment } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Typography, TextField, Button, Link } from "@material-ui/core";

import { createUpdateProfile } from "../../actions/profile";

import AddSkillForm from "./skills/AddSkillForm";
import SkillList from "./skills/SkillList";

import CreateUpdateSocialMediaInputs from "./social-media/CreateUpdateSocialMediaInputs";

const CreateProfile = ({ createUpdateProfile, history }) => {
  // States
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

  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  const { currentCompany, location, currentJobTitle, skills, bio } = formData;

  // Handle state changes
  const onRemoveSkill = (index) => {
    let list = [...skills];
    list.splice(index, 1);
    setFormData({ ...formData, ["skills"]: list });
  };

  const onAddSkill = (name, experienceLevel) => {
    let obj = {
      name: name,
      experienceLevel: experienceLevel,
    };
    let list = [...skills, obj];
    setFormData({ ...formData, ["skills"]: list });
  };

  const handleValueChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    createUpdateProfile(formData, history);
  };

  return (
    <Fragment>
      <Typography variant="h3">Create Profile</Typography>
      <form onSubmit={(e) => onSubmit(e)}>
        <div>
          <Typography variant="h6">Current Company</Typography>
          <TextField
            id="currentCompany"
            label="Company"
            value={currentCompany}
            onChange={(e) => handleValueChange(e)}
          />
        </div>
        <div>
          <Typography variant="h6">Current Job Title</Typography>
          <TextField
            id="currentJobTitle"
            label="Job title"
            value={currentJobTitle}
            onChange={(e) => handleValueChange(e)}
          />
        </div>
        <div>
          <Typography variant="h6">Current Location</Typography>
          <TextField
            id="location"
            label="Location"
            value={location}
            onChange={(e) => handleValueChange(e)}
          />
        </div>
        <div>
          <Typography variant="h6">Skills & Experience Levels</Typography>
          <AddSkillForm onAddSkill={onAddSkill} />
          <SkillList skillList={skills} onRemoveSkill={onRemoveSkill} />
        </div>
        <div>
          <Typography variant="h6">Biography</Typography>
          <TextField
            id="bio"
            label="A short bio"
            multiline
            rows={5}
            variant="outlined"
            value={bio}
            onChange={(e) => handleValueChange(e)}
          />
        </div>
        <div>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => toggleSocialInputs(!displaySocialInputs)}
          >
            Social Network Links
          </Button>
        </div>
        {displaySocialInputs ? (
          <CreateUpdateSocialMediaInputs
            handleValueChange={handleValueChange}
          />
        ) : (
          <Fragment></Fragment>
        )}
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
        <Typography>
          <Link href="/dashboard">Back</Link>
        </Typography>
      </form>
    </Fragment>
  );
};

CreateProfile.propTypes = {
  createUpdateProfile: PropTypes.func.isRequired,
};

export default connect(null, { createUpdateProfile })(
  withRouter(CreateProfile)
);
