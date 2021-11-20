import Posts from "../components/Posts/Posts";
import { FETCH_ALL, CREATE, UPDATE, DELETE} from '../constants/actionType';

// thsi communicates with the back end based on action and state
export default (posts = [], action) => {
    switch(action.type){
        case FETCH_ALL:
            return action.payload;
        
        case CREATE:
            // send array of post and spread the post and add new post with payload
            return [...posts, action.payload];

        case UPDATE:
            // return updated array
            return posts.map((post) => (post._id === action.payload._id ? action.payload : post));

        case DELETE:
            return posts.filter((post) => post._id !== action.payload);

        default:
            return posts;
    }
}