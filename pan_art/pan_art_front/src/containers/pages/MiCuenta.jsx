import { connect, useDispatch } from 'react-redux';
import Layout from '../../layouts/Layout';
import { get_comentarios } from "../../redux/actions/blog";
import { useEffect } from 'react';
import { get_mi_pagina } from '../../redux/actions/usuario';


function MiCuenta ({mi_pagina}) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(get_mi_pagina()); 
      }, [dispatch]);
    
 
    const actualizarFoto = () => {
        const foto = document.getElementById('foto_perfil').files[0];
 
        const formData = new FormData();
        formData.append('foto', foto);

        fetch('http://127.0.0.1:8000/usuario/actualizar_foto/', {
            method: 'POST',
            body: formData,
            headers: {
                
                'Authorization': `JWT ${localStorage.getItem('access')}`
            }
              })
              .then(response => response.json())
              .then(data => {
                  console.log('Respuesta del servidor:', data);
              })
              .catch(error => {
                  console.error('Error al realizar la solicitud:', error);
              });  
    }

    return(
        <>
           
            <Layout> 
                <div data-theme='luxury'>
                {mi_pagina ? (
                <div className="flex justify-center">
                    <div name="pagina_de_usuario" className="">
                        <div name="navbar_usuario">
                            <div className="w-full" name="banner">
                                <img
                                    className=""
                                    src={`http://127.0.0.1:8000/${mi_pagina.banner}`}
                                    alt="Banner"
                                />
                            </div>

                            <div className="bg-primary-content" name="nav">

                                <div className="flex items-center space-x-8">
                                    <div className="flex items-center space-x-8">
                                    <div className="avatar">
                                        <div className="w-16 h-16 rounded-full overflow-hidden ring-2 ring-primary ring-offset-base-100 ring-offset-2">
                                        <img
                                            src={`http://127.0.0.1:8000/${mi_pagina.foto}`}
                                            alt="Avatar"
                                            className="w-full h-full object-cover"
                                        />
                                        </div>
                                        <button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>cambiar foto</button>

                                    </div>
                                    
                                    <div>
                                        <div className="text-lg font-semibold">{mi_pagina.nombre}</div>
                                        <div className="text-sm text-gray-500 flex items-center">
                                            <span className="font-bold mr-1">Seguidores:</span>
                                            <span>100</span>
                                        </div>
                                    </div>
                                    <div className='divider divider-horizontal divider-accent'/>
                                        <div className="mx-20">Galería</div>
                                        <div>Discusión</div>
                                        <div>Seguidos</div>
                                    </div>
                                </div>
                            </div>

                            <div name="contenido">
                                <div className="mt-5" name="reciente">
                                    <h className="font-bold text-accent-content mt-10">Reciente</h>
                                </div>
                                <div className="divider" />
                                <div name="reciente">
                                    <dialog id="my_modal_1" className="modal">
                                        <div className="modal-box">
                                            <h3 className="font-bold text-lg">Hello!</h3>
                                            <p className="py-4">Press ESC key or click the button below to close</p>
                                            <div className="modal-action">foto_perfil
                                            <label className="form-control w-full max-w-xs">
                                                <div className="label">
                                                    <span className="label-text">Pick a file</span>
                                                    <span className="label-text-alt">Alt label</span>
                                                </div>
                                                <input id='foto_perfil' type="file" className="file-input file-input-bordered w-full max-w-xs" />
                                                <div className="label">
                                                    <span className="label-text-alt">Alt label</span>
                                                    <span className="label-text-alt">Alt label</span>
                                                </div>
                                                </label>
                                            <form method="dialog">
                                                <button onClick={actualizarFoto} className="btn">subir</button>
                                            </form>
                                            </div>
                                        </div>
                                    </dialog>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            ) : (
                <div>

                </div>
            )}
               </div>  
            </Layout>
            
        </>
    )
}

const mapStateToProps = state =>({
    mi_pagina: state.paginaUsuario.mi_pagina
})

export default connect(mapStateToProps,{
    
})(MiCuenta)
