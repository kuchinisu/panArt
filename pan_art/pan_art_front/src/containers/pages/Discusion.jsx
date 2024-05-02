import { useEffect } from "react";
import { useDispatch, connect } from "react-redux";
import { useParams } from "react-router-dom";
import { get_discusion, get_respuestas_a_opinion } from "../../redux/actions/discusion";
import { get_pagina_de_usuario } from "../../redux/actions/usuario";
import { Link } from "react-router-dom";
import Layout from '../../layouts/Layout'
import RespuestasV from "../../components/RespuestasV";

function Discusion ({opiniones, usuario}) {
    const params = useParams();
    const matricula = params.matricula;

    let cambios = 0;
    
    const dispatch = useDispatch();
    useEffect(() => { 
        dispatch(get_discusion(matricula)) 
        dispatch(get_pagina_de_usuario(matricula)) 
      }, [dispatch]);

    const mandarOpinion = () => {
        const opinion = document.getElementById("texto_opinion").value;

        const formData = new FormData();
        formData.append("texto", opinion);
        formData.append("matricula", matricula);

        
        fetch('http://127.0.0.1:8000/discusion/mandar_opinion/', {
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
    };

    const ResponderOpinion = (slug,index) => {
        const texto = document.getElementById(`area_c_${index}`).value;
        const formData = new FormData();
        formData.append("texto", texto)
        fetch(`http://127.0.0.1:8000/discusion/responder_opinion/${slug}/`, {
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

    const like = (slug) => {
        const formData = new FormData()
        fetch(`http://127.0.0.1:8000/discusion/likear_opinion/${slug}/`, {
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
            cambios ++;
    }

    const dislike = (slug) => {
        const formData = new FormData()
        fetch(`http://127.0.0.1:8000/discusion/dislikear_opinion/${slug}/`, {
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
            cambios ++;
    }

    
    const formularioDeOpinion = (
        <>
            <div>
                <dialog id="my_modal_4" className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Click the button below to close</p>
                    <textarea className="textarea textarea-success" id="texto_opinion" placeholder="Bio"></textarea>
                    <div className="modal-action">
                    <form method="dialog">
                        <button className="btn" onClick={mandarOpinion}>Añadir</button>
                    </form>
                    </div>
                </div>
                </dialog>
            </div>
        </>
    )

    const areaCD = (index) =>{
        const areaC = document.getElementById(`area_c_${index}`);
        const botonDN = document.getElementById(`boton_c_${index}`);
        const botonEnviar = document.getElementById(`boton_s_${index}`)
        botonDN.style.display = "block";
        areaC.style.display = "block";
        botonEnviar.style.display = "block";
    };
    const areaCDN = (index) => {
        const areaC = document.getElementById(`area_c_${index}`);
        const botonDN = document.getElementById(`boton_c_${index}`);
        const botonEnviar = document.getElementById(`boton_s_${index}`);
        botonEnviar.style.display = "none";
        botonDN.style.display = "none";
        areaC.style.display = "none";
    };
    return (
        <>
            <div>
                <Layout>
                    <div>
                        {usuario ? (
                            <div className="flex justify-center">
                                <div name="pagina_de_usuario" className="">
                                    <div name="navbar_usuario">
                                        <div className="w-full" name="banner">
                                            <img
                                                className=""
                                                src={`http://127.0.0.1:8000/${usuario.banner}`}
                                                alt="Banner"
                                            />
                                        </div>
                                        <div className="bg-base-300" name="nav">
                                            <div className="flex items-center space-x-8">
                                                <div className="flex items-center space-x-8">
                                                    <div className="avatar">
                                                        <div className="w-16 h-16 rounded-full overflow-hidden ring-2 ring-primary ring-offset-base-100 ring-offset-2">
                                                            <img
                                                                src={`http://127.0.0.1:8000/${usuario.foto}`}
                                                                alt="Avatar"
                                                                className="w-full h-full object-cover"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="text-lg font-semibold">{usuario.nombre}</div>
                                                        <div className="text-sm text-gray-500 flex items-center">
                                                            <span className="font-bold mr-1">Seguidores:</span>
                                                            <span>100</span>
                                                        </div>
                                                    </div>
                                                    <div className='divider divider-horizontal divider-accent'/>
                                                    <div className="mx-20">
                                                        <Link to={`/usuario/${matricula}/galeria/1`}>
                                                            Galería
                                                        </Link>
                                                    </div>
                                                    <div className="text-error">
                                                            Discusión
                                                    </div>
                                                    <div>
                                                        Seguidos
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div name="contenido">
                                            <div className="mt-5" name="reciente">
                                                <h className="font-bold text-accent-content mt-10">Discucion</h>
                                            </div>
                                            <div className="divider"/>
                                            <div name="reciente">
                                                {opiniones ? (
                                                    <div>
                                                        <div className='divider divider-warning'>hilos</div>
                                                        <div className='flex items-end'>
                                                            <div className='flex-grow'></div>
                                                            <div className="btn rounded-md bg-accent px-3.5 py-2.5 text-sm text-neutral font-semibold shadow-sm hover:bg-neutral-content hover:text-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={()=>document.getElementById('my_modal_4').showModal()}>
                                                                añadir opinion
                                                            </div>
                                                            {formularioDeOpinion}
                                                        </div>

                                                        <div>
                                                            {opiniones.map((opinion, index) => (
                                                                <div className="mb-5">
                                                                    <div className="flex items-center mb-2">
                                                                    <div className="w-12 h-12 rounded-full overflow-hidden ring ring-primary ring-offset-base-100 ring-offset-2 mr-4">
                                                                        <img src={`http://127.0.0.1:8000/${opinion.foto_de_autor}`} alt="Avatar" className="w-full h-full object-cover" />
                                                                    </div>
                                                                    <div className="flex flex-col">
                                                                        <div className="text-sm">{opinion.autor}</div>
                                                                        <div className="flex items-center space-x-2">
                                                                            <div>{opinion.texto}</div>
                                                                            <div id={`slug_${opinion.slug}`} className="text-xs text-gray-400">{opinion.slug}</div>
                                                                        </div>
                                                                        <textarea id={`area_c_${index}`} style={{ "display": "none" }} placeholder="Bio" className="textarea textarea-bordered textarea-xs w-full max-w-xs mt-2"></textarea>
                                                                        <div className="flex space-x-2 mt-2">
                                                                            <button id={`boton_c_${index}`} style={{ "display": "none" }} className="text-xs text-gray-500 cursor-pointer focus:outline-none" onClick={() => areaCDN(index)}>Cancelar</button>
                                                                            <button id={`boton_s_${index}`} style={{ "display": "none" }} className="text-xs text-gray-500 cursor-pointer focus:outline-none" onClick={() => ResponderOpinion(opinion.slug, index)}>Enviar</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                    <div className="flex items-center mt-2 space-x-2">
                                                                        <div className="bg-base-200 flex items-center mt-2 space-x-2 p-1 rounded-lg font-bold">
                                                                            <button onClick={() => like(opinion.slug)} className="text-sm cursor-pointer focus:outline-none">Like</button>
                                                                            <div className="text-xs text-primary">{opinion.likes}</div>
                                                                            <button onClick={() => dislike(opinion.slug)}  className="text-sm cursor-pointer focus:outline-none">DisliKe</button>
                                                                            <div className="text-xs text-secondary">{opinion.dislikes}</div>
                                                                        </div>
                                                                        <button className="text-sm cursor-pointer focus:outline-none" onClick={() => areaCD(index)}>Responder</button>

                                                                    </div>                                                                    
                                                                 <div className="ml-8 mt-2">
                                                                        <div className="divider"></div>
                                                                        {opinion.respuestas.map((respuesta, idx) =>
                                                                            <div key={idx} className=" rounded p-2">
                                                                                <div className="flex items-center space-x-2">
                                                                                    <div className="w-8 h-8 rounded-full overflow-hidden ring ring-primary ring-offset-base-100 ring-offset-2">
                                                                                        <img src={`http://127.0.0.1:8000/${respuesta.foto_autor}`} alt="Avatar" className="w-full h-full object-cover" />
                                                                                    </div>
                                                                                    <div className="text-sm font-medium">{respuesta.autor}</div>
                                                                                </div>
                                                                                <div className="text-sm mt-1">{respuesta.texto}</div>
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                    <div className="divider"></div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                        
                                                    </div>
                                                ):(
                                                    <div>
                                                        <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
                                                            <div className="text-center">
                                                            <p className="text-base font-semibold"></p>
                                                            <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">Ninguna opinion aún</h1>
                                                            <p className="mt-6 text-base leading-7">Se el primero en dejar tu opinion.</p>
                                                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                                                <Link
                                                                to={'/'}
                                                                className="rounded-md bg-error px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-warning focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                                                    Volver
                                                                </Link>
                                                                <div className="text-sm font-semibold btn" onClick={()=>document.getElementById('my_modal_4').showModal()}>
                                                                    opinar <span aria-hidden="true">&rarr;</span>
                                                                    {formularioDeOpinion}
                                                                </div>
                                                            </div>
                                                            </div>
                                                        </main>
                                                    </div>
                                                    )}
                                            
                                            </div>
                                        </div>
                                    </div>                                                        
                                </div>
                            </div>

                        ):(
                            <div>
                                
                            </div>
                        )}
                    </div>
                </Layout>
            </div>
        </>
    );
};

const mapStateToProps = state => ({
    opiniones: state.discusion.opiniones,
    usuario: state.paginaUsuario.usuario,
});

export default connect(mapStateToProps, {

})(Discusion);