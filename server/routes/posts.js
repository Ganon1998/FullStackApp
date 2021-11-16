import express from 'express';
import { getPosts, createPost, updatePost, deletePost } from '../controllers/posts.js';
const router = express.Router();

// when the site loads the home page, we can load a function from controllers folder 
router.get('/', getPosts);  // retreives posts from MongDB
router.post('/', createPost); // creates page to make a post
router.patch('/:id', updatePost)
router.delete('/:id', deletePost);

export default router;