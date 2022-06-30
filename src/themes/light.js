import { createTheme } from '@mui/material/styles';

const LightPalette = createTheme({
    palette: {
        mode: 'light',
        common: {
            black : '#000000',
            white : '#FFFFFF'
        },
        navbar: {
            background: '#F1F1F1',
            text: '#000000',
            textHover: '#FAD248',
            buttons: '#FAD248'
        },
        buttons: {
            main: '#FAD248'
        },
        primary: {
            main: '#DD0000'
        },
        secondary: {
            main: '#FFFFFF'
        },
        error: {
            main: '#FF4400'
          },
        warning: {
            main: '#FFA01F'
        },
        info: {
            main: '#1F8FFF'
        },
        success: {
            main: '#5FFF1F'
        },
        grey: {

        },
        text: {
            primary: '#000000',
            secondary: 'rgba(0,0,0,0.6)'
        },
        background: {
            default: '#EEEEEE',
            paper: '#FDFDFD'
        },
        action: {

        },
        contrastThreshold: 3,
        tonalOffset: 0.2,
    },
})

export default LightPalette;