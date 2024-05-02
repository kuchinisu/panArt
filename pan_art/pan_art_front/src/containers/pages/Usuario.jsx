import { connect, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { get_pagina_de_usuario } from '../../redux/actions/usuario';
import { Link } from 'react-router-dom';
import Layout from '../../layouts/Layout';
 

function Usuario ({blog_list, usuario}) {
    const params = useParams()
    const matricula = params.matricula
    

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(get_pagina_de_usuario(matricula, 1)); 
      }, [dispatch]);
    
    return(
<div className="">
    <Layout>
        <div>
            {usuario ? (
                <div className="flex justify-center bg-base-300">
                    <div name="pagina_de_usuario" className="">
                        <div name="navbar_usuario">
                            <div className="w-full" name="banner">
                                <img
                                    className=""
                                    src={`http://127.0.0.1:8000/${usuario.banner}`}
                                    alt="Banner"
                                />
                            </div>

                            <div className="bg-neutral" name="nav">

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
                                    <div className='divider divider-horizontal divider-accent rounded-md '/>
                                        <div className="mx-20 hover:bg-base-100 p-5 rounded-md">
                                            <Link to={`galeria/1`}>
                                                Galería
                                            </Link>
                                        </div>
                                        <div className='hover:bg-base-100 p-5 rounded-md'>
                                            <Link to={'discusion'}>
                                                Discusión
                                            </Link>
                                        </div>
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
                                    {blog_list ? (
                                        <div>
                                            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 mb-10 bg-base-200 p-5 rounded-lg">
                                                {blog_list.map((post) => (

                                                    <div className="bg-base-100 rounded-lg p-5 shadow-lg shadow-accent-content">
                                                        <Link key={post.id} to={`/post/${post.slug}`} className="group">
                                                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                                                <img
                                                                src={`http://127.0.0.1:8000/${post.imagen}`}
                                                                alt={post.imageAlt}
                                                                className="h-full w-full object-cover object-center group-hover:opacity-75"
                                                                />
                                                            </div>
                                                            
                                                        </Link>
                                                        <h className="mt-4 font-bold">{post.titulo}</h>
                                                        <p className="mt-1 text-lg font-medium text-gray-900">{post.nombre}</p>
                                                    </div>
                                                ))}
                                                
                                            </div>
                                            <h className="font-bold text-error text-lg p-10">
                                                <Link to={`galeria/1`}>
                                                    ver más...
                                                </Link>
                                                
                                            </h>
                                            
                                            <div className='divider'/>
                                        </div>
                                        
                                    ):(
                                        <div>

                                        </div>
                                    )}
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
</div>

    )
}


const mapStateToProps = state => ({
    blog_list: state.paginaUsuario.list_posts,
    usuario: state.paginaUsuario.usuario
})

export default connect(mapStateToProps, {

})(Usuario)