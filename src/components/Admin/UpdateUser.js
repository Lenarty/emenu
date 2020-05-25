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
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
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
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        marginLeft: -1
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function Admin(props) {
    const classes = useStyles();

    const [openUser, setOpenUser] = React.useState(false);
    const [openMeal, setOpenMeal] = React.useState(false);
    const [openRestaurant, setOpenRestaurant] = React.useState(false)

    const [phonenumber, setPhonenumber] = React.useState('');
    const [type, setType] = React.useState('');

    const handleChangePhoneNumber = (event) => {
        setPhonenumber(event.target.value)
        props.onUserPhoneChange(event.target.value)
    };

    const handleChangeUserType = (event) => {
        setType(event.target.value)
        props.onUserTypeChange(event.target.value)
    };

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
                        Update user
                    </Typography>
                    <Paper className={classes.paper}>
                        <List>
                            <ListItem>
                                <FormControl className={classes.formControl}>
                                    <InputLabel id="demo-simple-select-helper-label">Phone Number</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-helper-label"
                                        id="demo-simple-select-helper"
                                        value={phonenumber}
                                        onChange={handleChangePhoneNumber}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        {props.items.data.map(item => (
                                            <MenuItem value={item.phone_number}>{item.phone_number}</MenuItem>
                                        ))}
                                    </Select>
                                    <FormHelperText>Please select the phone number you want to update</FormHelperText>
                                </FormControl>
                                <Button onClick={() => props.onUserUpdateButtonClick()} variant="contained" color="primary" className={classes.button}>
                                    Update User
                                </Button>
                            </ListItem>
                            <ListItem>
                                {props.items.data.map(item => (
                                    item.phone_number === phonenumber ? (
                                <TextField
                                    onChange={(event) => props.onUserNameChange(event.target.value)}
                                    id="standard-helperText"
                                    label={item.name}
                                    required
                                    helperText="Update users name"
                                />
                                    ):null))
                                }
                            </ListItem>
                            <ListItem>
                                {props.items.data.map(item => (
                                    item.phone_number === phonenumber ? (
                                        <TextField
                                            onChange={(event) => props.onUserSurnameChange(event.target.value)}
                                            id="standard-helperText"
                                            label={item.lastname}
                                            required
                                            helperText="Update users surname"
                                        />
                                    ):null))
                                }
                            </ListItem>
                            <ListItem>
                                {props.items.data.map(item => (
                                    item.phone_number === phonenumber ? (
                                        <TextField
                                            onChange={(event) => props.onUserPasswordChange(event.target.value)}
                                            id="standard-helperText"
                                            error
                                            label="Update Password!"
                                            type='password'
                                            required
                                            helperText="You must provide a new password!"
                                        />
                                    ):null))
                                }
                            </ListItem>
                            <ListItem>
                                {props.items.data.map(item => (
                                    item.phone_number === phonenumber ? (
                                        <TextField
                                            onChange={(event) => props.onUserPhoneChange(event.target.value)}
                                            id="standard-helperText"
                                            label={item.phone_number}
                                            required
                                            helperText="Update users phone number"
                                        />
                                    ):null))
                                }
                            </ListItem>
                            <ListItem>
                                {props.items.data.map(item => (
                                    item.phone_number === phonenumber ? (
                                        <FormControl className={classes.formControl}>
                                            <InputLabel id="demo-simple-select-helper-label">{item.user_type}</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-helper-label"
                                                id="demo-simple-select-helper"
                                                value={type}
                                                onChange={handleChangeUserType}
                                            >
                                                <MenuItem value=''>
                                                    <em>Select type</em>
                                                </MenuItem>
                                                <MenuItem value={'Client'}>Client</MenuItem>
                                                <MenuItem value={'Admin'}>Admin</MenuItem>
                                                <MenuItem value={'Kitchen'}>Kitchen</MenuItem>
                                                <MenuItem value={'Waiter'}>Waiter</MenuItem>

                                            </Select>
                                            <FormHelperText>Please select the type of client
                                            </FormHelperText>
                                        </FormControl>
                                    ) : null))
                                }
                            </ListItem>
                        </List>

                    </Paper>
                </Grid>
            </Grid>

        </div>
    )
}