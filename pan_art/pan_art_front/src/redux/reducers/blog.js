import {
    GET_POSTS_SUCCESS,
    GET_POSTS_FAIL,
    GET_POST_SUCCESS,
    GET_POST_FAIL,
    GET_COMENTARIOS_SUCCESS,
    GET_COMENTARIOS_FAIL,
    GET_POST_CON_TAG_SUCCESS,
    GET_POST_CON_TAG_FAIL,
    GET_LIKES_Y_DISLIKES_SUCCESS,
} from '../actions/types';

const None = null

const initialState = {
    list_posts: None,
    list_posts_t: None,
    post: None,
    comentarios: None,
    likes_y_dislikes: None,
};

export default function blog(state=initialState, action) {
    const{type, payload} = action;

    switch(type) {
        case GET_POSTS_SUCCESS:
            return{
                ...state,
                list_posts: payload.results.posts
            };
        case GET_POSTS_FAIL:
            return {
                ...state,
                list_posts: None
            }
        case GET_POST_SUCCESS:
            return {
                ...state,
                post: payload.results.post
            }
        case GET_COMENTARIOS_SUCCESS:
            return {
                ...state,
                comentarios: payload.results.comentarios
            }
        case GET_COMENTARIOS_FAIL:
            return {
                ...state,
                comentarios: None
            }
        case GET_POST_FAIL:
            return {
                ...state,
                post: None

            }
        case GET_POST_CON_TAG_SUCCESS:
            return {
                ...state,
                list_posts_t: payload.results.posts_t,
            }
        case GET_POST_CON_TAG_SUCCESS:
            return {
                ...state,
                list_posts_t: None,
            }
        case GET_LIKES_Y_DISLIKES_SUCCESS:
            return {
                ...state,
                likes_y_dislikes: payload.likes_y_dislikes
            }
        default:
            return state
    }
};
