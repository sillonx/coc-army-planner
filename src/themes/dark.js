import { createTheme } from '@mui/material/styles';

const DarkPalette = createTheme({
    palette: {
        mode: 'dark',
        common: {
            black : '#000000',
            white : '#FFFFFF'
        },
        navbar: {
            background: '#272727',
            text: '#FFFFFF',
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
})

export default DarkPalette;