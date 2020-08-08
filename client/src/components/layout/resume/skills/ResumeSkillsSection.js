import React from "react";
import { Box } from "@material-ui/core";
import ResumeSkillsItem from "./ResumeSkillsItem";

const ResumeSkillsSection = (props) => {
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
