import React from "react";
import clsx from "clsx";
import {
    AppBar,         Button,
    Toolbar,    CssBaseline,    Link,
    Typography, TextField,      ExpansionPanel,
    Divider,    IconButton,     InputBase,
    Fab,        Snackbar,       Popover,
    SwipeableDrawer
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


import { Login, Register, getUserInfo, updateUserInfo, 
     sendVerificationEmail, verifyUser, addContact,
     searchContacts, updateContactById, deleteContactById
    // ,isVerified,deleteUser,getAllContacts,getContactById,
   } from './auth'
import useStyles from './drawerStyle'
// import { set } from "mongoose";


export default function PersistentDrawerRight() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(true);
  const [hasAccount, setHasAccount] = React.useState(true)
  const [isLogedIn, setIsLogedIn] = React.useState(false)
  // const [editable, setEditable] = React.useState(true)
  const [isVerified, setVerification] = React.useState(true)
  const [Error, setError] = React.useState({})
  const [contacts, setContacts] = React.useState([])
  const [render, setRender] = React.useState(true)
  const [lastSearch, setLastSearch] = React.useState('')
  const [User, setUser] = React.useState({})
  const [reRender, setReRender] = React.useState(false)
  

  if (JWT.validate(JWT.get()) && !isLogedIn){
    getUserInfo()
      .then(res => {
        setUser(res)
        setVerification(res.isVerified)
      }).then(setIsLogedIn(true)).catch()
  }
  var password =''
  var username =''
  var email = ''
  var search = ''
  var emailCode = ''



  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }



  function handleSubmit() {
    setError({})
    if (isLogedIn) { // Logout
        setUser({})
      setIsLogedIn(false)
      JWT.forget()
    } else if (hasAccount){ // Login

      Login(username,password)
      .then(res => {
        if (!Object.keys(res.Error).length) {
          console.log('logging in')
          getUserInfo()
          .then(res => {
            setUser(res)
            setVerification(res.isVerified)
          }).then(setIsLogedIn(true))
          setReRender(!reRender)
          window.location.reload(false)
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

    function SearchBar (props) {
      if(isLogedIn && hasAccount)
      {
        return (
          <div className={classes.search}>
            <InputBase
              placeholder="Search"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ 'aria-label' : 'search' }}
              onChange={e => {search = e.target.value}}
            />
          </div> 
        )
      }
      return null
    }
  
    function SearchButton () {
      if(isLogedIn && hasAccount) {
        return (
          <IconButton size="small" 
            className={classes.searchButton}
            aria-label="search"
            onClick={handleSearch}>
                    <SearchIcon />
                  </IconButton>
        )
      } else return null
    }

  function handleSearch() {
    setLastSearch(search)
    searchContacts(search)
    .then(res => {
      setContacts(res)
    })
    
  }

  function ContactPanel (props) {
    if (render) console.log(render)
    if(isLogedIn && hasAccount)
    {
      var con = contacts || []
      return (
        con.map((item,index) =>
          <div className={classes.expansionWidith} key={item._id}>
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
                <EditContact contact={item}/>
                <IconButton size="small" className={classes.contactDeleteButton} aria-label="delete">
                  <DeleteIcon onClick={e => handleDeleteContact(item._id, index)}/>
                </IconButton>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </div>
        )
      )
    }
    return null
  }

  function handleDeleteContact (_id,index){
    deleteContactById(_id)
    .then(res => {
      searchContacts(lastSearch)
      .then(res => {
        setContacts(res)
      }).catch()
    setRender(!render)
  }).catch()  
  }

  function AddContactPopup() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    var firstName = ''
    var lastName = ''
    var email = ''
    var phone = ''
  
    const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      setAnchorEl(event.currentTarget);
      console.log(anchorEl)
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    const handleAddContact = () => {
      var Error
      var contact = {firstName: firstName,
                  lastName: lastName,
                  email: email,
                  phone: phone}
        if (!firstName || !lastName){
          Error = 'Please enter name'
        } else if (!phone) {
          Error = 'Please enter a phone number'
        } else {
          addContact(contact)
          .then(handleClose).catch()
        }
        console.log(Error)
    }
  
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    if (isLogedIn) {
    return (
      <div>
        <Fab color="primary"  aria-label="add" className={classes.fab} onClick={handleClick}>
          <AddIcon />
        </Fab>
        {/* <Button aria-describedby={id} variant="contained" onClick={handleClick}>
          Open Popover
        </Button> */}
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <div className={classes.div1}>
            <Typography variant="h6" className={classes.typography}>Add New Contact</Typography>
            <TextField 
              label="First name"
              type="text"
              margin="normal"
              onChange={e => {firstName = e.target.value}}
              />
            <TextField
            label="Last name"
            type="text"
            margin="normal"
            onChange={e => {lastName = e.target.value}}
            />
            <TextField
            label="Phone number"
            type="text"
            margin="normal"
            onChange={e => {phone = e.target.value}}
            />
            <TextField
            label="Email"
            type="text"
            margin="normal"
            onChange={e => {email = e.target.value}}
            />
            <Button 
          variant="contained" 
          color="primary" 
          onClick={handleAddContact}
          >
            ADD
          </Button>
          </div>
          
        </Popover>
      </div>
    )
    } else {
      return null
    }
  }

  var EditContact = (props) => {
    var contact = props.contact
    
    const [values, setValues] = React.useState({
        firstName: contact.firstName,
        lastName: contact.lastName,
        email: contact.email,
        phone: contact.phone,
      });
    
      const handleChange = (name) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [name]: event.target.value });
      };

    
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);

  
    const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      setAnchorEl(event.currentTarget);
      console.log(anchorEl)
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    const handleEditContact = () => {
      // var Error
      var contact = {firstName: values.firstName,
                  lastName: values.lastName,
                  email: values.email,
                  phone: values.phone}
          console.log(contact)
          updateContactById(props.contact._id, contact )
          .then(res => {
            handleClose()
            searchContacts(lastSearch)
              .then(res => {
                setContacts(res)
              }).catch()
            setRender(!render)
          }).catch()
    }
  
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
      <div>
        <IconButton size="small" className={classes.contactDeleteButton} aria-label="edit">
                  <EditIcon onClick={handleClick}/>
         </IconButton>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <div className={classes.div1}>
            <Typography variant="h6" className={classes.typography}>Edit Contact</Typography>
            <TextField 
              label="First name"
              type="text"
              margin="normal"
              value={values.firstName}
              onChange={handleChange('firstName')}
              />
            <TextField
            label="Last name"
            type="text"
            margin="normal"
            value={values.lastName}
            onChange={handleChange('lastName')}
            />
            <TextField
            label="Phone number"
            type="text"
            margin="normal"
            value={values.phone}
              onChange={handleChange('phone')}
            />
            <TextField
            label="Email"
            type="text"
            margin="normal"
            value={values.email}
            onChange={handleChange('email')}
            />
            <Button 
            variant="contained" 
            color="primary" 
            onClick={handleEditContact}
            >
            Commit
          </Button>
          </div>  
        </Popover>
      </div>
    )
  }

  var EditUser = (props) => {
    if (reRender|| !render) console.log(render)
    
    const [values, setValues] = React.useState({
        username: User.username,
        email: User.email,
      });
    
      const handleChange = (name) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [name]: event.target.value });
      };

    
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);

  
    const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      setAnchorEl(event.currentTarget);
      console.log(anchorEl)
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    const handleEditUser = () => {
      // var Error
      var user = {username: values.username,
                  email: values.email}
          console.log(user)
          updateUserInfo(user)
          .then(res => {
            getUserInfo()
              .then(res => {
                setUser(res)
                setIsLogedIn(true)
              }).catch()
            //if (!Object.keys(res.Error).length) {
              handleClose()
            //} else Error = res.Error
          }).catch()
        }
  
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    if (isLogedIn) {
      return (
        <div>
          <Fab color="secondary" size="small" aria-label="edit" className={classes.fab} onClick={(handleClick)}>
            <EditIcon />
          </Fab>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <div className={classes.div1}>
              <Typography variant="h6" className={classes.typography}>Edit User Info</Typography>
              <TextField 
                label="Username"
                type="text"
                margin="normal"
                value={values.username}
                onChange={handleChange('username')}
                />
              <TextField
              label="Email"
              type="text"
              margin="normal"
              value={values.email}
              onChange={handleChange('email')}
              />
              <Button 
              variant="contained" 
              color="primary" 
              onClick={handleEditUser}
              >
              Commit
            </Button>
            </div>  
          </Popover>
        </div>
      )} else return null
  }

  // TODO Get proper object for mapping
  function Options (props) {
    if (isLogedIn && hasAccount)
    {
      var usr = {label: "Username",name: 'username', val: User.username} 
      var email = {label: "Email",name: 'email', val: User.email}
      var lists = [usr, email]
      return (
        lists.map((item) =>
        <TextField
          id="standard-read-only-input"
          label={item.label}
          defaultValue={item.val}
          className={classes.textField}
          margin="normal"
          InputProps={{
            readOnly: true,
          }}
        />
        )
      )
    }
    return null
  }

  function VerifiedEmail (props) {
    if (isLogedIn && hasAccount)
    {
      var isVerifiedStr = User.isVerified
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

  function VerifyEmailLink (props) {
    if(isLogedIn && hasAccount && !isVerified)
    {
      return (
        <Link
            component="button"
            variant="body2"
            onClick={(sendVerificationEmail())}
          >
            Click here to verify your email
          </Link>
      )
    }
    return null
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
        className={classes.emailBackgound}
        message={<span id="message-id">Enter your email verification code</span>}
        // action={[
        //   <div>
        //   <TextField
        //     id="outlined-name"
        //     label="Email Verify Code"
        //     className={classes.emailTextField}
        //     margin="normal"
        //     variant="outlined"
        //     onChange={e => {emailCode = e.target.value; console.log(emailCode)}}
        //     InputProps={{
        //       className: classes.emailCodeInput
        //     }}
        //   />
        //   <Button vartiant="contained" className={classes.button} onClick={handleVerifyClick}>
        //     Verify
        //   </Button>
        //   </div>
        // ]}
      ><div>
        <span vartiant="h6" className={classes.title} id="message-id">Enter your email verification code</span>
      <TextField
        id="outlined-name"
        label="Email Verify Code"
        className={classes.emailTextField}
        margin="normal"
        variant="outlined"
        onChange={e => {emailCode = e.target.value; console.log(emailCode)}}
        InputProps={{
          className: classes.emailCodeInput
        }}
      />
      <Button vartiant="contained" className={classes.button} onClick={handleVerifyClick}>
        Verify
      </Button>
      </div></Snackbar>
      )
    }
    return null
  }

  function handleVerifyClick () {
    verifyUser(emailCode)
    .then(res => 
      setVerification(res)).catch()
  }
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
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
          <SearchButton />
          <div className={classes.grow} />
          <AddContactPopup />
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
      <SwipeableDrawer 
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        className={classes.drawer}
        variant='persistent'
        anchor="right"
        open={open}
        onOpen={handleDrawerOpen}
        onClose={handleDrawerClose}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
        <Typography variant="h6" noWrap className={classes.title} onClick={handleDrawerClose}>
        {(isLogedIn) ? 'Welcome':(hasAccount) ? 'Please Login' : 'Please Create an Account'}
        </Typography>
        <div className={classes.grow} />
        {/* <EditOptions /> */}
        <EditUser />
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
        
      </SwipeableDrawer>
    </div>
  );

      }