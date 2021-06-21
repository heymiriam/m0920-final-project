import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import logo from '../../assets/logo.png';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    width:'100%',  
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between', 
  },
  main: {
    
    
  },
  footer: {
      width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems:'center', 
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
  logo: {
      width: '10%',
      marginLeft:'2%',

  },
  cont:{
    width:'100%', 
    margin:'auto', 
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end', 
  },
  type:{

      width:'100%',
      textAlign:'center',
      display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center', 
  },
  logocont:{
    width:'100%',
  },
  smicon:{
      margin: 'auto 10px',
  }
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
      <footer className={classes.footer}>
      <Container className={classes.logocont}>
         <img className={classes.logo} src={logo} alt="Logo"/> 
      </Container>
        
        
           <Container className={classes.type}>
          <Typography variant="body1" >
              {' © '}
              {new Date().getFullYear()}{' '}
              <Link color="inherit" href="https://miriam-bellon.com">
                    Miriam Bellon
                </Link>
                
                {'. '}
              All Rights Reserved.</Typography>
              </Container>
              <Container className={classes.cont}>
              
                <Link color="inherit" href="https://miriam-bellon.com"><EmailIcon/></Link>
                <Link color="inherit" href="https://miriam-bellon.com" className={classes.smicon}><GitHubIcon/></Link>
                <Link color="inherit" href="https://miriam-bellon.com"><LinkedInIcon/></Link>

            </Container>
        
        
      </footer>
    </div>
  );
}