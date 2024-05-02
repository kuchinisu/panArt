import {
    GET_DISCUSION_SUCCESS,
    GET_DISCUSION_FAIL,

    GET_RESPUESTAS_DISCUCION_SUCCESS,
    GET_RESPUESTAS_DISCUCION_FAIL,
} from '../actions/types';


const None = null

const initialState = {
    opiniones: None,
    respuestas: None
};

export default function discusion(state=initialState, action) {
    const{type, payload} = action;

    switch(type) {
        case GET_DISCUSION_SUCCESS:
            return {
                ...state,
                opiniones: payload.results.opiniones,
            };
        case GET_DISCUSION_FAIL:
            return {
                ...state,
                opiniones: None,
            };
        case GET_RESPUESTAS_DISCUCION_SUCCESS:
            return {
                ...state,
                respuestas: payload.results.respuestas_a_opinion
            }
        case GET_RESPUESTAS_DISCUCION_FAIL:
            return {
                ...state,
                respuestas: None
            }
       
        default:
            return state
    };
    

};
