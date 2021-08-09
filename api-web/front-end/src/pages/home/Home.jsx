import React, {useEffect, useState} from 'react';
import './Home.scss';
import Header from '../../components/header/Header';
import Section from '../../components/section/Section';
import Posts from '../../components/posts/Posts';
import axios from "axios";
import {useLocation} from 'react-router';

function Home(){
    const [posts, setPosts]=useState([]);
    const {search}=useLocation();
 

    useEffect(() => {
        const fetchPosts= async()=>{
            const res= await axios.get("/posts"+search)
            setPosts(res.data)
            //console.log(res)
        }
        fetchPosts();
    },[search]);

    
    return(
        <div>
            <Header />
            <div className="container">
            <Posts className="posts" posts={posts}/>
            <Section className="section"/>
            </div>
        </div>
    )
};

export default Home;
