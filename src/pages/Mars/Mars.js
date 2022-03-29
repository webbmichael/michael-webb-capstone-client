import React from 'react'
import { AnimationContainer } from '../../Component/AnimationContainer/AnimationContainer';
import Header from '../../Component/Header/Header';
import './Mars.scss';
import {GET_ASTEROID} from '../../api/endpoints';
import { findAllByDisplayValue } from '@testing-library/react';
import { useState, useEffect } from "react";
import axios from 'axios';


export default function Mars() {
  const [asteroidData, setAsteroidData] = useState(null);

  const asteroidGet = async () => {
    try {
      const response = await axios.get(GET_ASTEROID('2015-09-07','2015-09-08'));
      console.log(response.data)
      setAsteroidData(1)
    } catch(error){
      console.log(error)
    }
  }

  useEffect(() => {
    if (!asteroidData) {
      asteroidGet();
    }
  });
  return (
    <>
    <Header/>
    <div className='mars'>
        <div className='mars__left'>
          <h1 className='mars__asteroid'><mark className="grey">Near Miss</mark> Asteroids</h1>
          
        </div>
        <AnimationContainer/>

    </div>
    </>
  )
}
