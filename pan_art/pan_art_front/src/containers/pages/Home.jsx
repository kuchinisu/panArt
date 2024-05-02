import { connect } from "react-redux";
import Layout from "../../layouts/Layout";

import HomeV from "../../components/HomeV";
function Home() {
    return (
        <>
        <Layout>
            <HomeV/>
        </Layout>
            
        </>
    )
}


const mapStateToProps = state =>({

})

export default connect(mapStateToProps,{

})(Home)