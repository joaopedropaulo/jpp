import React from "react";
import { Typography, Box, Grid, Chip } from "@material-ui/core";
import CustomLevelDisplayBar from "./CustomLevelDisplayBar";
import useStyles from "../../../../styles/Styles";

const ResumeSkillsItem = (props) => {
  const classes = useStyles();

  return (
    <Box className={classes.skillsItemBox}>
      {/* <Typography variant="subtitle1" className={classes.skillsItemName}> */}
      {/* {props.value.name} */}
      {/* </Typography> */}
      {/* <Typography variant="body1">{props.value.experienceLevel}</Typography> */}
      {/* <Box display="flex" alignItems="center" width="50%"> */}
      <Grid container className={classes.skillsGridContainer}>
        <Grid item xs={3} className={classes.skillsGridItemSkillName}>
          <Chip
            size="medium"
            className={classes.skillsItemName}
            label={props.value.name}
          ></Chip>
        </Grid>
        <Grid item xs={6}>
          {/* <Box width="100%" mr={1}> */}
          {/* <Typography variant="subtitle1" className={classes.skillsItemName}> */}
          {/* {props.value.name} */}
          {/* </Typography> */}
          {/* <Box display="flex" alignItems="center"> */}
          <CustomLevelDisplayBar
            variant="determinate"
            {...props}
            value={(props.value.experienceLevel / 5) * 100}
          />

          {/* </Box> */}
          {/* </Box>
          <Box minWidth={35}>
            
          </Box> */}
        </Grid>
        <Grid item xs={3} className={classes.skillsGridItemExperienceLevel}>
          <Typography
            variant="body1"
            color="primary"
            className={classes.skillsItemExperienceLevel}
          >{`${Math.round(props.value.experienceLevel)}/5`}</Typography>
        </Grid>
      </Grid>

      {/* </Box> */}
    </Box>
  );
};

export default ResumeSkillsItem;
