import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import ResumeSkillsItem from "./ResumeSkillsItem";
import styles from "../../../../styles/Styles";

const useStyles = makeStyles((theme) => styles(theme));

const ResumeSkillsSection = (props) => {
  const classes = useStyles();

  return (
    <Box className={classes.skillsSectionBox}>
      {props.skillsList.map((skillsItem, index) => {
        return (
          <ResumeSkillsItem key={`${index}-${skillsItem}`} value={skillsItem} />
        );
      })}
    </Box>
  );
};

export default ResumeSkillsSection;
