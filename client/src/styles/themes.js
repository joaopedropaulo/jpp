import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';
import merriweather from '@fontsource/merriweather';
import opensans from '@fontsource/open-sans';
import playfair from '@fontsource/playfair-display';

const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#444444',
    },
    secondary: {
      main: '#5DB7DE',
    },
    background: {
      default: '#f7f7f7',
    },
    text: {
      primary: '#444444',
    },
  },
  typography: {
    fontFamily: "'Open Sans', serif",
    h1: {
      textTransform: 'uppercase',
      fontFamily: "'Playfair Display', serif",
    },
    h2: {
      textTransform: 'uppercase',
      fontFamily: "'Playfair Display', serif",
    },
    h3: {
      textTransform: 'uppercase',
      fontFamily: "'Playfair Display', serif",
    },
    h4: {
      textTransform: 'uppercase',
      fontFamily: "'Playfair Display', serif",
      fontWeight: 700,
    },
    h5: {
      textTransform: 'uppercase',
      fontFamily: "'Playfair Display', serif",
    },
    h6: {
      textTransform: 'uppercase',
      fontFamily: "'Playfair Display', serif",
    },
    subtitle1: {
      //fontFamily: "'Playfair Display', serif",
      // fontFamily: "'Open Sans', serif",
    },
    subtitle2: {
      //fontFamily: "'Playfair Display', serif",
      // fontFamily: "'Open Sans', serif",
    },
    body1: {
      // fontFamily: "'Open Sans', serif",
    },
    body2: {
      // fontFamily: "'Open Sans', serif",
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [merriweather, opensans, playfair],
      },
    },
  },
});

export default responsiveFontSizes(darkTheme);
