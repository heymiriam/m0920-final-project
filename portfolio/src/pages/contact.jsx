import React from "react";
import { BrowserRouter, Route, Switch, Routes, Link } from "react-router-dom";
import Header from '../components/header-home/header-home';
import Work from '../components/work/work.component';
import aboutImg from '../assets/aboutImg.jpg';
import Button from '@material-ui/core/Button';
import { FormControl } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import './contact.style.scss';



function Contact() {
    const useStyles = makeStyles((theme) => ({
        paper: {
          marginTop: theme.spacing(8),
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        },
        avatar: {
          margin: theme.spacing(1),
          backgroundColor: theme.palette.secondary.main,
        },
        form: {
          width: '100%', // Fix IE 11 issue.
          marginTop: theme.spacing(3),
        },
        submit: {
          margin: theme.spacing(3, 0, 2),
          marginTop:'20px',
          padding:'20px 50px',
        },
      }));

      const classes = useStyles();
    return(
        <div className='contactCont'>
            <div className='textCont'>
                <h1 className='contactHeading'>Say hi!</h1>
                <p className='text'>Few words are enough to start great projects and conversations </p>
            </div>
           <div >
           <Container component="main" className='formCont'>
           
            <div className={classes.paper}>

                <form className={classes.form} noValidate>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                    <TextField
                        autoComplete="fname"
                        name="firstName"
                        variant="outlined"
                        required
                        fullWidth
                        id="firstName"
                        label="First Name"
                        autoFocus
                    />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="lastName"
                        label="Last Name"
                        name="lastName"
                        autoComplete="lname"
                    />
                    </Grid>
                    
                    <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        fullWidth
                        id="phone"
                        label="Phone"
                        name="phone"
                        autoComplete="phone"
                    />
                    </Grid>
                    <Grid className='textareaCont'>
                    <TextareaAutosize
                    className='textarea'
                    rowsMax={40}
                    aria-label="maximum height"
                    placeholder="Maximum 4 rows"
                    defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua."
                    />
                    </Grid>
                </Grid>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    Submit
                </Button>
                
                </form>
            </div>
            
            </Container>
           </div>
        </div>
    );
}

export default Contact;