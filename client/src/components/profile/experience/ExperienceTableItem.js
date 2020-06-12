import React, { Fragment } from "react";
import Moment from "react-moment";
import {
  Button,
  TableRow,
  TableCell,
  Card,
  CardMedia,
} from "@material-ui/core";
import useStyles from "../../../styles/Styles";

const ExperienceTableItem = (props) => {
  const classes = useStyles();

  return (
    <TableRow>
      <TableCell>
        {props.value.companyIcon ? (
          <Card className={classes.editModeExperienceTableItemCompanyIcon}>
            <CardMedia
              image={props.value.companyIcon}
              className={classes.editModeExperienceTableItemCompanyIcon}
            />
          </Card>
        ) : (
          <Fragment />
        )}
      </TableCell>
      <TableCell className={classes.editModeExperienceTableItemCell}>
        {props.value.company}
      </TableCell>
      <TableCell className={classes.editModeExperienceTableItemCell}>
        {props.value.jobTitle}
      </TableCell>
      <TableCell>
        <Moment format="YYYY/MM/DD">{props.value.from}</Moment> -
        {props.value.to === null ? (
          " Now"
        ) : (
          <Moment format="YYYY/MM/DD">{props.value.to}</Moment>
        )}
      </TableCell>
      <TableCell className={classes.editModeExperienceTableItemCell}>
        {props.value.location}
      </TableCell>
      <TableCell className={classes.editModeExperienceTableItemCell}>
        {props.value.description}
      </TableCell>
      <TableCell>
        <Button
          variant="outlined"
          color="secondary"
          href="#"
          onClick={(e) => props.onRemoveExperience(props.index)}
        >
          X
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default ExperienceTableItem;
