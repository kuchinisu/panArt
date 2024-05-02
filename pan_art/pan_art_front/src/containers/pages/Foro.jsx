import { useDispatch, connect } from 'react-redux';
import Layout from '../../layouts/Layout';
import { get_foro } from '../../redux/actions/foro';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Foro ({foro}) {
    const dispatch = useDispatch();
    useEffect(() =>{
        dispatch(get_foro())
    },[dispatch]);

    const publicarHilo = () => {
    const texto = document.getElementById('texto_del_hilo').value;
    const titulo = document.getElementById('titulo_del_hilo').value;
    const tema = document.getElementById('tema_del_hilo').value;
    
    const formData = new FormData();
    formData.append("texto", texto);
    formData.append("titulo", titulo);
    formData.append("tema", tema);

    fetch('http://127.0.0.1:8000/foro/crear_hilo/', {
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

    const modalHilo = (
        <>
    <div>
        <dialog id="my_modal_hilo" className="modal">
            <div className="modal-box w-11/12 max-w-5xl bg-base-300">
                <h3 className="font-bold text-lg">Hello!</h3>
                <input type="text" id='titulo_del_hilo' placeholder="titulo" className="input input-bordered input-success w-full max-w-xs" />
                <input type="text" id='tema_del_hilo' placeholder="tema" className="input input-bordered input-success w-full max-w-xs" />
                <textarea id='texto_del_hilo' className="textarea textarea-success w-1/2 p-10" placeholder="Bio"></textarea>
                <div className="modal-action">
                                                    
                    <form method="dialog">
                        <button onClick={publicarHilo} className="btn">publicar</button>
                    </form>
                </div>
            </div>
        </dialog>
    </div>
        </>
    ) 


    return(
        <>
            <div data-theme="luxury">
                <Layout>
                    <div>
                        {foro ? (
                            
                            <div >
                                <div className='divider divider-warning'>hilos</div>
                                <div className='flex items-end'>
                                    <div className='flex-grow'></div>
                                    <div className="btn rounded-md bg-neutral px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-error-content focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={()=>document.getElementById('my_modal_hilo').showModal()}>
                                        crear hilo
                                    </div>
                                    {modalHilo}
                                </div>

                                <div className='ml-10 justify-center items-center'>
                                <ul role="list" className="divide-y divide-gray-100">
                                    
                                    {foro.map((hilo) => (
                                        <li key={hilo.email} className="flex justify-between gap-x-6 py-5">
                                        <div className="flex min-w-0 gap-x-4">
                                            <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={`http://127.0.0.1:8000/${hilo.foto_de_usuario}`}/>
                                            <div className="min-w-0 flex-auto">
                                            <Link to={`hilo/${hilo.slug}`}> 
                                                <p className="text-sm font-semibold leading-6 text-neutral-content">{hilo.titulo}</p>
                                                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{hilo.contenido}</p>
                                            </Link>
                                            </div>
                                        </div>
                                        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                                            <p className="text-sm leading-6 text-gray-900">{hilo.role}</p>
                                            {hilo.lastSeen ? (
                                            <p className="mt-1 text-xs leading-5 text-gray-500">
                                                Last seen <time dateTime={hilo.lastSeenDateTime}>{hilo.lastSeen}</time>
                                            </p>
                                            ) : (
                                            <div className="mt-1 flex items-center gap-x-1.5">
                                                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                                                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                                </div>
                                                <p className="text-xs leading-5 text-gray-500">Online</p>
                                            </div>
                                            )}
                                        </div>
                                        <div className='divider mt-5 mb-5'></div>
                                        </li>
                                    ))}
                                </ul>
                                </div>

                            </div>
                        ):(
                            <div>
                                <main className="grid min-h-full bg-warning-content place-items-center px-6 py-24 sm:py-32 lg:px-8">
                                    <div className="text-center">
                                    <p className="text-base font-semibold text-error">404</p>
                                    <h1 className="mt-4 text-3xl font-bold tracking-tight text-warning sm:text-5xl">Sin contenido</h1>
                                    <p className="mt-6 text-base leading-7">no hay hilos para mostrar.</p>
                                    <div className="mt-10 flex items-center justify-center gap-x-6">
                                        <Link
                                        to={'/'}
                                        className="rounded-md bg-error px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-error-content focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        >
                                        Volver
                                        </Link>

                                        <div className="btn rounded-md bg-neutral-content px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-error-content focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={()=>document.getElementById('my_modal_hilo').showModal()}>   
                                            escribir un hilo
                                        </div>

                                            <dialog id="my_modal_hilo" className="modal">
                                                <div className="modal-box w-11/12 max-w-5xl bg-base-300">
                                                    <h3 className="font-bold text-lg">Hello!</h3>
                                                    <input type="text" id='titulo_del_hilo' placeholder="titulo" className="input input-bordered input-success w-full max-w-xs" />
                                                    <input type="text" id='tema_del_hilo' placeholder="tema" className="input input-bordered input-success w-full max-w-xs" />
                                                    <textarea id='texto_del_hilo' className="textarea textarea-success w-1/2 p-10" placeholder="Bio"></textarea>
                                                    <div className="modal-action">
                                                    
                                                    <form method="dialog">
                                                        <button onClick={publicarHilo} className="btn">publicar</button>
                                                    </form>
                                                    </div>
                                                </div>
                                            </dialog>
                                        
                                    </div>
                                    </div>
                                </main>
                            </div>
                        )}

                    </div>
                </Layout>
            </div>
            
        </>
    )
}

const mapStateToProps = state => ({
    foro: state.foro.hilos
})

export default connect(mapStateToProps, {

})(Foro)