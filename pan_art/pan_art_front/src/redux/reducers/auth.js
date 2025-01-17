import {
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,

    ACTIVACION_SUCCESS,
    ACTIVACION_FAIL,

    SET_AUTH_LOADING,
    REMOVE_AUTH_LOADING,

    LOGIN_SUCCESS,
    LOGIN_FAIL,

    USER_LOADED_SUCCESS,
    USER_LOADED_FAIL,

    AUTHENTICATED_SUCCESS,
    AUTHENTICATED_FAIL,

    REFRESH_SUCCESS,
    REFRESH_FAIL,
    LOGOUT,
} from '../actions/types';

const initialState = {
    access: localStorage.getItem('access'),
    refresh: localStorage.getItem('refresh'),
    isAuthenticated: null,
    user: null,
    loading: false
};

export default function Auth(state=initialState, action) {
    const{type, payload} = action;

    switch(type) {
        case SET_AUTH_LOADING:
            return{
                ...state,
                loading:true
            }
        case REMOVE_AUTH_LOADING:
            return {
                ...state,
                loading: false,
            }
        case USER_LOADED_SUCCESS:
            return {
                ...state,
                user: payload
            }
        case USER_LOADED_FAIL:
            return {
                ...state,
                user: null
            }
        case AUTHENTICATED_SUCCESS:
            return {
                ...state,
                isAuthenticated: true
            }
        case AUTHENTICATED_FAIL:
            localStorage.removeItem('access')
            localStorage.removeItem('refresh')
            return {
                ...state,
                isAuthenticated: false,
                access: null,
                refresh: null
            }

        case LOGIN_SUCCESS:
            localStorage.setItem('access', payload.access);
            localStorage.setItem('refresh', payload.access);
            return {
                ...state,
                isAuthenticated: true,
                access: localStorage.getItem('access'),
                refresh: localStorage.getItem('refresh'),
            }
        case SIGNUP_SUCCESS:
        case SIGNUP_FAIL:
        case LOGIN_FAIL:
        case REFRESH_FAIL:
        case LOGOUT:
            localStorage.removeItem('access');
            localStorage.removeItem('refresh');

            return {
                ...state,
                access: null,
                refresh: null,
                isAuthenticated: false,
                user: null
            }

        case ACTIVACION_SUCCESS:
        case ACTIVACION_FAIL:
            return {
                ...state,
                access: null,
                refresh: null,
                isAuthenticated: false,
                user: null,
            }

        case REFRESH_SUCCESS:
            localStorage.setItem('access', payload.access)

            return {
                ...state,
                access: localStorage.getItem('access')
            }
        default:
            return state
    }
}
