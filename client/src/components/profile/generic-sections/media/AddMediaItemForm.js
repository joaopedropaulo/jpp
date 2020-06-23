import React, { Fragment, useState } from "react";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  Fab,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import useStyles from "../../../../styles/Styles";

const AddMediaItemForm = (props) => {
  const classes = useStyles();

  const [data, setData] = useState({
    mediaType: "",
    contentURL: "",
    description: "",
  });

  const { mediaType, contentURL, description } = data;

  const handleValueChange = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };

  const handleDropdownSelection = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onAddClick = (e) => {
    e.preventDefault();

    if (contentURL.trim() === "" || mediaType.trim() === "") {
      return;
    }

    props.onAddMediaItem(mediaType, contentURL, description);

    setData({
      mediaType: "",
      contentURL: "",
      description: "",
    });
  };

  return (
    <Fragment>
      <InputLabel id="mType">Media Type</InputLabel>
      <Select
        name="mediaType"
        labelId="mType"
        value={mediaType}
        onChange={(e) => handleDropdownSelection(e)}
        label="Media Type"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={"audio"}>Audio</MenuItem>
        <MenuItem value={"video"}>Video</MenuItem>
        <MenuItem value={"image"}>Image</MenuItem>
      </Select>
      <TextField
        value={contentURL}
        id="contentURL"
        type="text"
        onChange={(e) => handleValueChange(e)}
        label="Content URL"
      />
      <TextField
        value={description}
        id="description"
        type="text"
        onChange={(e) => handleValueChange(e)}
        label="Description"
      />

      <Fab color="secondary" aria-label="add" onClick={onAddClick}>
        <AddIcon />
      </Fab>
    </Fragment>
  );
};

export default AddMediaItemForm;
