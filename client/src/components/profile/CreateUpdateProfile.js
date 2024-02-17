import React, { useState, useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Typography,
  TextField,
  Button,
  Grid,
  Container,
  Box,
  Paper,
  makeStyles,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {
  createProfile,
  updateProfile,
  getCurrentProfile,
} from '../../actions/profile';
import AddSkillForm from './skills/AddSkillForm';
import AddLanguageForm from './languages/AddLanguageForm';
import AddInterestForm from './interests/AddInterestForm';
import SkillList from './skills/SkillList';
import LanguageList from './languages/LanguageList';
import CreateUpdateSocialMediaInputs from './social-media/CreateUpdateSocialMediaInputs';
import styles from '../../styles/Styles';
import InterestList from './interests/InterestList';
import { loadUser } from '../../actions/auth';
import store from '../../store';

const useStyles = makeStyles((theme) => styles(theme));

const CreateUpdateProfile = ({
  profile: { profile, loading },
  updateProfile,
  createProfile,
  getCurrentProfile,
  history,
}) => {
  useEffect(() => {
    getCurrentProfile();
    store.dispatch(loadUser());

    if (profile !== null) {
      setFormData({
        currentCompany:
          loading || !profile.currentCompany ? '' : profile.currentCompany,
        location: loading || !profile.location ? '' : profile.location,
        currentJobTitle:
          loading || !profile.currentJobTitle ? '' : profile.currentJobTitle,
        profilePicUrl:
          loading || !profile.profilePicUrl ? '' : profile.profilePicUrl,
        profileBackgroundImageUrl:
          loading || !profile.profileBackgroundImageUrl
            ? ''
            : profile.profileBackgroundImageUrl,
        profileMobileBackgroundImageUrl:
          loading || !profile.profileMobileBackgroundImageUrl
            ? ''
            : profile.profileMobileBackgroundImageUrl,
        profileLargeBackgroundImageUrl:
          loading || !profile.profileLargeBackgroundImageUrl
            ? ''
            : profile.profileLargeBackgroundImageUrl,
        skills: loading || !profile.skills ? [] : profile.skills,
        languages: loading || !profile.languages ? [] : profile.languages,
        professionalInterests:
          loading || !profile.professionalInterests
            ? []
            : profile.professionalInterests,
        personalInterests:
          loading || !profile.personalInterests
            ? []
            : profile.personalInterests,
        bio: loading || !profile.bio ? '' : profile.bio,
        generateResumeUrl:
          loading || !profile.generateResumeUrl
            ? ''
            : profile.generateResumeUrl,
        resumeHtmlTemplate:
          loading || !profile.resumeHtmlTemplate
            ? ''
            : profile.resumeHtmlTemplate,
        displayTitleName:
          loading || !profile.displayTitleName ? '' : profile.displayTitleName,
        youtube: loading || !profile.social ? '' : profile.social.youtube,
        instagram: loading || !profile.social ? '' : profile.social.instagram,
        linkedin: loading || !profile.social ? '' : profile.social.linkedin,
        twitter: loading || !profile.social ? '' : profile.social.twitter,
        github: loading || !profile.social ? '' : profile.social.github,
        facebook: loading || !profile.social ? '' : profile.social.facebook,
      });
      setIsUpdate(true);
    } else {
      setIsUpdate(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  const classes = useStyles();

  // States
  const [isUpdate, setIsUpdate] = useState(false);

  const [formData, setFormData] = useState({
    currentCompany: '',
    location: '',
    currentJobTitle: '',
    profilePicUrl: '',
    profileBackgroundImageUrl: '',
    profileMobileBackgroundImageUrl: '',
    profileLargeBackgroundImageUrl: '',
    skills: [],
    languages: [],
    professionalInterests: [],
    personalInterests: [],
    bio: '',
    generateResumeUrl: '',
    resumeHtmlTemplate: '',
    displayTitleName: '',
    youtube: '',
    instagram: '',
    linkedin: '',
    twitter: '',
    github: '',
    facebook: '',
  });

  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  const {
    currentCompany,
    location,
    currentJobTitle,
    profilePicUrl,
    profileBackgroundImageUrl,
    profileMobileBackgroundImageUrl,
    profileLargeBackgroundImageUrl,
    skills,
    languages,
    professionalInterests,
    personalInterests,
    bio,
    generateResumeUrl,
    resumeHtmlTemplate,
    displayTitleName,
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

  const onRemoveLanguage = (index) => {
    let list = [...languages];
    list.splice(index, 1);
    setFormData({ ...formData, languages: list });
  };

  const onAddLanguage = (name, level) => {
    let obj = {
      name: name,
      level: level,
    };
    let list = [...languages, obj];
    setFormData({ ...formData, languages: list });
  };

  const onRemoveProfessionalInterest = (index) => {
    let list = [...professionalInterests];
    list.splice(index, 1);
    setFormData({ ...formData, professionalInterests: list });
  };

  const onAddProfessionalInterest = (value) => {
    let list = [...professionalInterests, value];
    setFormData({ ...formData, professionalInterests: list });
  };

  const onRemovePersonalInterest = (index) => {
    let list = [...personalInterests];
    list.splice(index, 1);
    setFormData({ ...formData, personalInterests: list });
  };

  const onAddPersonalInterest = (value) => {
    let list = [...personalInterests, value];
    setFormData({ ...formData, personalInterests: list });
  };

  const handleValueChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Helper
  const isProfileUpdate = () => {
    return currentCompany !== '' ||
      currentJobTitle !== '' ||
      profilePicUrl !== '' ||
      profileBackgroundImageUrl !== '' ||
      profileMobileBackgroundImageUrl !== '' ||
      profileLargeBackgroundImageUrl !== '' ||
      location !== '' ||
      bio !== '' ||
      generateResumeUrl !== '' ||
      resumeHtmlTemplate !== '' ||
      displayTitleName !== '' ||
      (skills && skills.length > 0) ||
      (languages && languages.length > 0) ||
      (professionalInterests && professionalInterests.length > 0) ||
      (personalInterests && personalInterests.length > 0)
      ? true
      : false;
  };

  // Actions to be taken to the backend
  const onSubmit = (e) => {
    e.preventDefault();
    const {
      youtube,
      instagram,
      linkedin,
      twitter,
      github,
      facebook,
      ...updatedFormFields
    } = formData;
    const social = {
      youtube: youtube || '',
      instagram: instagram || '',
      linkedin: linkedin || '',
      twitter: twitter || '',
      github: github || '',
      facebook: facebook || '',
    };
    const newProfile = { ...profile, ...updatedFormFields, social };
    if (isUpdate) {
      updateProfile(newProfile, history);
    } else {
      createProfile(newProfile, history);
    }
  };

  return (
    <Box className={classes.editModeContainers}>
      <Grid container justifyContent="flex-start" spacing={2}>
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
                    id="profilePicUrl"
                    label="Profile Picture URL"
                    value={profilePicUrl}
                    onChange={(e) => handleValueChange(e)}
                  />
                </Box>
                <Box className={classes.editModeTextInputContainers}>
                  <TextField
                    fullWidth
                    id="profileBackgroundImageUrl"
                    label="Profile Background Image URL"
                    value={profileBackgroundImageUrl}
                    onChange={(e) => handleValueChange(e)}
                  />
                </Box>
                <Box className={classes.editModeTextInputContainers}>
                  <TextField
                    fullWidth
                    id="profileMobileBackgroundImageUrl"
                    label="Profile Background Image URL for Mobile devices"
                    value={profileMobileBackgroundImageUrl}
                    onChange={(e) => handleValueChange(e)}
                  />
                </Box>
                <Box className={classes.editModeTextInputContainers}>
                  <TextField
                    fullWidth
                    id="profileLargeBackgroundImageUrl"
                    label="Profile Background Image URL for Large devices"
                    value={profileLargeBackgroundImageUrl}
                    onChange={(e) => handleValueChange(e)}
                  />
                </Box>
                <Box className={classes.editModeTextInputContainers}>
                  <AddSkillForm onAddSkill={onAddSkill} />
                  <SkillList skillList={skills} onRemoveSkill={onRemoveSkill} />
                </Box>
                <Box className={classes.editModeTextInputContainers}>
                  <AddLanguageForm onAddLanguage={onAddLanguage} />
                  <LanguageList
                    languageList={languages}
                    onRemoveLanguage={onRemoveLanguage}
                  />
                </Box>
                <Box className={classes.editModeTextInputContainers}>
                  <AddInterestForm
                    onAddInterest={onAddProfessionalInterest}
                    label="Professional Interests"
                  />
                  <InterestList
                    interestList={professionalInterests}
                    onRemoveInterest={onRemoveProfessionalInterest}
                    label="Professional Interests"
                  />
                </Box>
                <Box className={classes.editModeTextInputContainers}>
                  <AddInterestForm
                    onAddInterest={onAddPersonalInterest}
                    label="Personal Interests"
                  />
                  <InterestList
                    interestList={personalInterests}
                    onRemoveInterest={onRemovePersonalInterest}
                    label="Personal Interests"
                  />
                </Box>
                <Box className={classes.editModeTextInputContainers}>
                  <TextField
                    fullWidth
                    id="bio"
                    label="A short bio"
                    multiline
                    cols={30}
                    minRows={5}
                    variant="outlined"
                    value={bio}
                    onChange={(e) => handleValueChange(e)}
                  />
                </Box>
                <Box className={classes.editModeTextInputContainers}>
                  <TextField
                    fullWidth
                    id="generateResumeUrl"
                    label="URL for Resume Generation"
                    value={generateResumeUrl}
                    onChange={(e) => handleValueChange(e)}
                  />
                </Box>
                <Box className={classes.editModeTextInputContainers}>
                  <TextField
                    fullWidth
                    id="resumeHtmlTemplate"
                    label="HTML template for Resume generation"
                    multiline
                    cols={30}
                    minRows={5}
                    variant="outlined"
                    value={resumeHtmlTemplate}
                    onChange={(e) => handleValueChange(e)}
                  />
                </Box>
                <Box className={classes.editModeTextInputContainers}>
                  <TextField
                    fullWidth
                    id="displayTitleName"
                    label="Title to display"
                    value={displayTitleName}
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
                  <Grid justifyContent="space-between" container spacing={2}>
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
  updateProfile: PropTypes.func.isRequired,
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, {
  updateProfile,
  createProfile,
  getCurrentProfile,
})(withRouter(CreateUpdateProfile));
