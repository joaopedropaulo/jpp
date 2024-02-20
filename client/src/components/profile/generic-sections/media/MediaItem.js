import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  makeStyles,
} from '@material-ui/core';
import styles from '../../../../styles/Styles';

const useStyles = makeStyles((theme) => styles(theme));

const MediaItem = (props) => {
  const classes = useStyles();
  return (
    <Card className={classes.editModeGenericSectionsTableItemMediaCard}>
      <CardContent
        className={classes.editModeGenericSectionsTableItemMediaCardContent}
      >
        <Typography variant="body2" color="textSecondary">
          {props.value.description}
        </Typography>
      </CardContent>
      <CardMedia
        component={props.value.mediaType !== 'image' ? 'iframe' : 'img'}
        src={props.value.contentURL}
        className={classes.editModeGenericSectionsTableItemMediaCardMedia}
      />
    </Card>
  );
};

export default MediaItem;
