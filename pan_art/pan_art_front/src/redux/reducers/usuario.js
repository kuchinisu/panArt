import {
    GET_PAGINA_DE_USUARIO_SUCCESS,
    GET_PAGINA_DE_USUARIO_FAIL,
    GET_GALERIA_DE_USUARIO_SUCCESS,
    GET_MI_PAGINA_SUCCESS,
    GET_MI_PAGINA_FAIL,
    GET_POST_PREVIEW_SUCCESS,
    GET_POST_PREVIEW_FAIL,
} from '../actions/types';

const None = null

const initialState = {
    list_posts: None,
    galeria: None,
    usuario: None,
    mi_pagina: None,
    galeria_prev: None,
};

export default function paginaUsuario(state=initialState, action) {
    const{type, payload} = action;

    switch(type) {
        case GET_MI_PAGINA_SUCCESS:
            return {
                ...state,
                mi_pagina: payload.mi_pagina
            }
        case GET_MI_PAGINA_FAIL:
            return {
                ...state,
                mi_pagina: None
            }
        case GET_PAGINA_DE_USUARIO_SUCCESS:
            return{
                ...state,
                list_posts: payload.results.posts,
                usuario: payload.results.usuario
            };
        case GET_GALERIA_DE_USUARIO_SUCCESS:
            return {
                ...state,
                galeria: payload.results.galeria,
                usuario: payload.results.usuario,
            }

        case GET_PAGINA_DE_USUARIO_FAIL:
            return {
                ...state,
                list_posts: None
            }
        case GET_POST_PREVIEW_SUCCESS:
            return {
                ...state,
                galeria_prev: payload.results.posts_preview
            }
        case GET_POST_PREVIEW_FAIL:
            return {
                ...state,
                galeria_prev: None,
            }
        
        default:
            return state
    }
};
