import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Typography,
  Container,
  Grid,
  Divider,
} from "@material-ui/core";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { getCurrentProfile } from "../../actions/profile";
import ResumeEducationSection from "./resume/education/ResumeEducationSection";
import ResumeExperienceSection from "./resume/experience/ResumeExperienceSection";
import ResumeSkillsSection from "./resume/skills/ResumeSkillsSection";
import Navbar from "./Navbar";
import useStyles from "../../styles/Styles";

const Landing = ({
  isAuthenticated,
  getCurrentProfile,
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [loading]);

  const classes = useStyles();

  const [showScroll, setShowScroll] = useState(false);
  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };
  window.addEventListener("scroll", checkScrollTop);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Box>
      <Box className={classes.landingTopDiv}>
        <Navbar />
        <Box className={classes.backToTopButtonBox}>
          <Button size="large" onClick={scrollTop}>
            <ExpandLessIcon
              size="large"
              className={classes.backToTopButtonIcon}
            />
          </Button>
        </Box>
      </Box>
      <Box>
        <section id="about_me" className={classes.sectionContainer}>
          <Container>
            <Grid container justify="center">
              <Grid item xs={12} className={classes.sectionHeaderDiv}>
                <Typography
                  variant="h3"
                  align="center"
                  color="primary"
                  className={classes.sectionHeaderTypography}
                >
                  About me
                </Typography>
              </Grid>
              <Grid item xs={4} className={classes.sectionImageDiv}>
                <img src="https://via.placeholder.com/300"></img>
              </Grid>
              <Grid item xs={8} className={classes.sectionBodyDiv}>
                <Typography variant="body1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Pellentesque elit ullamcorper dignissim cras tincidunt
                  lobortis feugiat. Urna porttitor rhoncus dolor purus non enim.
                  Ipsum dolor sit amet consectetur adipiscing. At in tellus
                  integer feugiat scelerisque varius morbi. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Pellentesque elit
                  ullamcorper dignissim cras tincidunt lobortis feugiat. Urna
                  porttitor rhoncus dolor purus non enim. Ipsum dolor sit amet
                  consectetur adipiscing. At in tellus integer feugiat
                  scelerisque varius morbi. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Pellentesque elit
                  ullamcorper dignissim cras tincidunt lobortis feugiat. Urna
                  porttitor rhoncus dolor purus non enim. Ipsum dolor sit amet
                  consectetur adipiscing. At in tellus integer feugiat
                  scelerisque varius morbi. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Pellentesque elit
                  ullamcorper dignissim cras tincidunt lobortis feugiat. Urna
                  porttitor rhoncus dolor purus non enim. Ipsum dolor sit amet
                  consectetur adipiscing. At in tellus integer feugiat
                  scelerisque varius morbi. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Pellentesque elit
                  ullamcorper dignissim cras tincidunt lobortis feugiat. Urna
                  porttitor rhoncus dolor purus non enim. Ipsum dolor sit amet
                  consectetur adipiscing. At in tellus integer feugiat
                  scelerisque varius morbi. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Pellentesque elit
                  ullamcorper dignissim cras tincidunt lobortis feugiat. Urna
                  porttitor rhoncus dolor purus non enim. Ipsum dolor sit amet
                  consectetur adipiscing. At in tellus integer feugiat
                  scelerisque varius morbi.
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </section>
        <Divider />
        <section id="resume" className={classes.sectionContainer}>
          <Container>
            <Grid container justify="center">
              <Grid item xs={12} className={classes.sectionHeaderDiv}>
                <Typography
                  variant="h3"
                  align="center"
                  color="primary"
                  className={classes.sectionHeaderTypography}
                >
                  Resume
                </Typography>
              </Grid>
              <Grid item xs={12} className={classes.sectionSubHeaderDiv}>
                <Typography
                  variant="h5"
                  align="flex-start"
                  color="primary"
                  className={classes.sectionSubHeaderTypography}
                >
                  Education
                </Typography>
              </Grid>
              <Grid item xs={12} className={classes.sectionBodyDiv}>
                <ResumeEducationSection
                  educationList={
                    loading ? [] : profile ? profile.education : []
                  }
                />
              </Grid>
              <Grid item xs={12} className={classes.sectionSubHeaderDiv}>
                <Typography
                  variant="h5"
                  align="flex-start"
                  color="primary"
                  className={classes.sectionSubHeaderTypography}
                >
                  Experience
                </Typography>
              </Grid>
              <Grid item xs={12} className={classes.sectionBodyDiv}>
                <ResumeExperienceSection
                  experienceList={
                    loading ? [] : profile ? profile.experience : []
                  }
                />
              </Grid>
              <Grid item xs={12} className={classes.sectionSubHeaderDiv}>
                <Typography
                  variant="h5"
                  align="flex-start"
                  color="primary"
                  className={classes.sectionSubHeaderTypography}
                >
                  Skills
                </Typography>
              </Grid>
              <Grid item xs={12} className={classes.sectionBodyDiv}>
                <ResumeSkillsSection
                  skillsList={loading ? [] : profile ? profile.skills : []}
                />
              </Grid>
            </Grid>
          </Container>
        </section>
        <Divider />
        <section id="contact_me">
          <Container>
            <Grid container justify="center">
              <Grid item xs={12} className={classes.sectionHeaderDiv}>
                <Typography
                  variant="h3"
                  align="center"
                  color="primary"
                  className={classes.sectionHeaderTypography}
                >
                  Contact me
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1" align="center" color="primary">
                  Reach out and say hello! Email me at \blablabla@bla.bla\.
                </Typography>
                <Typography variant="body1" align="center" color="primary">
                  Find me on social media.
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </section>
      </Box>
    </Box>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
  getCurrentProfile: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  profile: state.profile,
});

export default connect(mapStateToProps, {
  getCurrentProfile,
})(Landing);
