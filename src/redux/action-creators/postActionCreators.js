import {
    START_POSTS_LOADING,
    SET_POSTS,
    STOP_POSTS_LOADING,
    SET_POSTS_ERROR
} from "../action-types";


export const startPostLoading = () => ({type:START_POSTS_LOADING});
export const setPosts = (payload) => ({type:SET_POSTS, payload});
export const stopPostLoading = () => ({type:STOP_POSTS_LOADING});
export const setPostError = (payload) => ({type:SET_POSTS_ERROR,payload});
