import React, { useState, useEffect } from 'react';
import HeroImg from "../../assets/movie3.jpeg";
import Modal from './modal.jsx';
import LazyHero from 'react-lazy-hero';
import { Parallax, Background } from 'react-parallax';
import "./hero.scss";
import MovieGenreFilter from './movieGenreFilter';
import Logo from '../../assets/crud-logo-02.png';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import PropTypes from 'prop-types';



/*const Container = () => (
    <Parallax blur={10} bgImage="path/to/image.jpg" bgImageAlt="the cat" strength={200}>
        Content goes here. Parallax height grows with content height.
    </Parallax>
);*/
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
const Hero=({
  query,
  handleQueryChange,
  movie,
  setMovie,
  genreType,
  setGenreType,
  review,
  setReview,
  rating,
  setRating,
  movieImg,
  setMovieImg,
  isEdit,
  clearInput,
  handleAddOrEdit,
  open,
  isOpen,

}) =>{
  
  
  
  //const [open, setOpen] = React.useState(false);

  /*const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };*/

  //const [genre, setGenre] = React.useState('Select Movie Genre');
  IconContainer.propTypes = {
    value: PropTypes,
  };

  
    return (
        <Parallax style={{height:500, }} bgImage={HeroImg} bgImageAlt="the cat" strength={200} className="hero">
       
        <img src={Logo} className="logoHero"></img>
        <Modal
        movie={movie}
        setMovie={setMovie}
        genreType={genreType}
        setGenreType={setGenreType}
        rating={rating}
        setRating={setRating}
        movieImg={movieImg}
        setMovieImg={movieImg}
        review={review}
        setReview={setReview}
        isEdit={isEdit}
       // handleInputChange={handleInputChange}
        //handleClear={handleClear}
        clearInput={clearInput}
        handleAddOrEdit={handleAddOrEdit}
        //handleClickOpen={handleClickOpen}
        //handleChange={handleChange}
        ></Modal>
        <MovieGenreFilter query={query} handleQueryChange={handleQueryChange}/>
     </Parallax>
    )
  };
/*function Hero(){
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    const style = {
      'position': 'fixed',
      'top': 0, 
      'left': 0,
      'min-width': '100%',
      'height':'80%',
      'overflow':'hidden'
    }
    
    return(
      <div style={style}>
          <Modal></Modal>
        <img src={HeroImg} style={style}/>  
        

      </div>
    )
  }*/
  /*function Hero(){
    return (
        <div>
            <LazyHero imageSrc="https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80">
                <h1>The Movie List</h1>
                <Modal></Modal>
            </LazyHero>

            */{/* ... */}
        /*</div>
    );
}*/

  export default Hero;