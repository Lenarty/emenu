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
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon/ListItemIcon";
import PersonIcon from "@material-ui/core/SvgIcon/SvgIcon";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import Collapse from "@material-ui/core/Collapse/Collapse";
import {ExpandLess, ExpandMore} from "@material-ui/icons";
import AddIcon from '@material-ui/icons/Add';
import TextField from "@material-ui/core/TextField";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ListIcon from '@material-ui/icons/List';


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

        marginTop: theme.spacing(5)
    },
    buttonDone: {
        marginLeft: -20,
        marginTop: theme.spacing(3)
    }
}));

export default function Kitchen(props) {
    const classes = useStyles();

    const [openUser, setOpenUser] = React.useState(false);

    const handleClickUser = () => {
        setOpenUser(!openUser);
    };

    console.log(props.items.description)
    console.log(props.items.time)


    return (
        <React.Fragment>
            <CssBaseline/>
            <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                        Pizza Garden - Kitchen
                    </Typography>

                    <Link onClick={() => props.onLogOut()} variant="button" color="textPrimary"
                          href="http://localhost:3000/signin" className={classes.link}>
                        Logout
                    </Link>
                </Toolbar>
            </AppBar>
            <Grid container spacing={20}>
                <Grid item xs={3}>
                    <List
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                        subheader={
                            <ListSubheader component="div" id="nested-list-subheader">
                                Options
                            </ListSubheader>
                        }
                    >
                        <ListItem button onClick={handleClickUser}>
                            <ListItemIcon>
                                <ListIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Options"/>
                            {openUser ? <ExpandLess/> : <ExpandMore/>}
                        </ListItem>
                        <Collapse in={openUser} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItem onClick={() => props.onRequest()} button className={classes.nested}>
                                    <ListItemIcon>
                                        <AddIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary="Make request"/>
                                </ListItem>
                                <ListItem onClick={() => props.onGetBack()} button className={classes.nested}>
                                    <ListItemIcon>
                                        <ArrowBackIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary="Get Back"/>
                                </ListItem>
                            </List>
                        </Collapse>
                    </List>
                </Grid>
                <Grid item xs={9}>
                    <Paper className={classes.paper}>
                        <List>
                            <ListItem>
                                <TextField
                                    onChange={(event) => props.onDescriptionChange(event.target.value)}
                                    id="standard-helperText"
                                    label="Description"
                                    required
                                    multiline
                                    helperText="Please write in an ordered format!"
                                />

                            </ListItem>
                            <ListItem>
                                <TextField
                                    onChange={(event) => props.onTimeChange(event.target.value)}
                                    id="standard-helperText"
                                    label="Time to deliver"
                                    required
                                    helperText='Please write the time and (min,h or d)'
                                />
                            </ListItem>
                            <ListItem>
                            <Button onClick={() => props.onMakeRequest()} variant="contained" color="primary" className={classes.button}>
                                Make request
                            </Button>
                                <ListItem>
                                    <Typography variant='subtitle2'>
                                        {props.items.message}
                                    </Typography>
                                </ListItem>
                            </ListItem>
                        </List>
                    </Paper>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}