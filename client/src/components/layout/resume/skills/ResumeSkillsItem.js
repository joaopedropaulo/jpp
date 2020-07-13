import React from "react";
import { Typography, Box } from "@material-ui/core";
import useStyles from "../../../../styles/Styles";

const ResumeSkillsItem = (props) => {
  const classes = useStyles();

  return (
    <Box className={classes.skillsItemBox}>
      <Typography
        variant="subtitle1"
        className={classes.skillsItemJobTitleName}
      >
        {props.value.name}
      </Typography>
      <Typography variant="body1" className={classes.skillsItemExperienceLevel}>
        {props.value.experienceLevel}
      </Typography>
    </Box>
  );
};

export default ResumeSkillsItem;
