import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
//import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      flexGrow: 1
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    dense: {
      marginTop: theme.spacing(2),
    },
  }));

  export default function OutlinedTextFields() {
    const classes = useStyles();
    // const [values, setValues] = React.useState({
    //   name: '',
    //   age: '',
    // });
  
    // const handleChange = name => event => {
    //   setValues({ ...values, [name]: event.target.value });
    // };
  
    return (
        <Container maxWidth="sm" maxHeight="sm" style={{ backgroundColor: '#cfe8fc'}}>
            <form className={classes.container} noValidate>
          <Grid container spacing={1}>
              <Grid item xs={6}>
                <TextField
                    id="outlined-email-input"
                    label="Email"
                    className={classes.textField}
                    type="email"
                    name="email"
                    autoComplete="email"
                    margin="normal"
                    variant="outlined"
                /> 
              </Grid>
              <Grid item xs={6}>
                <TextField
                    id="outlined-password-input"
                    label="Password"
                    className={classes.textField}
                    type="password"
                    autoComplete="current-password"
                    margin="normal"
                    variant="outlined"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                    id="outlined-with-placeholder"
                    label="With placeholder"
                    placeholder="Placeholder"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                />
               </Grid>  
        </Grid>
        
      </form>
        </Container>
      
    );
  }