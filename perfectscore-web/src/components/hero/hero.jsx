import React, {useEffect, useRef, useState} from 'react'
import "./hero.scss"; 
import {SliderData} from "../../data/sliderdata";
import Button from '@material-ui/core/Button';
import ImgOne from '../../assets/daniel-barnes-PyFzygP2eNg-unsplash.jpg';
import ImgTwo from '../../assets/john-fornander-tVzyDSV84w8-unsplash.jpg';
import ImgThree from '../../assets/random-institute-B99TTVAdkHQ-unsplash.jpg';
import ImgFour from '../../assets/stephen-leonardi-XKIO6ZgCObo-unsplash.jpg';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import IconButton from '@material-ui/core/IconButton';


const Hero=()=>{
    const [current,setCurrent]=useState(0);
    const slidelength=SliderData.length;
    const timeout=useRef(null);
    useEffect(()=>{
        const next=()=>{
        setCurrent(current =>(current=== slidelength-1 ? 0: current+1));

        }
        timeout.current =setTimeout(next, 3000)
        return function(){
            clearTimeout(timeout.current)
        }
    },[current], slidelength)
    const next=()=>{
        setCurrent(current===slidelength -1 ? 0 : current + 1)
    };
    const prev=()=>{
        setCurrent(current===0 ? slidelength -1 : current - 1)
    };
    return (
        <div className="hero">
            <div className="wrapper">
               {SliderData.map((slide, index)=>{
                   return(
                   <div key={index} className="heroslider">
                       {index=== current &&(
                        <div className="heroslide">
                        <img  className="heroimg" src={slide.img} alt={slide.alt}/>
                            <div className="herocont">
                                <h1 className="title">{slide.title}</h1>
                                <p className="price">{slide.price}</p>
                                <Button to={slide.path} primary="true" className="btn" style={{color:"white"}}>{slide.label}</Button>
                            </div>
                        
                       </div> 
                       )}
                      
                   </div>
                   );
               })}
               <div className="slidebtn">
               <IconButton className="arrowbtn arrowback" onClick={prev}><ArrowBackIcon fontSize="large" /></IconButton>
               <IconButton className="arrowbtn" onClick={next}><ArrowForwardIcon fontSize="large" /></IconButton>
               </div>
               
            </div>
        </div>
    )
};

export default Hero;
