import React from 'react';
import {AnimationContainer} from '../../Component/AnimationContainer/AnimationContainer';
import "./Home.scss";
import Button from '../../Component/Button/Button';
import { useHistory } from 'react-router-dom';
export default function Home(history) {

  const buttonClick = () =>{
    console.log(history)
    history.history.push('/earth')
  }
  return (
    <div className='home'>
      <div className='home__left'>
        <div className='home__leftCenter'>
          <h1 className='home__title'><mark className='grey'>Journey Through</mark> Space</h1>
        </div>
        <Button text={'Begin'} click={buttonClick} />
      </div>
        <AnimationContainer/>
    </div>
  )
}
//to do 
// style asteroids
// images replace 3d object
// save button and back button - saves images to session storage
// asteroids details page
//dashboard