import React, { useState, useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import {
  Typography,
  TextField,
  Button,
  Link,
  Checkbox,
  Grid,
  Container,
  Box,
  Paper,
} from "@material-ui/core";
import { createUpdateProfile, getCurrentProfile } from "../../actions/profile";
import AddSkillForm from "./skills/AddSkillForm";
import SkillList from "./skills/SkillList";
import CreateUpdateSocialMediaInputs from "./social-media/CreateUpdateSocialMediaInputs";
import useStyles from "../../styles/Styles";

const EditProfile = ({
  profile: { profile, loading },
  createUpdateProfile,
  getCurrentProfile,
  history,
}) => {
  useEffect(() => {
    getCurrentProfile();

    setFormData({
      currentCompany:
        loading || !profile.currentCompany ? "" : profile.currentCompany,
      location: loading || !profile.location ? "" : profile.location,
      currentJobTitle:
        loading || !profile.currentJobTitle ? "" : profile.currentJobTitle,
      skills: loading || !profile.skills ? [] : profile.skills,
      bio: loading || !profile.bio ? "" : profile.bio,
      youtube: loading || !profile.social ? "" : profile.social.youtube,
      instagram: loading || !profile.social ? "" : profile.social.instagram,
      linkedin: loading || !profile.social ? "" : profile.social.linkedin,
      twitter: loading || !profile.social ? "" : profile.social.twitter,
      github: loading || !profile.social ? "" : profile.social.github,
      facebook: loading || !profile.social ? "" : profile.social.facebook,
    });
  }, [loading]);

  const classes = useStyles();

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

  // Update state
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

  // Helper
  const isProfileUpdate = () => {
    return currentCompany != "" ||
      currentJobTitle != "" ||
      location != "" ||
      bio != "" ||
      skills
      ? true
      : false;
  };

  // Actions to be taken to the backend
  const onSubmit = (e) => {
    e.preventDefault();
    createUpdateProfile(formData, history, isProfileUpdate());
  };

  return (
    <Box className={classes.editModeContainers}>
      <Grid container justify="flex-start" spacing={2}>
        <Grid item xs={12}>
          <Box className={classes.editModeHeadersContainers}>
            {isProfileUpdate() ? (
              <Typography variant="h3">Edit Profile</Typography>
            ) : (
              <Typography variant="h3">Create Profile</Typography>
            )}
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper className={classes.editModePaperContainers}>
            <Container maxWidth="sm">
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
                  <Typography variant="h6">
                    Skills & Experience Levels
                  </Typography>
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
                    social={profile.social}
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
            </Container>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

EditProfile.propTypes = {
  createUpdateProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, {
  createUpdateProfile,
  getCurrentProfile,
})(withRouter(EditProfile));
