import React from 'react';
import { ListItem, ListItemText, Button } from '@material-ui/core';

class SkillListItem extends React.Component {
  render() {
    return (
      <ListItem>
        <ListItemText primary="Skill Name" secondary={this.props.value.name} />
        <ListItemText
          primary="Experience Level"
          secondary={this.props.value.experienceLevel}
        />
        <Button
          variant="outlined"
          color="secondary"
          href="#"
          onClick={(e) => this.props.onRemoveSkill(this.props.index)}
        >
          X
        </Button>
      </ListItem>
    );
  }
}

export default SkillListItem;
