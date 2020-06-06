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

import useStyles from "../../../styles/Styles";

import {
  Typography,
  TextField,
  Button,
  Checkbox,
  Grid,
  Container,
  Box,
  Divider,
  Paper,
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

  const classes = useStyles();

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
    <Box mx={15} mt={10}>
      <Grid container justify="center" spacing={2}>
        <Grid item xs={4}>
          <Container maxWidth="sm">
            <Box pb={2}>
              <Typography variant="h4">Edit Experience</Typography>
            </Box>
          </Container>
        </Grid>
        <Grid item xs={8} />
        <Grid item xs={4}>
          <Paper className={classes.fillHeightContainer}>
            <Container maxWidth="sm">
              <form onSubmit={(e) => onSubmit(e)}>
                <Box py={2}>
                  <TextField
                    fullWidth
                    type="text"
                    label="Job Title"
                    id="jobTitle"
                    value={jobTitle}
                    onChange={(e) => handleValueChange(e)}
                  />
                </Box>
                <Box py={2}>
                  <TextField
                    fullWidth
                    type="text"
                    label="Company"
                    id="company"
                    value={company}
                    onChange={(e) => handleValueChange(e)}
                  />
                </Box>
                <Box py={2}>
                  <TextField
                    fullWidth
                    type="text"
                    label="Company Icon URL"
                    id="companyIcon"
                    value={companyIcon}
                    onChange={(e) => handleValueChange(e)}
                  />
                </Box>
                <Box py={2}>
                  <TextField
                    fullWidth
                    type="text"
                    label="Location"
                    id="location"
                    value={location}
                    onChange={(e) => handleValueChange(e)}
                  />
                </Box>
                <Box py={2}>
                  <Grid
                    justify="space-between"
                    alignItems="center"
                    container
                    spacing={24}
                  >
                    <Grid item>
                      <TextField
                        type="date"
                        id="from"
                        label="From Date"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        value={from}
                        onChange={(e) => handleValueChange(e)}
                      />
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle2" display="inline">
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
                    </Grid>
                  </Grid>
                </Box>
                {!isCurrentJob ? (
                  <Box py={2}>
                    <TextField
                      type="date"
                      id="to"
                      label="To Date"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      value={to}
                      onChange={(e) => handleValueChange(e)}
                    />
                  </Box>
                ) : (
                  <Fragment />
                )}
                <Fragment />
                <Box py={2}>
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
                <Box py={2}>
                  <Grid justify="space-between" container spacing={24}>
                    <Grid item>
                      <div>
                        <Button
                          variant="contained"
                          color="secondary"
                          href="/dashboard"
                          size="large"
                        >
                          Back
                        </Button>
                      </div>
                    </Grid>
                    <Grid item>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        size="large"
                      >
                        Add
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </form>
            </Container>
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.fillHeightContainer}>
            <Container maxWidth="lg">
              <ExperienceTable
                experienceList={loading ? [] : profile.experience}
                onRemoveExperience={onRemoveExperience}
              />
            </Container>
          </Paper>
        </Grid>
      </Grid>
    </Box>
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
