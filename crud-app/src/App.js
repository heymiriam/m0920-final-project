import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar/navBar';
import Hero from './components/hero/hero';
import Content from './components/content/content';
import axios from 'axios';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//const baseUrl='http://localhost:3000/movies/'

function App() {
  const initialState = [
    {
      movie: 'Space Jam: A New Legacy',
      movieImg: 'https://i0.wp.com/hipertextual.com/wp-content/uploads/2021/03/space-jam-bugs-bunny-scaled.jpeg?ssl=1',
      rating: 3,
      genreType:'Mystery',
      review:'review test',
      id: '0',
    },
    {
      movie: 'Space Jam: A New Legacy',
      movieImg: 'https://i0.wp.com/hipertextual.com/wp-content/uploads/2021/03/space-jam-bugs-bunny-scaled.jpeg?ssl=1',
      rating: 3,
      genreType:'Mystery',
      review:'review test',
      id: 1,
    },
    {
      movie: 'Space Jam: A New Legacy',
      movieImg: 'https://i0.wp.com/hipertextual.com/wp-content/uploads/2021/03/space-jam-bugs-bunny-scaled.jpeg?ssl=1',
      rating: 3,
      genreType:'Mystery',
      review:'review test',
      id: 2,
    },
    {
      movie: 'Space Jam: A New Legacy',
      movieImg: 'https://i0.wp.com/hipertextual.com/wp-content/uploads/2021/03/space-jam-bugs-bunny-scaled.jpeg?ssl=1',
      rating: 3,
      genreType:'Mystery',
      review:'review test',
      id: 3,
    },
    
  ];

  const[query, setQuery]=useState('');
  const [movieList, setMovieList]= useState(initialState);
  const [filteredMovieList, setFilteredMovieList] = useState([]);
  const [isFiltered, setIsFiltered]=useState(false);
  const [isEdit, setIsEdit]= useState(false);
  const [open, setOpen] = React.useState(false);
  const [movie, setMovie]= useState('');
  const [genreType, setGenreType]= useState('');
  const [review, setReview]= useState('');
  const [movieImg, setMovieImg]=useState('');
  const [rating, setRating]=useState('');
  const [currentMovieList, setCurrentMovieList]= useState({});
  const currentMovie= isFiltered ? filteredMovieList : movieList;

  const handleQueryChange =(e)=>{
    if(e.target.value){
      setIsFiltered(true);
    }else setIsFiltered(false);
    setQuery(e.target.value);

    filter(e.target.value, movieList);
  };

  const handleEdit = (e) => {
    const item = movieList.filter((movieList)=>movieList.id===e.target.value);
    setIsEdit(true);
    setOpen(true);
    setCurrentMovieList(item[0]);
    setMovie(item[0].movie);
    setReview(item[0].review);
    setGenreType(item[0].genreType);
    setRating(item[0].rating);
    setMovieImg(item[0].movieImg);
  };

  const handleDelete=(e)=>{
    const newMovieList=movieList.filter(
      (movieList)=>movieList.id !== e.target.value
    );
    setMovieList(newMovieList);

    filter(query, newMovieList);
  };
  
  const clearInput=()=>{
    setIsEdit(false);
    setOpen(false);
    setMovie('');
    setMovieImg('');
    setGenreType('');
    setReview('');
    setRating('');
    setCurrentMovieList({});
    
  };

  const handleAddOrEdit= () => {
    if(isEdit){
      const newListing={
        movie,
        rating,
        genreType,
        review,
        movieImg,
        id:currentMovieList.id,
      };
      editCurrentMovieList(newListing);
    }else{
      const newListing={
        movie,
        rating,
        genreType,
        review,
        movieImg,
        id: Math.floor(Math.random() * 101).toLocaleString(),
      };
      addMovieList(newListing);
    }
    clearInput();
    //setOpen(false);
  };

  const editCurrentMovieList=(newListing)=>{
    const newMovieList=movieList.map((listing)=>
    listing.id=== currentMovieList.id ? newListing : listing);
    setMovieList(newMovieList);
    filter(query, newMovieList);
  };
  
  const addMovieList= (newListing)=>{
    const newMovieList=[newListing, ...movieList];
    setMovieList(newMovieList);
    //setOpen(true);
    filter(query, newMovieList);
  };

  const filter=(query, movieList)=>{
    if(query){
      const filteredMovieList = movieList.filter(
        (listing)=>listing.genreType===query
      );
      setFilteredMovieList(filteredMovieList);
    }else setFilteredMovieList([]);
  };

  return (
    <div className="App">
     <NavBar></NavBar>
    
      <Hero
      query={query}
      handleQueryChange={handleQueryChange}
      isEdit={isEdit}
      movie={movie}
      setMovie={setMovie}
      genreType={genreType}
      setGenreType={setGenreType}
      review={review}
      setReview={setReview}
      movieImg={movieImg}
      setMovieImg={setMovieImg}
      rating={rating}
      setRating={setRating}
      clearInput={clearInput}
      handleAddOrEdit={handleAddOrEdit}
      open={open}
      setOpen={setOpen}

      />
      {currentMovie.length === 0 &&(
        <h2>No movies available</h2>
      )}
      <Content 
      movieList={currentMovie}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
      open={open}
      setOpen={setOpen}
      />
    
    </div>
  );
  /*const [data,setData]=useState([]);
  const getData=async()=>{
    await axios.get(baseUrl).then(response=>{console.log(response.data);})
  }
  
  useEffect(async()=>{
    await getData();
  },[])*/

  
  
}

export default App;
