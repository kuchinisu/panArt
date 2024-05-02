import { Link } from "react-router-dom";

export const SideBarPost = ({usuario, matricula, fotoDeUsuario, galeria_prev}) => {
    console.log(galeria_prev);
    return (
        
        <div className="bg-base-300">
            <div className="flex flex-col w-1/3 p-3 m-1 shadow-md rounded-md">
                <div className="flex text-sm flex-col w-full items-center">
                    {/* Row-1 wideLab TeamPlan text*/}
                    <div className="flex flex-row w-full mb-6 items-center justify-between">
                    <Link to={`../usuario/${matricula}`}>
                    <div className="flex items-center gap-2 flex-row">
                        <div className="rounded-md flex">
                        <div className="flex items-center gap-2 flex-row">
                        <div className="rounded-md flex w-[2.5rem] h-[2.5rem]">
                        <img
                            src={`http://127.0.0.1:8000/${fotoDeUsuario}`}
                            className="object-cover object-center rounded-md"
                        />
                        </div>
                        <div>
                        </div>
                    </div>
                        </div>
                        <div>
                        <h1 className="font-bold">{usuario}</h1>
                        </div>
                    </div></Link>

                    
                    </div>
                    <div className="flex flex-row mb-2 w-full items-center justify-between">
                    <div className="flex w-full p-1 rounded-md items-center flex-row">
                        <svg fill="none" viewBox="0 0 15 15" height="1.5em" width="1.5em">
                        <path
                            className="fill-gray-600"
                            fillRule="evenodd"
                            d="M7.754.82a.5.5 0 00-.508 0l-5.5 3.25a.5.5 0 000 .86l5.5 3.25a.5.5 0 00.508 0l5.5-3.25a.5.5 0 000-.86L7.754.82zM7.5 7.17L2.983 4.5 7.5 1.83l4.517 2.67L7.5 7.17zm-5.93.326a.5.5 0 01.684-.176l5.246 3.1 5.246-3.1a.5.5 0 11.508.86l-5.5 3.25a.5.5 0 01-.508 0l-5.5-3.25a.5.5 0 01-.177-.684zm0 3a.5.5 0 01.684-.177l5.246 3.1 5.246-3.1a.5.5 0 01.508.861l-5.5 3.25a.5.5 0 01-.508 0l-5.5-3.25a.5.5 0 01-.177-.684z"
                            clipRule="evenodd"
                        />
                        </svg>
                        <span className="w-full bg-inherit flex px-2 placeholder-gray-600">
                        Inbox
                        </span>
                        
                    </div>
                    </div>

                    {/* Row-4 Activity */}
                    <div className="flex flex-row mb-2 w-full items-center justify-between">
                    <div className="flex w-full p-1 rounded-md items-center flex-row">
                        <svg
                        viewBox="0 0 448 512"
                        className="fill-gray-600"
                        height="1.5em"
                        width="1.5em"
                        >
                        <path d="M256 32v17.88C328.5 61.39 384 124.2 384 200v33.4c0 45.4 15.5 89.5 43.8 125l14.9 18.6c5.8 7.2 6.9 17.1 2.9 25.4-4 8.3-12.4 13.6-21.6 13.6H24c-9.23 0-17.635-5.3-21.631-13.6A24.019 24.019 0 015.26 377l14.91-18.6C48.54 322.9 64 278.8 64 233.4V200c0-75.8 55.5-138.61 128-150.12V32c0-17.67 14.3-32 32-32s32 14.33 32 32zm-40 64c-57.4 0-104 46.6-104 104v33.4c0 47.9-13.88 94.6-39.69 134.6H375.7c-25.8-40-39.7-86.7-39.7-134.6V200c0-57.4-46.6-104-104-104h-16zm72 352c0 16.1-6.7 33.3-18.7 45.3S240.1 512 224 512c-17 0-33.3-6.7-45.3-18.7S160 464.1 160 448h128z" />
                        </svg>
                        <span className="w-full bg-inherit flex px-2 placeholder-gray-600">
                        Activity
                        </span>
                        
                    </div>
                    </div>

                    

                    {/* Row-6 Shared*/}
                    <div className="flex flex-row mt-2 w-full items-center justify-between">
                    <div className="flex w-full p-1 rounded-md items-center flex-row">
                        <span className="w-full text-xs bg-inherit flex px-2 placeholder-gray-600">
                        Shared
                        </span>
                        
                    </div>
                    </div>

                    {/* Row-7 Boost */}
                    <div className="flex flex-row mb-2 w-full items-center justify-between">
                    <div className="flex w-full p-1 rounded-md items-center flex-row">
                        <svg fill="none" viewBox="0 0 15 15" height="1.5em" width="1.5em">
                        <path
                            className="text fill-gray-600"
                            fillRule="evenodd"
                            d="M8.697.04a.5.5 0 01.296.542L8.09 6h4.41a.5.5 0 01.4.8l-6 8a.5.5 0 01-.893-.382L6.91 9H2.5a.5.5 0 01-.4-.8l6-8a.5.5 0 01.597-.16zM3.5 8h4a.5.5 0 01.493.582L7.33 12.56 11.5 7h-4a.5.5 0 01-.493-.582L7.67 2.44 3.5 8z"
                            clipRule="evenodd"
                        />
                        </svg>
                        <span className="w-full bg-inherit flex px-2 placeholder-gray-600">
                        Boosts
                        </span>
                    </div>
                    </div>

                    

                    {/* Row-9 Projects*/}
                    <div className="flex pb-1 flex-row w-full items-center justify-between">
                    <div className="flex w-full p-1 rounded-md items-center flex-row">
                        <span className="w-full text-xs bg-inherit text-gray-600 flex px-2 placeholder-gray-600">
                        Projects
                        </span>
                    </div>
                    </div>

                    {galeria_prev ? (
                    <div>
                        {galeria_prev.map((imagen) =>
                        
                            <div className="flex flex-row mb-2 w-full items-center justify-between">
                                <Link to={`/post/${imagen.slug}/`} className="join-item"> 
                                    <div className="bg-primary btn ">
                                        <img src={`http://127.0.0.1:8000/${imagen.imagen}`} style={{ maxWidth: '80px', maxHeight: '80px' }}></img>
                                    </div>
                                </Link>
                            </div>
                        
                        )}

                    </div>
                    ):(
                    <div>
                        f
                    </div>
                    )}

                    {/* Row-14 Settings */}
                    <div className="flex flex-row mb-1 w-full items-center justify-between">
                    <div className="flex w-full p-1 rounded-md items-center flex-row">
                        <svg
                        viewBox="0 0 24 24"
                        className=" fill-gray-600"
                        height="1.5em"
                        width="1.5em"
                        >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M3.34 17a10.018 10.018 0 01-.978-2.326 3 3 0 00.002-5.347A9.99 9.99 0 014.865 4.99a3 3 0 004.631-2.674 9.99 9.99 0 015.007.002 3 3 0 004.632 2.672A9.99 9.99 0 0120.66 7c.433.749.757 1.53.978 2.326a3 3 0 00-.002 5.347 9.99 9.99 0 01-2.501 4.337 3 3 0 00-4.631 2.674 9.99 9.99 0 01-5.007-.002 3 3 0 00-4.632-2.672A10.018 10.018 0 013.34 17zm5.66.196a4.993 4.993 0 012.25 2.77c.499.047 1 .048 1.499.001A4.993 4.993 0 0115 17.197a4.993 4.993 0 013.525-.565c.29-.408.54-.843.748-1.298A4.993 4.993 0 0118 12c0-1.26.47-2.437 1.273-3.334a8.126 8.126 0 00-.75-1.298A4.993 4.993 0 0115 6.804a4.993 4.993 0 01-2.25-2.77c-.499-.047-1-.048-1.499-.001A4.993 4.993 0 019 6.803a4.993 4.993 0 01-3.525.565 7.99 7.99 0 00-.748 1.298A4.993 4.993 0 016 12a4.99 4.99 0 01-1.273 3.334 8.126 8.126 0 00.75 1.298A4.993 4.993 0 019 17.196zM12 15a3 3 0 110-6 3 3 0 010 6zm0-2a1 1 0 100-2 1 1 0 000 2z" />
                        </svg>
                        <span className="w-full bg-inherit flex px-2 placeholder-gray-600">
                        Settings
                        </span>
                    </div>
                    </div>

                    {/* Row-14 Help */}
                    <div className="flex flex-row pb-6 border-b-[1.5px] w-full items-center justify-between">
                    <div className="flex w-full p-1 rounded-md items-center flex-row">
                        <svg
                        viewBox="0 0 512 512"
                        className="fill-gray-600"
                        height="1.5em"
                        width="1.5em"
                        >
                        <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={32}
                            d="M464 256 A208 208 0 0 1 256 464 A208 208 0 0 1 48 256 A208 208 0 0 1 464 256 z"
                        />
                        <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={32}
                            d="M336 256 A80 80 0 0 1 256 336 A80 80 0 0 1 176 256 A80 80 0 0 1 336 256 z"
                        />
                        <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={32}
                            d="M208 54l8 132M296 186l8-132M208 458l8-132M296 326l8 132M458 208l-132 8M326 296l132 8M54 208l132 8M186 296l-132 8"
                        />
                        </svg>
                        <span className="w-full bg-inherit text-gray-800 flex px-2 placeholder-gray-600">
                        Help
                        </span>
                    </div>
                    </div>

                    
                </div>
                </div>
        </div>
    )
}