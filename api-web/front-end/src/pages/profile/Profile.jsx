import React from 'react';
import Section from '../../components/section/Section';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

  

function Profile() {
    const classes = useStyles();
    return (
        <div>
            <div className="profilecontainer">
                
                <h1 className="profile-heading"> Profile</h1>
                <span className="update-account">Update Account</span>
                <span className="delete-account">Delete Account</span>
           
            <div className="settings">
            <form className={classes.root} noValidate autoComplete="off">
                
                <Button
                variant="contained"
                component="label"
                >
                Upload Profile Picture
                <input
                    type="file"
                    hidden
                />
                </Button>
                <TextField id="standard-basic" className="post-title" label="Name" autoFocus={true} />
                <TextField id="standard-basic" type="email" className="post-title" label="Email" />
                <TextField id="standard-basic" type="password" className="post-title" label="Password" />
                 

                <Button type='submit' >Update</Button>
             </form>
            </div>
            </div>
            
            
            
            <Section />

            
        </div>
    )
}


export default  Profile;
