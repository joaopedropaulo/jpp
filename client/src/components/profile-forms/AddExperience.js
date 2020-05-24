import React, { Fragment, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addExperience } from "../../actions/profile";

import { Typography, TextField, Button, Checkbox } from "@material-ui/core";

const AddExperience = ({ addExperience, history }) => {
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

  const handleValueChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addExperience(formData, history);
  };

  return (
    <Fragment>
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
    </Fragment>
  );
};

AddExperience.propTypes = {
  addExperience: PropTypes.func.isRequired,
};

export default connect(null, { addExperience })(AddExperience);
