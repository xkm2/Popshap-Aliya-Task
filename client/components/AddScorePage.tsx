import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom'
import { CollectionReference, addDoc } from 'firebase/firestore';


// type for AppProps
interface AppProps {
  colRef: CollectionReference;
} 

const AddScorePage: React.FC<AppProps> = ({ colRef }) => { 
  //state
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [score, setScore] = useState<any>();
  const navigate = useNavigate();
  
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
  //submit function
  function sendToDatabase(event: React.FormEvent<HTMLFormElement>){
    event.preventDefault();
    
    console.log("sending to database!")
    addDoc(colRef, { firstName, lastName, score: Number(score)});
    navigate('/scores')

  }

  return (
  
      <div className="page-center">
        <div className="big addScore-headline">Add a<br/>Score.</div>
        <form className="form" onSubmit={sendToDatabase}>
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
          
          <div className="center-button">
            <button className="button">Submit</button>
          </div>
          
        </form>
      </div>
      
  )
};

export default AddScorePage;