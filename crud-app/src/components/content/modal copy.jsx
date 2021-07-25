import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import {GENREFILTER} from '../../genreFilter';
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


//const baseUrl='http://localhost:3000/movies/'
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
const Modal=({
  isEdit,
  movie,
  setMovie,
  genreType,
  setGenreType,
  rating,
  setRating,
  review,
  setReview,
  movieImg,
  setMovieImg,
  clearInput,
  
  handleAddOrEdit,
})=>{
  const buttonContent= isEdit ? 'Change' : 'Add';
  const StyledRating = withStyles({
    iconFilled: {
      color: '#ff6d75',
    },
    iconHover: {
      color: '#ff3d47',
    },
  })(Rating);
  
  
  const [genre, setGenre] = React.useState('Select Movie Genre');
  IconContainer.propTypes = {
    value: PropTypes,
  };

 /* const handleChange = (event) => {
    setGenre(event.target.value);
  };*/
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  /*const handleGenreChange = e =>{
    const {name, value} = e.target;
    setMovieSelected(prevState => ({
      ...prevState,
      [name]: value

    }))
    
  }*/
  return(
    <div>
      <Button  style={{backgroundColor: '#910101', color: '#FFFFFF'}} onClick={ (e) => {
            //handleAddOrEdit(e);
            handleClickOpen(e);
            }} >
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
              value={movie}
              name="movie"
              label="Movie Name"
              type="text"
              fullWidth
              //onChange={handleInputChange}
             /* onChange={ (e) => {
                handleChange(e);
                handleInputChange();
                }} */
                onChange={(e)=>setMovie(e.target.value)}
            />
            <input
                        type="url"
                        margin="normal"
                        fullwidth
                        id="img"
                        label="Image"
                        name="movieImg"
                        value={movieImg}
                        className="my-1 p-1 w-full"
                        placeholder="Image"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={(e)=>setMovieImg(e.target.value)}
                        /*onChange={ (e) => {
                          //handleChange(e);
                          handleInputChange();
                          }} */
                        //onChange={handleChange}
                        //onChange={handleInputChange}
                        //required
                    /> 
            <TextField
          id="standard-select-genre"
          select
          name="genreType"
          label="Select"
          value={genreType}
          //onChange={handleChange}
          /*onChange={handleInputChange}*/
          onChange={(e)=>setGenreType(e.target.value)}
          helperText="Please select a movie genre"
        >
          {GENREFILTER.map((genreType) => (
            <MenuItem key={genreType.value} value={genreType.title}>
              {genreType.title}
            </MenuItem>
          ))}
        </TextField>
           
             <TextareaAutosize
              maxRows={10}
              name="review"
              value={review}
              className="textarea"
              aria-label="maximum height"
              placeholder="Maximum 4 rows"
              defaultValue="Write a review"
              //onChange={handleInputChange}
              onChange={(e)=>setReview(e.target.value)}
            />
            <Rating
          name="rating"
          defaultValue={2}
          getLabelText={(value) => customIcons[value].label}
          IconContainerComponent={IconContainer}
          className="rate-icons"
          value={rating}
          onChange={(e)=>setRating(e.target.value)}
          //onChange={handleInputChange}
        />

          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}  color="secondary">
              Cancel
            </Button>
            <Button 
             onClick={ (e) => {
              handleClose();
                handleAddOrEdit();
                }}
            //onClick={handleAddOrEdit}  
            color="primary">
              {buttonContent}
            </Button>
            
          </DialogActions>
          </form>
        </Dialog>
        
    </div>
  )
}

/*const MovieInputs=({
  isEdit,
  movie,
  setMovie,
  genre,
  setGenre,
  rating,
  setRating,
  review,
  setReview,
  movieImg,
  setMovieImg,
  clearInput,
  handleAddOrEdit,

})*/





//function Modal() {
  //const [data,setData]=useState([]);
/*const getData=async()=>{
  await axios.get(baseUrl).then(response=>{console.log(response.data);})
}

useEffect(async()=>{
  await getData();
},[])*/

   
   /* const [movieSelected, setMovieSelected]=useState({
      movie:'',
      genre:'',
      review:'',
      img:'',
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
            <input
                        type="url"
                        margin="normal"
                        fullwidth
                        id="img"
                        label="Image"
                        name="img"
                        
                        className="my-1 p-1 w-full"
                        placeholder="Image"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={handleChange}
                        onChange={handleMovieChange}
                        //required
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
  }*/

  export default Modal;