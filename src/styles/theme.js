import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000',
      white: '#fff',
      darkTransparent: '#000000b8',
    },
  },
  typography: {
    main: 'Karla, sans-serif;',
    logoFont: 'Homemade Apple, cursive;',
  },
});

export default theme;
