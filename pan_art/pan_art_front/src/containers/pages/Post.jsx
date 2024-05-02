import { connect, useDispatch,  } from "react-redux";
import Layout from "../../layouts/Layout";
import { Link, useParams } from 'react-router-dom'
import { get_post } from "../../redux/actions/blog";
import { useEffect, useState } from "react";
import { SideBarPost } from "../../components/nav/SideBarPost";
import { get_comentarios } from "../../redux/actions/blog";
import { get_likes_y_dislikes } from "../../redux/actions/blog";
import { get_galeria_de_usuario_preview } from "../../redux/actions/usuario";

function Post({post, comentarios, isAuthenticated, likes_y_dislikes, galeria_prev}) {
    const params = useParams();
    const slug = params.slug;
    
    const dispatch = useDispatch();
    const [interaccion, setInteraccion] = useState(0);
    useEffect(() => {
        dispatch(get_post(slug)); 
        dispatch(get_comentarios(slug));
        dispatch(get_likes_y_dislikes(slug)); 
        dispatch(get_galeria_de_usuario_preview(slug)); 
      }, [dispatch, slug, interaccion]);

    const comentar = () => {
        const comentario = document.getElementById("inputComentario").value;
        const formData = new FormData();
        formData.append("contenido", comentario);
        document.getElementById("inputComentario").value = ''

        fetch(`http://127.0.0.1:8000/blog/add_comentario/${slug}/`, {
            method: 'POST',
            body: formData,
            headers: {
                
                'Authorization': `JWT ${localStorage.getItem('access')}`
            }
              })
              .then(response => response.json())
              .then(data => {
                  console.log('Respuesta del servidor:', data);
                  setInteraccion(interaccion + 1);
              })
              .catch(error => {
                  console.error('Error al realizar la solicitud:', error);
              });   
    }

    const likearPost = (slug) => {
        const formData = new FormData();
        
        fetch(`http://127.0.0.1:8000/blog/likear_post/${slug}/`, {
            method: 'POST',
            body: formData,
            headers: {
                
                'Authorization': `JWT ${localStorage.getItem('access')}`
            }
              })
              .then(response => response.json())
              .then(data => {
                  console.log('Respuesta del servidor:', data);
                  setInteraccion(interaccion + 1);
              })
              .catch(error => {
                  console.error('Error al realizar la solicitud:', error);
              }); 

        
    };
    const dislikearPost = (slug) => {
        const formData = new FormData()
        fetch(`http://127.0.0.1:8000/blog/dislikear_post/${slug}/`, {
            method: 'POST',
            body: formData,
            headers: {
                
                'Authorization': `JWT ${localStorage.getItem('access')}`
            }
              })
              .then(response => response.json())
              .then(data => {
                  console.log('Respuesta del servidor:', data);
                  setInteraccion(interaccion + 1);
              })
              .catch(error => {
                  console.error('Error al realizar la solicitud:', error);
              }); 
  
    };
    return (
        <>
            <Layout>
                <div>
                    {post && post[0] ? (

                        <div className="flex">
                            <SideBarPost usuario={post[0].usuario} matricula={post[0].matricula_usuario} fotoDeUsuario={post[0].foto_de_usuario} galeria_prev={galeria_prev}/>
                            <div className="flex-1 flex justify-center items-center bg-base-300">
                                <div className="container mx-auto p-20">
                                    
                                <div className="inline-block bg-base-100 p-5 rounded-lg">
                                    <h1 className="text-2xl font-bold mb-4">{post[0].titulo}</h1>
                                    <div>subido el: {post[0].subido}</div>
                                </div>


                                    <div className="divider"></div> 
                                    <div className="bg-base-200 rounded-lg pt-5 shadow-xl shadow-info-content">
                                    <div id="contenedor_post" className="w-8/12 mx-auto">
                                        <img
                                            src={`http://127.0.0.1:8000/${post[0].imagen}`}
                                            alt=""
                                            className="rounded-lg shadow-lg w-full h-auto bg-neutral p-2"
                                        />
                                        <div className="bg-base-100 p-2 rounded-lg inline-block">👁️ {post[0].vistas} </div>
                                        
                                        <div>
                                            <div onClick={() => likearPost(post[0].slug)} className="btn">💖 {likes_y_dislikes ? (<div>{likes_y_dislikes['likes']}</div>):(<div></div>)}</div>
                                            <div onClick={() => dislikearPost(post[0].slug)} className="btn">💤 {likes_y_dislikes ? (<div>{likes_y_dislikes['dislikes']}</div>):(<div></div>)}</div>
                                        </div>
                                        
                                        <div className="divider"></div> 

                                        <div className="bg-base-100 pb-2 rounded-lg">
                                            <p className="text-lg mt-4">{post[0].descripcion}</p>
                                        </div>
                                        
                                        <div className="">
                                            <div className="divider">Tags</div> 
                                            <div className="bg-neutral p-5 rounded-lg grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 mt-4">
                                                {post[0].tags.map((tag, index) => (
                                                    <div key={index} className="flex items-center gap-2 py-1 px-2 bg-error hover:bg-success rounded-md text-sm text-success-content font-bold hover:text-success-content">
                                                        <Link to={`/galeria/${tag.join('')}/1`}>
                                                            <span>{tag.join('')}</span>
                                                        </Link>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>


                                        <div className="mt-5 bg-neutral rounded-lg p-4 ">
                                            <h2 className="text-lg font-semibold mb-4 ">Comentarios</h2>
                                            <div className="divider mb-4"></div>
                                            <div className="bg-base-200 rounded-sm p-4">
                                                {isAuthenticated ? (
                                                    <div className="mb-4">
                                                        <textarea className="textarea textarea-bordered w-full max-w-xs" id='inputComentario' placeholder="Escribe tu comentario"></textarea>
                                                        <button onClick={comentar} className="btn btn-neutral mt-2 ml-5">Subir</button>
                                                    </div>
                                                ) : (
                                                    <div className="text-sm text-gray-500">Inicia sesión para dejar un comentario</div>
                                                )}
                                                {comentarios && comentarios.length > 0 ? (
                                                    <ul role="list" className="divide-y divide-gray-100">
                                                        {comentarios.map((comentario) => (
                                                            <li key={comentario.id} className="flex justify-between py-4 bg-base-100 p-5 rounded-lg">
                                                                <div className="flex gap-4 items-center">
                                                                    <img className="h-12 w-12 rounded-full bg-gray-50" src={`http://127.0.0.1:8000/${comentario.foto_de_autor}`} alt="" />
                                                                    <div>
                                                                        <p className="text-sm font-semibold">{comentario.autor}</p>
                                                                        <p className="mt-1 text-sm">{comentario.contenido}</p>
                                                                    </div>
                                                                </div>
                                                                <div className="text-sm text-gray-600 flex flex-col items-end">
                                                                    <p>{comentario.role}</p>
                                                                    {comentario.lastSeen ? (
                                                                        <p className="mt-1 text-xs">Última visita <time dateTime={comentario.lastSeenDateTime}>{comentario.lastSeen}</time></p>
                                                                    ) : (
                                                                        <div className="mt-1 flex items-center gap-x-1.5">
                                                                            <div className="h-2 w-2 rounded-full bg-green-500"></div>
                                                                            
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                ) : (
                                                    <div className="text-sm text-gray-500">Aún no hay comentarios</div>
                                                )}
                                            </div>
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
        </>
    )
}


const mapStateToProps = state =>({
    post: state.blog.post,
    comentarios: state.blog.comentarios,
    isAuthenticated: state.Auth.isAuthenticated,
    likes_y_dislikes: state.blog.likes_y_dislikes,
    galeria_prev: state.paginaUsuario.galeria_prev,
})

export default connect(mapStateToProps,{

})(Post)