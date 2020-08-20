import React, { useState, useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import {
  Typography,
  TextField,
  Button,
  Grid,
  Container,
  Box,
  Paper,
  makeStyles,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { createUpdateProfile, getCurrentProfile } from "../../actions/profile";
import AddSkillForm from "./skills/AddSkillForm";
import SkillList from "./skills/SkillList";
import CreateUpdateSocialMediaInputs from "./social-media/CreateUpdateSocialMediaInputs";
import styles from "../../styles/Styles";

const useStyles = makeStyles((theme) => styles(theme));

const CreateUpdateProfile = ({
  profile: { profile, loading },
  createUpdateProfile,
  getCurrentProfile,
  history,
}) => {
  useEffect(() => {
    getCurrentProfile();

    if (profile !== null) {
      setFormData({
        currentCompany:
          loading || !profile.currentCompany ? "" : profile.currentCompany,
        location: loading || !profile.location ? "" : profile.location,
        currentJobTitle:
          loading || !profile.currentJobTitle ? "" : profile.currentJobTitle,
        profilePicURL:
          loading || !profile.profilePicURL ? "" : profile.profilePicURL,
        profileBackgroundImageURL:
          loading || !profile.profileBackgroundImageURL
            ? ""
            : profile.profileBackgroundImageURL,
        skills: loading || !profile.skills ? [] : profile.skills,
        bio: loading || !profile.bio ? "" : profile.bio,
        youtube: loading || !profile.social ? "" : profile.social.youtube,
        instagram: loading || !profile.social ? "" : profile.social.instagram,
        linkedin: loading || !profile.social ? "" : profile.social.linkedin,
        twitter: loading || !profile.social ? "" : profile.social.twitter,
        github: loading || !profile.social ? "" : profile.social.github,
        facebook: loading || !profile.social ? "" : profile.social.facebook,
      });
      setIsUpdate(true);
    } else {
      setIsUpdate(false);
    }
  }, [loading]);

  const classes = useStyles();

  // States
  const [isUpdate, setIsUpdate] = useState(false);

  const [formData, setFormData] = useState({
    currentCompany: "",
    location: "",
    currentJobTitle: "",
    profilePicURL: "",
    profileBackgroundImageURL: "",
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

  const {
    currentCompany,
    location,
    currentJobTitle,
    profilePicURL,
    profileBackgroundImageURL,
    skills,
    bio,
  } = formData;

  // Update state
  const onRemoveSkill = (index) => {
    let list = [...skills];
    list.splice(index, 1);
    setFormData({ ...formData, skills: list });
  };

  const onAddSkill = (name, experienceLevel) => {
    let obj = {
      name: name,
      experienceLevel: experienceLevel,
    };
    let list = [...skills, obj];
    setFormData({ ...formData, skills: list });
  };

  const handleValueChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Helper
  const isProfileUpdate = () => {
    return currentCompany !== "" ||
      currentJobTitle !== "" ||
      profilePicURL !== "" ||
      profileBackgroundImageURL !== "" ||
      location !== "" ||
      bio !== "" ||
      (skills && skills.length > 0)
      ? true
      : false;
  };

  // Actions to be taken to the backend
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(isUpdate);
    createUpdateProfile(formData, history, isUpdate);
  };

  return (
    <Box className={classes.editModeContainers}>
      <Grid container justify="flex-start" spacing={2}>
        <Grid item xs={12}>
          <Box className={classes.editModeHeadersContainers}>
            {isProfileUpdate() ? (
              <Typography variant="h4">Edit Profile</Typography>
            ) : (
              <Typography variant="h4">Create Profile</Typography>
            )}
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper className={classes.editModePaperContainers}>
            <Container maxWidth="sm">
              <form onSubmit={(e) => onSubmit(e)}>
                <Box className={classes.editModeTextInputContainers}>
                  <TextField
                    fullWidth
                    id="currentCompany"
                    label="Current Company"
                    value={currentCompany}
                    onChange={(e) => handleValueChange(e)}
                  />
                </Box>
                <Box className={classes.editModeTextInputContainers}>
                  <TextField
                    fullWidth
                    id="currentJobTitle"
                    label="Current Job title"
                    value={currentJobTitle}
                    onChange={(e) => handleValueChange(e)}
                  />
                </Box>
                <Box className={classes.editModeTextInputContainers}>
                  <TextField
                    fullWidth
                    id="location"
                    label="Location"
                    value={location}
                    onChange={(e) => handleValueChange(e)}
                  />
                </Box>
                <Box className={classes.editModeTextInputContainers}>
                  <TextField
                    fullWidth
                    id="profilePicURL"
                    label="Profile Picture URL"
                    value={profilePicURL}
                    onChange={(e) => handleValueChange(e)}
                  />
                </Box>
                <Box className={classes.editModeTextInputContainers}>
                  <TextField
                    fullWidth
                    id="profileBackgroundImageURL"
                    label="Profile Background Image URL"
                    value={profileBackgroundImageURL}
                    onChange={(e) => handleValueChange(e)}
                  />
                </Box>
                <Box className={classes.editModeTextInputContainers}>
                  <AddSkillForm onAddSkill={onAddSkill} />
                  <SkillList skillList={skills} onRemoveSkill={onRemoveSkill} />
                </Box>
                <Box className={classes.editModeTextInputContainers}>
                  <TextField
                    fullWidth
                    id="bio"
                    label="A short bio"
                    multiline
                    cols={30}
                    rows={5}
                    variant="outlined"
                    value={bio}
                    onChange={(e) => handleValueChange(e)}
                  />
                </Box>
                <Box className={classes.editModeTextInputContainers}>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => toggleSocialInputs(!displaySocialInputs)}
                  >
                    <ExpandMoreIcon /> Social Network Links
                  </Button>
                </Box>
                {displaySocialInputs ? (
                  <CreateUpdateSocialMediaInputs
                    handleValueChange={handleValueChange}
                    social={profile ? profile.social : {}}
                  />
                ) : (
                  <Fragment></Fragment>
                )}
                <Box py={2}>
                  <Grid justify="space-between" container spacing={2}>
                    <Grid item>
                      <Button
                        variant="contained"
                        color="secondary"
                        href="/dashboard"
                        size="large"
                      >
                        Back
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        size="large"
                      >
                        Save
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </form>
            </Container>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

CreateUpdateProfile.propTypes = {
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
})(withRouter(CreateUpdateProfile));
