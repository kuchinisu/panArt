import axios from 'axios';

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
    GET_LIKES_Y_DISLIKES_FAIL,

} from './types';

export const get_posts = () => async dispatch => {
        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        };

        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/blog/posts/`,  config);
            
            if (res.status === 200) {
                dispatch({
                    type: GET_POSTS_SUCCESS,
                    payload: res.data
                }); 
            } else {
                dispatch({
                    type: GET_POSTS_FAIL
                });
            }
            
        } catch (err) {
            dispatch({
                type: GET_POSTS_FAIL
            })
        
  
    }
};

export const get_posts_tags = (tag, p) => async dispatch => {
        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        };
        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/blog/posts/${tag}/`,  config);
            
            if (res.status === 200) {
                dispatch({
                    type: GET_POST_CON_TAG_SUCCESS,
                    payload: res.data
                }); 
            } else {
                dispatch({
                    type: GET_POST_CON_TAG_FAIL
                });
            }
            
        } catch (err) {
            dispatch({
                type: GET_POST_CON_TAG_FAIL
            })
        
  
    }
};

export const get_posts_paginado = (p) => async dispatch => {
        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        };

        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/blog/posts/?p=${p}`,  config);
            
            if (res.status === 200) {
                dispatch({
                    type: GET_POSTS_SUCCESS,
                    payload: res.data
                }); 
            } else {
                dispatch({
                    type: GET_POSTS_FAIL
                });
            }
            
        } catch (err) {
            dispatch({
                type: GET_POSTS_FAIL
            })
        
  
    }
};

export const get_comentarios = (slug) => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    };

    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/blog/comentarios/${slug}/`, config);
        
        if (res.status === 200) {
            dispatch({
                type: GET_COMENTARIOS_SUCCESS,
                payload: res.data
            }); 
        } else {
            dispatch({
                type: GET_COMENTARIOS_FAIL,
            });
        }
        
    } catch (err) {
        dispatch({
            type: GET_COMENTARIOS_FAIL,
        })
    

}
};


export const get_post = (slug) => async dispatch => {
    
    if(localStorage.getItem('access')){
        const config = {
            headers: {
                'Authorization': `JWT ${localStorage.getItem('access')}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        };

        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/blog/post/${slug}/`, config);
                
            if (res.status === 200) {
                dispatch({
                    type: GET_POST_SUCCESS,
                    payload: res.data
                }); 
            } else {
                dispatch({
                    type: GET_POST_FAIL
                });
            }
                
        } catch (err) {
            dispatch({
                type: GET_POST_FAIL
            });
        } 
    }
};

export const get_likes_y_dislikes = (slug) => async dispatch => {

        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        };

        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/blog/likes_y_dislikes_de_post/${slug}/`, config);
                
            if (res.status === 200) {
                dispatch({
                    type: GET_LIKES_Y_DISLIKES_SUCCESS,
                    payload: res.data
                }); 
            } else {
                dispatch({
                    type: GET_LIKES_Y_DISLIKES_FAIL
                });
            }
                
        } catch (err) {
            dispatch({
                type: GET_LIKES_Y_DISLIKES_FAIL
            });
            console.log('error en los likes y dislikes: ',err)
        } 
    
};

