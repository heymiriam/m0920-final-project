import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar/navBar';
import Hero from './components/hero/hero';
import Content from './components/content/content';
import axios from 'axios';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const baseUrl='http://localhost:3000/movies/'

function App() {
  const [data,setData]=useState([]);
  const getData=async()=>{
    await axios.get(baseUrl).then(response=>{console.log(response.data);})
  }
  
  useEffect(async()=>{
    await getData();
  },[])
  return (
    <div className="App">
     <NavBar></NavBar>
     <Hero></Hero>
     <Content></Content>
    </div>
  );
}

export default App;
