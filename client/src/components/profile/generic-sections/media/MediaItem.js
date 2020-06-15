import React, { Fragment } from "react";
import { Card, CardMedia, CardContent, Typography } from "@material-ui/core";
import useStyles from "../../../../styles/Styles";

const MediaItem = (props) => {
  const classes = useStyles();
  return (
    <Card className={classes.editModeGenericSectionsTableItemMediaCard}>
      <CardContent
        className={classes.editModeGenericSectionsTableItemMediaCardContent}
      >
        <Typography variant="body2" color="textSecondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardMedia
        component={props.value.mediaType !== "image" ? "iframe" : "img"}
        src={props.value.contentURL}
        className={classes.editModeGenericSectionsTableItemMediaCardMedia}
      />
    </Card>
  );
};

export default MediaItem;
