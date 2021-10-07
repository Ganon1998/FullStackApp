import mongoose from 'mongoose';

// documents that describe what a post should look like on the website
const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
});

// convert schema into model
const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;