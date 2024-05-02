import Navbar from "../components/nav/Navbar";
import { Footer } from "../components/nav/Footer";
import { check_auth, load_user, refresh } from "../redux/actions/auth";


import { connect,} from "react-redux";
import {ToastContainer} from 'react-toastify'
import { useEffect } from "react";

const Layout = (props) => {
    useEffect(()=>{
        props.refresh()
        props.check_auth()
        props.load_user()
        
   });

    return(
        <div data-theme='dim'>
            <Navbar/>
            <ToastContainer autoclose={5000}/>
            {props.children}
            <Footer/>

        </div>
    )
}

export default connect(null, {
    check_auth, 
    load_user, 
    refresh
}) (Layout)
