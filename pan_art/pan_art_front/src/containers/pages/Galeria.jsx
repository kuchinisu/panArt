import { connect, useDispatch } from "react-redux";
import { useEffect } from "react";
import { get_postsm, get_posts_paginado } from "../../redux/actions/blog";
import { Link, useParams } from "react-router-dom";
import Layout from "../../layouts/Layout";

function Galeria({list_post}) {
    const params = useParams();
    const p = params.pagina;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(get_posts_paginado(p)); 
      }, [dispatch, p]);
    
    return (
        <>
            <Layout>
                <div className="mt-5 mb-5"> 
                    {list_post ? (
                            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                            {list_post.map((post) => (
                                <div className="bg-base-300 rounded-lg p-5 shadow-lg" key={post.id}>
                                    <Link to={`/post/${post.slug}`} className="group">
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
                        
                            <div className="join flex justify-center mt-8">
                                <Link to={`/galeria/${parseInt(p) - 1}`} className="join-item">
                                    <button className="btn mr-4">«</button>
                                </Link>
                                <button className="join-item btn">Page {p}</button>
                                <Link to={`/galeria/${parseInt(p) + 1}`} className="join-item">
                                    <button className="btn ml-4">»</button>
                                </Link>
                            </div>
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
                        )
                    }
                </div>
            </Layout>

        </>
    )
};
const mapStateToProps = state => ({
    list_post: state.blog.list_posts
  });
  
export default connect(mapStateToProps,{
    
})(Galeria)
