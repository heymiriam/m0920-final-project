import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import Modal from '../hero/modal';
import baseUrl from '../hero/modal';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MovieImg from '../../assets/space-jam.jpeg';
import './content.scss';
import {GENREFILTER} from '../../genreFilter';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import Rating from '@material-ui/lab/Rating';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import AlarmIcon from '@material-ui/icons/Alarm';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import MenuItem from '@material-ui/core/MenuItem';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';


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
const MovieHeader=({
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
    id,
    handleEdit,
    handleDelete,
    //handleClickOpen,
})=>{
    const buttonContent= isEdit ? 'Change' : 'Add';
    const [open, setOpen] = React.useState(false);
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
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    return(
    <div>
        <CardContent>
        
        <div className="heading-cont">
          <Typography align="left" gutterBottom variant="h4" component="div" className="card-heading">
          {movie}
          </Typography>
          <CardActions className="card-btn">
            <IconButton aria-label="edit" color="primary"   
           /* onClick={ (e) => {
            handleEdit();
            handleClickOpen();
            }}*/
            onClick={() => { handleClickOpen(id) }}
            //onClick={handleAddOrEdit} 
            //onClick={handleClickOpen} 
            value={id}>
               <EditIcon color="primary"></EditIcon>
              </IconButton>
             
             
              <IconButton aria-label="delete" color="secondary" onClick={handleDelete} value={id}>
              <DeleteIcon color="secondary"/>
              </IconButton>
            
              <Dialog open={open} value={id} onClose={handleClose} fullWidth={true} aria-labelledby="form-dialog-title" className="dialog">
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
          {GENREFILTER.map(genreType => (
            <MenuItem key={genreType.id} value={genreType.title}>
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
          </CardActions>
          </div>
          </CardContent>
    </div>
)
};

export default MovieHeader;