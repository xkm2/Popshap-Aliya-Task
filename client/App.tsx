import React, { useState, useCallback } from 'react';
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
  //state
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [score, setScore] = useState<any>('');


  //submit function (sends user info to database) when user clicks button
  const sendToDatabase = useCallback(async () => {

    console.log("sending to database!", {

      firstName, lastName, score: Number(score)
    })
    await addDoc(colRef, { firstName, lastName, score: Number(score) });
    setFirstName('');
    setLastName('');
    setScore('');
  }, [firstName, lastName, score]);

  //resetting state once user makes input
  function inputHandler(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();

    console.log(event.target.id, event.target.value);

    switch (event.target.id) {
      case "firstName":
        setFirstName(event.target.value);
        break;
      case "lastName":
        setLastName(event.target.value);
        break;
      case "score":
        setScore(event.target.value);
        break;
    }
  }


  return (
    <BrowserRouter>
      <Title />
      <Routes>

        <Route path="/" element={<AddScorePage
          firstName={firstName}
          lastName={lastName}
          score={score}
          inputHandler={inputHandler}
          colRef={colRef} />} />
        <Route path="scores" element={<ShowScoresPage colRef={colRef} />} />

      </Routes>
      <Button sendToDatabase={sendToDatabase} />

    </BrowserRouter>

  )
}


export default App