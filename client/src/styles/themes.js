import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import merriweather from "typeface-merriweather";
import opensans from "typeface-open-sans";
import playfair from "typeface-playfair-display";

const darkTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#444444",
    },
    secondary: {
      main: "#5DB7DE",
    },
    background: {
      default: "#f7f7f7",
    },
    text: {
      primary: "#444444",
    },
  },
  typography: {
    fontFamily: "'Open Sans', serif",
    h1: {
      textTransform: "uppercase",
      fontFamily: "'Playfair Display', serif",
    },
    h2: {
      textTransform: "uppercase",
      fontFamily: "'Playfair Display', serif",
    },
    h3: {
      textTransform: "uppercase",
      fontFamily: "'Playfair Display', serif",
    },
    h4: {
      textTransform: "uppercase",
      fontFamily: "'Playfair Display', serif",
      fontWeight: 700,
    },
    h5: {
      textTransform: "uppercase",
      fontFamily: "'Playfair Display', serif",
    },
    h6: {
      textTransform: "uppercase",
      fontFamily: "'Playfair Display', serif",
    },
    subtitle1: {
      textTransform: "uppercase",
      fontFamily: "'Playfair Display', serif",
    },
    subtitle2: {
      textTransform: "uppercase",
      fontFamily: "'Playfair Display', serif",
    },
    body1: {
      //fontFamily: "'Open Sans', serif",
    },
    body2: {
      //fontFamily: "'Open Sans', serif",
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [merriweather, opensans, playfair],
      },
    },
  },
});

export default responsiveFontSizes(darkTheme);
