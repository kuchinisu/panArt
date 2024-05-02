import {
    GET_FORO_SUCCESS,
    GET_FORO_FAIL,
    GET_HILO_SUCCESS,
    GET_HILO_FAIL,
} from '../actions/types';

const None = null

const initialState = {
    hilos: None,
    hilo: None
};

export default function foro(state=initialState, action) {
    const{type, payload} = action;

    switch(type) {
        case GET_FORO_SUCCESS:
            return {
                ...state,
                hilos: payload.results.hilos,
            };
        case GET_FORO_FAIL:
            return {
                ...state,
                hilos: None
            };
        case GET_HILO_SUCCESS:
            return {
                ...state,
                hilo: payload.results.respuestas
            };
        case GET_HILO_FAIL:
            return {
                ...state,
                hilo: None,
            };

        default:
            return state
    }
    

};
