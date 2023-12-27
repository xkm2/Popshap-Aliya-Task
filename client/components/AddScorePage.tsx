import React, {useState} from 'react';

import { CollectionReference } from 'firebase/firestore';


// type for AppProps
interface AppProps {
  colRef: CollectionReference;
  inputHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  firstName: string;
  lastName: string;
  score: any;
} 

const AddScorePage: React.FC<AppProps> = ({ colRef,
  inputHandler,
  firstName,
  lastName,
  score}) => { 

  return (
  
      <div className="page-center">
        <div className="big addScore-headline">Add a<br/>Score.</div>
        <form className="form">
          <label htmlFor="firstName">First name<br/></label>
            <input type="text" id="firstName" className="inp1"
            value={firstName} required
            onChange={inputHandler}
            placeholder="Type here..."></input>
          
          <label htmlFor="lastName">Last name<br/></label>
            <input required type="text" id="lastName" className="inp2"
            value={lastName} onChange={inputHandler}
            placeholder="Type here..."></input>
          
          <label htmlFor="score">Score<br/></label>
            <input className="scoreInput inp3" type="text" 
            id="score" value={score}  required
            placeholder="0"
            pattern="[0-9]*"
            onInput={inputHandler}></input>
          
        </form>
      </div>
      
  )
};

export default AddScorePage;