import React, { Fragment } from "react";

import { TextField } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";

class CreateUpdateSocialMediaInputs extends React.Component {
  render() {
    const { youtube, instagram, linkedin, twitter, github, facebook } = "";

    return (
      <Fragment>
        <div>
          <TwitterIcon />
          <TextField
            label="Twitter URL"
            name="twitter"
            id="twitter"
            value={twitter}
            onChange={(e) => this.props.handleValueChange(e)}
          />
        </div>

        <div>
          <FacebookIcon />
          <TextField
            label="Facebook URL"
            name="facebook"
            id="facebook"
            value={facebook}
            onChange={(e) => this.props.handleValueChange(e)}
          />
        </div>

        <div>
          <YouTubeIcon />
          <TextField
            label="YouTube URL"
            name="youtube"
            id="youtube"
            value={youtube}
            onChange={(e) => this.props.handleValueChange(e)}
          />
        </div>

        <div>
          <LinkedInIcon />
          <TextField
            label="Linkedin URL"
            name="linkedin"
            id="linkedin"
            value={linkedin}
            onChange={(e) => this.props.handleValueChange(e)}
          />
        </div>

        <div>
          <InstagramIcon />
          <TextField
            label="Instagram URL"
            name="instagram"
            id="instagram"
            value={instagram}
            onChange={(e) => this.props.handleValueChange(e)}
          />
        </div>
        <div>
          <GitHubIcon />
          <TextField
            label="GitHub URL"
            name="github"
            id="github"
            value={github}
            onChange={(e) => this.props.handleValueChange(e)}
          />
        </div>
      </Fragment>
    );
  }
}

export default CreateUpdateSocialMediaInputs;
