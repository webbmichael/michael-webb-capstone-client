import React, { useCallback, useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { auth, db, logout } from '../../firebase/Firebase.js';
import './Dashboard.scss';
import Header from '../../Component/Header/Header.js';
import Button from '../../Component/Button/Button.js';
import {doc ,updateDoc} from "firebase/firestore";
function Dashboard() {
  // const [user, loading, error] = useAuthState(auth);
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState('');
  const [earthPic, setEarthPic]=useState(null)
  const history = useHistory();


  const fetchUserName = useCallback(async () => {
    try {
      const query = await db
        .collection('users')
        .where('uid', '==', user?.uid)
        .get();
      const data = await query.docs[0].data();
      setName(data.name)
      console.log(data.earthImage)
      console.log(data)
      if (data.earthImage) {
        console.log('FOUND IMG');
      }

      if (!data.earthImages) {
        console.log('NO IMAGE FOUND')
      }
    } catch (err) {
      console.error(err);
      alert('An error occured while fetching user data');
    }
  }, [user?.uid]);

  const saveToDb = useCallback(async () => {
    console.log('function running')

    try {
      const query = await db
        .collection('users')
        .where('uid', '==', user?.uid)
        .get();

      const firestoreUserRecordId = await query.docs[0].id;
      const data = await query.docs[0].data();
      data.image=earthPic
        
      const userRef = doc(db, "users", firestoreUserRecordId)
      await updateDoc(userRef, {earthImage: [earthPic, earthPic]})
    } catch (err) {
      console.error(err);
      alert('An error occured while fetching user data');
    }
  }, [user?.uid]);

  useEffect(() => {
    if (loading) return;
    if (!user) return history.replace('/login');
    if (!earthPic){
      setEarthPic(sessionStorage.getItem('earth'))
    }
    fetchUserName();
  }, [user, loading, history, fetchUserName]);

  return (
    <>
    <Header/>
    <div className="dashboard">
       <div className="dashboard__container">
        Logged in as
         <div>{name}</div>
         <div>{user?.email}</div>
         <button className="dashboard__btn" onClick={logout}>
          Logout
         </button>
         <p>save image</p>
         <Button  click={saveToDb}text={"save"}/>

         
       </div>
       {earthPic && <img className='mars__ePic' src={earthPic}></img>}

     </div>
     </>
  );
}
export default Dashboard;