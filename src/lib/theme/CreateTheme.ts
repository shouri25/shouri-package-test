import { createTheme } from '@mui/material/styles';
import { MixThemeOptions, MixTheme } from './ThemeOptions';

export const theme =()=> {
    return createTheme({
        typography: {
            fontFamily: 'Sneak'
        },
        components: {
            MuiCssBaseline: {
                styleOverrides: `
                @font-face {
                  font-family: 'Sneak';
                  font-style: normal;
                  font-display: swap;
                  font-weight: 400;
                }
                @font-face {
                    font-family: 'Sneak';
                    font-style: normal;
                    font-display: swap;
                    font-weight: 400;
                  }
              `
            }
        },
        palette: {
            primary: {
                main: '#6663FD'
            },
            secondary: {
                main: '#FFFFFF'
            },
            myAwesomeColor: 'red'
        },
        font: {
            primary: 'Sneak',
            secondary: 'Sneak',
            tertiary: 'Sneak',
            sneak: 'Sneak'
        },
        global: {
            background: 'red',
        },
    } as MixThemeOptions)as MixTheme
};
