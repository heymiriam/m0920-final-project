import React from 'react';
import './NavBar.scss';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

function NavBar(){
const user=false;
const classes = useStyles();
return(
    <div className="navbar">
        <div className="logo">
            <Link className="logo-name" to="/" style={{textDecoration:'none'}}>The Coffee Time.</Link>
            </div>
        
            <ul className="list-section">
                <li className="list-item"><Link  className="list-item"to="/" style={{textDecoration:'none'}}>ABOUT</Link></li>
                <li className="list-item"><Link className="list-item" to="/" style={{textDecoration:'none'}}>CONTACT</Link></li>
               
            </ul>
        
        <div className="icons" >
            <SearchIcon ></SearchIcon>
            <Button variant="contained" color="primary" className="btn">
            <Link to="/write" style={{textDecoration:'none', color:'white'}}><Link to="/write" style={{textDecoration:'none', color:'white'}}>Post</Link></Link>
            </Button>
            
                {user && <Button variant="contained" color="secondary" className="btn">Logout </Button>}
           
            {user ?
            (<img className="profile-img" src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80"></img>
            ) : ( <>
            
            <Button className="btn login-btn" color="primary"><Link to="/login" style={{textDecoration:'none', color:'blue'}}>Login</Link></Button>
             </>
             )
        }
            </div>
    </div>
)
}

export default NavBar;