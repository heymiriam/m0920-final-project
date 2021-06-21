import React from "react";
import { BrowserRouter, Route, Switch, Routes, Link } from "react-router-dom";
import Header from '../components/header-home/header-home';
import Work from '../components/work/work.component';
import aboutImg from '../assets/aboutImg.jpg';
import Button from '@material-ui/core/Button';
import './about.style.scss'


function About() {
    const onDownload = () => {
        const link = document.createElement("a");
        link.download = `Resume__Miriam-Bellon.pdf`;
        link.href = "../../assets/Resume__Miriam-Bellon.pdf";
        link.click();
      };
    return(
        <div className='aboutCont'>
            
            <div className='textCont'>
                <h1 className='aboutHeading'>Hi, I'm Miriam!</h1>
                <p className='text'>I’m a creative Art Director, UX/UI Designer and 
                    Full-Stack Designer with a passion for design, arts, 
                    and nature. My curiosity and my insatiable appetite 
                    to continue learning let me become more professional as 
                    possible. </p>
                <p className='text'>Studying Advertising and Public Relations, Creativity and 
                    Web Dev are some examples of my previous education. These 
                    skills were implemented working as an Art Director and Graphic 
                    Designer for different companies for 3 years, including advertising 
                    and marketing agencies. </p>
                <p className='text'>But that’s not all about me! I’m sociable and persevering. I’m always 
                    willing to help and I like to challenge myself. </p>
                
                <Link to="../../assets/Resume__Miriam-Bellon.pdf" target="_blank" download><Button size="large" variant="contained" color="primary" className='resumeBtn'>
                    Resume
                 </Button></Link>
            </div>
<div className='imgCont'>
                <img src={aboutImg} alt="miriam bellon"/> 
            </div>
            
        </div>
    );
}

export default About;