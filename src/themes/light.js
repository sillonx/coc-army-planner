import { createTheme } from '@mui/material/styles';

const LightPalette = createTheme({
    palette: {
        mode: 'light',
        common: {
            black : '#000000',
            white : '#ffffff'
        },
        navbar: {
            background: '#f1f1f1',
            text: '#000000',
            textHover: '#E6B74B',
            buttons: '#E6B74B'
        },
        primary: {
            main: '#DD0000'
        },
        secondary: {
            main: '#ffffff'
        },
        error: {
            main: '#ff4400'
          },
        warning: {
            main: '#ff4400'
        },
        info: {
            main: '#ff4400'
        },
        success: {
            main: '#ff4400'
        },
        grey: {

        },
        text: {
            primary: '#000000',
            secondary: 'rgba(0,0,0,0.6)'
        },
        background: {
            default: '#f0f0f0',
            paper: '#fdfdfd'
        },
        action: {

        },
        contrastThreshold: 3,
        tonalOffset: 0.2,
    },
})

export default LightPalette;