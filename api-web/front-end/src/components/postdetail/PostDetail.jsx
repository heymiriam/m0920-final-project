import React, { useEffect, useState, useContext } from "react";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Chip from "@material-ui/core/Chip";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { useHistory, useLocation } from "react-router-dom";
import axios from "axios";
import TextField from '@material-ui/core/TextField';
import { Context } from "../../context/Context";

function PostDetail() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const publicFolder = "http://localhost:5000/assets/";
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [categories, setCategories]=useState("");
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    const fecthPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
      setCategories(res.data.categories);
    };
    fecthPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) {}
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`/posts/${post._id}`, {
        username: user.username,
        title,
        desc,
        categories,
      });
      //window.location.reload();
      setUpdate(false)
    } catch (err) {}
  };
  return (
    <div className="postdetail">
        
      {post.photo && (
          <img src={publicFolder + post.photo} alt="" className="img-upload" />
        )}
      {update ? (
          <>
        <TextField
          className="post-title"
          value={title}
          type="text"
          label="Title"
          size="medium"
          style={{width:"80%", marginTop:"40px", marginBottom:"40px"}}
          autoFocus={true}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br></br>
        </>
      ) : (
        <h1 className="postdetail-heading" >
          {title}
          
        </h1>
      )}
        <div style={{display:"flex", justifyContent:"space-between"}}>

      <Chip label={categories} style={{marginTop:"20px"}}>{categories}</Chip>
      {post.username === user?.username && (
            <>
            <div className="icons">
              <EditIcon color="primary" className="edit" onClick={() => setUpdate(true)} style={{marginRight:"20px", cursor:"pointer"}} />
              <DeleteIcon color="secondary" style={{cursor:"pointer"}} className="delete" onClick={handleDelete} />
            </div>
            </>
          )}
          </div>
      <br></br>
      <br></br>
      <div className="post-content">
          <div className="cont" style={{display:"flex", justifyContent:"flex-start"}}>
        <div className="author">
          <p style={{color:"black", fontSize:"20px"}}><Link to={`/?user=${post.username}`} className="author" style={{color:"black", textDecoration:'none'}}><b>Author:</b> {post.username} </Link></p>
        </div>
        <br></br>
        <div className="postedtime" style={{display:"flex", justifyContent:"flex-end"}}>
          <p style={{fontSize:"20px", textAlign:"right", marginLeft:"80px"}} className="time">{new Date(post.createdAt).toDateString()}</p>
        </div>
        <br></br><br></br><br></br><br></br>
        </div>
        {update ? (
          <TextField
            label="Multiline"
            multiline
            rows={4}
            value={desc}
            variant="outlined"
            onChange={(e) => setDesc(e.target.value)}
            style={{width:"100%"}}
          />
        ) : (
          <div className="post-text" style={{fontSize:"24px"}}>{desc}</div>
        )}
        {update && (
          <Button color="primary" variant="contained" onClick={handleUpdate} style={{margin:"40px 0px"}}>
            Update
          </Button>
        )}
      </div>
    </div>
  );
}

export default PostDetail;
