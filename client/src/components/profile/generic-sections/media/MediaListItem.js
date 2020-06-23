import React from "react";
import {
  ListItem,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@material-ui/core";
import MediaItem from "./MediaItem";
import useStyles from "../../../../styles/Styles";

const MediaListItem = (props) => {
  const classes = useStyles();

  return (
    <ListItem>
      <MediaItem value={props.value} />
      <Button
        variant="outlined"
        color="secondary"
        href="#"
        onClick={(e) => props.onRemoveMedia(props.index)}
      >
        X
      </Button>
    </ListItem>
  );
};

export default MediaListItem;
