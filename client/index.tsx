import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import '../style.scss';

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDycBvY6bk6cYU-p5JnubAkxwcFO5sqdWA",
    authDomain: "popshap-scores-task.firebaseapp.com",
    projectId: "popshap-scores-task",
    storageBucket: "popshap-scores-task.appspot.com",
    messagingSenderId: "959279272473",
    appId: "1:959279272473:web:0cf99ea72716a2706f9088",
    measurementId: "G-CKCX37NKP7"
};

initializeApp(firebaseConfig)

const db = getFirestore();

//collection reference
const colRef = collection(db, "Names_Scores");
console.log('colRef', colRef)

getDocs(colRef)
.then((snapshot) => {
    console.log(snapshot.docs);
    const profiles: { id: string; }[] = [];
    snapshot.docs.forEach((doc) => {
        profiles.push({ ...doc.data(), id: doc.id })
    })
    console.log(profiles);
})
.catch(() => {
    console.log("problem with retrieving snapshot")
})



ReactDOM.createRoot(document.getElementById('root')!).render(
    <App colRef={colRef}/>
);