import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import {Redirect, Link} from "react-router-dom";
import TextField from "@material-ui/core/TextField/TextField";

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

function onLogOut() {
    localStorage.clear()
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
    heroContent: {
        padding: theme.spacing(8, 0, 6),
    },
    cardHeader: {
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
    },
    cardPricing: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline',
        marginBottom: theme.spacing(2),
    },
    footer: {
        borderTop: `1px solid ${theme.palette.divider}`,
        marginTop: theme.spacing(8),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            paddingTop: theme.spacing(6),
            paddingBottom: theme.spacing(6),
        },
    },
    quantity: {
        marginTop: theme.spacing(4),
        width: 70,
    }
}));

const tiers = [
    {
        title: 'Pizza',
        price: '180 den',
        description: ['Description ...'],
        buttonText: 'Order NOW!',
        buttonVariant: 'outlined',
    },
    {
        title: 'Burger',
        subheader: 'Best choice',
        price: '210 den',
        description: [
            'Description ...',
        ],
        buttonText: 'Order NOW!',
        buttonVariant: 'contained',
    },
    {
        title: 'Salad',
        price: '130 den',
        description: [
            'Description ...',
        ],
        buttonText: 'Order NOW!',
        buttonVariant: 'outlined',
    },
];
const footers = [
    {
        title: 'Company',
        description: ['Team', 'History', 'Contact us', 'Locations'],
    },
    {
        title: 'Features',
        description: ['Cool stuff', 'Random feature', 'Team feature', 'Developer stuff', 'Another one'],
    },
    {
        title: 'Resources',
        description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
    },
    {
        title: 'Legal',
        description: ['Privacy policy', 'Terms of use'],
    },

];

export default function Pricing(props) {
    const classes = useStyles();
    console.log(localStorage.getItem('phone_number'))
    console.log(props.tableNumber)
    console.log(props.nextUrl)

    let counter = 1
    if (localStorage.getItem('phone_number') === null && props.tableNumber != 0) {
        return <Redirect to={{pathname: "/", state: {data: props.nextUrl}}}/>
    }
    if (props.tableNumber == 0){
        return <Redirect to={{pathname: "/menu", state: {tableNumber: props.tableNumber}}} />
    }
    return (

        <React.Fragment>
            <CssBaseline />
            <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                        Pizza Garden
                    </Typography>
                    <nav>
                        <Button color='primary' variant='outlined' className={classes.link}>
                        <Link variant="button" to={{pathname: '/menu', state: { tableNumber: props.tableNumber}}}  color="textPrimary" className={classes.link}>
                            Menu
                        </Link>
                        </Button>
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
                        <Link variant="button" to={{pathname: '/order', state: { tableNumber: props.tableNumber}}}  color="textPrimary" className={classes.link}>
                            Orders
                        </Link>
                    </Button>
                </Toolbar>
            </AppBar>
            {/* Hero unit */}
            <Container maxWidth="sm" component="main" className={classes.heroContent}>
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    Welcome
                </Typography>
                <Typography variant="h5" align="center" color="textSecondary" component="p">
                    Suggestions for you..
                    You can always select the menu button up top!
                </Typography>
            </Container>
            {/* End hero unit */}
            <Container maxWidth='md'  component="main">
                <Grid container spacing={5} alignItems="flex-end">
                    {props.data.map((item) => (
                        // Enterprise card is full width at sm breakpoint
                        <Grid item key={item.rank} xs={12} sm={12} md={4}>
                            <Card>
                                <CardHeader
                                    title={item.name}
                                    subheader={item.rank === 2 ? 'Best Choice!' : null}
                                    titleTypographyProps={{ align: 'center' }}
                                    subheaderTypographyProps={{ align: 'center' }}
                                    action={item.rank === 2 ? (
                                        <StarIcon />
                                         ): null}
                                    className={classes.cardHeader}
                                />
                                <CardContent>
                                    <div className={classes.cardPricing}>
                                        <Typography component="h2" variant="h3" color="textPrimary">
                                            {item.price} den
                                        </Typography>
                                    </div>
                                    <div className={classes.cardPricing}>
                                        <Typography  variant='subtitle2' color='textSecondary'>
                                            {item.description}
                                        </Typography>
                                    </div>
                                    <TextField
                                        className={classes.quantity}
                                        id="outlined-number"
                                        placeholder="0"
                                        label="Quantity"
                                        size="small"
                                        onChange={(event) => props.onQuantityChange(event.target.value)}
                                        type="number"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        variant="outlined"
                                    />
                                </CardContent>
                                <CardActions>
                                    <Button onClick={() => props.onOrderButtonClick(item.id)} fullWidth variant='contained' color="primary">
                                        Order NOW!
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            {/* Footer */}
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    Something here to give the footer a purpose!
                </Typography>
                <Copyright />
            </footer>
            {/* End footer */}
        </React.Fragment>
    );
}