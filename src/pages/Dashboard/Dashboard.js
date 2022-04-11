import React, { useCallback, useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { auth, db, logout } from '../../firebase/Firebase.js';
import './Dashboard.scss';
import Header from '../../Component/Header/Header.js';
import Button from '../../Component/Button/Button.js';
import {doc ,updateDoc} from "firebase/firestore";
import PreviousImages from '../../Component/PreviousImages/PreviousImages.js';
function Dashboard() {
  // const [user, loading, error] = useAuthState(auth);
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState('');
  const [earthPic, setEarthPic]=useState(null)
  const [marsPic, setMarsPic]=useState(null)
  const [oldImages,setOldImages]=useState(null)
  const history = useHistory();


  const fetchUserName = useCallback(async () => {
    try {
      const query = await db
        .collection('users')
        .where('uid', '==', user?.uid)
        .get();
      const data = await query.docs[0].data();
      setName(data.name)
      setOldImages(data.earthImage)
      
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
      console.log(data)
      data.image=earthPic
          
        const userRef = doc(db, "users", firestoreUserRecordId)
      if (data.earthImage) {
        console.log('FOUND IMG');
        data.earthImage.push(
          {
            earth: sessionStorage.getItem('earth'),
            mars:sessionStorage.getItem('mars'),
            date:sessionStorage.getItem('startDate')
          });
          console.log(data.earthImage)
      }

      if (!data.earthImage) {
        data.earthImage = [
          {
            earth: sessionStorage.getItem('earth'),
            mars:sessionStorage.getItem('mars'),
            date:sessionStorage.getItem('startDate')
          }]
      }
      setOldImages(data.earthImage)

      await updateDoc(userRef, {earthImage: data.earthImage})
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
    if(!marsPic){
      setMarsPic(sessionStorage.getItem('mars'))
    }
    fetchUserName();
  }, [user, loading, history, fetchUserName]);
  const images = [
    {
      earth: earthPic,
      mars:marsPic,
      date:'12/02/1222'
    }] 
    console.log(oldImages)

  return (
    <>
    <Header/>
    <div className="dashboard">
       <div className="dashboard__container dashboard__deets">
        Logged in as
         <div className='dashboard__deets'>{name}</div>
         <div className='dashboard__deets'>{user?.email}</div>
        
         <Button click={logout} text={"Logout"} />
         <div className="login__oneRemHeight"></div>

         <Button  click={saveToDb}text={"Save Current Images"}/>

         
       </div>
       <div className='dashboard__currentImages'>
         <h2 className='dashboard__title'>Current Images from {sessionStorage.getItem('startDate')}</h2>
        {earthPic && <img className='mars__ePic dashboard__right dashboard__cImage' src={earthPic}></img>}
        {marsPic && <img className='mars__ePic dashboard__cImage' src={marsPic}></img>}
       </div>
       
     </div>
   
     {oldImages && oldImages.reverse().map((images)=>
          <PreviousImages images={images}/>
      )
     }

     </>
  );
}
export default Dashboard;