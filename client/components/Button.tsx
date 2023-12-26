import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

// type for AppProps
interface AppProps {
    sendToDatabase: any;
  } 

const Button: React.FC<AppProps> = ({ sendToDatabase }) => {

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

}

export default Button;