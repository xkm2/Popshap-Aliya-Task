import React, {useState} from 'react';
import { Outlet } from 'react-router-dom';

const Title = () => {

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