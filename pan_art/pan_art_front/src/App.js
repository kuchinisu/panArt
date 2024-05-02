import store from "./store";

import { Provider } from "react-redux";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./containers/pages/Home";
import Login from './containers/auth/Login'
import Signup from "./containers/auth/Signup";
import Activate from "./containers/auth/Activate";
import Post from "./containers/pages/Post";
import Subir from "./containers/pages/Subir";
import Usuario from "./containers/pages/Usuario";
import GaleriaUsuario from "./containers/pages/GaleriaUsuario";
import Foro from "./containers/pages/Foro";
import Arte from "./containers/pages/Arte";
import MiCuenta from "./containers/pages/MiCuenta";
import Hilo from "./containers/pages/Hilo";
import Discusion from "./containers/pages/Discusion";
import Galeria from "./containers/pages/Galeria";
import GaleriaT from "./containers/pages/GaleriaT";


function App() {
  return (
    <div className="App">
     <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/galeria/:pagina" element={<Galeria/>}/>
          <Route path="/galeria/:tag/:pagina" element={<GaleriaT/>}/>
          <Route path="/foro" element={<Foro/>}/>
          <Route path="/arte" element={<Arte/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="foro/hilo/:slug" element={<Hilo/>}/>
          <Route path="/yo" element={<MiCuenta/>}/>
          <Route path="/activate/:uid/:token" element={<Activate/>}/>
          <Route path="/post/:slug/" element={<Post/>}/>
          <Route path="/subir" element={<Subir/>}/>
          <Route path="/usuario/:matricula" element={<Usuario/>}/>
          <Route path="usuario/:matricula/galeria/:pagina" element={<GaleriaUsuario/>}/>
          <Route path="/usuario/:matricula/discusion" element={<Discusion/>}/>
        </Routes>
      </Router>
    </Provider>
    </div>
  );
}

export default App;
