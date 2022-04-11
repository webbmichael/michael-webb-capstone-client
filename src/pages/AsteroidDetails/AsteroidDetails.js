import React from 'react'
import { AnimationContainerAsteroid } from '../../Component/AnimationContainer/AnimationContainer';
import Header from '../../Component/Header/Header';
import {GET_ASTEROID_SINGLE} from '../../api/endpoints';
import { findAllByDisplayValue } from '@testing-library/react';
import { useState, useEffect ,useRef} from "react";
import axios from 'axios';
import Button from '../../Component/Button/Button';
import BarChart from '../../Component/Chart/Chart';
import BackButton from '../../Component/Back/BackButton';
import { useHistory } from 'react-router-dom';
export default function AsteroidDetails(props) {
    const navigate = useHistory();


    const [asteroidDeets,setAsteroidDeets] = useState(null);
    console.log(props.match.params.id)

    const asteroidGet = async () => {
        try {
          const response = await axios.get(GET_ASTEROID_SINGLE(props.match.params.id));
          console.log(response.data)
        setAsteroidDeets(response.data)
        } catch(error){
          console.log(error)
        }
      }
    useEffect(() => {
        if (!asteroidDeets) {
          asteroidGet();
        }
    
      },[]);
      if(asteroidDeets){
      console.log(asteroidDeets.close_approach_data.length)
      }
  return (

    <>
    <Header/>
    
    <div className='mars'>
   
        <div className='mars__left'>
            <BackButton click={() =>navigate.replace('/asteroid')}/>
            {asteroidDeets &&
            <>
            <h1 className='mars__asteroid'>Asteroid Name: {asteroidDeets.name}</h1>
            <p className='asteroid__description'>Diameter: {asteroidDeets.estimated_diameter.kilometers.estimated_diameter_max} Kilometers</p>
            <p className='asteroid__description'>First ovservation date: {asteroidDeets.orbital_data.first_observation_date} </p>
            <p className='asteroid__description'>Last observation date: {asteroidDeets.orbital_data.last_observation_date} </p>
            <p className='asteroid__description'>Number of ovservations: {asteroidDeets.close_approach_data.length} </p>
            </>
            }
         
        </div>

        <AnimationContainerAsteroid/>

    </div>
    </>
  )
}