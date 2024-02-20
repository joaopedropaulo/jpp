import React, { Fragment } from 'react';
import { Box, IconButton, makeStyles } from '@material-ui/core';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import styles from '../../../styles/Styles';

const useStyles = makeStyles((theme) => styles(theme));

const Contact = (props) => {
  const classes = useStyles();

  return (
    <Box className={classes.contactSectionBox}>
      {props.value && props.value.youtube ? (
        <IconButton
          className={classes.contactIconButton}
          href={props.value.youtube}
        >
          <YouTubeIcon
            className={classes.contactIconButtonIcon}
            fontSize="large"
          />
        </IconButton>
      ) : (
        <Fragment />
      )}
      {props.value && props.value.facebook ? (
        <IconButton
          className={classes.contactIconButton}
          href={props.value.facebook}
        >
          <FacebookIcon
            className={classes.contactIconButtonIcon}
            fontSize="large"
          />
        </IconButton>
      ) : (
        <Fragment />
      )}
      {props.value && props.value.github ? (
        <IconButton
          className={classes.contactIconButton}
          href={props.value.github}
        >
          <GitHubIcon
            className={classes.contactIconButtonIcon}
            fontSize="large"
          />
        </IconButton>
      ) : (
        <Fragment />
      )}
      {props.value && props.value.instagram ? (
        <IconButton
          className={classes.contactIconButton}
          href={props.value.instagram}
        >
          <InstagramIcon
            className={classes.contactIconButtonIcon}
            fontSize="large"
          />
        </IconButton>
      ) : (
        <Fragment />
      )}
      {props.value && props.value.linkedin ? (
        <IconButton
          className={classes.contactIconButton}
          href={props.value.linkedin}
        >
          <LinkedInIcon
            className={classes.contactIconButtonIcon}
            fontSize="large"
          />
        </IconButton>
      ) : (
        <Fragment />
      )}
      {props.value && props.value.twitter ? (
        <IconButton
          className={classes.contactIconButton}
          href={props.value.twitter}
        >
          <TwitterIcon
            className={classes.contactIconButtonIcon}
            fontSize="large"
          />
        </IconButton>
      ) : (
        <Fragment />
      )}
    </Box>
  );
};

export default Contact;
