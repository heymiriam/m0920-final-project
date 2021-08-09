import React,{useContext} from 'react';
import './NavBar.scss';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import {Link} from 'react-router-dom';
import { Context } from "../../context/Context";

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

function NavBar(){
//const user=true;

const {user,dispatch}=useContext(Context);
const publicFolder = "http://localhost:5000/assets/"
 const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
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
            <Link to="/write" style={{textDecoration:'none', color:'white'}}>Post</Link>
            </Button>
            
            {user && <Button variant="contained" color="secondary" className="btn" onClick={handleLogout}>LOGOUT</Button>} 
           
            {user ?
            (<img className="profile-img" src={publicFolder + user.profilePicture}></img>
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