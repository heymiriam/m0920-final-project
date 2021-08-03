import React from 'react';
import './Post.scss';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


function Post(){
    return(

        <Card className="post">
          <CardActionArea> 
          <div className="post-img">
              <Chip label="Basic" color="primary" className="chip"></Chip>
              <h3 className="post-heading">Post Name</h3>
        </div>  
        <div className="post-summary">
            <p className="post-sum">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillu</p>
            <p className="post-date">1 hour ago</p>
        </div>
        </CardActionArea> 
        </Card>
    )
};

export default Post;