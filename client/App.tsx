import React from 'react';
import AddScorePage from './components/AddScorePage';
import ShowScoresPage from './components/ShowScoresPage';
import Title from './components/Title';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CollectionReference } from 'firebase/firestore';

// Define the type for AppProps
interface AppProps {
    colRef: CollectionReference;
}

const App: React.FC<AppProps> = ({ colRef }) => {
    return (
        <BrowserRouter>
        <Title/>
         <Routes>
   
            <Route path="/" element={<AddScorePage colRef={colRef}/>} />
            <Route path="scores" element={<ShowScoresPage colRef={colRef}/>} />
      
         </Routes>
        </BrowserRouter>
      
    )
}


export default App