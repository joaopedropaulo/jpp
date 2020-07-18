import React from "react";
import { Typography, Box, Grid, Chip } from "@material-ui/core";
import CustomLevelDisplayBar from "./CustomLevelDisplayBar";
import useStyles from "../../../../styles/Styles";

const ResumeSkillsItem = (props) => {
  const classes = useStyles();

  return (
    <Box className={classes.skillsItemBox}>
      <Grid container className={classes.skillsGridContainer}>
        <Grid item xs={3} className={classes.skillsGridItemSkillName}>
          <Chip
            size="medium"
            className={classes.skillsItemName}
            label={props.value.name}
          ></Chip>
        </Grid>
        <Grid item xs={6}>
          <CustomLevelDisplayBar
            variant="determinate"
            {...props}
            value={(props.value.experienceLevel / 5) * 100}
          />
        </Grid>
        <Grid item xs={3} className={classes.skillsGridItemExperienceLevel}>
          <Typography
            variant="body1"
            color="primary"
            className={classes.skillsItemExperienceLevel}
          >{`${Math.round(props.value.experienceLevel)}/5`}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ResumeSkillsItem;
