import { makeStyles } from 'tss-react/mui';

export default makeStyles()((theme) => ({
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 70
    },
    logo: {
        padding: '3px 6px',
        backgroundColor: theme.palette.secondary.dark,
        borderRadius: 10,
        border: '2px solid',
        borderColor: theme.palette.secondary.main
    },
    tabs: {
        display: 'flex'
    },
    listButton: {
        padding: '21px 20px',
        margin: 0,
        '&.Mui-selected': {
            color: theme.palette.secondary.light,
            borderBottom: '3px solid',
            borderColor: theme.palette.info.main,
        }
    },
    lightModeIcon: {
        color: theme.palette.background.light
    }
}))