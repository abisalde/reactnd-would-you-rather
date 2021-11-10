import React, { Fragment, useState } from 'react';
import {
    makeStyles,
    Card,
    CardContent,
    CardHeader,
    CardMedia,
    Typography,
    FormControl,
    MenuItem,
    InputLabel,
    Select,
    Button,
} from '@material-ui/core';
import LoginImage from '../assets/img/sd1.png';

const Login = () => {
    const classes = useStyles();
    const [authUser, setAuthUser] = useState('');

    const handleChange = (e) => {
        setAuthUser(e.target.value);
    };

    return (
        <Fragment>
            <Card className={classes.root}>
                <CardHeader
                    title='Welcome to Would You Rather App!'
                    subheader='Please sign in to continue'
                    className={classes.header}
                />
                <CardMedia
                    className={classes.media}
                    image={LoginImage}
                    title='Would-You-Rather-Poll'
                />
                <CardContent>
                    <Typography
                        variant='body2'
                        component='h2'
                        align='center'
                        gutterBottom={true}
                        className={classes.text}
                    >
                        Sign in
                    </Typography>
                    <FormControl
                        variant='outlined'
                        className={classes.formControl}
                    >
                        <InputLabel id='demo-simple-select-outlined-label'>
                            Select User
                        </InputLabel>
                        <Select
                            labelId='demo-simple-select-outlined-label'
                            id='demo-simple-select-outlined'
                            value={authUser}
                            onChange={handleChange}
                            label='user'
                        >
                            <MenuItem value={1}>John Doe</MenuItem>
                            <MenuItem value={2}>Tyler</MenuItem>
                            <MenuItem value={3}>Sarah Drasner</MenuItem>
                        </Select>
                        <Button
                            variant='contained'
                            disabled={authUser === ''}
                            className={classes.btn}
                        >
                            Sign In
                        </Button>
                    </FormControl>
                </CardContent>
            </Card>
        </Fragment>
    );
};

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 400,
        width: '100%',
        display: 'flex',
        alignItems: 'stretch',
        position: 'relative',
        flexDirection: 'column',
        margin: '2rem auto 0',
        border: '0.0925rem solid #d0d7de',
        backgroundImage: 'linear-gradient(-90deg, #efffff 0%, white 100%)',
    },
    text: {
        fontSize: '1.5rem',
        fontWeight: 600,
        color: ' #10b467',
    },
    media: {
        height: 260,
        width: '100%',
        verticalAlign: 'middle',
        margin: '0 auto',
        marginTop: '1.75rem',
    },
    header: {
        padding: '0.75rem 0rem',
        backgroundColor: 'rgba(175,184,193,.2)',
        borderBottom: '0.0925rem solid #d0d7de',
        textAlign: 'center',
        height: '3rem',
    },
    formControl: {
        width: '100%',
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    btn: {
        width: '100%',
        marginTop: '1.5rem',
        fontSize: '1.12rem',
        textTransform: 'none',
        fontWeight: 600,
        backgroundColor: '#10b467',
        color: '#fff',
        '&:hover': {
            backgroundColor: '#06a158',
        },
    },
}));

export default Login;
