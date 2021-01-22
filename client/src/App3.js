import React, { useEffect, useState } from "react";
import 'firebase/storage'
import { app } from "./base";

function App() {
  const [fileState, setFileState] = useState('') 
  
  const onFileChange =  async (e) => {
    const file = e.target.files[0];
    
    const storageRef = app.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file)
    setFileState(await fileRef.getDownloadURL())
  };

  const onSubmit = (e) => {
    e.preventDefault();
    }
   
  console.log(process.env.REACT_APP_FIREBASE_API_KEY)

  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="file" onChange={onFileChange} />
       
        <button>Submit</button>
      </form>
      <ul>
            <img src={fileState} alt={fileState}/>
      </ul>
    </>
  );
}

export default App;