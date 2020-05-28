import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Tabs from "@material-ui/core/Tabs";
import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import SignIn from "./SignIn";
import TextField from "@material-ui/core/TextField";
import {getSingleElementValue} from "@testing-library/jest-dom/dist/utils";
import {Link} from 'react-router-dom'
import Redirect from "react-router-dom/es/Redirect";

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
        marginBottom: -20
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
    quantity: {
        margin: theme.spacing(1),
        width: 70,
        marginLeft: -1,
        marginBottom: -10

    },
    price:{
        margin: theme.spacing(1),
        marginLeft: -1,

    }
}));

function onLogOut() {
    localStorage.clear()
}


export default function Album(props) {
    const classes = useStyles();

    const array = props.item.items.map(item => (
        item.type
    ))
    const types = [...new Set(array)]

    const index = props.item.category
    ? types.findIndex(group => group === props.item.category) : 0

    const onIndexSelect = (e, index) =>
        props.onSelect(index === -1 ? '' : types[index])

    console.log(localStorage.getItem('phone_number'))
    console.log(props.item.tableNumber)

    if(props.item.outsideUser === true){
        return <Redirect to={{pathname: "/", state: {data: "/pizzagarden/1"}}} />
    }

    return (
        <React.Fragment>
            <CssBaseline/>
            <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                        Pizza Garden
                    </Typography>
                    <nav>
                        <Link variant="button" color="textPrimary" href="http://localhost:3000/menu"
                              className={classes.link}>
                            Menu
                        </Link>
                        <Link variant="button" color="textPrimary" href="#" className={classes.link}>
                            About
                        </Link>
                        <Button color='primary' variant='outlined' className={classes.link}>
                            <Link onClick={onLogOut} variant="button" color="textPrimary" href="http://localhost:3000/" className={classes.link}>
                                Logout
                            </Link>
                        </Button>
                    </nav>
                    <Button color='primary' variant='outlined' className={classes.link}>
                        <Link variant="button" to={{pathname: '/order', state: { tableNumber: props.item.tableNumber}}}  color="textPrimary" className={classes.link}>
                            Orders
                        </Link>
                    </Button>
                </Toolbar>
                <Paper className={classes.root}>
                    <Tabs
                        value={index}
                        onChange={onIndexSelect}
                        indicatorColor="primary"
                        textColor="primary"
                        centered
                    >
                        {types.map(item => (
                            <Tab label={item}/>
                        ))}

                        )}
                    </Tabs>
                </Paper>
            </AppBar>
            <main>
                {/* Hero unit */}
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            {props.item.category}
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>

                        </Typography>
                        <div className={classes.heroButtons}>
                            <Grid container spacing={2} justify="center">
                                <Grid item>

                                </Grid>
                                <Grid item>

                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {props.item.items.map((item) =>
                            !props.item.category || props.item.category === item.type ?
                                (
                                    <Grid item key={item.id} xs={12} sm={6} md={4}>
                                        <Card className={classes.card}>
                                            <CardMedia
                                                className={classes.cardMedia}
                                                image="https://source.unsplash.com/random"
                                                title="Image title"
                                            />
                                            <CardContent className={classes.cardContent}>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                    {item.name}
                                                </Typography>
                                                <Typography >
                                                    {item.description}
                                                </Typography>
                                            </CardContent>
                                            <CardContent>
                                                <Typography  variant='h6' className={classes.price}>
                                                    {props.item.tableNumber == 0 || props.item.tableNumber == 1 ? item.price - (item.price * 0.1) : item.price} den {props.item.tableNumber == 0 || props.item.tableNumber == 1 ? <Typography variant='subtitle2' color='error'>-10%</Typography>: null}
                                                </Typography>
                                                <TextField
                                                    className={classes.quantity}
                                                    onChange={(event) => props.onQuantitySelect(event.target.value)}
                                                    id="outlined-number"
                                                    placeholder="0"
                                                    label="Quantity"
                                                    type="number"
                                                    size="small"
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                    variant="outlined"
                                                />
                                            </CardContent>
                                            <CardActions>
                                                <Button onClick={() => props.onClick(item.id)} size="medium"
                                                        color="primary">
                                                    Order
                                                </Button>

                                            </CardActions>
                                        </Card>
                                    </Grid>
                                ) : null
                        )}
                    </Grid>
                </Container>
            </main>
            {/* Footer */}
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    Something here to give the footer a purpose!
                </Typography>
                <Copyright/>
            </footer>
            {/* End footer */}
        </React.Fragment>
    );
}