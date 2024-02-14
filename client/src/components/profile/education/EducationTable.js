import React from 'react';
import {
  Table,
  TableBody,
  TableHead,
  TableContainer,
  TableCell,
  TableRow,
  makeStyles,
} from '@material-ui/core';
import EducationTableItem from './EducationTableItem';
import styles from '../../../styles/Styles';

const useStyles = makeStyles((theme) => styles(theme));

const EducationTable = (props) => {
  const classes = useStyles();
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className={classes.editModeEducationTableHeaderCell}>
              School
            </TableCell>
            <TableCell className={classes.editModeEducationTableHeaderCell}>
              Degree
            </TableCell>
            <TableCell className={classes.editModeEducationTableHeaderCell}>
              Field of Study
            </TableCell>
            <TableCell className={classes.editModeEducationTableHeaderCell}>
              Years
            </TableCell>
            <TableCell className={classes.editModeEducationTableHeaderCell}>
              Description
            </TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.educationList.map((educationItem, index) => {
            return (
              <EducationTableItem
                key={`${index}-${educationItem}`}
                index={index}
                value={educationItem}
                onRemoveEducation={props.onRemoveEducation}
              />
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EducationTable;
