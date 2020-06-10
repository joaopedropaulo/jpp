import React from "react";
import { Link } from "react-router-dom";

import {
  Typography,
  Button,
  IconButton,
  Grid,
  Box,
  Container,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import withWidth from "@material-ui/core/withWidth";

import SchoolIcon from "@material-ui/icons/School";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import WorkIcon from "@material-ui/icons/Work";
import ListAltIcon from "@material-ui/icons/ListAlt";

const useStyles = makeStyles((theme) => ({
  dashboardActionsContainer: {
    [theme.breakpoints.up("xs")]: {
      margin: "10% 0",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    },
    [theme.breakpoints.up("sm")]: {
      margin: "0",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    },
  },
  dashboardButtons: {
    [theme.breakpoints.up("lg")]: {
      height: "200px",
      width: "200px",
    },
    [theme.breakpoints.down("md")]: {
      height: "75px",
      width: "150px",
      fontSize: "0.75rem",
    },
    [theme.breakpoints.down("sm")]: {
      height: "50px",
      width: "100px",
      fontSize: "0.6rem",
    },
  },
}));

export const DashboardActions = (props) => {
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <Box className={classes.dashboardActionsContainer}>
        <Grid container>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={5}>
              <Grid item>
                <Button
                  size="large"
                  href={"/edit-profile"}
                  color="secondary"
                  startIcon={<AccountCircleIcon />}
                  variant="contained"
                  className={classes.dashboardButtons}
                >
                  {props.width === "xl" || props.width === "lg"
                    ? "Edit Profile"
                    : "Profile"}
                </Button>
              </Grid>
              <Grid item>
                <Button
                  size="large"
                  href={"/edit-experience"}
                  color="secondary"
                  startIcon={<WorkIcon />}
                  variant="contained"
                  className={classes.dashboardButtons}
                >
                  {props.width === "xl" || props.width === "lg"
                    ? "Edit Experience"
                    : "Experience"}
                </Button>
              </Grid>
              <Grid item>
                <Button
                  size="large"
                  href={"/edit-education"}
                  color="secondary"
                  startIcon={<SchoolIcon />}
                  variant="contained"
                  className={classes.dashboardButtons}
                >
                  {props.width === "xl" || props.width === "lg"
                    ? "Edit Education"
                    : "Education"}
                </Button>
              </Grid>
              <Grid item>
                <Button
                  size="large"
                  href={"/edit-generic-sections"}
                  color="secondary"
                  startIcon={<ListAltIcon />}
                  variant="contained"
                  className={classes.dashboardButtons}
                >
                  {props.width === "xl" || props.width === "lg"
                    ? "Edit Other"
                    : "Other"}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default withWidth()(DashboardActions);
