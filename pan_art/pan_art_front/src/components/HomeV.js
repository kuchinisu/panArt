import { connect, useDispatch } from "react-redux"//
import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import { get_posts } from '../redux/actions/blog'

function HomeV({list_post}){
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(get_posts()); 
      }, [dispatch]);
    
      return(

        <div>
            <div className="bg-base-100">

            <div className="flex justify-center items-center scale-150 p-5">
                <div className="">
                    <div className="badge badge-success mr-5">
                        <button>
                            <Link to={'/galeria/1'}>
                                Arte
                            </Link>
                        </button> 
                    </div>
                    
                    <div className="badge badge-warning">
                        <button>
                            <Link to={'/foro'}>
                                Foro
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    
                    <h className="font-bold text-4xl">Reciente</h>
                    <div className="divider"></div>
                    {list_post ? (
                        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                            {list_post.map((post) => (
                                <div className="bg-base-300 rounded-lg p-5 shadow-lg">
                                    <Link key={post.id} to={`post/${post.slug}`} className="group">
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
                            
                            <Link to={'/galeria/1'}>
                                <div className="text-error text-xl hover:bg-base-100 rounded-lg">
                                    ...Ver más
                                </div>
                            </Link>
                        </div>

                    ):
                    (
                        <div className="bg-primary-content grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                            
                            <div className="flex flex-col gap-4 w-52">
                                <div className="flex gap-4 items-center">
                                    <div className="skeleton w-16 h-16 rounded-full shrink-0"></div>
                                    <div className="flex flex-col gap-4">
                                    <div className="skeleton h-4 w-20"></div>
                                    <div className="skeleton h-4 w-28"></div>
                                    </div>
                                </div>
                                <div className="skeleton h-32 w-full"></div>
                            </div>
                            
                            <div className="flex flex-col gap-4 w-52">
                                <div className="flex gap-4 items-center">
                                    <div className="skeleton w-16 h-16 rounded-full shrink-0"></div>
                                    <div className="flex flex-col gap-4">
                                    <div className="skeleton h-4 w-20"></div>
                                    <div className="skeleton h-4 w-28"></div>
                                    </div>
                                </div>
                                <div className="skeleton h-32 w-full"></div>
                            </div>
                            
                            <div className="flex flex-col gap-4 w-52">
                                <div className="flex gap-4 items-center">
                                    <div className="skeleton w-16 h-16 rounded-full shrink-0"></div>
                                    <div className="flex flex-col gap-4">
                                    <div className="skeleton h-4 w-20"></div>
                                    <div className="skeleton h-4 w-28"></div>
                                    </div>
                                </div>
                                <div className="skeleton h-32 w-full"></div>
                            </div>
                            
                            <div className="flex flex-col gap-4 w-52">
                                <div className="flex gap-4 items-center">
                                    <div className="skeleton w-16 h-16 rounded-full shrink-0"></div>
                                    <div className="flex flex-col gap-4">
                                    <div className="skeleton h-4 w-20"></div>
                                    <div className="skeleton h-4 w-28"></div>
                                    </div>
                                </div>
                                <div className="skeleton h-32 w-full"></div>
                            </div>
                            
                            <div className="flex flex-col gap-4 w-52">
                                <div className="flex gap-4 items-center">
                                    <div className="skeleton w-16 h-16 rounded-full shrink-0"></div>
                                    <div className="flex flex-col gap-4">
                                    <div className="skeleton h-4 w-20"></div>
                                    <div className="skeleton h-4 w-28"></div>
                                    </div>
                                </div>
                                <div className="skeleton h-32 w-full"></div>
                            </div>
                            
                            <div className="flex flex-col gap-4 w-52">
                                <div className="flex gap-4 items-center">
                                    <div className="skeleton w-16 h-16 rounded-full shrink-0"></div>
                                    <div className="flex flex-col gap-4">
                                    <div className="skeleton h-4 w-20"></div>
                                    <div className="skeleton h-4 w-28"></div>
                                    </div>
                                </div>
                                <div className="skeleton h-32 w-full"></div>
                            </div>
                            
                            <div className="flex flex-col gap-4 w-52">
                                <div className="flex gap-4 items-center">
                                    <div className="skeleton w-16 h-16 rounded-full shrink-0"></div>
                                    <div className="flex flex-col gap-4">
                                    <div className="skeleton h-4 w-20"></div>
                                    <div className="skeleton h-4 w-28"></div>
                                    </div>
                                </div>
                                <div className="skeleton h-32 w-full"></div>
                            </div>

                        </div>
                    )}

                    
                </div>
                </div>
                
        </div>
    )
}

const mapStateToProps = state => ({
    list_post: state.blog.list_posts
  });
  
export default connect(mapStateToProps,{
    
})(HomeV)