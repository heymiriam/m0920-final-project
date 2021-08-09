import React, {useState} from 'react';
import './Post.scss';
import Chip from '@material-ui/core/Chip';
import {Link} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


export default function Post({post}){
    const publicFolder="http://localhost:5000/assets/";
    return(

        <Card className="post">
          <Link to={`/post/${post._id}`} className="link">
          <CardActionArea> 
          
          <div className="post-img">
          {post.photo && <img className="img" src={publicFolder + post.photo} alt=""/>}
              <div>
                  {
                      post.categories.map((ca)=>{
                        <Chip label={ca.name} color="primary" className="chip"></Chip>   
                      })
                     
                  }
                  </div>
            
              <h3 className="post-heading">{post.title}</h3>
            
        </div> 
        
        <div className="post-summary">
            <p className="post-sum">{post.desc}</p>
            <p className="post-date">{new Date(post.createdAt).toDateString()}</p>
        </div>
        </CardActionArea> 
        </Link> 
        </Card>
    )
};
