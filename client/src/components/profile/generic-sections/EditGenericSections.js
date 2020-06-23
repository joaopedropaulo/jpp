import React, { useState } from "react";
import {
  Grid,
  Button,
  TextField,
  Typography,
  Paper,
  Box,
  Container,
} from "@material-ui/core";
import GenericSectionsTable from "./GenericSectionsTable";
import useStyles from "../../../styles/Styles";
import AddMediaItemForm from "./media/AddMediaItemForm";
import MediaList from "./media/MediaList";

const EditGenericSections = () => {
  const classes = useStyles();

  const list = [
    {
      title: "test",
      subtitle: "",
      body: "asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd",
      media: [
        {
          mediaType: "video",
          contentURL: "https://www.youtube.com/embed/TD2hNsY6G7E",
          description: "asdasdasdasdasdasdasdasdasdasd",
        },
        {
          mediaType: "sound",
          contentURL:
            "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/198619623&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
          description: "sssssssssssssssssssssssssssssss",
        },
        {
          mediaType: "image",
          contentURL:
            "https://images.squarespace-cdn.com/content/v1/5a5906400abd0406785519dd/1552662149940-G6MMFW3JC2J61UBPROJ5/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/baelen.jpg?format=1500w",
          description: "hhhhhhhhhhhhhhhhhhhh",
        },
      ],
    },
  ];

  const onRemoveGenericSection = (index) => {
    console.log("index - " + index);
  };

  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    body: "",
    media: [],
  });

  const { title, subtitle, body, media } = formData;

  // Handle state changes
  const onRemoveMediaItem = (index) => {
    let list = [...media];
    list.splice(index, 1);
    setFormData({ ...formData, ["media"]: list });
  };

  const onAddMediaItem = (mediaType, contentURL, description) => {
    let obj = {
      mediaType: mediaType,
      contentURL: contentURL,
      description: description,
    };
    let list = [...media, obj];
    setFormData({ ...formData, ["media"]: list });
  };

  const handleValueChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const onSubmit = (e) => {
    console.log("submit - " + e);
  };

  return (
    <Box className={classes.editModeContainers}>
      <Grid container justify="flex-start" spacing={2}>
        <Grid item xs={12}>
          <Box className={classes.editModeHeadersContainers}>
            <Typography variant="h4">Edit Generic Sections</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper className={classes.editModePaperContainers}>
            <Container maxWidth="sm">
              <form onSubmit={(e) => onSubmit(e)}>
                <Box className={classes.editModeTextInputContainers}>
                  <TextField
                    fullWidth
                    type="text"
                    label="Title"
                    id="title"
                    value={title}
                    onChange={(e) => handleValueChange(e)}
                  />
                </Box>
                <Box className={classes.editModeTextInputContainers}>
                  <TextField
                    fullWidth
                    type="text"
                    label="Sub-Title"
                    id="subtitle"
                    value={subtitle}
                    onChange={(e) => handleValueChange(e)}
                  />
                </Box>
                <Box className={classes.editModeTextInputContainers}>
                  <TextField
                    fullWidth
                    type="text"
                    label="Body"
                    id="body"
                    value={body}
                    onChange={(e) => handleValueChange(e)}
                  />
                </Box>
                <Box>
                  <Typography variant="body1" color="textSecondary">
                    Media
                  </Typography>
                  <AddMediaItemForm onAddMediaItem={onAddMediaItem} />
                  <MediaList
                    mediaList={media}
                    onRemoveMediaItem={onRemoveMediaItem}
                  />
                </Box>
                <Box py={2}>
                  <Grid justify="space-between" container spacing={2}>
                    <Grid item>
                      <Button
                        variant="contained"
                        color="secondary"
                        href="/dashboard"
                        size="large"
                      >
                        Back
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        size="large"
                      >
                        Add
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </form>
            </Container>
          </Paper>
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper className={classes.editModePaperContainers}>
            <GenericSectionsTable
              genericSectionsList={list}
              onRemoveGenericSection={onRemoveGenericSection}
            ></GenericSectionsTable>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EditGenericSections;
