import React, { Fragment, useState } from 'react';
import { TextField, Button } from '@material-ui/core';

const AddInterestForm = (props) => {
  const [value, setValue] = useState('');

  const onAddClick = (e) => {
    e.preventDefault();
    if (value.trim() === '') {
      return;
    }
    props.onAddInterest(value);
    setValue('');
  };

  const handleValueChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <Fragment>
      <TextField
        value={value}
        onChange={(e) => handleValueChange(e)}
        label={props.label}
      />
      <Button color="secondary" variant="outlined" onClick={onAddClick}>
        Add
      </Button>
    </Fragment>
  );
};

export default AddInterestForm;
