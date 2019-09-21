import React from "react";
import clsx from "clsx";
import {
  makeStyles,   useTheme,
  Theme,        createStyles,
} from "@material-ui/core/styles";
import {
    Drawer,     AppBar,         Button,
    Toolbar,    CssBaseline,    ExpansionPanel,    
    InputBase,  Link,           List, 
    Typography, TextField,      Divider,
    IconButton, 
} from '@material-ui/core'
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import useStyles from './drawerStyle'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

export default function PersistentDrawerRight() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [hasAccount, setHasAccount] = React.useState(true)
  const [isLogedIn, setIsLogedIn] = React.useState(false)

  var password =''
  var username =''
  var email = ''


  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  function handleSubmit() {
      console.log(username)
      console.log(password)
      console.log(email)
      if (isLogedIn) {
          setIsLogedIn(false)
      } else if (hasAccount){
        setIsLogedIn(true);
        //handleDrawerClose()
      } else {
        setHasAccount(true)
      }
  }

  function toggleHasAccount() {
      setHasAccount(!hasAccount)
  }

  function Username(props) {
    if (!isLogedIn){
      return <TextField
          id="outlined-Username-input"
          label="username"
          className={classes.textField}
          type="username"
          name="username"
          autoComplete="username"
          margin="normal"
          variant="outlined"
          onChange={e => {username = e.target.value}}
          />;
    } 
    return null;  
  }

  function Password(props) {
      if (!isLogedIn){
        return <TextField
        id="outlined-password-input"
        label="Password"
        className={classes.textField}
        type="password"
        autoComplete="current-password"
        margin="normal"
        variant="outlined"
        onChange={e => {password = e.target.value}}
        //value={password}
      />
      } 
      return null;  
  }

  function Email(props) {
    if (!isLogedIn && !hasAccount){
      return <TextField
          id="outlined-email-input"
          label="email"
          className={classes.textField}
          type="email"
          name="email"
          autoComplete="email"
          margin="normal"
          variant="outlined"
          onChange={e => {email = e.target.value}}
          />;
    } 
    return null;  
}

function SearchBar (props) {
  if(isLogedIn && hasAccount)
  {
    return (
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput
          }}
          inputProps={{ 'aria-label' : 'search' }}
        />
      </div>
    )
  }
  return null
}

// TODO figure out how to pass contacts into this function
function ContactPanel (props) {
  if(isLogedIn && hasAccount)
  {
    var i1 = {firstName:"Michael", lastName:"Patellis", email:"jasdkfl@gmail.com", phone:"3215055848"}
    var i2 = {firstName:"asd", lastName:"qwe", email:"vzxcv@gmail.com", phone:"1234567"}
    var contacts = [i1, i2]
    return (
      contacts.map((item) =>
        <div className={classes.expansionWidith}>
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.expansionHeading}>
                {item.firstName} {item.lastName} 
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Email: {item.email} <br></br>
                Phone: {item.phone}
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
      )
      
    )
  }
  return null
}

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <Typography variant="h6" noWrap className={classes.title}>
            Contact Manager
          </Typography>
          < SearchBar />
          <div className={classes.grow} />
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            className={clsx(open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <div className={classes.drawerHeader}/>
        <ContactPanel />
      </main>
      <Drawer
        className={classes.drawer}
        variant='persistent'
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
        <Typography variant="h6" noWrap className={classes.title}>
        {(isLogedIn) ? 'Welcome':(hasAccount) ? 'Please Login' : 'Please Create an Account'}
        </Typography>
        </div>
        <Divider />
        <Username />
        <Email />
        <Password />
        <Button 
          variant="contained" 
          color="primary" 
          className={classes.button}
          onClick={(handleSubmit)}
          >
          {(isLogedIn) ? 'Logout': (hasAccount) ? 'Login' : 'Register'}
        </Button>
        <Divider />
        <Link
          component="button"
          variant="body2"
          onClick={((isLogedIn) ? null:toggleHasAccount)}
        >
        {(isLogedIn) ? 'Pink Pandas?':(hasAccount) ? 'Dont have an account? Register' : 'Already have an account? Login'} 
        </Link>
      </Drawer>
    </div>
  );
}
