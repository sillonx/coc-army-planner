import { createTheme } from '@mui/material/styles';

const DarkPalette = createTheme({
    palette: {
        mode: 'dark',
        common: {
            black : '#000000',
            white : '#ffffff'
        },
        navbar: {
            background: '#272727',
            text: '#ffffff',
            textHover: '#E6B74B',
            buttons: '#E6B74B'
        },
        primary: {
            main: '#DD0000'
        },
        secondary: {
            main: '#f03c5a'
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