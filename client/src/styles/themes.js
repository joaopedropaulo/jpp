import { createMuiTheme } from "@material-ui/core/styles";

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
    h1: {
      textTransform: "uppercase",
    },
    h2: {
      textTransform: "uppercase",
    },
    h3: {
      textTransform: "uppercase",
    },
    h4: {
      textTransform: "uppercase",
      fontWeight: 900,
    },
    h5: {
      textTransform: "uppercase",
    },
    h6: {
      textTransform: "uppercase",
    },
    subtitle1: {
      textTransform: "uppercase",
    },
    subtitle2: {
      textTransform: "uppercase",
    },
  },
});

export default darkTheme;
