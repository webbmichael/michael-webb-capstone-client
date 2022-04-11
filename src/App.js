import logo from './logo.svg';
import './App.css';
import './App.scss';
import Box from './Component/Box/Box';
import EarthPage from './pages/Earth/Earth';
import AnimatedSphere from './Component/Box/AnimatedSphere';
import { OrbitControls } from '@react-three/drei';
import AnimationContainer from './Component/AnimationContainer/AnimationContainer';
import Home from './pages/Home/Home';
import { Redirect, Route, Switch } from "react-router-dom";
import { Canvas } from '@react-three/fiber';
import Asteroid from './pages/Asteroid/Asteroid';
import Mars from './pages/Mars/Mars';
import { useState } from 'react';
import Login from './pages/Login/Login';
import { Routes } from 'react-router-dom';
import Register from './pages/Register/Register';
import Dashboard from './pages/Dashboard/Dashboard';
import Reset from './pages/Reset/Reset';
import AsteroidDetails from './pages/AsteroidDetails/AsteroidDetails';
function App() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
   const handleChangeDates = (start,end) =>{
    setStartDate(start);
    setEndDate(end);
    console.log("changed")
  }
  const onAsteroidClick = (link) => {
    // console.log(array)
    // console.log(index)
  }
  return (
    <div className="App">

     
        {/* <Canvas className='hello'>
          <OrbitControls />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2,5,2]} intensity={1} />
          <Box/>
        </Canvas>
        <Canvas className='hello'>
          <OrbitControls />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2,5,2]} intensity={1} />
          <AnimatedSphere/>
        </Canvas>
        <Canvas className='hello'>
          <OrbitControls />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2,5,2]} intensity={1} />
          <Earth/>
        </Canvas> */}

      <Switch>
      
      <Route
        path={"/"} 
        exact
        render={(renderProps) => <Home {...renderProps}/>}
      />
      <Route
        path={"/earth"} 
        exact
        render={(renderProps) => <EarthPage dateChange={handleChangeDates} {...renderProps}/>}
      />
      <Route
        path={"/asteroid"} exact
      
        render={(renderProps) => <Mars  startDate={startDate} endDate={endDate} {...renderProps}/>}
      />
            <Route
        path={"/asteroid/:id"} 
      
        render={(renderProps) => <AsteroidDetails  startDate={startDate} endDate={endDate} {...renderProps}/>}
      />
      <Route
        path={"/mars"} 

        render={(renderProps) => <Asteroid onAsteroidClick={onAsteroidClick} {...renderProps}/>}
      />
      <Route
        path={"/login"} 

        render={(renderProps) => <Login onAsteroidClick={onAsteroidClick} {...renderProps}/>}
      />
       <Route
        path={"/register"} 

        render={(renderProps) => <Register onAsteroidClick={onAsteroidClick} {...renderProps}/>}
      />
      <Route
        path={"/dashboard"} 

        render={(renderProps) => <Dashboard onAsteroidClick={onAsteroidClick} {...renderProps}/>}
      />
      <Route
        path={"/reset"} 

        render={(renderProps) => <Reset onAsteroidClick={onAsteroidClick} {...renderProps}/>}
      />

         
      </Switch>
      
      

        
    </div>
  );

  }
export default App;
