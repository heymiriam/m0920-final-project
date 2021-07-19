import React, { useState, useEffect } from 'react';
import HeroImg from "../../assets/movie3.jpeg";
import Modal from './modal.jsx';
import LazyHero from 'react-lazy-hero';
import { Parallax, Background } from 'react-parallax';
import "./hero.scss";
import Logo from '../../assets/crud-logo-02.png';


/*const Container = () => (
    <Parallax blur={10} bgImage="path/to/image.jpg" bgImageAlt="the cat" strength={200}>
        Content goes here. Parallax height grows with content height.
    </Parallax>
);*/
function Hero() {
    
  
    return (
        <Parallax style={{height:500, }} bgImage={HeroImg} bgImageAlt="the cat" strength={200} className="hero">
       
        <img src={Logo} className="logoHero"></img>
        <Modal></Modal>
        
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