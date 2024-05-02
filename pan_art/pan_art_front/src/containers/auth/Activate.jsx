import ActivateV from "../../components/ActivateV";
import Layout from '../../layouts/Layout';
import { useParams } from "react-router-dom";

const Activate = () => {
    const params = useParams()
    const uid = params.uid;
    const token = params.token

    return(
        <>
        <Layout>
            <ActivateV uid={uid} token={token}/>
        </Layout>
        </>
    )
}

export default Activate