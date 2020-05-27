import React, { Fragment, useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addExperience, getCurrentProfile } from "../../../actions/profile";
import ExperienceTable from "./ExperienceTable";

import {
  Typography,
  TextField,
  Button,
  Checkbox,
  Grid,
  Table,
  TableBody,
  TableHead,
  TableContainer,
  TableCell,
  TableRow,
  Paper,
} from "@material-ui/core";

const AddExperience = ({
  addExperience,
  getCurrentProfile,
  profile: { profile, loading },
  history,
}) => {
  useEffect(() => {
    console.log("HERE I AM - current profile");
    getCurrentProfile();
    console.log(profile);
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

  const onRemoveExperience = (index) => {
    let list = [...profile.experience];
    list.splice(index, 1);
    console.loge("HERE I AM");
  };

  const handleValueChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addExperience(formData, history);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Typography variant="h3">Add Experience</Typography>
        <form onSubmit={(e) => onSubmit(e)}>
          <div>
            <Typography variant="h6">Job Title</Typography>
            <TextField
              type="text"
              label="Job Title"
              id="jobTitle"
              value={jobTitle}
              onChange={(e) => handleValueChange(e)}
            />
          </div>
          <div>
            <Typography variant="h6">Company</Typography>
            <TextField
              type="text"
              label="Company"
              id="company"
              value={company}
              onChange={(e) => handleValueChange(e)}
            />
          </div>
          <div>
            <Typography variant="h6">Company Icon URL</Typography>
            <TextField
              type="text"
              label="Company Icon URL"
              id="companyIcon"
              value={companyIcon}
              onChange={(e) => handleValueChange(e)}
            />
          </div>
          <div>
            <Typography variant="h6">Location</Typography>
            <TextField
              type="text"
              label="Location"
              id="location"
              value={location}
              onChange={(e) => handleValueChange(e)}
            />
          </div>
          <div>
            <Typography variant="h6">From Date</Typography>
            <TextField
              type="date"
              id="from"
              value={from}
              onChange={(e) => handleValueChange(e)}
            />
          </div>
          <div>
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
          </div>
          {!isCurrentJob ? (
            <div>
              <Typography variant="h6">To Date</Typography>
              <TextField
                type="date"
                id="to"
                value={to}
                onChange={(e) => handleValueChange(e)}
              />
            </div>
          ) : (
            <Fragment />
          )}
          <Fragment />
          <div>
            <Typography variant="h6">Description</Typography>
            <TextField
              id="description"
              label="Job Description"
              multiline
              cols={30}
              rows={5}
              variant="outlined"
              value={description}
              onChange={(e) => handleValueChange(e)}
            />
          </div>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
          <Typography>
            <Link href="/dashboard">Back</Link>
          </Typography>
        </form>
      </Grid>
      <Grid item xs={8}>
        <ExperienceTable
          experienceList={loading ? [] : profile.experience}
          onRemoveExperience={onRemoveExperience}
        />
      </Grid>
    </Grid>
  );
};

AddExperience.propTypes = {
  addExperience: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { addExperience, getCurrentProfile })(
  AddExperience
);
