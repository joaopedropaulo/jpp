import React from "react";
import Moment from "react-moment";
import { Typography, Box, makeStyles } from "@material-ui/core";
import styles from "../../../../styles/Styles";

const useStyles = makeStyles((theme) => styles(theme));

const ResumeEducationItem = (props) => {
  const classes = useStyles();

  return (
    <Box className={classes.educationItemBox}>
      <Typography variant="subtitle1" className={classes.educationItemDegree}>
        {props.value.degree}
        {props.value.fieldOfStudy ? ", " + props.value.fieldOfStudy : ""}
      </Typography>
      <Typography
        variant="subtitle2"
        className={classes.educationItemSchoolDates}
      >
        {props.value.school},{" "}
        <Moment format="YYYY/MM/DD">{props.value.from}</Moment> -
        {props.value.to === null ? (
          " Present"
        ) : (
          <Moment format="YYYY/MM/DD">{props.value.to}</Moment>
        )}
      </Typography>
      <Typography variant="body1" className={classes.educationItemDescription}>
        {props.value.description}
      </Typography>
    </Box>
  );
};

export default ResumeEducationItem;
