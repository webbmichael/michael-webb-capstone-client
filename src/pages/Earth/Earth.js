import React from 'react'
import { AnimationContainer } from '../../Component/AnimationContainer/AnimationContainer'
import Header from '../../Component/Header/Header'
import { useState, useEffect ,useRef} from "react";
import { GET_LOCATION,GET_SATELLITE } from '../../api/endpoints';
import { type } from '@testing-library/user-event/dist/type';
import Button from '../../Component/Button/Button';
import axios from 'axios';
 
export default function EarthPage() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [maxDate, setMaxDate] = useState(null);
  const[postCode,setPostCode] = useState(null);
  const [minDate, setMintDate] = useState(null);
  const [coordinates,setCoordinates] = useState(null);



  const handleChange = (e) => {
    console.log(e.target.value)
    setStartDate(e.target.value)
    console.log(typeof(e.target.value))
    let chooseDate=new Date(e.target.value);
    chooseDate.setDate(chooseDate.getUTCDate()+10);
    let futureDate = chooseDate.getFullYear()+'-'+('0'+(chooseDate.getMonth()+1)).slice(-2)+'-'+('0'+(chooseDate.getDate())).slice(-2);
    setMaxDate(futureDate)
}
const handleChangeEnd = (e) => {
    console.log(e.target.value)
    setEndDate(e.target.value)
    
}
const handleSubmit = (e) =>{
    e.preventDefault()
    console.log("start", startDate)
    console.log("end", endDate)
    console.log("location" + e.target.locationInput.value)
    coordinatesGet(e.target.locationInput.value,startDate,endDate)
}
const coordinatesGet = async (postCode,start_date,end_date) =>{
    try{
        const response = await axios.get(GET_LOCATION(postCode));
        satelliteGet(response.data.results[0].geometry,start_date)
        

    }catch(error){
        console.log(error)
    }
}
const satelliteGet = async (coord,start_date) => {
    console.log(coord)
    const response2 = await axios.get(GET_SATELLITE(coord,start_date))
    console.log(response2.data.url)
}

  return (

   
    <>
    <Header/>
    
    <div className='mars'>
   
        <div className='mars__left'>
        <h1 className='mars__asteroid'><mark className="grey">Pictures From</mark> Earth</h1>
        

            <form className='mars__form'onSubmit={handleSubmit} >
            <label className='mars__number'>Select two dates no more than 10 days apart</label>
            <input onChange={handleChange} type="date" id="start" name="startDate"  min="2018-01-01" max="2018-12-31" />
            {maxDate && <input onChange={handleChangeEnd} type="date" id="end" name="endDate"  min="2018-01-01" max={maxDate} />}
            <label className='mars__number'>Type Earth location</label>
            <input className='mars__locationInput'name="locationInput"></input>
            <Button text={"Submit"}/>

            </form>
          
          
        </div>

        <AnimationContainer/>

    </div>
    </>
  )
}
