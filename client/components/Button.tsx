import React, {useState, memo} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

// type for AppProps
interface AppProps {
    sendToDatabase: Function;
} 

const Button: React.FC<AppProps> = memo(({ sendToDatabase }) => {

    
    console.log('button is rendering again!');

    const { pathname } = useLocation();
    console.log('location', location)

    const navigate = useNavigate();

    //redirect to prev page
    function reDirect() {

        if (pathname === '/') {
            sendToDatabase();
            navigate("scores");
        } else {
            navigate("/");
        }
    }

    //popshap icon
    return (
        <>
            <div className="center-button">
                <button onClick={reDirect} className="button addScore-button">{pathname === '/' ? 'Add a Score' : 'Submit'}</button>
            </div>
        </>

        
    )

});

export default Button;