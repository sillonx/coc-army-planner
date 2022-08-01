import { createTheme } from '@mui/material/styles';

const LightPalette = createTheme({
    palette: {
        mode: 'light',
        common: {
            black : '#000000',
            white : '#FFFFFF'
        },
        buttons: {
            main: '#DD0000',
            secondary: '#FAD248'
        },
        textfield: {
            main: '#FAD248',
            secondary: '#DD0000'
        },
        primary: {
            main: '#7F7F7F'
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
            main: '#52C425'
        },
        grey: {

        },
        text: {
            primary: '#000000',
            secondary: 'rgba(0,0,0,0.6)'
        },
        background: {
            default: '#FAFAFA',
            paper: '#DEDEDE'
        },
        action: {

        },
        contrastThreshold: 3,
        tonalOffset: 0.2,
    },
    typography: {
        fontFamily: 'Arial',
        fontSize: 14,
        fontWeightBold: 1000
    }
})

export default LightPalette;