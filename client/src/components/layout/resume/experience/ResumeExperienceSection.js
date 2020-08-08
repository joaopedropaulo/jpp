import React from "react";
import { Box } from "@material-ui/core";
import ResumeExperienceItem from "./ResumeExperienceItem";

const ResumeExperienceSection = (props) => {
  return (
    <Box>
      {props.experienceList.map((experienceItem, index) => {
        return (
          <ResumeExperienceItem
            key={`${index}-${experienceItem}`}
            value={experienceItem}
          />
        );
      })}
    </Box>
  );
};

export default ResumeExperienceSection;
