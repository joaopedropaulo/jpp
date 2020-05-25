import React, { Fragment, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addEducation } from "../../actions/profile";

import { Typography, TextField, Button, Checkbox } from "@material-ui/core";

const AddEducation = ({ addEducation, history }) => {
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

  const handleValueChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addEducation(formData, history);
  };

  return (
    <Fragment>
      <Typography variant="h3">Add Education</Typography>
      <form onSubmit={(e) => onSubmit(e)}>
        <div>
          <Typography variant="h6">School</Typography>
          <TextField
            type="text"
            label="School"
            id="school"
            value={school}
            onChange={(e) => handleValueChange(e)}
          />
        </div>
        <div>
          <Typography variant="h6">Degree</Typography>
          <TextField
            type="text"
            label="Degree"
            id="degree"
            value={degree}
            onChange={(e) => handleValueChange(e)}
          />
        </div>
        <div>
          <Typography variant="h6">Field of Study</Typography>
          <TextField
            type="text"
            label="Field of Study"
            id="fieldOfStudy"
            value={fieldOfStudy}
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
        </div>
        {!isCurrentSchool ? (
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
            label="Description"
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

AddEducation.propTypes = {
  addEducation: PropTypes.func.isRequired,
};

export default connect(null, { addEducation })(AddEducation);
