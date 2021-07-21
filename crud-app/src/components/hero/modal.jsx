import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import Rating from '@material-ui/lab/Rating';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import './modal.scss'; 
import axios from 'axios';


const baseUrl='http://localhost:3000/movies/'

const StyledRating = withStyles({
  iconFilled: {
    color: '#ff6d75',
  },
  iconHover: {
    color: '#ff3d47',
  },
})(Rating);

const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon />,
    label: 'Very Dissatisfied',
  },
  2: {
    icon: <SentimentDissatisfiedIcon />,
    label: 'Dissatisfied',
  },
  3: {
    icon: <SentimentSatisfiedIcon />,
    label: 'Neutral',
  },
  4: {
    icon: <SentimentSatisfiedAltIcon />,
    label: 'Satisfied',
  },
  5: {
    icon: <SentimentVerySatisfiedIcon />,
    label: 'Very Satisfied',
  },
};



function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}
const genres = [
  {
    value: 'Action',
    label: 'Action',
  },
  {
    value: 'Comedy',
    label: 'Comedy',
  },
  {
    value: 'Drama',
    label: 'Drama',
  },
  {
    value: 'Horror',
    label: 'Horror',
  },
  {
    value: 'Mystery',
    label: 'Mystery',
  },
  {
    value: 'Romance',
    label: 'Romance',
  },
  {
    value: 'Science-Fiction',
    label: 'Sci-Fi',
  },
  {
    value: 'Thriller',
    label: 'Thriller',
  },
];



function Modal() {
  const [data,setData]=useState([]);
const getData=async()=>{
  await axios.get(baseUrl).then(response=>{console.log(response.data);})
}

useEffect(async()=>{
  await getData();
},[])

      const [genre, setGenre] = React.useState('Select Movie Genre');
    IconContainer.propTypes = {
      value: PropTypes,
    };

    const handleChange = (event) => {
      setGenre(event.target.value);
    };
    const [open, setOpen] = React.useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    const [movieSelected, setMovieSelected]=useState({
      movie:'',
      genre:'',
      review:'',
      rating:'',
    });

    const handleMovieChange = e =>{
      const {name, value} = e.target;
      setMovieSelected(prevState => ({
        ...prevState,
        [name]: value

      }))
      
    }

    
    return (
      <div>
        
        <Button  style={{backgroundColor: '#910101', color: '#FFFFFF'}} onClick={handleClickOpen}>
          Add a movie
        </Button>
        <Dialog open={open} onClose={handleClose} fullWidth={true} aria-labelledby="form-dialog-title" className="dialog">
          <DialogTitle id="form-dialog-title">Movie</DialogTitle>
          
          <form>
            <DialogContent>
            <DialogContentText>
              Add or Edit a movie
            </DialogContentText>
            
            <TextField
              autoFocus
              margin="dense"
              id="movie"
              name="movie"
              label="Movie Name"
              type="text"
              fullWidth
              onChange={handleMovieChange}
            />
            <TextField
          id="standard-select-genre"
          select
          name="genre"
          label="Select"
          value={genre}
          onChange={handleChange}
          onChange={handleMovieChange}
          helperText="Please select a movie genre"
        >
          {genres.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
           
             <TextareaAutosize
              maxRows={10}
              name="review"
              className="textarea"
              aria-label="maximum height"
              placeholder="Maximum 4 rows"
              defaultValue="Write a review"
              onChange={handleMovieChange}
            />
            <Rating
          name="rating"
          defaultValue={2}
          getLabelText={(value) => customIcons[value].label}
          IconContainerComponent={IconContainer}
          className="rate-icons"
          onChange={handleMovieChange}
        />

          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="secondary">
              Cancel
            </Button>
            <Button onClick={handleClose} color="primary">
              Save
            </Button>
            
          </DialogActions>
          </form>
        </Dialog>
        
      </div>
    );
  }

  export default Modal;