import React from 'react';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Chip from '@material-ui/core/Chip';

function PostDetail() {
    return (
        <div className="postdetail">
            <img src="https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=828&q=80" />
        <h1 className="postdetail-heading">Post entry</h1>  
        <EditIcon />
        <DeleteIcon />
       <Chip></Chip>
       <div className="post-content">
           <div className="author">

           </div>
           <div className="postedtime">

           </div>
           <div className="post-text"></div>
       </div>
        </div>
    )
}

export default PostDetail;