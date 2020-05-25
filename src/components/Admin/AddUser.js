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
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
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
        }},
    button: {
        marginLeft: 50
    }
}));

export default function Admin(props) {
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

    console.log(props.items.user_name)
    console.log(props.items.user_surname)
    console.log(props.items.user_phone_number)
    console.log(props.items.user_password)
    console.log(props.items.user_type)
    console.log(props.items.user_restaurant)

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar variant="dense">

                    <Typography variant="h6" color="inherit">
                        Admin
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
                                Admin options
                            </ListSubheader>
                        }
                    >
                        <ListItem button onClick={handleClickUser}>
                            <ListItemIcon>
                                <PersonIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Users"/>
                            {openUser ? <ExpandLess/> : <ExpandMore/>}
                        </ListItem>
                        <Collapse in={openUser} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItem onClick={() => props.onAddUserClick()} button className={classes.nested}>
                                    <ListItemIcon>
                                        <AddIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary="Add user"/>
                                </ListItem>
                                <ListItem onClick={() => props.onDeleteUserClick()} button className={classes.nested}>
                                    <ListItemIcon>
                                        <DeleteIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary="Delete user"/>
                                </ListItem>
                                <ListItem onClick={() => props.onUpdateUserClick()} button className={classes.nested}>
                                    <ListItemIcon>
                                        <UpdateIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary="Update user"/>
                                </ListItem>
                            </List>
                        </Collapse>
                        <ListItem button onClick={handleClickMeal}>
                            <ListItemIcon>
                                <FastfoodIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Meals"/>
                            {openMeal ? <ExpandLess/> : <ExpandMore/>}
                        </ListItem>
                        <Collapse in={openMeal} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItem onClick={() => props.onAddMealClick()} button className={classes.nested}>
                                    <ListItemIcon>
                                        <AddIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary="Add meal"/>
                                </ListItem>
                                <ListItem onClick={() => props.onDeleteMealClick()} button className={classes.nested}>
                                    <ListItemIcon>
                                        <DeleteIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary="Delete meal"/>
                                </ListItem>
                                <ListItem onClick={() => props.onUpdateMealClick()} button className={classes.nested}>
                                    <ListItemIcon>
                                        <UpdateIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary="Update meal"/>
                                </ListItem>
                            </List>
                        </Collapse>
                        <ListItem button onClick={handleClickRestaurant}>
                            <ListItemIcon>
                                <RestaurantIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Restaurants"/>
                            {openRestaurant ? <ExpandLess/> : <ExpandMore/>}
                        </ListItem>
                        <Collapse in={openRestaurant} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItem onClick={() => props.onAddRestaurantClick()} button className={classes.nested}>
                                    <ListItemIcon>
                                        <AddIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary="Add restaurant"/>
                                </ListItem>
                                <ListItem onClick={() => props.onDeleteRestaurantClick()} button className={classes.nested}>
                                    <ListItemIcon>
                                        <DeleteIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary="Delete restaurant"/>
                                </ListItem>
                                <ListItem onClick={() => props.onUpdateRestaurantClick()} button className={classes.nested}>
                                    <ListItemIcon>
                                        <UpdateIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary="Update restaurant"/>
                                </ListItem>
                            </List>
                        </Collapse>
                    </List>
                </Grid>

                <Grid item xs={8}>
                    <Typography variant='h3' className={classes.paper}>
                        Add user
                    </Typography>
                    <Paper className={classes.paper}>
                        <List>
                            <ListItem>
                                <TextField
                                    onChange={(event) => props.onUserNameChange(event.target.value)}
                                    id="standard-helperText"
                                    label="Name"
                                    required
                                    helperText="Please type users name"
                                />
                                <Button onClick={() => props.onUserAddButtonClick()} variant="contained" color="primary" className={classes.button}>
                                    Add User
                                </Button>
                            </ListItem>
                            <ListItem>
                                <TextField
                                    onChange={(event) => props.onUserSurnameChange(event.target.value)}
                                    id="standard-helperText"
                                    label="Surname"
                                    required
                                    helperText="Please type users surname"
                                />
                            </ListItem>
                            <ListItem>
                                <TextField
                                    onChange={(event) => props.onUserPasswordChange(event.target.value)}
                                    id="standard-helperText"
                                    label="Password"
                                    type='password'
                                    required
                                    helperText="Please type users password"
                                />
                            </ListItem>
                            <ListItem>
                                <TextField
                                    onChange={(event) => props.onUserPhoneChange(event.target.value)}
                                    id="standard-helperText"
                                    label="Phone Number"
                                    required
                                    helperText="Please type users phone number"
                                />
                            </ListItem>
                                <ListItem>
                                    <TextField
                                        onChange={(event) => props.onUserTypeChange(event.target.value)}
                                        id="standard-helperText"
                                        label="Client Type"
                                        required
                                        helperText="Insert client type"
                                    />
                                </ListItem>
                            <ListItem>
                                <TextField
                                    onChange={(event) => props.onRestaurantChange(event.target.value)}
                                    id="standard-helperText"
                                    label="Restaurant"
                                    helperText="Insert restaurant"
                                />
                            </ListItem>
                        </List>

                    </Paper>
                </Grid>
            </Grid>

        </div>
    )
}