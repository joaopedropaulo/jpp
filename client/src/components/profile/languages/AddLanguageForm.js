import React, { Fragment } from 'react';
import { TextField, Button } from '@material-ui/core';

class AddLanguageForm extends React.Component {
  constructor(props) {
    super(props);

    this.onAddClick = this.onAddClick.bind(this);
  }
  onAddClick(e) {
    e.preventDefault();

    const name = this.name.value;
    const level = this.level.value;

    if (name.trim() === '') {
      return;
    }

    this.props.onAddLanguage(name, level);

    this.name.value = '';
    this.level.value = '';
  }
  render() {
    return (
      <Fragment>
        <TextField
          inputRef={(ir) => (this.name = ir)}
          label="Language"
          //required
        />
        <TextField
          inputRef={(ir) => (this.level = ir)}
          label="Level"
          type="number"
        />
        <Button color="secondary" variant="outlined" onClick={this.onAddClick}>
          Add Language
        </Button>
      </Fragment>
    );
  }
}

export default AddLanguageForm;
