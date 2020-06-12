import React, { Fragment } from "react";
import {
  ListItem,
  ListItemText,
  Button,
  TableRow,
  TableCell,
  Card,
  CardActionArea,
  CardMedia,
} from "@material-ui/core";
import Moment from "react-moment";

class ExperienceTableItem extends React.Component {
  render() {
    return (
      <TableRow>
        <TableCell>
          {this.props.value.companyIcon ? (
            <Card
              style={{
                width: "75px",
                height: "75px",
              }}
            >
              <CardMedia
                image={this.props.value.companyIcon}
                style={{
                  width: "75px",
                  height: "75px",
                }}
              />
            </Card>
          ) : (
            <Fragment />
          )}
        </TableCell>
        <TableCell
          style={{
            whiteSpace: "normal",
            wordBreak: "break-word",
            overflowWrap: "break-word",
          }}
        >
          {this.props.value.company}
        </TableCell>
        <TableCell
          style={{
            whiteSpace: "normal",
            wordBreak: "break-word",
            overflowWrap: "break-word",
          }}
        >
          {this.props.value.jobTitle}
        </TableCell>
        <TableCell>
          <Moment format="YYYY/MM/DD">{this.props.value.from}</Moment> -
          {this.props.value.to === null ? (
            " Now"
          ) : (
            <Moment format="YYYY/MM/DD">{this.props.value.to}</Moment>
          )}
        </TableCell>
        <TableCell
          style={{
            whiteSpace: "normal",
            wordBreak: "break-word",
            overflowWrap: "break-word",
          }}
        >
          {this.props.value.location}
        </TableCell>
        <TableCell
          style={{
            whiteSpace: "normal",
            wordBreak: "break-word",
            overflowWrap: "break-word",
          }}
        >
          {this.props.value.description}
        </TableCell>
        <TableCell>
          <Button
            variant="outlined"
            color="secondary"
            href="#"
            onClick={(e) => this.props.onRemoveExperience(this.props.index)}
          >
            X
          </Button>
        </TableCell>
      </TableRow>
    );
  }
}

export default ExperienceTableItem;
