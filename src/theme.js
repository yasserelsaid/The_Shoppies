import { createMuiTheme } from '@material-ui/core/styles';

// Create a theme instance.
export const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#0D1117',
      light: '#161B22',
    },
  },
  typography: {
    fontFamily: [
      'trebuchet MS',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});
export const lightTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#fbfbfb',
      light: '#fff',
    },
  },
  typography: {
    fontFamily: [
      'trebuchet MS',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});
