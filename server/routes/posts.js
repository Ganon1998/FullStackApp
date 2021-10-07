import express from 'express';
import { getPosts, createPost } from '../controllers/posts.js';
const router = express.Router();

// when the site loads the home page, we can load a function from controllers folder 
router.get('/', getPosts);
router.post('/', createPost);

export default router;