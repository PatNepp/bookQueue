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
})