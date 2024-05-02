import { useDispatch, connect } from 'react-redux';
import Layout from '../../layouts/Layout';
import { get_hilo } from '../../redux/actions/foro';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

function Hilo({hilo}) {

    const params = useParams();

    const slug = params.slug;

    const dispatch = useDispatch();
    useEffect(() =>{
        dispatch(get_hilo(slug));
    },[dispatch]);

    return(
        <>  
            <Layout>
                <div>
                    {hilo ? (
                    <div>
                        {hilo.map((respuestas) => 
                        <div>
                            {respuestas.texto}
                        </div>
                    )}
                    </div>
                ):(
                    <div>
                        aún no hay respuestas
                    </div>
                )}
                </div>
            </Layout>
        </>
    );
};

const mapStateToProps = state => ({
    hilo: state.foro.hilo
})

export default connect(mapStateToProps, {

})(Hilo)