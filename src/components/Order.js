import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Review from './Review';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import {FormatBold} from "@material-ui/icons";
import grey from "@material-ui/core/colors/grey";
import red from "@material-ui/core/colors/red";
import Divider from "@material-ui/core/Divider";
import Timer from 'react-compound-timer'
import {Redirect, Link} from "react-router-dom";



const products = [
    { name: 'Product 1', desc: 'A nice thing', price: '$9.99' },
    { name: 'Product 2', desc: 'Another thing', price: '$3.45' },
    { name: 'Product 3', desc: 'Something else', price: '$6.51' },
    { name: 'Product 4', desc: 'Best thing of all', price: '$14.11' },
];
const addresses = ['1 Material-UI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
const payments = [
    { name: 'Card type', detail: 'Visa' },
    { name: 'Card holder', detail: 'Mr John Smith' },
    { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
    { name: 'Expiry date', detail: '04/2024' },
];

const useStyles = makeStyles((theme) => ({
    listItem: {
        padding: theme.spacing(1, 0),
    },
    total: {
        fontWeight: 700,
    },
    title: {
        marginTop: theme.spacing(2),
    },


    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    },
    stepper: {
        padding: theme.spacing(3, 0, 5),
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    price:{
        padding: theme.spacing(7),
        marginRight: theme.spacing(-5),
        fontWeight: 'bold'
    },
    button: {
        marginTop: theme.spacing(),
        marginLeft: theme.spacing(3),
    },
    ul: {
        margin: 0,
        padding: 0,
        listStyle: 'none',
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
}));

function onLogOut() {
    localStorage.clear()
}

export default function Checkout(props) {
    const classes = useStyles();
    const total = props.item.orders.reduce((prev,next) => prev + next.meal_price * next.quantity,0);
    const active = props.item.orders.every(element => element.active_order == 1)
    const done = props.item.orders.every(element => element.payment_done == 1)

    console.log(props.item)
    console.log(props.item.tableNumber)
    console.log(props.removed)
    if(props.item.payment_done === true){
        return <Redirect to={{pathname: "/", state: {message: "Thank you for using eMenu! Come by again"}}}/>
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
                            <Link variant="button" to={{pathname: '/menu', state: { tableNumber: props.item.tableNumber}}}  color="textPrimary" className={classes.link}>
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
                    <Button href="http://localhost:3000/order" color="primary" variant="outlined" className={classes.link}>
                        Orders
                    </Button>
                </Toolbar>
            </AppBar>
            {active
            ?(
                <main className={classes.layout}>
                    <Paper className={classes.paper}>
                        {props.item.orders.map((product) => (
                            <ListItem className={classes.listItem} key={product.id}>
                                <ListItemText className={classes.listItem} primary={product.meal_name} secondary={product.meal_description}/>
                                <Typography>Quantity: {product.quantity}</Typography>
                                <Typography className={classes.price}
                                            variant="subtitle1">{product.meal_price * product.quantity}den</Typography>
                                <Button type="submit"  className={classes.button}
                                        variant="contained" color="secondary" onClick={() => props.onRemove(product.id)}>
                                    Remove
                                </Button>
                            </ListItem>
                        ))}
                        <ListItemText primary="Total"/>
                        <Typography variant="subtitle1" className={classes.total}>
                            {total}
                        </Typography>

                        <React.Fragment>
                            <div className={classes.buttons}>
                                <Button className={classes.button}>
                                    Back
                                </Button>

                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    className={classes.button}
                                    onClick={() => props.onConfirm()}
                                >
                                    Place order
                                </Button>
                            </div>
                        </React.Fragment>
                    </Paper>
                </main>
                ):(
                <main>
                    <Paper className={classes.paper}>
                        <Typography variant='h2'>
                            Thank you for your order.
                        </Typography>
                        <Typography variant='subtitle1'>
                            your order will start shortly!
                        </Typography>
                        <Divider />
                        {props.item.orders[0].table_number != 1 ? (

                        <Typography variant={'h6'}>
                            Table number: {props.item.orders[0].table_number}
                        </Typography>
                        ):
                            <Typography variant={'h6'}>
                                Please pick up the order after the estimated time!
                            </Typography>
                        }
                        <Divider />
                        {props.item.orders.map((product) => (
                            <ListItem className={classes.listItem} key={product.id}>
                                <ListItemText primary={product.quantity + 'x ' + product.meal_name} secondary={product.meal_description}/>

                                <Divider />
                            </ListItem>
                        ))}
                        <Divider />
                        <Typography variant='h6'>
                            Estimated time: {props.item.timer} minutes
                            
                        </Typography>
                        <Button type="submit" onClick={() => props.onPayment()} variant="contained" color="primary">
                            Make Payment
                        </Button>
                    </Paper>
                </main>
            )
            }
        </React.Fragment>
    );
}

