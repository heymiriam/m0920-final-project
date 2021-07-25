import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import Modal from '../hero/modal';
import baseUrl from '../hero/modal';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MovieImg from '../../assets/space-jam.jpeg';
import './moviecard.scss';
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
import MovieDetails from './moviedetails';
import MovieHeader from './movieheader';
import ImgMovie from './imgmovie';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(0.5),
      },
    },
  }));

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
  
  IconContainer.propTypes = {
    value: PropTypes.number.isRequired,
  };

  const MovieCard=({
    data,
    //id,
    handleEdit,
    handleDelete,
  })=>{
    
    return(
    <div className="content">
      
    <Card className="card" key={data.id}>
      <ImgMovie
      movie={data.movie}
      movieImg={data.movieImg}
      className="imgmovie"  />
    <div className="detailscard">   
     <MovieHeader
     movie={data.movie}
     handleEdit={handleEdit}
     handleDelete={handleDelete}
     id={data.id}
     />   
      <MovieDetails
      genreType={data.genreType}
      review={data.review}
      rating={data.rating}
      />
    </div> 
    </Card>
    </div>
    )
  }


export default MovieCard;