import logo from './logo.svg';
import './App.css';
import React from 'react';
import NavBar from './components/navbar/navBar';
import Hero from './components/hero/hero';
import Content from './components/content/content';

function App() {
  return (
    <div className="App">
     <NavBar></NavBar>
     <Hero></Hero>
     <Content></Content>
    </div>
  );
}

export default App;
