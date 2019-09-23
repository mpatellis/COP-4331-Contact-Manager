import React from "react";
import clsx from "clsx";
import {
    Drawer,     AppBar,         Button,
    Toolbar,    CssBaseline,    Link,
    Typography, TextField,      ExpansionPanel,
    Divider,    IconButton,     InputBase,
    Fab,        Snackbar,
} from '@material-ui/core'
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from "@material-ui/icons/Delete";
import JWT from 'jwt-client'

import {Login, Register, getUserInfo} from './auth'
import useStyles from './drawerStyle'


export default function PersistentDrawerRight() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(true);
  const [hasAccount, setHasAccount] = React.useState(true)
  const [isLogedIn, setIsLogedIn] = React.useState(false)
  const [editable, setEditable] = React.useState(true)
  const [isVerified, setVerification] = React.useState(false)
  const [Error, setError] = React.useState({})

  var password =''
  var username =''
  var email = ''



  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
    setVerification()
  }


  function handleSubmit() {
    setError({})
    if (isLogedIn) { // Logout
        setIsLogedIn(false)
        JWT.forget();
    } else if (hasAccount){ // Login

      Login(username,password)
      .then(res => {
        if (!Object.keys(res.Error).length) {
          console.log('logging in')
          setIsLogedIn(true);
        } else {
          setError(res.Error)
        }
      })
      .catch(err => {
        setError({password: 'Incorrect Password'})
      })
    } else { // Register
      Register(username, email, password)
      .then(res => {
        if (!Object.keys(res.Error).length) {
          console.log('Registered')
          setHasAccount(true)
        } else {
          setError(res.Error)
        }
      })
      .catch()
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

  // TODO add functionality
  function SearchBar (props) {
    if(isLogedIn && hasAccount)
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
  function ContactPanel (props) {
    if(isLogedIn && hasAccount)
    {
      var i1 = {firstName:"Michael", lastName:"Patellis", email:"jasdkfl@gmail.com", phone:"3215055848"}
      var i2 = {firstName:"asd", lastName:"qwe", email:"vzxcv@gmail.com", phone:"1234567"}
      var contacts = [i1, i2]
      return (
        contacts.map((item) =>
          <div className={classes.expansionWidith} key={contacts.toString()}>
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.expansionHeading}>
                  {item.firstName} {item.lastName} 
                </Typography>
                <div className={classes.grow} />
              </ExpansionPanelSummary>
              <Divider />

              <ExpansionPanelDetails>
                <Typography className={classes.grow}>
                  Email: {item.email} <br></br>
                  Phone: {item.phone}
                </Typography>
                <IconButton size="small" className={classes.contactDeleteButton} aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </div>
        )
      )
    }
    return null
  }

  // TODO add functionality
  function NewContactButton (props) {
    if (isLogedIn && hasAccount)
    {
      return (
        <Fab color="primary" aria-label="add" className={classes.fab}>
          <AddIcon />
        </Fab>
      )
    }
    return null
  }

  // TODO Get proper object for mapping
  function Options (props) {
    if (isLogedIn && hasAccount)
    {
      var usr = {label: "Username", val: "mpatellis"} 
      var email = {label: "Email", val: "gmail.com"}
      var lists = [usr, email]
      var bool = editable
      console.log(bool)
      return (
        lists.map((item) =>
        <TextField
          id="standard-read-only-input"
          label={item.label}
          defaultValue={item.val}
          className={classes.textField}
          margin="normal"
          InputProps={{
            readOnly: editable,
          }}
        />
        )
      )
    }
    return null
  }

  // TODO feed in real verification string
  function VerifiedEmail (props) {
    if (isLogedIn && hasAccount)
    {
      var isVerifiedStr = "False"
      if (isVerified)
        isVerifiedStr = "True"
      return (
        <TextField
          id="standard-read-only-input"
          label="Verified Email"
          defaultValue={isVerifiedStr}
          className={classes.textField}
          margin="normal"
          InputProps={{
            readOnly: true,
          }}
        />
      )
    }
    return null
  }

  function HandleEdit (props) {
    setEditable(!editable)
  }

  function EditOptions (props) {
    if(isLogedIn && hasAccount)
    {
      return (
        <Fab color="secondary" size="small" aria-label="edit" className={classes.fab} onClick={(HandleEdit)}>
          <EditIcon />
        </Fab>
      )
    }
    return null
  }

  // TODO Change onClick to resend email verify
  function VerifyEmailLink (props) {
    if(isLogedIn && hasAccount && !isVerified)
    {
      return (
        <Link
            component="button"
            variant="body2"
            onClick={(HandleVerifyEmailLink)}
          >
            Click here to verify your email
          </Link>
      )
    }
    return null
  }

  // TODO send email code again
  function HandleVerifyEmailLink (props) {
    
  }

  // TODO accept verification code to update user's verification
  function VerifyEmailBanner (props) {
    if(!isVerified && isLogedIn && hasAccount)
    {
      return (
        <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={open}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">Enter your email verification code</span>}
        action={[
          <TextField
            id="outlined-name"
            label="Email Verify Code"
            className={classes.emailTextField}
            margin="normal"
            variant="outlined"
            InputProps={{
              className: classes.emailCodeInput
            }}
          />
        ]}
      />
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
            COP 4331 Contact Manager
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
        <VerifyEmailBanner />
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
        <div className={classes.grow} />
        <EditOptions />
        </div>
        <Divider />
        <Username />
        <ErrorLink name='username'/>
        <Email />
        <ErrorLink name='email'/>
        <Password />
        <ErrorLink name='password'/>
        < Options />
        <VerifiedEmail />
        <VerifyEmailLink />
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
        {(isLogedIn) ? '':(hasAccount) ? 'Dont have an account? Register' : 'Already have an account? Login'} 
        </Link>
        
      </Drawer>
    </div>
  );
}
