import React from 'react';
import './Posts.scss';
import Post from '../post/Post';

export default function Posts({posts}){
    return(
        <div className="posts">
            
            <h1 className="posts-heading">Posts</h1>
            <div className="container">
                {posts.map(p=> (
                    <Post post={p}/>

                    ))}
            </div> 
           
            
        </div>
    )
};

