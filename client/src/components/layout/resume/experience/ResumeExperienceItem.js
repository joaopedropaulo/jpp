import React, { Fragment } from "react";
import Moment from "react-moment";
import { Typography, Box, Grid, makeStyles } from "@material-ui/core";
import styles from "../../../../styles/Styles";

const useStyles = makeStyles((theme) => styles(theme));

const ResumeExperienceItem = (props) => {
  const classes = useStyles();

  return (
    <Box className={classes.experienceItemBox}>
      <Grid
        container
        spacing={2}
        className={classes.experienceItemGridContainer}
      >
        <Grid item xs={3} sm={1}>
          {props.value.companyIcon ? (
            <img
              className={classes.experienceItemCompanyIcon}
              src={props.value.companyIcon}
              alt="company icon"
            ></img>
          ) : (
            <Fragment />
          )}
        </Grid>
        <Grid item xs={9} sm={11}>
          <Typography
            variant="subtitle1"
            className={classes.experienceItemJobTitleCompanyLocation}
          >
            {props.value.jobTitle}, {props.value.company} -{" "}
            {props.value.location}
          </Typography>
          <Typography
            variant="subtitle2"
            className={classes.experienceItemDates}
          >
            <Moment format="YYYY/MM/DD">{props.value.from}</Moment> -
            {props.value.to === null ? (
              " Present"
            ) : (
              <Moment format="YYYY/MM/DD">{props.value.to}</Moment>
            )}
          </Typography>
          <Typography
            variant="body1"
            className={classes.experienceItemDescription}
          >
            {props.value.description}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ResumeExperienceItem;
