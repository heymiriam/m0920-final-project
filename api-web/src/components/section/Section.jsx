import React from 'react';
import './Section.scss';

function Section(){
    return(
        <div className="section">
            <div className="section-item">
                <p className="section-heading">About Me</p>
                <img className="section-img" src="https://images.unsplash.com/photo-1518057111178-44a106bad636?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80">
                </img>
                <p>dummy text</p>
            </div> 
            <div className="section-item">
                <p className="section-heading">Categories</p>
                <ul className="category-list">
                    <li className="category-item">Sports</li>
                    <li className="category-item">Random</li>
                    <li className="category-item">Food</li>
                    <li className="category-item">Film</li>
                    <li className="category-item">Travel</li>

                </ul>
            </div>
           
        </div>    
    )
};

export default Section;