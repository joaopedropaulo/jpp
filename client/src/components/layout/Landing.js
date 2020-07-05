import React, { useState } from "react";
import { connect } from "react-redux";

import { Redirect } from "react-router-dom";

import {
  Box,
  Button,
  Typography,
  Container,
  Paper,
  Grid,
  Divider,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import ExpandLessIcon from "@material-ui/icons/ExpandLess";

import PropTypes from "prop-types";

import Navbar from "./Navbar";

import Image from "../../img/test.jpg"; // Import using relative path

const useStyles = makeStyles((theme) => ({
  landingTopDiv: {
    height: "100vh",
    backgroundImage: `url(${Image})`,
  },
  sectionContainer: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
  },
  sectionHeaderDiv: {
    margin: "5% 0%",
  },
  sectionBodyDiv: {
    alignSelf: "center",
  },
  sectionImageDiv: {
    alignSelf: "center",
    textAlign: "center",
  },
  backToTopButtonBox: {
    position: "fixed",
    right: "50%",
    bottom: "30px",
    zIndex: "118",
  },
  backToTopButton: {
    backgroundColor: "transparent",
  },
  backToTopButtonIcon: {
    color: "white",
  },
}));

const Landing = ({ isAuthenticated }) => {
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
            {/* <Box className={classes.sectionBox}> */}
            <Grid container justify="center">
              <Grid item xs={12} className={classes.sectionHeaderDiv}>
                <Typography variant="h3" align="center" color="secondary">
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
            {/* </Box> */}
          </Container>
        </section>
        <Divider />
        <section id="resume">
          <Container>
            {/* <Box className={classes.sectionBox}> */}
            <Grid container justify="center">
              <Grid item xs={12} className={classes.sectionHeaderDiv}>
                <Typography variant="h3" align="center" color="secondary">
                  Resume
                </Typography>
              </Grid>
              <Grid item xs={12} className={classes.sectionHeaderDiv}>
                <Typography variant="h5" align="flex-start" color="secondary">
                  Education
                </Typography>
              </Grid>
              <Grid item xs={12} className={classes.sectionBodyDiv}>
                <Typography variant="body1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Pellentesque elit ullamcorper dignissim cras tincidunt
                  lobortis feugiat. Urna porttitor rhoncus dolor purus non enim.
                  Ipsum dolor sit amet consectetur adipiscing. At in tellus
                  integer feugiat scelerisque varius morbi. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                  porttitor rhoncus dolor purus non enim. Ipsum dolor sit amet
                  consectetur adipiscing. At in tellus integer feugiat
                  scelerisque varius morbi. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Pellentesque elit
                  ullamcorper dignissim cras tincidunt lobortis feugiat. Urna
                  porttitor rhoncus dolor purus non enim. Ipsum dolor sit amet
                  consectetur adipiscing. At in tellus integer feugiat
                </Typography>
              </Grid>
              <Grid item xs={12} className={classes.sectionHeaderDiv}>
                <Typography variant="h5" align="flex-start" color="secondary">
                  Experience
                </Typography>
              </Grid>
              <Grid item xs={12} className={classes.sectionBodyDiv}>
                <Typography variant="body1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Pellentesque elit ullamcorper dignissim cras tincidunt
                  lobortis feugiat. Urna porttitor rhoncus dolor purus non enim.
                  Ipsum dolor sit amet consectetur adipiscing. At in tellus
                  integer feugiat scelerisque varius morbi. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
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
                  scelerisque varius morbi. porttitor rhoncus dolor purus non
                  enim. Ipsum dolor sit amet consectetur adipiscing. At in
                  tellus integer feugiat scelerisque varius morbi. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua.
                  Pellentesque elit ullamcorper dignissim cras tincidunt
                  lobortis feugiat. Urna porttitor rhoncus dolor purus non enim.
                  Ipsum dolor sit amet consectetur adipiscing. At in tellus
                  integer feugiat scelerisque varius morbi. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Pellentesque elit
                  ullamcorper dignissim cras tincidunt lobortis feugiat. Urna
                  porttitor rhoncus dolor purus non enim. Ipsum dolor sit amet
                  consectetur adipiscing. At in tellus integer feugiat
                  scelerisque varius morbi. At in tellus integer feugiat
                  scelerisque varius morbi.At in tellus integer feugiat
                  scelerisque varius morbi.At in tellus integer feugiat
                  scelerisque varius morbi.At in tellus integer feugiat
                  scelerisque varius morbi.At in tellus integer feugiat
                  scelerisque varius morbi.At in tellus integer feugiat
                  scelerisque varius morbi.At in tellus integer feugiat
                  scelerisque varius morbi.At in tellus integer feugiat
                  scelerisque varius morbi. At in tellus integer feugiat
                  scelerisque varius morbi. At in tellus integer feugiat
                  scelerisque varius morbi. porttitor rhoncus dolor purus non
                  enim. Ipsum dolor sit amet consectetur adipiscing. At in
                  tellus integer feugiat scelerisque varius morbi. Lorem ipsum
                  dolor sit amet,
                </Typography>
              </Grid>
              <Grid item xs={12} className={classes.sectionHeaderDiv}>
                <Typography variant="h5" align="flex-start" color="secondary">
                  Skills
                </Typography>
              </Grid>
              <Grid item xs={12} className={classes.sectionBodyDiv}>
                <Typography variant="body1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Pellentesque elit ullamcorper dignissim cras tincidunt
                  lobortis feugiat. Urna porttitor rhoncus dolor purus non enim.
                  Ipsum dolor sit amet consectetur adipiscing. At in tellus
                  integer feugiat scelerisque varius morbi. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                  porttitor rhoncus dolor purus non enim. Ipsum dolor sit amet
                  consectetur adipiscing. At in tellus integer feugiat
                  scelerisque varius morbi. Lorem ipsum dolor sit amet
                </Typography>
              </Grid>
            </Grid>
            {/* </Box> */}
          </Container>
        </section>
        <Divider />
        <section id="contact_me">
          <Typography variant="h4" style={{ width: "100%", height: "100%" }}>
            Conctact me
          </Typography>
        </section>
      </Box>
    </Box>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
