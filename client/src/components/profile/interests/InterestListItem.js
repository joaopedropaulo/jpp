import React from "react";
import { ListItem, ListItemText, Button } from "@material-ui/core";

const InterestListItem = (props) => {
  return (
    <ListItem>
      <ListItemText primary={props.label} secondary={props.value} />
      <Button
        variant="outlined"
        color="secondary"
        href="#"
        onClick={(e) => props.onRemoveInterest(props.index)}
      >
        X
      </Button>
    </ListItem>
  );
};

export default InterestListItem;
