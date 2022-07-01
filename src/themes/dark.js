import { createTheme } from '@mui/material/styles';

const DarkPalette = createTheme({
    palette: {
        mode: 'dark',
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
            main: '#000000'
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
            primary: '#ffffff',
            secondary: 'rgba(255,255,255,0.6)'
            
        },
        background: {
            default: '#282828',
            paper: '#202020'
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

export default DarkPalette;