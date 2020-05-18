import React from "react";
import { Link } from "react-router-dom";

import { Typography, Button } from "@material-ui/core";
import SchoolIcon from "@material-ui/icons/School";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import WorkIcon from "@material-ui/icons/Work";

export const DashboardActions = () => {
  return (
    <div>
      <div>
        <Button href={"/edit-profile"}>
          <AccountCircleIcon />
          <Typography variant="button" display="block">
            Edit Profile
          </Typography>
        </Button>
      </div>
      <div>
        <Button href={"/edit-experience"}>
          <WorkIcon />
          <Typography variant="button" display="block">
            Edit Experience
          </Typography>
        </Button>
      </div>
      <div>
        <Button href={"/edit-education"}>
          <SchoolIcon />
          <Typography variant="button" display="block">
            Edit Education
          </Typography>
        </Button>
      </div>
    </div>
  );
};

export default DashboardActions;
