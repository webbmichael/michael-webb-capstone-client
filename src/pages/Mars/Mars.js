import React from 'react'
import { AnimationContainer } from '../../Component/AnimationContainer/AnimationContainer';
import Header from '../../Component/Header/Header';
import './Mars.scss';
import {GET_ASTEROID} from '../../api/endpoints';
import { findAllByDisplayValue } from '@testing-library/react';
import { useState, useEffect ,useRef} from "react";
import axios from 'axios';
import Button from '../../Component/Button/Button';
import BarChart from '../../Component/Chart/Chart';
import BackButton from '../../Component/Back/BackButton';
export default function Mars({onAsteroidClick,startDate,endDate}) {
  const [asteroidData, setAsteroidData] = useState(null);
  const [hazardous, setHazardous] = useState(null);
  const [chartData, setChartData] = useState(null);
  const [noOfAsteroids, setNoOfAsteroids] = useState(null);
  const[neoID,setNeoID]= useState(null);
  const chartRef = useRef();

 

  const asteroidGet = async () => {
    try {
      const response = await axios.get(GET_ASTEROID(startDate,startDate));
      console.log(response.data)
      setAsteroidData(response.data)
    } catch(error){
      console.log(error)
    }
  }
  const onValueChange= (e)=>{
    console.log(e.target.value)
    setHazardous(e.target.value)
  }
  const asteroidCount = () =>{
    const nearEarth = asteroidData.near_earth_objects;
    const asteroids = [];

    for(const date in nearEarth){
      for( let i=0 ; i<nearEarth[date].length;i++){
        asteroids.push(nearEarth[date][i])
        console.log(i)
      }
    }
    // include only hazordous if selected 
    if(hazardous==="yes"){
      asteroids = asteroids.filter((asteroid) => asteroid.is_potentially_hazardous_asteroid ===true)
    }
    return asteroids

  }
  const handleSubmit = (e) => {
    e.preventDefault(0);
    //gets all data selected
    const asteroids = asteroidCount()
    //gets individual asteroid data from each date
    
    let astName5 =[];
    let astDia5 =[];
    const compare = e.target.metric.value;
    const noOfBars = asteroids.length >= 10 ? 10 : asteroids.length
    let IDArray = []
    switch (compare){
      case 'diameter':
        for(let i=0; i<noOfBars;i++){
          astDia5.push(asteroids[i].estimated_diameter.meters.estimated_diameter_max)
          astName5.push(asteroids[i].name)
          IDArray.push(asteroids[i].links.self)
        }
        break;
      case 'speed' :
        for(let i=0; i<noOfBars;i++){
          console.log(asteroids[i].close_approach_data)
          astDia5.push(asteroids[i].close_approach_data[0].relative_velocity.kilometers_per_hour)
          astName5.push(asteroids[i].name)
          IDArray.push(asteroids[i].links.self)

        
        }
        break;
      case 'miss':
     
        for(let i=0; i<noOfBars;i++){
          console.log(asteroids[i].close_approach_data)
          astDia5.push(asteroids[i].close_approach_data[0].miss_distance.kilometers)
          astName5.push(asteroids[i].name)
          IDArray.push(asteroids[i].links.self)
        }
    }
    setNeoID(IDArray)
    // for(let i=0; i<5;i++){
    //   astDia5.push(asteroids[i][compareFilter][compareFilter1][compareFilter2])
    //   astName5.push(asteroids[i].name)
    //   console.log(astDia5)
    // }
    console.log("ast name", astName5)
    console.log("ast array", astDia5)
    setChartData({
      labels: astName5,
      datasets:[
        {
          label: "Diameter",
          data: astDia5,
          backgroundColor: ["white",
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
        }
      ]
    });
    
  }
  useEffect(() => {
    if (!asteroidData) {
      asteroidGet();
    }else if(!noOfAsteroids){
      //count asteroids
      const nearEarth = asteroidData.near_earth_objects;
       let count = 0
      for(const date in nearEarth){
        for( let i=0 ; i<nearEarth[date].length;i++){
          count ++
          
        }
      }
      setNoOfAsteroids(count)
      


    }

  },[]);
  return (
    
    <>
    <Header/>
    
    <div className='mars'>
   
        <div className='mars__left'>
          <BackButton/>
          <h1 className='mars__asteroid'><mark className="grey">Near Miss</mark> Asteroids</h1>
         {asteroidData &&<p className='mars__number'>There were {asteroidData.element_count} astroids between date and date</p>}
          <form className='mars__form' onSubmit={handleSubmit}>
            <div className='mars__radio'>
              <label>
                <input
                  type="radio"
                  value="yes"
                  checked={hazardous === "yes"}
                  onChange={onValueChange}
                />
                Yes
              </label>
              <label>
              <input
                type="radio"
                value="no"
                checked={hazardous === "no"}
                onChange={onValueChange}
                />
              No
              </label>
            </div>
            <div className='mars__dropdown'>
              <label className='mars__selectDataFor'>Compare Asteroids with top five</label>
              <select className='mars__selectBox' id="metric" name="metric">
                <option className='mars__selectBox' value="diameter">Diameter</option>
                <option className='mars__selectBox' value="speed">Speed</option>
                <option className='mars__selectBox' value="miss">Miss Distance</option>
              </select>
            </div>
            <Button text={"Compare"}/>

          </form>
          {/* {chartData && console.log(chartData)} */}
          {chartData && <BarChart chartRef={chartRef} chartData={chartData} onAsteroidClick={onAsteroidClick} neoID={neoID}/>}
          
        </div>

        <AnimationContainer/>

    </div>
    </>
  )
}
