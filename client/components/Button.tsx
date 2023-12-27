import React, {useState, memo} from 'react';
import { useNavigate } from 'react-router-dom';

// type for AppProps
interface AppProps {
    sendToDatabase: Function;
} 

const Button: React.FC<AppProps> = memo(({ sendToDatabase }) => {
    console.log('button is rendering again!');

    const [showScores, setShowScores] = useState(true);

    const navigate = useNavigate();

    //redirect to prev page
    function reDirect() {
    
        setShowScores(currentShowScores => {
            if (currentShowScores) {
                sendToDatabase();
                navigate("scores");
            } else {
                navigate("/");
            }
    
            return !currentShowScores;
        });
    }

    //popshap icon
    return (
        <>
            <div className="center-button">
                <button onClick={reDirect} className="button addScore-button">Add a Score</button>
            </div>
        </>

        
    )

});

export default Button;