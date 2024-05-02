import {
    GET_PAGINA_DE_USUARIO_SUCCESS,
    GET_PAGINA_DE_USUARIO_FAIL,
    GET_GALERIA_DE_USUARIO_SUCCESS,
    GET_GALERIA_DE_USUARIO_FAIL,
    GET_MI_PAGINA_SUCCESS,
    GET_MI_PAGINA_FAIL,
    GET_POST_PREVIEW_SUCCESS,
    GET_POST_PREVIEW_FAIL,
} from './types';
 
import axios from 'axios';

export const get_pagina_de_usuario = (matricula, p) => async dispatch => {
        
        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                
            }
        };

        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/blog/usuario/${matricula}/?p=${p}`, config);
            console.log(`${process.env.REACT_APP_API_URL}/blog/usuario/${matricula}/?p=${p}`)

            if (res.status === 200) {
                dispatch({
                    type: GET_PAGINA_DE_USUARIO_SUCCESS,
                    payload: res.data
                }); 
            } else {
                dispatch({
                    type: GET_PAGINA_DE_USUARIO_FAIL
                });
            }
            
        } catch (err) {
            dispatch({
                type: GET_PAGINA_DE_USUARIO_FAIL
            })
        

    }
};


export const get_galeria_de_usuario_preview = (slug) => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    };

    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/blog/usuario/preview/${slug}/`,  config);
        console.log(`${process.env.REACT_APP_API_URL}/blog/usuario/preview/${slug}/`)

        if (res.status === 200) {
            dispatch({
                type: GET_POST_PREVIEW_SUCCESS,
                payload: res.data
            }); 
        } else {
            console.log('error en galería preview', res.status)
            dispatch({
                type: GET_POST_PREVIEW_FAIL
            });
        }
        
    } catch (err) {
        dispatch({
            type: GET_POST_PREVIEW_FAIL
        });

        console.log('error en galería preview', err);
    }
};


export const get_galeria_de_usuario = (matricula,p) => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    };

    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/blog/usuario/${matricula}/galeria/?p=${p}`,  config);
        console.log(`${process.env.REACT_APP_API_URL}/blog/usuario/${matricula}/`)

        if (res.status === 200) {
            dispatch({
                type: GET_GALERIA_DE_USUARIO_SUCCESS,
                payload: res.data
            }); 
        } else {
            dispatch({
                type: GET_GALERIA_DE_USUARIO_FAIL
            });
        }
        
    } catch (err) {
        dispatch({
            type: GET_GALERIA_DE_USUARIO_FAIL
        })
    

}
};


export const get_mi_pagina = () => async dispatch => {
    if(localStorage.getItem('access')){
        const config = {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `JWT ${localStorage.getItem('access')}`
                }
            };
            console.log("se va a intnetar de obtener mi pagina")
            try {
                console.log("intentando de obtener mi pagina")
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/usuario/mi_cuenta/`, config);
                console.log(`${process.env.REACT_APP_API_URL}/usuario/mi_cuenta/`)

                if (res.status === 200) {
                    dispatch({
                        type: GET_MI_PAGINA_SUCCESS,
                        payload: res.data
                    }); 
                    console.log("intento exitoso")
                } else {
                    dispatch({
                        type: GET_MI_PAGINA_FAIL
                    });
                    console.log("intento exitoso pero estatus no esperado")
                }
                
            } catch (err) {
                dispatch({
                    type: GET_MI_PAGINA_FAIL
                })
                console.log("intento faillido", err)
        }

    }
    
};

