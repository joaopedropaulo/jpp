import React from "react";
import { ListItem, Grid, Button } from "@material-ui/core";
import MediaItem from "./MediaItem";
import useStyles from "../../../../styles/Styles";

const MediaListItem = (props) => {
  const classes = useStyles();

  return (
    <ListItem>
      <Grid container justify="flex-start" spacing={2}>
        <Grid item xs={9}>
          <MediaItem value={props.value} />
        </Grid>
        <Grid
          item
          xs={3}
          className={classes.editModeGenericSectionsMediaListItemRemoveButton}
        >
          <Button
            variant="outlined"
            color="secondary"
            href="#"
            onClick={(e) => props.onRemoveMedia(props.index)}
          >
            X
          </Button>
        </Grid>
      </Grid>
    </ListItem>
  );
};

export default MediaListItem;
