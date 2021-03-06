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
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import Select from "@material-ui/core/Select/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";

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
    const [restaurant, setRestaurant] = React.useState('');


    const handleChangeRestaurant = (event) => {
        setRestaurant(event.target.value)
        props.onMealRestaurantChange(event.target.value)
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

    console.log(props.items.meal_name)
    console.log(props.items.meal_description)
    console.log(props.items.meal_type)
    console.log(props.items.meal_price)
    console.log(props.items.meal_prep_time)
    console.log(props.items.meal_restaurant)

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
                        Add meal
                    </Typography>
                    <Paper className={classes.paper}>
                        <List>
                            <ListItem>
                                <FormControl className={classes.formControl}>
                                    <InputLabel id="demo-simple-select-helper-label">Restaurant</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-helper-label"
                                        id="demo-simple-select-helper"
                                        value={restaurant}
                                        onChange={handleChangeRestaurant}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        {props.items.restaurants.map(item => (
                                            <MenuItem value={item.id}>{item.name}</MenuItem>
                                        ))}
                                    </Select>
                                    <FormHelperText>Please select the restaurant</FormHelperText>
                                </FormControl>
                                <Button onClick={() => props.onMealAddButtonClick()} variant="contained" color="primary" className={classes.button}>
                                    Add Meal
                                </Button>
                            </ListItem>
                            <ListItem>
                                <TextField
                                    onChange={(event) => props.onMealNameChange(event.target.value)}
                                    id="standard-helperText"
                                    label="Name"
                                    required
                                    helperText="Please type meal name"
                                />
                            </ListItem>
                            <ListItem>
                                <TextField
                                    onChange={(event) => props.onMealDescriptionChange(event.target.value)}
                                    id="standard-helperText"
                                    label="Description"
                                    multiline
                                    required
                                    helperText="Please type meal description"
                                />
                            </ListItem>
                            <ListItem>
                                <TextField
                                    onChange={(event) => props.onMealTypeChange(event.target.value)}
                                    id="standard-helperText"
                                    label="Meal Type"
                                    required
                                    helperText="Please insert meal type"
                                />
                            </ListItem>
                            <ListItem>
                                <TextField
                                    onChange={(event) => props.onMealPriceChange(event.target.value)}
                                    id="standard-helperText"
                                    label="Price"
                                    required
                                    helperText="Please type meal price"
                                />
                            </ListItem>
                            <ListItem>
                                <TextField
                                    onChange={(event) => props.onMealPrepTimeChange(event.target.value)}
                                    id="standard-helperText"
                                    label="Preparation Time"
                                    helperText="Preparation time in minutes"
                                />
                            </ListItem>
                        </List>

                    </Paper>
                </Grid>
            </Grid>

        </div>
    )
}