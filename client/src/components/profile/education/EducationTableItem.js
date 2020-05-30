import React from "react";
import {
  ListItem,
  ListItemText,
  Button,
  TableRow,
  TableCell,
} from "@material-ui/core";
import Moment from "react-moment";

class EducationTableItem extends React.Component {
  render() {
    return (
      <TableRow>
        <TableCell>{this.props.value.school}</TableCell>
        <TableCell>{this.props.value.degree}</TableCell>
        <TableCell>{this.props.value.fieldOfStudy}</TableCell>
        <TableCell>
          <Moment format="YYYY/MM/DD">{this.props.value.from}</Moment>-
          {this.props.value.to === null ? (
            " Now"
          ) : (
            <Moment format="YYYY/MM/DD">{this.props.value.to}</Moment>
          )}
        </TableCell>
        <TableCell>{this.props.value.description}</TableCell>
        <TableCell>
          <Button
            variant="outlined"
            color="secondary"
            href="#"
            onClick={(e) => this.props.onRemoveEducation(this.props.index)}
          >
            X
          </Button>
        </TableCell>
      </TableRow>
    );
  }
}

export default EducationTableItem;
