import React from 'react';
import './Home.scss';
import Header from '../../components/header/Header';
import Section from '../../components/section/Section';
import Posts from '../../components/posts/Posts';
function Home(){
    return(
        <div>
            <Header />
            <div className="container">
            <Posts className="posts"/>
            <Section className="section"/>
            </div>
        </div>
    )
};

export default Home;
