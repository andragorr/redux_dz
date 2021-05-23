import {
    START_COMMENTS_LOADING,
    STOP_COMMENTS_LOADING,
    SET_COMMENTS,
    SET_COMMENTS_ERROR
} from "../action-types";


export const startCommentsLoading = () => ({type:START_COMMENTS_LOADING});
export const setComments = (payload) => ({type:SET_COMMENTS, payload});
export const stopCommentsLoading = () => ({type:STOP_COMMENTS_LOADING});
export const setCommentsError = (payload) => ({type:SET_COMMENTS_ERROR,payload});
