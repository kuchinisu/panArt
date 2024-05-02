import { useState, useEffect } from "react";

import { connect, useDispatch } from "react-redux";
import { signup } from "../redux/actions/auth";

const SignupV = () => {


    const [accountCreated, setAccountCreate] = useState(false);

    const [formData, setFormData] = useState({ 
        'email':'',
        'nombre':'',
        'password':'',
        're_password':''
    })

    const {
        email,
        nombre,
        password,
        re_password
    } = formData

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value})
    const dispatch = useDispatch();
    const onSubmit = e => {
        e.preventDefault();
        dispatch(signup(
            email,
            nombre,
            password,
            re_password
        ));
        
    }

    return (
        <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold">Registrate</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form onSubmit={e=>onSubmit(e)} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    value={email}
                    onChange={e=>onChange(e)}
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
                  Nombre
                </label>
                <div className="mt-1">
                  <input
                    id="nombre"
                    name="nombre"
                    value={nombre}
                    onChange={e=>onChange(e)}
                    type="text"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    value={password}
                    onChange={e=>onChange(e)}
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="re_password" className="block text-sm font-medium text-gray-700">
                  re Password
                </label>
                <div className="mt-1">
                  <input
                    id="re_password"
                    name="re_password"
                    value={re_password}
                    onChange={e=>onChange(e)}
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
              </div>

              <div>
                <button onClick={()=>document.getElementById('my_modal_email').showModal()}
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Registrarme
                </button>
              </div>

              <dialog id="my_modal_email" className="modal">
                <div className="modal-box">
                  <h3 className="font-bold text-lg">Verificate!</h3>
                  <p className="py-4">revisa tu e-mail para la verificación</p>
                </div>
                <form method="dialog" className="modal-backdrop">
                  <button>close</button>
                </form>
              </dialog>

            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or continue with</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {
  signup
}) (SignupV)
