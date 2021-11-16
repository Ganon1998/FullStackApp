import axios from 'axios';

const url = 'http://localhost:5000/posts';

// this function is used for fetching all posts from server at port 5000
// we need to have dispatchers and reducers to do this
export const fecthPosts = () => axios.get(url);

// handles posting
export const createPost = (newPost) => axios.post(url, newPost);

// update post route: essentially at URL + UserID do "updatedPost" function inside ../actions/posts.js
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);

export const deletePost = (id) => axios.delete(`${url}/${id}`);