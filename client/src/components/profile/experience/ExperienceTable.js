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
import ExperienceTableItem from './ExperienceTableItem';
import styles from '../../../styles/Styles';

const useStyles = makeStyles((theme) => styles(theme));

const ExperienceTable = (props) => {
  const classes = useStyles();

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell className={classes.editModeExperienceTableHeaderCell}>
              Company
            </TableCell>
            <TableCell className={classes.editModeExperienceTableHeaderCell}>
              Job Title
            </TableCell>
            <TableCell className={classes.editModeExperienceTableHeaderCell}>
              Years
            </TableCell>
            <TableCell className={classes.editModeExperienceTableHeaderCell}>
              Location
            </TableCell>
            <TableCell className={classes.editModeExperienceTableHeaderCell}>
              Description
            </TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.experienceList.map((experienceItem, index) => {
            return (
              <ExperienceTableItem
                key={`${index}-${experienceItem}`}
                index={index}
                value={experienceItem}
                onRemoveExperience={props.onRemoveExperience}
              />
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ExperienceTable;
