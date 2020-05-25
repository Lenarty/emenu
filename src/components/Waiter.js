import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import green from "@material-ui/core/colors/green";
import {ThemeProvider} from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import Container from "@material-ui/core/Container";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        marginTop: 30
    },
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
    },
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
        flexWrap: 'wrap',
    },
    toolbarTitle: {
        flexGrow: 1,
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },

    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
    button: {
        margin: theme.spacing(2),
        marginRight: 10,
        marginLeft: 70,
        marginTop: theme.spacing(5)
    },
    buttonDone: {
        marginLeft: -20,
        marginTop: theme.spacing(3)
    },

}));

export default function Waiter(props) {
    const classes = useStyles();

    const a = props.item.map(item => (
            item.phone_number
    ))

    const users = [...new Set(a)];

    const b = new Map([
        ...props.item.map(item => [item.phone_number, item.payment_done])
    ]);


    const theme = createMuiTheme({
        palette: {
            primary: green,
        },
    });
    const total = props.item.reduce((prev,next) => prev + next.meal_price * next.quantity,0);

    console.log(b)
    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                        Pizza Garden - Waiter
                    </Typography>

                    <Link onClick={() => props.onLogOut()} variant="button" color="textPrimary" href="http://localhost:3000/signin" className={classes.link}>
                        Logout
                    </Link>
                </Toolbar>
            </AppBar>
            <div className={classes.root}>
                    {users.map(user =>(
                        b.get(user) === 0 ?
                            (
                <Container className={classes.cardGrid} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                                    <Grid item key={user} xs={12} sm={6} md={4}>
                                        <Card className={classes.card}>
                                            <CardContent className={classes.cardContent}>
                                                <Typography>
                                                    {[...new Set(props.item.map((item) =>
                                                        user === item.phone_number && item.payment_done === 0 ?
                                                            (
                                                                item.user_name):null))]}
                                                </Typography>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                    <Divider/>
                                                    {props.item.map((item) =>
                                                        user === item.phone_number && item.payment_done === 0 ?
                                                        (
                                                        item.meal_name
                                                        ):null)}
                                                        <Divider />
                                                </Typography>
                                                <Typography>
                                                    {total}
                                                </Typography>

                                                <CardActions>
                                                    <Button onClick={() => props.onClick(user)} size="medium" color="primary">
                                                        Make payment
                                                    </Button>
                                                </CardActions>
                                            </CardContent>
                                       </Card>

                                    </Grid>
                                </Grid>

                            </Container>
                            ):null
                    ))}
            </div>
        </React.Fragment>
    );
}