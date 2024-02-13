import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  Typography,
  TextField,
  Button,
  Checkbox,
  Grid,
  Container,
  Box,
  Paper,
  makeStyles,
} from "@material-ui/core";
import {
  updateProfile,
  getCurrentProfile,
} from "../../../actions/profile";
import EducationTable from "./EducationTable";
import styles from "../../../styles/Styles";

const useStyles = makeStyles((theme) => styles(theme));

const EditEducation = ({
  updateProfile,
  getCurrentProfile,
  profile: { profile, loading },
  history,
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile, loading]);

  const classes = useStyles();

  const [formData, setFormData] = useState({
    school: "",
    degree: "",
    fieldOfStudy: "",
    from: "",
    to: "",
    current: false,
    description: "",
  });

  const [isCurrentSchool, toggleIsCurrentSchool] = useState(false);

  const {
    school,
    degree,
    fieldOfStudy,
    from,
    to,
    current,
    description,
  } = formData;

  // Update state
  const handleValueChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const cleanUpForm = () => {
    setFormData({
      school: "",
      degree: "",
      fieldOfStudy: "",
      from: "",
      to: "",
      current: false,
      description: "",
    });
  };

  // Actions that take it to the backend
  const onRemoveEducation = (index) => {
    profile.education.splice(index, 1);
    updateProfile(profile, history);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newEduc = [...profile.education, formData];
    const updatedProfile = { ...profile, education: newEduc };
    updateProfile(updatedProfile, history);
    cleanUpForm();
  };

  return (
    <Box className={classes.editModeContainers}>
      <Grid container justify="flex-start" spacing={2}>
        <Grid item xs={12}>
          <Box className={classes.editModeHeadersContainers}>
            <Typography variant="h4">Edit Education</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper className={classes.editModePaperContainers}>
            <Container maxWidth="sm">
              <form onSubmit={(e) => onSubmit(e)}>
                <Box className={classes.editModeTextInputContainers}>
                  <TextField
                    fullWidth
                    type="text"
                    label="School"
                    id="school"
                    value={school}
                    onChange={(e) => handleValueChange(e)}
                  />
                </Box>
                <Box className={classes.editModeTextInputContainers}>
                  <TextField
                    fullWidth
                    type="text"
                    label="Degree"
                    id="degree"
                    value={degree}
                    onChange={(e) => handleValueChange(e)}
                  />
                </Box>
                <Box className={classes.editModeTextInputContainers}>
                  <TextField
                    fullWidth
                    type="text"
                    label="Field of Study"
                    id="fieldOfStudy"
                    value={fieldOfStudy}
                    onChange={(e) => handleValueChange(e)}
                  />
                </Box>
                <Box className={classes.editModeDateInputContainers}>
                  <Grid
                    justify="space-between"
                    alignItems="center"
                    container
                    spacing={2}
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
                        Current School
                      </Typography>
                      <Checkbox
                        checked={current}
                        onChange={(e) => {
                          setFormData({ ...formData, current: !current });
                          toggleIsCurrentSchool(!isCurrentSchool);
                        }}
                        name="current"
                        color="primary"
                      />
                    </Grid>
                  </Grid>
                </Box>
                {!isCurrentSchool ? (
                  <Box className={classes.editModeDateInputContainers}>
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
                <Box className={classes.editModeTextInputContainers}>
                  <TextField
                    fullWidth
                    id="description"
                    label="Description"
                    multiline
                    cols={30}
                    rows={5}
                    variant="outlined"
                    value={description}
                    onChange={(e) => handleValueChange(e)}
                  />
                </Box>
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
                        Add
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </form>
            </Container>
          </Paper>
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper className={classes.editModePaperContainers}>
            <EducationTable
              educationList={loading ? [] : profile.education}
              onRemoveEducation={onRemoveEducation}
            />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

EditEducation.propTypes = {
  updateProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, {
  updateProfile,
  getCurrentProfile,
})(EditEducation);
