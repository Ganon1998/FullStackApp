import Posts from "../components/Posts/Posts";

// thsi communicates with the back end based on action and state
export default (posts = [], action) => {
    switch(action.type){
        case 'FETCH_ALL':
            return action.payload;
        
        case 'CREATE':
            // send array of post and spread the post and add new post with payload
            return [...posts, action.payload];

        default:
            return posts;
    }
}