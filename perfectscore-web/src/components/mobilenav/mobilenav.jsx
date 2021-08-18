import React, {useState} from "react";
import "./mobilenav.scss";
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';
import styled from "styled-components";

const Mobnav=styled.div`
opacity:${({open})=>(open ? '1' :'0')};
top:${({open})=>(open ? '0' :'-100')};
`


const useStyles = makeStyles((theme) => ({
    
   
    mobsections:{
      display:"flex",
      flexDirection:"column",
      justifyContent: 'flex-start',
      alignItems: 'center',
      textDecoration: 'none',
      color:"black",
      
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


      },
      mobnav:{
          opacity:`${({open})=>(open ? '1' :'0')}`,
          top:`${({open})=>(open ? '0' :'-100')}`,
      },

   
    }
  ));

export default function MobileNav({open, tog}){
    const classes = useStyles();
    return(
        <div className="mobnav" clasName={classes.mobnav} open={open} onClick={tog}>
            <CloseIcon className="closebtn" onClick={tog}/>
            <div className="mobnavcont">
                <div className={classes.mobsections}>
                    <Typography className={classes.mobsect} variant="h6" ><Link to="/rentals" className="moblink">Rentals</Link></Typography>
                    <Typography className={classes.mobsect} variant="h6"><Link to="/properties" className="moblink">Private Properties</Link></Typography>
                    <Typography className={classes.mobsect} variant="h6"><Link to="/about" className="moblink">About</Link></Typography>

                    <Button color="primary" variant="outlined"  size="large" className={classes.mobcontactbtn} variant="contained" align="center"><Link to="/contact" className="link">Contact</Link></Button>
                    
                </div>
            </div>
        </div>
    )
};