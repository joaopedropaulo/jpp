import React, { Fragment, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import EducationTableItem from "./EducationTableItem";

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

class EducationTable extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>School</TableCell>
              <TableCell>Degree</TableCell>
              <TableCell>Field of Study</TableCell>
              <TableCell>Years</TableCell>
              <TableCell>Description</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.educationList.map((educationItem, index) => {
              return (
                <EducationTableItem
                  key={`${index}-${educationItem}`}
                  index={index}
                  value={educationItem}
                  onRemoveEducation={this.props.onRemoveEducation}
                />
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

export default EducationTable;
