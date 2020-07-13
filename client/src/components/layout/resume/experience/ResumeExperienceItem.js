import React from "react";
import Moment from "react-moment";
import { Typography, Box } from "@material-ui/core";

import useStyles from "../../../../styles/Styles";
const ResumeExperienceItem = (props) => {
  const classes = useStyles();

  return (
    <Box className={classes.experienceItemBox}>
      <Typography
        variant="subtitle1"
        className={classes.experienceItemJobTitleCompanyLocation}
      >
        {props.value.jobTitle}, {props.value.company} - {props.value.location}
      </Typography>
      <Typography variant="subtitle2" className={classes.experienceItemDates}>
        <Moment format="YYYY/MM/DD">{props.value.from}</Moment> -
        {props.value.to === null ? (
          " Present"
        ) : (
          <Moment format="YYYY/MM/DD">{props.value.to}</Moment>
        )}
      </Typography>
      <Typography variant="body1" className={classes.experienceItemDescription}>
        {props.value.description}
      </Typography>
    </Box>
  );
};

export default ResumeExperienceItem;
