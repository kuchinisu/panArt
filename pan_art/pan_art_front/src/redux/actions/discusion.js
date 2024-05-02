import axios from 'axios';

import {
    GET_DISCUSION_SUCCESS,
    GET_DISCUSION_FAIL,

    GET_RESPUESTAS_DISCUCION_SUCCESS,
    GET_RESPUESTAS_DISCUCION_FAIL,
} from './types';

export const get_discusion = (matricula) => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    };

    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/discusion/usuario/${matricula}/`,  config);
        console.log("discusion",`${process.env.REACT_APP_API_URL}/discusion/usuario/${matricula}/`)
        if (res.status === 200) {
            dispatch({
                type: GET_DISCUSION_SUCCESS,
                payload: res.data
            }); 
            console.log("estatus 200 para obtener la discucion")
        } else {
            dispatch({
                type: GET_DISCUSION_FAIL
            });
            console.log("en obtener la discusión se obtubo el estatus: ", res.status)
        }
        
    } catch (err) {
        dispatch({
            type: GET_DISCUSION_FAIL
        });

        console.log("error con obtener la discusion", err)
    

}
};


export const get_respuestas_a_opinion = (slug) => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    };
  
    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/discusion/respuestas/${slug}/`,  config);
        console.log("discusion",`${process.env.REACT_APP_API_URL}/discusion/respuestas/${slug}/`)
        if (res.status === 200) {
            dispatch({
                type: GET_RESPUESTAS_DISCUCION_SUCCESS,
                payload: res.data
            }); 
            console.log("estatus 200 para obtener la discucion")
        } else {
            dispatch({
                type: GET_RESPUESTAS_DISCUCION_FAIL
            });
            console.log("en obtener la discusión se obtubo el estatus: ", res.status)
        }
        
    } catch (err) {
        dispatch({
            type: GET_RESPUESTAS_DISCUCION_FAIL
        });

        console.log("error con obtener la discusion", err)
    

}
};

