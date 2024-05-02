import axios from 'axios';

import {
    GET_FORO_SUCCESS,
    GET_FORO_FAIL,
    GET_HILO_SUCCESS,
    GET_HILO_FAIL,

} from './types';

export const get_foro = () => async dispatch => {
        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        };

        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/foro/hilos/`,  config);
            
            if (res.status === 200) {
                dispatch({
                    type: GET_FORO_SUCCESS,
                    payload: res.data
                }); 
            } else {
                dispatch({
                    type: GET_FORO_FAIL
                });
            }
            
        } catch (err) {
            dispatch({
                type: GET_FORO_FAIL
            })
        
  
    }
};

export const get_hilo = (slug) => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    };

    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/foro/respuestas/${slug}/`,  config);
        
        if (res.status === 200) {
            dispatch({
                type: GET_HILO_SUCCESS,
                payload: res.data
            }); 
        } else {
            dispatch({
                type: GET_HILO_FAIL
            });
        }
        
    } catch (err) {
        dispatch({
            type: GET_HILO_FAIL
        })
    

}
};


