import axios from 'axios';

const url = 'http://localhost:5000/posts';

// this function is used for fetching all posts from server at port 5000
// we need to have dispatchers and reducers to do this
export const fecthPosts = () => axios.get(url);

// handles posting
export const createPost = (newPost) => axios.post(url, newPost);