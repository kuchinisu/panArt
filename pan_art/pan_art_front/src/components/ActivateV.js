import {useState, useEffect} from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';

import { activate } from '../redux/actions/auth';
import { Navigate } from 'react-router-dom';
import {RotatingTriangles} from 'react-loader-spinner';

const ActivateV = ({ uid, token }) => { 
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.Auth.loading);
    const activado = useSelector((state) => state.Auth.activado);

    useEffect(() => {
        if (activado && !loading) {
            window.alert("condicion si activado y !loading", activado);
            // Realizar la redirección aquí si la cuenta está activada y no hay carga
        }
    }, [activado, loading]);

    const activar_cuenta = () => {
        dispatch(activate(uid, token));
    };

    return (
        <div>
            <div className="max-w-7x1 mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3x1 mx-auto">
                    {loading ? (
                        <button className="btn btn-secondary mt-12">
                            Cargando
                        </button>
                    ) : (
                        <button
                            className="btn btn-secondary mt-12"
                            onClick={activar_cuenta}
                        >
                            Activar
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};
const mapsStateToProps = state => ({
    loading: state.Auth.loading
})

export default connect(mapsStateToProps,
    {
        activate
    }
    ) (ActivateV)
    