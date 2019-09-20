import React from "react";
import clsx from "clsx";
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles
} from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
// import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
// import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";

import Style from './drawerStyle'

const drawerWidth = 300;

const useStyles = makeStyles((theme: Theme) =>
  createStyles(Style))


export default function PersistentDrawerRight() {
    const drawerWidth = 300;

    const useStyles = makeStyles((theme: Theme) =>
        createStyles(Style))
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);
  
    function handleDrawerOpen() {
      setOpen(true);
    }
  
    function handleDrawerClose() {
      setOpen(false);
    }
  
    return (
        <div><Divider />
        <TextField
          id="outlined-username-input"
          label="Username"
          className={classes.textField}
          type="username"
          name="username"
          autoComplete="username"
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          className={classes.textField}
          type="password"
          autoComplete="current-password"
          margin="normal"
          variant="outlined"
        />
        <Button 
          variant="contained" 
          color="primary" 
          className={classes.button}
          onClick={handleDrawerClose}
          >
          Login
        </Button>
        <Divider />
        <Link
          component="button"
          variant="body2"
          onClick={() => {
            alert("I'm a button.");
          }}
        >
          Dont have an acount? Register
        </Link></div>
        
    );
  }
  