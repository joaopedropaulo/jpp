import React from "react";
import { Box } from "@material-ui/core";
import ResumeEducationItem from "./ResumeEducationItem";
import useStyles from "../../../../styles/Styles";

const ResumeEducationSection = (props) => {
  const classes = useStyles();

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
