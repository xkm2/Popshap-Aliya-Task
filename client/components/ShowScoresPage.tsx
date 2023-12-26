
import React, { useState, useEffect } from 'react';
import { CollectionReference, getDocs } from 'firebase/firestore';

//type for AppProps
interface AppProps {
  colRef: CollectionReference;
} 

interface Profile {
  id: string;
  firstName: string;
  score: number;
  lastName: string;
}


const ShowScoresPage: React.FC<AppProps> = ({ colRef }) => { 
  const [profiles, setProfiles] = useState<Profile[]>([]);

  //get profiles from database, find highest five scores
  useEffect(() => {
    async function fetchData() {
      const snapshot = await getDocs(colRef);
      const fetchedProfiles: any = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      console.log(fetchedProfiles)
      fetchedProfiles.sort((prof: { score: number; }, nextProf: { score: number; }) => nextProf.score - prof.score);
      
      setProfiles(fetchedProfiles.slice(0,5));
    }

    fetchData();
  }, []);

  //make array of article elements to display 5 profiles
 const profileArticles = [];

 for (let i = 0; i < profiles.length; i++){
  profileArticles.push(
    <article className={`articles color${i} rightLeftPadding`} key={profiles[i].id}>
      <p className="name">{`${i+1}. ${profiles[i].firstName} ${profiles[i].lastName}`}</p>
      <p className="score">{profiles[i].score}</p>
    </article>
  )
 }
 
  return (
    <>
      {/* Render your profiles here */}
      <div className="">
        <div className="big scores-headline rightLeftPadding">
          Current<br/>Scores.
        </div>
        {profileArticles}
        
          
      </div>
      
    </>
  );
};

export default ShowScoresPage;
 