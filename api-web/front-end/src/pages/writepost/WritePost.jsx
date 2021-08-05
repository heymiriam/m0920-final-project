import React from 'react';
import './WritePost.scss';
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


function WritePost() {
    const classes = useStyles();
    
      const [age, setAge] = React.useState('');
      const handleChange = (event) => {
        setAge(event.target.value);
      };

    return (
        <div className="writepost">

            <form className={classes.root} className="writepost" noValidate autoComplete="off">
              <h1 className='writepost-heading'>Write your story</h1>
                <TextField id="standard-basic" className="post-title" label="Standard" autoFocus={true} />
                <Button
                variant="contained"
                component="label"
                >
                Upload File
                <input
                    type="file"
                    hidden
                />
                </Button>

                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    onChange={handleChange}
                    >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                <TextField
                id="outlined-multiline-static"
                label="Multiline"
                multiline
                rows={4}
                defaultValue="Default Value"
                variant="outlined"
                />

                <Button type='submit' className='submit-btn' color='primary'>Publish</Button>
             </form>
        </div>
    )
}

export default WritePost;