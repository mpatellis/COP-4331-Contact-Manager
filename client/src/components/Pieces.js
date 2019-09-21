import React from "react";
import clsx from "clsx";
import {
    Drawer,     AppBar,         Button,
    Toolbar,    CssBaseline,    Link,
    Typography,     TextField,
    Divider,    IconButton,      
} from '@material-ui/core'
import MenuIcon from "@material-ui/icons/Menu";

import {Login, Register} from './auth'

import useStyles from './drawerStyle'



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

function SearchBar (props) {
  if(isLogedIn && hasAccount)
  {
    return null
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
        <SearchBar />
      </AppBar>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >

        <div className={classes.drawerHeader} />
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
