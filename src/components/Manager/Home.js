import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import Grid from "@material-ui/core/Grid";
import PersonIcon from '@material-ui/icons/Person';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import AddIcon from '@material-ui/icons/Add';
import UpdateIcon from '@material-ui/icons/Update';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    nav: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing(3),
    },
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
        textAlign: 'left',
        marginLeft: 20,
        marginTop: 30

    },
    txtField: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        }}
}));

export default function Home(props) {
    const classes = useStyles();

    const [openUser, setOpenUser] = React.useState(false);
    const [openMeal, setOpenMeal] = React.useState(false);
    const [openRestaurant, setOpenRestaurant] = React.useState(false)

    const handleClickUser = () => {
        setOpenUser(!openUser);
    };

    const handleClickMeal = () => {
        setOpenMeal(!openMeal);
    };

    const handleClickRestaurant = () => {
        setOpenRestaurant(!openRestaurant);
    };


    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar variant="dense">

                    <Typography variant="h6" color="inherit">
                        Manager
                    </Typography>
                </Toolbar>
            </AppBar>
            <Grid container spacing={20}>
                <Grid item xs={3}>
                    <List
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                        subheader={
                            <ListSubheader component="div" id="nested-list-subheader">
                                Manager options
                            </ListSubheader>
                        }
                    >
                        <ListItem button onClick={handleClickUser}>
                            <ListItemIcon>
                                <PersonIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Requests"/>
                            {openUser ? <ExpandLess/> : <ExpandMore/>}
                        </ListItem>
                        <Collapse in={openUser} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItem onClick={() => props.onKitchenRequests()} button className={classes.nested}>
                                    <ListItemIcon>
                                        <AddIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary="Kitchen requests"/>
                                </ListItem>
                            </List>
                        </Collapse>
                    </List>
                </Grid>

                <Grid item xs={6}>
                    <Typography variant='h4' className={classes.paper}>
                        {props.items.message}
                    </Typography>
                </Grid>
            </Grid>


        </div>
    )
}