import * as api from '../api';

// create actions: functions that return actions
// asynchrnous function that uses another function
export const getPosts = () => async (dispatch) => {
    try{
        const { data } = await api.fecthPosts();
        dispatch({ type: 'FETCH_ALL', payload: data});
    }
    catch(error){
        console.log(error.message);
    }

    
}

export const createPost = (post) => async (dispatch) => {
    try {
        // tells front end to post the post
        const { data } = await api.createPost(post);

        // dispatches that command to the backend
        dispatch({ type: 'CREATE', payload: data});

    } catch (error) {
        console.log(error);
    }
}