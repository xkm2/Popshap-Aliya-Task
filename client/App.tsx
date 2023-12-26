import React, { useState } from 'react';
import AddScorePage from './components/AddScorePage';
import ShowScoresPage from './components/ShowScoresPage';
import Title from './components/Title';
import Button from './components/Button';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { CollectionReference, addDoc } from 'firebase/firestore';

// Define the type for AppProps
interface AppProps {
    colRef: CollectionReference;
}

const App: React.FC<AppProps> = ({ colRef }) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [score, setScore] = useState<any>('');


    //submit function
    function sendToDatabase(){
        
        console.log("sending to database!")
        addDoc(colRef, { firstName, lastName, score: Number(score)});
        setFirstName('');
        setLastName('');
        setScore('');
    }

    
    return (
        <BrowserRouter>
        <Title/>
         <Routes>
   
            <Route path="/" element={<AddScorePage 
            firstName={firstName}
            lastName={lastName}
            score={score}
            setFirstName={setFirstName}
            setLastName={setLastName}
            setScore={setScore}
            colRef={colRef}/>} />
            <Route path="scores" element={<ShowScoresPage colRef={colRef}/>} />
      
         </Routes>
         <Button sendToDatabase={sendToDatabase}/>
         
        </BrowserRouter>
      
    )
}


export default App