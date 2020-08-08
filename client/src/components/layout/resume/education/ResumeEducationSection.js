import React from "react";
import { Box } from "@material-ui/core";
import ResumeEducationItem from "./ResumeEducationItem";

const ResumeEducationSection = (props) => {
  return (
    <Box>
      {props.educationList.map((educationItem, index) => {
        return (
          <ResumeEducationItem
            key={`${index}-${educationItem}`}
            value={educationItem}
          />
        );
      })}
    </Box>
  );
};

export default ResumeEducationSection;
