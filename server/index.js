import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';

const app = express();

// use localhoast5000/posts as a prefix for routing
// http://localhost:5000/posts


// set file size limit on what users can post
app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());
app.use('/posts', postRoutes);

const CONNECTION_URL = "mongodb+srv://jgreeneJS:ripFF7hdremake@cluster0.b0rzq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

// connect to MongoDB using mongoose
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, () => console.log('Server running')))
.catch((error) => console.log(error.message));

//mongoose.set('useFindAndModify', false);

// type npm start inside server folder