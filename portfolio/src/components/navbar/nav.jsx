import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import logo from '../../assets/logo.png'; 
import "./nav.scss";
import Switch from '@material-ui/core/Switch';
import {Link} from "react-router-dom";


function NavBar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
      });
    
      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    
    return (
        
        <Paper className="navbar">
          
          <Link to='/' className='logoLink'><img className="logo" src={logo} alt="Logo"/></Link>
          <div>
              <div className="toggle-container">
                <p>Light</p>
                <Switch
                checked={state.checkedB}
                onChange={handleChange}
                color="primary"
                name="checkedB"
                inputProps={{ 'aria-label': 'primary checkbox' }}/>  
                <p>Dark</p>
              </div>
          <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            <MenuIcon className="hamburger"></MenuIcon>
          </Button>
          <Menu
            id="simple-menu"
            elevation={3}
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <Link to="/"><MenuItem onClick={handleClose}>Home</MenuItem></Link>
            <Link to="/about"><MenuItem onClick={handleClose}>About</MenuItem></Link>
            <Link to="/contact"><MenuItem onClick={handleClose}>Contact</MenuItem></Link>
            
          </Menu>
          </div>
          </Paper>
      
        
      );
    }  
  
    export default NavBar;