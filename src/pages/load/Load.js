import React from 'react';
import PulseLoader from "react-spinners/PulseLoader";
import './load.css';
import logo from "../../assets/img/logo/logo-sgc.png";

const Load = () => {
    return (  
        <div className="page-load">
            <img src={logo} alt="logo" className="img-logo" />
            <div className="load-page-spinner">
                <PulseLoader color={'#fff'} loading={true} size={5} />
            </div>
        </div>
    )
}

export default Load;