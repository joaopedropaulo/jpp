import React, { useState } from "react";
import {
  Box,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  Fab,
  Grid,
  Typography,
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

  // Update state
  const handleValueChange = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };

  const handleDropdownSelection = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // Action to add the media item to the Generic Section
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
    <Box className={classes.editModeGenericSectionsAddMediaItemFormContainer}>
      <Grid justify="space-between" container spacing={2}>
        <Grid item xs={12}>
          <Box>
            <InputLabel id="mType">Media Type</InputLabel>
            <Select
              className={
                classes.editModeGenericSectionsAddMediaItemFormGridItem
              }
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
          </Box>
        </Grid>
        <Grid item xs={12}>
          <TextField
            className={classes.editModeGenericSectionsAddMediaItemFormGridItem}
            value={contentURL}
            id="contentURL"
            type="text"
            onChange={(e) => handleValueChange(e)}
            label="Content URL"
          />
        </Grid>
        <Grid item xs={12}>
          <Typography
            className={classes.editModeTextInputContainers}
            variant="body1"
            color="textSecondary"
          >
            Body
          </Typography>
          <TextField
            className={classes.editModeGenericSectionsAddMediaItemFormGridItem}
            value={description}
            id="description"
            label="Describe the media item"
            type="text"
            onChange={(e) => handleValueChange(e)}
            multiline
            rows={3}
            variant="outlined"
          />
        </Grid>
        <Grid
          item
          xs={12}
          className={classes.editModeGenericSectionsAddMediaItemFormAddButton}
        >
          <Fab
            color="secondary"
            aria-label="add"
            onClick={onAddClick}
            size="small"
          >
            <AddIcon />
          </Fab>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AddMediaItemForm;
