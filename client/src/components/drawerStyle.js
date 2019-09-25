import {
    fade,
    makeStyles,
    Theme,
    createStyles
  } from "@material-ui/core/styles";
   import { amber, green } from '@material-ui/core/colors';

  
const drawerWidth = 300;
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex"
    },
    appBar: {
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      marginRight: drawerWidth
    },
    title: {
      flexGrow: 0
    },
    hide: {
      display: "none"
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0
    },
    drawerPaper: {
      width: drawerWidth
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
      justifyContent: "flex-start"
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1)
    },
    button: {
      margin: theme.spacing(1)
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      marginRight: -drawerWidth
    },
    contentShift: {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      marginRight: 0
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      }
    },
    grow: {
      flexGrow: 1,
    },
    searchIcon: {
      width: theme.spacing(7),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 1),
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: 200
      }
    },
    expansionWidith: {
      width: "100%"
    },
    expansionHeading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular
    },
    fab: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
    contactDeleteButton: {
      margin: theme.spacing(0),
    },
    emailTextField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    emailCodeInput: {
      color: "white"
    },
    emailBackgound: {
      backgroundColor: green[600]
    },
    div1: {
      padding: theme.spacing(1, 1, 1, 7),
      width:300
    },
      
  })
);

export default useStyles