import React from 'react'
import { AnimationContainer } from '../../Component/AnimationContainer/AnimationContainer'
import Header from '../../Component/Header/Header'
import { GET_MARS } from '../../api/endpoints'
import { useState } from 'react'
import Button from '../../Component/Button/Button'
import axios from 'axios'
import rover from '../../assets/images/curiosity.jpg'
import './Asteroid.scss'
export default function Asteroid({startDate, endDate}) {

  const [marsPictureFirst,setMarsPictureFirst] = useState(null);
  const [marsPictureSecond,setMarsPictureSecond] = useState(null);
  
const marsGet = async (date,camera)=>{
  const response = await axios(GET_MARS(date,camera))
  const toReturn = response.data.photos[0].img_src
  console.log(toReturn)
  setMarsPictureFirst(toReturn)
} 
  
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(event.target.metric.value)
    setMarsPictureFirst(marsGet(startDate,event.target.metric.value))
    setMarsPictureSecond(marsGet(endDate,event.target.metric.value))
  }

  return (

    <>
    <Header/>
    
    <div className='asteroid'>
      <div className='asteroid__left'>
      <h1 className='asteroid__asteroid'><mark className="grey">Pictures From</mark> Mars</h1>
      {(!startDate || !endDate) && <p>Begin on Earth page</p>}
      <p>start date is {startDate} end date is {endDate}</p>
      <div className='asteroid__descriptionRow'>
        <p className='asteroid__description'>Curiosity is a car-sized Mars rover designed to explore the Gale crater on Mars as part of NASA's Mars Science Laboratory mission. Curiosity was launched from Cape Canaveral on 26 November 2011, at 15:02:00 UTC and landed on Aeolis Palus inside Gale crater on Mars on 6 August 2012,</p>
        <img className='mars__ePic asteroid__roverPic' src={rover}></img>
      </div>
      <form className ='asteroid__form' onSubmit={handleSubmit}>
      <div className='mars__dropdown asteroid__dropdown'>
              <label className='asteroid__selectDataFor'>Select a Camera</label>
              <select className='asteroid__selectBox' id="metric" name="metric">
                <option className='asteroid__selectBox' value="FHAZ">Front Hazard Avoidance Camera</option>
                <option className='asteroid__selectBox' value="RHAZ">Rear Hazard Avoidance Camera</option>
                <option className='asteroid__selectBox' value="MAST">Mast Camera</option>
                <option className='asteroid__selectBox' value="CHEMCAM">Chemistry and Camera Complex</option>
                <option className='asteroid__selectBox' value="MAHLI">Mars Hand Lens Imager</option>
                <option className='asteroid__selectBox' value="MARDI">Mars Descent Imager</option>
                <option className='asteroid__selectBox' value="NAVCAM">Navgation Camera</option>
              </select>
              <Button text="Select"/>
            </div>

      </form>
    

      </div>
   
    {!marsPictureFirst && !marsPictureSecond && <AnimationContainer/>}
    {marsPictureFirst && marsPictureSecond &&
            <div className='mars__ePictures'>
              {console.log(marsPictureFirst)}
                <img className="mars__ePic" src={marsPictureFirst}></img>
                <img className="mars__ePic" src={marsPictureSecond}></img>
                
            </div>
            }   

    </div>
    </>
    )
}
