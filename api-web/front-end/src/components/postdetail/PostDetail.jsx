import React, {useEffect, useState} from 'react';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Chip from '@material-ui/core/Chip';
import { useHistory, useLocation} from "react-router-dom";
import axios from "axios";

function PostDetail() {
    const location=useLocation();
    const path=location.pathname.split("/")[2];
    const [post, setPost]=useState({})
    useEffect(() => {
        const fecthPost =async ()=>{
            const res = await axios.get("/posts/"+ path);
            setPost(res.data)
        };
        fecthPost();
    },[path]);
    return (
        <div className="postdetail">
            {post.photo &&
            <img src={post.photo} alt=""/>
            }
        <h1 className="postdetail-heading">{post.title}</h1>  
        <EditIcon />
        <DeleteIcon />
       <Chip></Chip>
       <div className="post-content">
           <div className="author">
            {post.username}
           </div>
           <div className="postedtime">
            <p>{new Date(post.createdAt).toDateString()}</p>
           </div>
           <div className="post-text">{post.desc}</div>
       </div>
        </div>
    )
}

export default PostDetail;