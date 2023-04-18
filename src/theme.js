import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#3B253E',
            light: '#866D89',
            dark: '#1F1720',
        },
        secondary: {
            main: '#BA5C52',
            light: '#D3918A',
            dark: '#753933',
        },
        success: {
            main: '#B1C26B',
            light: '#D0E18F',
            dark: '#6C783C',
        },
        info: {
            main: '#0077B6',
            light: '#6BB7E1',
            dark: '#003C5D',
        },
        text: {
            primary: '#060407',
            secondary: '#9F9C99',
        },
        background: {
            default: '#575A4B',
            light: '#F3EDE4',
            dark: '#C6BEB2',
        }
    },
    typography: {
        h1: {
            fontFamily: 'Ubuntu',
            fontWeight: 700,
            fontSize: 32,
        },
        h2: {
            fontFamily: 'Ubuntu',
            fontWeight: 700,
            fontSize: 28,
        },
        h3: {
            fontFamily: 'Ubuntu',
            fontWeight: 700,
            fontSize: 24,
        },
        h4: {
            fontFamily: 'Ubuntu',
            fontWeight: 700,
            fontSize: 20,
        },
        h5: {
            fontFamily: 'Ubuntu',
            fontWeight: 500,
            fontSize: 28,
        },
        h6: {
            fontFamily: 'Ubuntu',
            fontWeight: 500,
            fontSize: 24,
        },
        subtitle1: {
            fontFamily: 'Ubuntu',
            fontWeight: 500,
            fontSize: 14,
        },
        subtitle2: {
            fontFamily: 'Ubuntu',
            fontWeight: 400,
            fontSize: 14,
        },
        body1: {
            fontFamily: 'Cardo',
            fontWeight: 700,
            fontSize: 16,
        },
        body2: {
            fontFamily: 'Cardo',
            fontWeight: 400,
            fontSize: 16,
        },
        caption: {
            fontFamily: 'Cardo',
            fontWeight: 400,
            fontSize: 14,
        },
        button: {
            fontFamily: 'Ubuntu',
            fontWeight: 500,
            fontSize: 16,
        }
    }
})