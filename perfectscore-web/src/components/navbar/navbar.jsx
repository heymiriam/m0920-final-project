import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import CloseIcon from '@material-ui/icons/Close';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";
import "./navbar.scss";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import MobileNav from "../mobilenav/mobilenav";

function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({ target: window ? window() : undefined });
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }
const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(1),
   

  },
  navbar: {
    display:"flex",
    justifyContent: 'space-between',
    zIndex: 100,
  },

  sections:{
    display:"flex",
    justifyContent: 'space-between',
    alignItems: 'center',
    textDecoration: 'none',
    color:"black",
    
  },
  sect:{
    marginRight: theme.spacing(6),
    textDecoration: 'none',
    color:"black",
    ["@media (max-width:768px)"]:{
      display:"none",
    },
  },
  contactbtn:{
    cursor:"pointer",
    transition:"5s",
    textDecoration:"none",
    color:"black",
    
    ["@media (max-width:768px)"]:{
      display:"none",
    },
    "&:hover":{
      transform:"translateY(-2px)",
    },
  },
 
  /*mobsections:{
    display:"flex",
    flexDirection:"column",
    justifyContent: 'flex-start',
    alignItems: 'center',
    textDecoration: 'none',
    color:"black",
    width:"100%",
  },
  mobsect:{
    marginRight: theme.spacing(6),
    textDecoration: 'none',
    color:"white",
    marginBottom:"20px",
    transition:"0.2s ease-in-out,",
    ["@media (max-width:768px)"]:{
      display:"none",
    },
  },
  mobcontactbtn:{
      marginRight: theme.spacing(6),
      cursor:"pointer",
      textDecoration:"none",
      color:"white",
      backgroundColor:"#000d1a",
      marginLeft:"0px",
      marginTop:"30px",
      ["@media (max-width:768px)"]:{
        display:"none",
      },
      "&:hover":{
          color:"#000d1a",
      }
     
    },
    mobmenu:{
      //display:"none",
      ["@media (max-width:768px)"]:{
        display:"block",
      },


    },*/
    mobnav:{
      //position:'fixed',
     // zIndex:900,
      //width:"100000px",
      //backgroundColor:'#cd853f',
      //display:'grid',
     // alignItems: 'center',
      //top:0,
      //left:0,
      transition:'0.3s, ease-in-out',
    },
}));

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });
  HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function NavBar(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    < >
      <CssBaseline />
      <HideOnScroll {...props}>
      <AppBar color="black" className="navbar">
        <Toolbar className={classes.navbar} id="back-to-top-anchor">
        <div className="logo">
          <Link to="/" className="link"><Typography variant="h6">Logo</Typography></Link>
        </div>
         
          <div className={classes.sections}>
          <Typography className={classes.sect} variant="body1" ><Link to="/rentals" className="link">Rentals</Link></Typography>
          <Typography className={classes.sect} variant="body1"><Link to="/properties" className="link">Private Properties</Link></Typography>
          <Typography className={classes.sect} variant="body1"><Link to="/about" className="link">About</Link></Typography>

          <Button color="primary" variant="outlined" className={classes.contactbtn} className="contactbtn"><Link to="/contact" className="link">Contact</Link></Button>
          <MenuIcon className="mobmenu" onClick={handleClick}></MenuIcon>
          
          <Menu 
          className="mobnav" 
          clasName={classes.mobnav} 
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}>
           
            <div className="mobnavcont">
               <CloseIcon className="closebtn" onClick={handleClose}/>
                <div className={classes.mobsections} className="mobsections">
                    <Typography className={classes.mobsect} className="mobsect" variant="h6" ><Link to="/rentals" className="moblink">Rentals</Link></Typography>
                    <Typography className={classes.mobsect} className="mobsect" variant="h6"><Link to="/properties" className="moblink">Private Properties</Link></Typography>
                    <Typography className={classes.mobsect} className="mobsect" variant="h6"><Link to="/about" className="moblink">About</Link></Typography>

                    <Button color="black" variant="outlined"  size="large" className={classes.mobcontactbtn} className="mobcontactbtn" style={{color:"white"}} variant="contained" align="center"><Link to="/contact" className="link">Contact</Link></Button>
                    
                </div>
            </div>
        </Menu>
        </div>
        </Toolbar>
        
      </AppBar>
      </HideOnScroll>

     
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </ >
  );
}