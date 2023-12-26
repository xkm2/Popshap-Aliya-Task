import React, {useState} from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const Title = () => {

    const navigate = useNavigate();

    //redirect to prev page
    function reDirect(){
    
        navigate("scores");

    }

    //popshap icon
    return (
        <>
            <div className="titleBar">

                <img className="img" src='images/logo.png'></img>
            </div>
            <Outlet />
        </>

        
    )

}

export default Title;