import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Redirect} from "react-router-dom";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignIn(props) {
    const classes = useStyles();
    const type = props.item.data.map(a => a.user_type)

    console.log(props.item.phone_number)
    console.log(props.item.password)
    console.log(props.item.error)
    console.log(props.item.data)
    console.log(type)
    console.log(props.item.nextUrl)

    if( props.item.redirect === true && type == 'Client') {
        return <Redirect to={props.item.nextUrl}/>
    }
    if( props.item.redirect === true && type == 'Kitchen') {
        return <Redirect to={"/kitchen"}/>
    }
    if( props.item.redirect === true && type == 'Waiter') {
        return <Redirect to={"/waiter"}/>
    }
    if( props.item.redirect === true && type == 'Admin') {
        return <Redirect to={"/admin"}/>
    }
    if( props.item.redirect === true && type == 'Manager') {
        return <Redirect to={"/manager"}/>
    }
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="phone"
                        label="Phone number"
                        name="phone_number"
                        type="tel"
                        autoFocus
                        onChange={(event) => props.onPhoneChange(event.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={(event) => props.onPasswordChange(event.target.value)}
                    />
                    {props.item.error2 != null ? (
                        <Typography>
                            {props.item.error2}
                        </Typography>
                    ) :
                        <Typography>
                            {props.item.error}
                        </Typography>
                    }
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={() => props.onSubmitHandler()}
                    >

                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                        </Grid>
                        <Grid item>
                            <Link href="http://localhost:3000/signup" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    );
}