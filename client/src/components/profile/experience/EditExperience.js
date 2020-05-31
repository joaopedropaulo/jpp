import React, { Fragment, useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  addExperience,
  removeExperience,
  getCurrentProfile,
} from "../../../actions/profile";
import ExperienceTable from "./ExperienceTable";

import {
  Typography,
  TextField,
  Button,
  Checkbox,
  Grid,
  Container,
  Box,
} from "@material-ui/core";

const EditExperience = ({
  addExperience,
  removeExperience,
  getCurrentProfile,
  profile: { profile, loading },
  history,
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [loading]);

  const [formData, setFormData] = useState({
    company: "",
    companyIcon: "",
    jobTitle: "",
    location: "",
    from: "",
    to: "",
    current: false,
    description: "",
  });

  const [isCurrentJob, toggleIsCurrentJob] = useState(false);

  const {
    company,
    companyIcon,
    jobTitle,
    location,
    from,
    to,
    current,
    description,
  } = formData;

  const cleanUpForm = () => {
    setFormData({
      company: "",
      companyIcon: "",
      jobTitle: "",
      location: "",
      from: "",
      to: "",
      current: false,
      description: "",
    });
  };

  const onRemoveExperience = (index) => {
    removeExperience(profile.experience[index]._id);
  };

  const handleValueChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addExperience(formData, history);
    cleanUpForm();
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Container maxWidth="sm">
          <Typography variant="h3">Edit Experience</Typography>
        </Container>
      </Grid>
      <Grid item xs={8} />
      <Grid item xs={4}>
        <Container maxWidth="sm">
          <form onSubmit={(e) => onSubmit(e)}>
            <Box>
              <Typography variant="h6">Job Title</Typography>
              <TextField
                fullWidth
                type="text"
                label="Job Title"
                id="jobTitle"
                value={jobTitle}
                onChange={(e) => handleValueChange(e)}
              />
            </Box>
            <Box>
              <Typography variant="h6">Company</Typography>
              <TextField
                fullWidth
                type="text"
                label="Company"
                id="company"
                value={company}
                onChange={(e) => handleValueChange(e)}
              />
            </Box>
            <Box>
              <Typography variant="h6">Company Icon URL</Typography>
              <TextField
                fullWidth
                type="text"
                label="Company Icon URL"
                id="companyIcon"
                value={companyIcon}
                onChange={(e) => handleValueChange(e)}
              />
            </Box>
            <Box>
              <Typography variant="h6">Location</Typography>
              <TextField
                fullWidth
                type="text"
                label="Location"
                id="location"
                value={location}
                onChange={(e) => handleValueChange(e)}
              />
            </Box>
            <Box>
              <Typography variant="h6">From Date</Typography>
              <TextField
                fullWidth
                type="date"
                id="from"
                value={from}
                onChange={(e) => handleValueChange(e)}
              />
            </Box>
            <Box>
              <Typography variant="h6" display="inline">
                Current Job
              </Typography>
              <Checkbox
                checked={current}
                onChange={(e) => {
                  setFormData({ ...formData, current: !current });
                  toggleIsCurrentJob(!isCurrentJob);
                }}
                name="current"
                color="primary"
              />
            </Box>
            {!isCurrentJob ? (
              <Box>
                <Typography variant="h6">To Date</Typography>
                <TextField
                  fullWidth
                  type="date"
                  id="to"
                  value={to}
                  onChange={(e) => handleValueChange(e)}
                />
              </Box>
            ) : (
              <Fragment />
            )}
            <Fragment />
            <Box>
              <Typography variant="h6">Description</Typography>
              <TextField
                fullWidth
                id="description"
                label="Job Description"
                multiline
                cols={30}
                rows={5}
                variant="outlined"
                value={description}
                onChange={(e) => handleValueChange(e)}
              />
            </Box>
            <Button type="submit" variant="contained" color="primary">
              Add
            </Button>
            <Button variant="contained" color="secondary" href="/dashboard">
              Back
            </Button>
          </form>
        </Container>
      </Grid>
      <Grid item xs={8}>
        <Container maxWidth="lg">
          <ExperienceTable
            experienceList={loading ? [] : profile.experience}
            onRemoveExperience={onRemoveExperience}
          />
        </Container>
      </Grid>
    </Grid>
  );
};

EditExperience.propTypes = {
  addExperience: PropTypes.func.isRequired,
  removeExperience: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, {
  addExperience,
  removeExperience,
  getCurrentProfile,
})(EditExperience);
