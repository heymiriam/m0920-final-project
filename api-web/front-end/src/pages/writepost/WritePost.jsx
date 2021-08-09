import React, {useState, useContext} from 'react';
import './WritePost.scss';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import axios from "axios";
import { Context } from "../../context/Context";

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));


function WritePost() {
    const classes = useStyles();
    const [title, setTitle]=useState("");
    const [desc, setDesc] = useState("");
    const [file,setFile] = useState(null);
    const { user } = useContext(Context);

    const [categories, setCategories] =React.useState('')
    const [movies, setMovies] = React.useState('');
    const [travel, setTravel] = React.useState('');
    const [cooking, setCooking] = React.useState('');
    const [sports, setSports] = React.useState('');
    const [random, setRandom] = React.useState('');
    const [lifestyle, setLifestyle] = React.useState('');
      
      const handleChange = (event) => {
        setCategories(event.target.value);
      };
      const handleSubmit = async (e) => {
        e.preventDefault();
         
        const newPost = {
          username: user.username,
          title,
          desc,
          categories,
        };
        if (file) {
          const data =new FormData();
          const filename = Date.now() + file.name;
          data.append("name", filename);
          data.append("file", file);
          newPost.photo = filename;
          try {
            await axios.post("/upload", data);
          } catch (err) {}
        }
        try {
          const res = await axios.post("/posts", newPost);
          window.location.replace("/post/" + res.data._id);
        } catch (err) {}
      };
    return (
        <div className="writepost-cont">
          {
          file && (
            <img src={URL.createObjectURL(file)} alt=" " className="img-upload"/>
            )
          }
        
          
            <form className={classes.root} className="writepost" noValidate autoComplete="off" onSubmit={handleSubmit}>
              <h1 className='writepost-heading'>Write your story</h1>
              <div className="write-form">
                <TextField id="title" className="post-title" size="medium" label="Title" autoFocus={true} onChange={(e)=>setTitle(e.target.value)} />
                <br></br>
                <Button
                className="upload-btn"
                variant="outlined"
                component="label"
                color="primary"
                >
                Upload File
                <input
                    type="file"
                    id="inputFile"
                    hidden
                    onChange={(e)=>setFile(e.target.files[0])}
                />
                </Button>
                <div className="cat-container">
                <InputLabel id="categories" size="medium">Category</InputLabel>
                    <Select
                    labelId="categories"
                    id="categories"
                    className="categories"
                    size="medium"
                    value={categories}
                    onChange={(e)=>setCategories(e.target.value)}
                    >
                    <MenuItem value={travel}>Travel</MenuItem>
                    <MenuItem value={movies}>Movies</MenuItem>
                    <MenuItem value={cooking}>Cooking</MenuItem>
                    <MenuItem value={sports}>Sports</MenuItem>
                    <MenuItem value={lifestyle}>Lifestyle</MenuItem>
                    <MenuItem value={random}>Random</MenuItem>
                    </Select>
                    </div>
                <TextField
                id="outlined-multiline-static"
                label="Write a story here"
                multiline
                rows={8}
                size="medium"
                className="textarea"
                variant="outlined"
                onChange={(e)=>setDesc(e.target.value)}
                />
                </div>
                <Button type='submit' variant="contained" className='submit-btn' color='primary'>Publish</Button>
             </form>
        </div>
    )
}

export default WritePost;