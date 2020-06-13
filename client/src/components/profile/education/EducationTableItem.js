import React from "react";
import Moment from "react-moment";
import { Button, TableRow, TableCell } from "@material-ui/core";
import useStyles from "../../../styles/Styles";

const EducationTableItem = (props) => {
  const classes = useStyles();
  return (
    <TableRow>
      <TableCell className={classes.editModeEducationTableItemCell}>
        {props.value.school}
      </TableCell>
      <TableCell className={classes.editModeEducationTableItemCell}>
        {props.value.degree}
      </TableCell>
      <TableCell className={classes.editModeEducationTableItemCell}>
        {props.value.fieldOfStudy}
      </TableCell>
      <TableCell>
        <Moment format="YYYY/MM/DD">{props.value.from}</Moment> -
        {props.value.to === null ? (
          " Now"
        ) : (
          <Moment format="YYYY/MM/DD">{props.value.to}</Moment>
        )}
      </TableCell>
      <TableCell>{props.value.description}</TableCell>
      <TableCell>
        <Button
          variant="outlined"
          color="secondary"
          href="#"
          onClick={(e) => props.onRemoveEducation(props.index)}
        >
          X
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default EducationTableItem;
