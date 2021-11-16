import React, { useState, useEffect } from 'react';
import useStyles from './styles';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../actions/posts';



const Form = ({ currentId, setCurrentId }) => {

    const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);
    const dispatch = useDispatch();
    const classes = useStyles();
  
    useEffect(() => {
      if (post) setPostData(post);
    }, [post]);
  
    const clear = () => {
      setCurrentId(null);
      setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      if (currentId) {
        dispatch(updatePost(currentId, postData));
        
      } else {
        dispatch(createPost(postData));
      }
      clear();
    };


    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}> 
            <Typography variant="h6">{currentId ? 'Editing' : 'Creating'} a Memory</Typography>

            <TextField 
                name="creator" 
                variant="outlined" 
                label="Creator" 
                fullWidth value={postData.creator} 
                onChange={(event) => setPostData({ ...postData, creator: event.target.value })} // we are setting a state using an object, we are summoning the postdata. Also we are changing 1 property of the textfield while the rest persists
            />
            <TextField 
                name="title" 
                variant="outlined" 
                label="Title" 
                fullWidth value={postData.title} 
                onChange={(event) => setPostData({ ...postData, title: event.target.value })}
            />
            <TextField 
                name="message" 
                variant="outlined" 
                label="Message" 
                fullWidth value={postData.message} 
                onChange={(event) => setPostData({ ...postData, message: event.target.value })}
            />
            <TextField 
                name="tags" 
                variant="outlined" 
                label="Tags" 
                fullWidth value={postData.tags} 
                onChange={(event) => setPostData({ ...postData, tags: event.target.value })}
            />

            <div className={classes.fileInput}>
                <FileBase
                    type="file"
                    multiple={false}
                    onDone={({base64}) => setPostData({...postData, selectedFile: base64})} // the next line for button would take 100 lines to write in CSS but not with material UI
                />
            </div>

            <Button className={classes.buttonSubmit} variant="container" color="primary" size="large" type="submit" fullWidth>
                Submit 
            </Button>

            <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>
                Clear 
            </Button>

            </form>
        </Paper>
    );
}

export default Form;