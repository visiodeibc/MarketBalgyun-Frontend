import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        background: 'linear-gradient(180deg, #C3E47C 0%, #4EAE4E 100%)',
        flexDirection: 'column',
        alignItems: 'center',
    },
    paper: {
        background: '#FFFFFF',
        margin: theme.spacing(10),
        padding: theme.spacing(3),
        width: '70%',
        flexDirection: 'column',
        alignItems: 'center',
    },
    header: {
        margin : theme.spacing(3, 0, 2),
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(3),
    },
    checkbox: {
        color: '#4EAE4E',
    },
    menuitem: {
        width: 'fit-content',
    },
    submit: {
        background: '#DCF5D4',
        width: '100%',
        margin: theme.spacing(3, 0, 2),
    },
    search: {
        background: '#4EAE4E',
        color: 'white',
        width: '100%',
    },
}));

export default useStyles;