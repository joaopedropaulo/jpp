import React, { Fragment, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

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

const DisplayExperienceTable = () => {
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
          <TableRow>
            <TableCell>Company Icon1</TableCell>
            <TableCell>Tech Guy Web Solutions</TableCell>
            <TableCell>Senior Developer</TableCell>
            <TableCell>02-03-2009 - 01-02-2014</TableCell>
            <TableCell>Lisbon</TableCell>
            <TableCell>Blablablabla</TableCell>
            <TableCell>
              <button>Delete</button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Company Icon2</TableCell>
            <TableCell>Traversy Media</TableCell>
            <TableCell>Instructor & Developer</TableCell>
            <TableCell>02-03-2015 - Now</TableCell>
            <TableCell>Lisbon</TableCell>
            <TableCell>
              BlablablablaBlablablablaBlablablablaBlablablablaBlablablablaBlablablablaBlablablablaBlablablablaBlablablabla
            </TableCell>
            <TableCell>
              <button>Delete</button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DisplayExperienceTable;
