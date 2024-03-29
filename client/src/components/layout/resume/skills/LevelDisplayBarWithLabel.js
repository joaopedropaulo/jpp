import React from 'react';
import { Box, Typography } from '@material-ui/core';
import CustomLevelDisplayBar from './CustomLevelDisplayBar';

const LevelDisplayBarWithLabel = (props) => {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <CustomLevelDisplayBar variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
};

export default LevelDisplayBarWithLabel;
