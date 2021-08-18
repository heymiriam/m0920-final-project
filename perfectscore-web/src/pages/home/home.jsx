import React, {useState} from 'react';
import NavBar from "../../components/navbar/navbar";
import {SliderData} from "../../data/sliderdata";
import Hero from "../../components/hero/hero";
//import MobileNav from "../../components/mobilenav/mobilenav";
import Cont from "../../components/cont/cont";

export default function Home(){
    const [open, setOpen]=useState(false);
    const tog =()=>{
        setOpen(!open)
    }
    return(
        <div>
            <NavBar />      
            <Hero slides={SliderData}/>
            <Cont />
        </div>
    )
}