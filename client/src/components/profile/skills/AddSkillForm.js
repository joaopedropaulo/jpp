import React, { Fragment } from "react";
import { TextField, Button } from "@material-ui/core";

class AddSkillForm extends React.Component {
  constructor(props) {
    super(props);

    this.onAddClick = this.onAddClick.bind(this);
  }
  onAddClick(e) {
    e.preventDefault();

    const name = this.skillName.value;
    const experienceLevel = this.expLevel.value;

    if (name.trim() === "") {
      return;
    }

    this.props.onAddSkill(name, experienceLevel);

    this.skillName.value = "";
    this.expLevel.value = "";
  }
  render() {
    return (
      <Fragment>
        <TextField
          inputRef={(ir) => (this.skillName = ir)}
          label="Skill Name"
          //required
        />
        <TextField
          inputRef={(ir) => (this.expLevel = ir)}
          label="Experience Level"
          type="number"
        />
        <Button color="secondary" variant="outlined" onClick={this.onAddClick}>
          Add Skill
        </Button>
      </Fragment>
    );
  }
}

export default AddSkillForm;
