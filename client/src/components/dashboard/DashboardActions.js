import React from "react";
import { Link } from "react-router-dom";

import { Typography, Button, IconButton, Grid, Box } from "@material-ui/core";
import SchoolIcon from "@material-ui/icons/School";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import WorkIcon from "@material-ui/icons/Work";

export const DashboardActions = () => {
  return (
    <Box mx={15} mt={10}>
      <Grid container spacing={2}>
        <Grid item xs={3}></Grid>
        <Grid
          item
          xs={2}
          style={{
            textAlign: "center",
          }}
        >
          <Button
            size="large"
            href={"/edit-profile"}
            color="secondary"
            startIcon={<AccountCircleIcon />}
            variant="contained"
            style={{ border: "2px solid", height: "100px" }}
          >
            Edit Profile
          </Button>
        </Grid>
        <Grid
          item
          xs={2}
          style={{
            textAlign: "center",
          }}
        >
          <Button
            size="large"
            href={"/edit-experience"}
            color="secondary"
            startIcon={<WorkIcon />}
            variant="contained"
            style={{ border: "2px solid", height: "100px" }}
          >
            Edit Experience
          </Button>
        </Grid>
        <Grid
          item
          xs={2}
          style={{
            textAlign: "center",
          }}
        >
          <Button
            size="large"
            href={"/edit-education"}
            color="secondary"
            startIcon={<SchoolIcon />}
            variant="contained"
            style={{ border: "2px solid", height: "100px" }}
          >
            Edit Education
          </Button>
        </Grid>

        <Grid item xs={3}></Grid>
      </Grid>
    </Box>
  );
};

export default DashboardActions;
