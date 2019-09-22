import React from "react";
import clsx from "clsx";
import {
    Drawer,     AppBar,         Button,
    Toolbar,    CssBaseline,    Link,
    Typography, TextField,      ExpansionPanel,
    Divider,    IconButton,     InputBase,
    Fab,
} from '@material-ui/core'
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import {Login, Register} from './auth'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import useStyles from './drawerStyle'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';



export default function PersistentDrawerRight() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(true);
  const [hasAccount, setHasAccount] = React.useState(true)
  const [isLogedIn, setIsLogedIn] = React.useState(false)
  const [Error, setError] = React.useState({})

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
      setError({})
      if (isLogedIn) { // Logout
          setIsLogedIn(false)
      } else if (hasAccount){ // Login
        setError(Login(username,password))
        if (!Error) {
          setIsLogedIn(true);
          handleDrawerClose()
        }
        setIsLogedIn(true);
      } else { // Register
        setError(Register(username, email, password))
        if (!Error) {
          setHasAccount(true)
        }
      }
  }

  function toggleHasAccount() {
      setError({})
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

function ErrorLink (props) {
  if (props.name === 'username' && Error.username) 
    return <Link component="button" color="error"
            variant="body2"
            onClick={((isLogedIn) ? null:toggleHasAccount)}
          >
          {Error.username} 
          </Link>
  if (props.name === 'email' && Error.email) 
    return <Link component="button" color="error"
            variant="body2"
            onClick={((isLogedIn) ? null:toggleHasAccount)}
          >
          {Error.email||1} 
          </Link> 
  if (props.name === 'password' && Error.password)
    return <Link component="button" color="error"
            variant="body2"
            onClick={((isLogedIn) ? null:toggleHasAccount)}
          >
          {Error.password} 
          </Link>
  return null
}

// TODO change if condition
function SearchBar (props) {
  //if(isLogedIn && hasAccount)
  if(true)
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
// Also change if condition
function ContactPanel (props) {
  //if(isLogedIn && hasAccount)
  if(true)
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

// TODO change if statement
function NewContactButton (props) {
  // if (isLogedIn && hasAccount)
  if (true)
  {
    return (
      <Fab color="primary" aria-label="add" className={classes.fab}>
        <AddIcon />
      </Fab>
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
            Login
          </Typography>
          < SearchBar />
          <div className={classes.grow} />
          <NewContactButton />
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
        <div className={classes.drawerHeader} />
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
        <ErrorLink name='username'/>
        <Email />
        <ErrorLink name='email'/>
        <Password />
        <ErrorLink name='password'/>
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
