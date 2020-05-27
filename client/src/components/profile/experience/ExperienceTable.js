import React, { Fragment, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import ExperienceTableItem from "./ExperienceTableItem";

import {
  Typography,
  TextField,
  Button,
  Checkbox,
  Grid,
  Table,
  TableBody,
  TableHead,
  TableContainer,
  TableCell,
  TableRow,
  Paper,
} from "@material-ui/core";

class ExperienceTable extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Company Icon</TableCell>
              <TableCell>Company</TableCell>
              <TableCell>Job Title</TableCell>
              <TableCell>Years</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Description</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.experienceList.map((experienceItem, index) => {
              return (
                <ExperienceTableItem
                  key={`${index}-${experienceItem}`}
                  index={index}
                  value={experienceItem}
                  onRemoveExperience={this.props.onRemoveExperience}
                />
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

export default ExperienceTable;
