import { connect, useDispatch } from "react-redux";
import { useEffect } from "react";
import { get_respuestas_a_opinion } from "../redux/actions/discusion";

function RespuestasV (slug) {

    const dispatch = useDispatch();
    useEffect(() => { 
        dispatch(get_respuestas_a_opinion(slug)) 
      }, [dispatch]);
    return (
        
        <div>
            {slug}
        </div>    
        
    )
};

const mapStateToProps = state => ({
});

export default connect(mapStateToProps, {

})(RespuestasV);