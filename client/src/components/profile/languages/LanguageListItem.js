import React from "react";
import { ListItem, ListItemText, Button } from "@material-ui/core";

class LanguageListItem extends React.Component {
  render() {
    return (
      <ListItem>
        <ListItemText primary="Language" secondary={this.props.value.name} />
        <ListItemText primary="Level" secondary={this.props.value.level} />
        <Button
          variant="outlined"
          color="secondary"
          href="#"
          onClick={(e) => this.props.onRemoveLanguage(this.props.index)}
        >
          X
        </Button>
      </ListItem>
    );
  }
}

export default LanguageListItem;
