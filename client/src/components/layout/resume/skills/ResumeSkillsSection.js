import React from "react";
import { Box } from "@material-ui/core";
import ResumeSkillsItem from "./ResumeSkillsItem";
import useStyles from "../../../../styles/Styles";

const ResumeSkillsSection = (props) => {
  const classes = useStyles();

  return (
    <Box>
      {props.skillsList.map((skillsItem, index) => {
        return (
          <ResumeSkillsItem key={`${index}-${skillsItem}`} value={skillsItem} />
        );
      })}
    </Box>
  );
};

export default ResumeSkillsSection;
