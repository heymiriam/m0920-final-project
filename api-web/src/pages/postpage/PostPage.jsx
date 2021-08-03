import React from 'react';
import './PostPage.scss';
import Section from '../../components/section/Section';
import PostDetail from '../../components/postdetail/PostDetail';
function PostPage() {
    return (
        <div className="container">
    
            <PostDetail className="postdetail"/>
           
            <Section className="section"></Section>
        </div>
       
    )
}

export default PostPage;