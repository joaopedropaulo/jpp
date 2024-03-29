import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Grid,
  Button,
  TextField,
  Typography,
  Paper,
  Box,
  Container,
  makeStyles,
} from '@material-ui/core';
import { getCurrentProfile, updateProfile } from '../../../actions/profile';
import GenericSectionsTable from './GenericSectionsTable';
import AddMediaItemForm from './media/AddMediaItemForm';
import MediaList from './media/MediaList';
import styles from '../../../styles/Styles';
import { loadUser } from '../../../actions/auth';
import store from '../../../store';

const useStyles = makeStyles((theme) => styles(theme));

const EditGenericSections = ({
  updateProfile,
  getCurrentProfile,
  profile: { profile, loading },
  history,
}) => {
  useEffect(() => {
    getCurrentProfile();
    store.dispatch(loadUser());
  }, [getCurrentProfile, loading]);

  const classes = useStyles();

  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    body: '',
    media: [],
  });

  const { title, subtitle, body, media } = formData;

  // Handle media items before generic section transaction to the backend happens
  const onRemoveMediaItem = (index) => {
    let list = [...media];
    list.splice(index, 1);
    setFormData({ ...formData, media: list });
  };

  const onAddMediaItem = (mediaType, contentURL, description) => {
    let obj = {
      mediaType: mediaType,
      contentURL: contentURL,
      description: description,
    };
    let list = [...media, obj];
    setFormData({ ...formData, media: list });
  };

  // Update state
  const handleValueChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const cleanUpForm = () => {
    setFormData({
      title: '',
      subtitle: '',
      body: '',
      media: [],
    });
  };

  // Actions that take it to the backend
  const onRemoveGenericSection = (index) => {
    profile.genericSections.splice(index, 1);
    updateProfile(profile, history);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newGenSection = [...profile.genericSections, formData];
    const updatedProfile = { ...profile, genericSections: newGenSection };
    updateProfile(updatedProfile, history);
    cleanUpForm();
  };

  return (
    <Box className={classes.editModeContainers}>
      <Grid container justifyContent="flex-start" spacing={2}>
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
                  <Typography
                    className={classes.editModeTextInputContainers}
                    variant="body1"
                    color="textSecondary"
                  >
                    Body
                  </Typography>
                  <TextField
                    fullWidth
                    type="text"
                    id="body"
                    value={body}
                    label="Choose your words wisely =)"
                    multiline
                    minRows={5}
                    variant="outlined"
                    onChange={(e) => handleValueChange(e)}
                  />
                </Box>
                <Box className={classes.editModeTextInputContainers}>
                  <Typography
                    className={classes.editModeTextInputContainers}
                    variant="body1"
                    color="textSecondary"
                  >
                    Media
                  </Typography>
                  <AddMediaItemForm onAddMediaItem={onAddMediaItem} />
                  <MediaList
                    mediaList={media}
                    onRemoveMediaItem={onRemoveMediaItem}
                  />
                </Box>
                <Box py={2}>
                  <Grid justifyContent="space-between" container spacing={2}>
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
              genericSectionsList={loading ? [] : profile.genericSections}
              onRemoveGenericSection={onRemoveGenericSection}
            ></GenericSectionsTable>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

EditGenericSections.propTypes = {
  updateProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, {
  updateProfile,
  getCurrentProfile,
})(EditGenericSections);
