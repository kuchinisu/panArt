import { connect } from "react-redux";
import Layout from "../../layouts/Layout";
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

function Subir({isAuthenticated}) {

    const tags = [];

    const subirPost = () => {

        const titulo = document.getElementById("titulo").value;
        const descripcion = document.getElementById("descripcion").value;
        const imagen = document.getElementById("imagen").files[0];
        console.log(tags);
        const formData = new FormData();
        formData.append("titulo", titulo);
        formData.append("descripcion", descripcion);
        formData.append("imagen", imagen);
        
        formData.append("tags", tags);

        fetch('http://127.0.0.1:8000/blog/subir/', {
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

    const addTags = () => {
        const inputTags = document.getElementById("input_tags").value;
        const tagsV = document.getElementById("tags_v");
        tags.push(inputTags);

        if (tagsV.innerText){
            tagsV. innerText = inputTags + ' ' + tagsV.innerText;
        }else{
            tagsV.innerText = inputTags;
        };

        document.getElementById("input_tags").value = '';

    };
    return ( 
        <>
        <div> 
            <Layout>
                <div className="flex justify-center items-center bg-base-300 shadow-lg shadow-success">
                {isAuthenticated ? (
                    <div className="flex flex-center bg-base-100 shadow-lg shadow-success p-5 m-5 rounded-lg w-2/6">
                        <form>
                            <div className="space-y-12">
                                <div className="border-b border-gray-900/10 pb-12">
                                <h2 className="text-base font-semibold leading-7">Nuevo post</h2>
                                <p className="mt-1 text-sm leading-6">
                                    Comparte tu trabajo.
                                </p>

                                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                    <div className="sm:col-span-4">
                                    <label htmlFor="titulo" className="block text-sm font-medium leading-6">
                                        titulo
                                    </label>
                                    <div className="mt-2">
                                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        <input
                                            type="text"
                                            name="titulo"
                                            id="titulo"
                                            autoComplete="titulo"
                                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                            placeholder="titulo"
                                        />
                                        </div>
                                    </div>
                                    </div>

                                    <div className="col-span-full">
                                    <label htmlFor="descripcion" className="block text-sm font-medium leading-6">
                                        descripcion
                                    </label>
                                    <div className="mt-2">
                                        <textarea
                                        id="descripcion"
                                        name="descripcion"
                                        rows={3}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        defaultValue={''}
                                        />
                                    </div>
                                    </div>

                                    <div className="col-span-full">
                                    <label htmlFor="cover-photo" className="block text-sm font-medium leading-6">
                                        Imagen
                                    </label>
                                    <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                        <div className="text-center">
                                        <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                                        <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                            <label
                                            htmlFor="imagen"
                                            className="relative cursor-pointer rounded-md bg-white font-semibold focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                            >
                                            <span>Upload a file</span>
                                            <input id="imagen" name="imagen" type="file" className="sr-only" />
                                            </label>
                                            <p className="pl-1">or drag and drop</p>
                                        </div>
                                        <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div>
                                <div>
                                    tags
                                </div>
                                <div>
                                <input id="input_tags" type="text" placeholder="Tags" className="input input-bordered input-primary w-full max-w-xs" />
                                <div onClick={addTags} className="btn btn-primary m-5">añadir</div>
                                <div id="tags_v">

                                </div>
                                </div>
                            </div>
                            <div className="mt-6 flex items-center justify-end gap-x-6">
                                
                                <button
                                    type="button"
                                    onClick={subirPost}
                                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                subir
                                </button>
                            </div>
                        </form> 
                    </div>
                ):(
                    <div>

                    </div>
            )}
            </div>
            </Layout>  
        </div>          
        </>
    )
}


const mapStateToProps = state =>({
    isAuthenticated: state.Auth.isAuthenticated 
})

export default connect(mapStateToProps,{

})(Subir)