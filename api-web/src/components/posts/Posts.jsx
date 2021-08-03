import React from 'react';
import './Posts.scss';
import Post from '../post/Post';
function Posts(){
    return(
        <div className="posts">
            
            <h1 className="posts-heading">Posts</h1>
            <div className="container">
                <Post />
                <Post />
                <Post />
            </div>
            
        </div>
    )
};

export default Posts;
