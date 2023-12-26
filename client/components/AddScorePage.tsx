import React, {useState} from 'react';

import { CollectionReference } from 'firebase/firestore';


// type for AppProps
interface AppProps {
  colRef: CollectionReference;
  setFirstName: any;
  setLastName: any;
  setScore: any;
  firstName: any;
  lastName: any;
  score: any;
} 

const AddScorePage: React.FC<AppProps> = ({ colRef,
  setFirstName,
  setLastName,
  setScore,
  firstName,
  lastName,
  score}) => { 

  
 
  //resetting state once user makes input
  function inputHandler(event: React.ChangeEvent<HTMLInputElement>){
    event.preventDefault();

    switch(event.target.id){
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