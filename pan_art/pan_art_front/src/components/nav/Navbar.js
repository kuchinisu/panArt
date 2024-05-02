import { connect } from "react-redux";
import { logout } from '../../redux/actions/auth';
import {  Fragment, useState } from 'react';
import { Link } from "react-router-dom";


const Navbar = ({isAuthenticated,user ,logout}) => {

    const [redirect, setRedirect] = useState(false)

    const logoutHandler = () => {
      logout();
      setRedirect(true);
    }

    const authLinks = (
      <div>
        {user ? (
          <div>
                
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS Navbar component" src={`http://127.0.0.1:8000/${user.foto}`} />
            </div>
          </div>

          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <a className="justify-between">
                <Link to={'/yo'}>
                  Mi Perfil
                  <span className="badge">New</span>
                </Link>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a onClick={logoutHandler}>Logout</a></li>
          </ul>
        </div>
  
          </div>
        ):(
          <div>
          </div>
        )}
      </div>

      )

      const resList = (
        <Fragment>
          <div> 
            <div className="navbar-end">
              <Link to={'/signup'}>
                <a className="btn">Signup</a>
              </Link>
            </div>
            <div className="navbar-end">
              <Link to={'/login'}>
                <a className="btn">Login</a>
              </Link>
            </div>
          </div>
        </Fragment>
      )
    

    return (
        <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link to={'/'}>
            <a className="btn btn-ghost text-xl">panArt</a>
          </Link>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <div className="indicator bg-warning p-2 rounded-lg shadow-md shadow-warning-content">
                <img src={`http://127.0.0.1:8000/static/icons/subir-archivo.png`} className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"></img>
              </div>
            </div>
            <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
              <div className="card-body">
                
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    <Link to={'/subir'}> 
                      Subir Trabajo
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {
            isAuthenticated ? authLinks : resList
          }

        </div>
      </div>
    )
};


const mapStateToProps = state => ({
    isAuthenticated: state.Auth.isAuthenticated,
    user: state.Auth.user
});

export default connect(mapStateToProps, {
   logout
}) (Navbar)
