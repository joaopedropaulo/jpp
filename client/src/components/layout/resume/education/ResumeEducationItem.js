import React from 'react';
import Moment from 'react-moment';
import { Typography, Box, makeStyles } from '@material-ui/core';
import styles from '../../../../styles/Styles';

const useStyles = makeStyles((theme) => styles(theme));

const ResumeEducationItem = (props) => {
  const classes = useStyles();

  const descriptionLines = props.value.description?.split('\n');
  const descComp = descriptionLines?.map((descriptionItem, index) => {
    return (
      <div key={`${index}-edu-desc`}>
        <Typography
          variant="body1"
          className={classes.educationItemDescription}
          display="inline"
        >
          {descriptionItem}
        </Typography>
      </div>
    );
  });

  return (
    <Box className={classes.educationItemBox}>
      <Typography variant="subtitle1" className={classes.educationItemDegree}>
        {props.value.degree}
        {props.value.fieldOfStudy ? ', ' + props.value.fieldOfStudy : ''}
      </Typography>
      <Typography
        variant="subtitle2"
        className={classes.educationItemSchoolDates}
      >
        {props.value.school},{' '}
        <Moment format="MMMM YYYY">{props.value.from}</Moment> -{' '}
        {props.value.to === null ? (
          'Present'
        ) : (
          <Moment format="MMMM YYYY">{props.value.to}</Moment>
        )}
      </Typography>
      {descComp}
    </Box>
  );
};

export default ResumeEducationItem;
