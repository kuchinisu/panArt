import  { combineReducers } from 'redux';
import Auth from './auth' ;
import blog from './blog';
import paginaUsuario from './usuario';
import foro from './foro';
import discusion from './discusion';

export default combineReducers({
    Auth,
    blog,
    paginaUsuario,
    foro,
    discusion,
    
})