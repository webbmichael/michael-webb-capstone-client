import React from 'react'
import {Canvas, useFrame} from '@react-three/fiber'
import {Suspense} from "react";
import Earth1 from "../earth/Earth1.jsx"
import Earth from '../Earth'
import MyMars from '../MyMars';
import * as THREE from "three"
import MyAsteroid from '../MyAsteroid'
import { OrbitControls } from '@react-three/drei';

const Geometry = () =>{
  var geometry = new THREE.BoxGeometry( 2, 1, 1 );
  return geometry

}

const AnimationContainer = () => {
  return (
    <div className='canvasContainer'>
     
    <Canvas className='big'>
      
      <Suspense fallback={null}>
        {/* <ZoomIn/> */}
        {/* <Geometry/> */}
    <pointLight color={"#f6f3ea"} position ={[-50,0,0]} />

        <Earth1 position={[1,200,1]} />


      </Suspense>
    </Canvas>
    </div>
  )
}


const AnimationContainerMars = () => {
  return (
    <div className='canvasContainer'>
     
    <Canvas  className='big'>
      
      <Suspense fallback={null}>

        {/* <Geometry/> */}
        <OrbitControls 
          enableZoom ={true} 
          enablePan ={true}
          enableRotate = {true}
          zoomSpeed ={0.6}
          panSpeed={0.5}
          rotateSpeed={0.5}
          zoom={0.1}
          />
        <ambientLight intensity={0.027}/>
    <pointLight color={"#f6f3ea"} position ={[-50,0,0]} />

        <MyMars  />


      </Suspense>
    </Canvas>
    </div>
  )
}
const AnimationContainerAsteroid = () => {
  return (
    <div className='canvasContainer'>
     
    <Canvas className='big'>
      
      <Suspense fallback={null}>
        {/* <ZoomIn/> */}
        {/* <Geometry/> */}
        <OrbitControls 
          enableZoom ={true} 
          enablePan ={true}
          enableRotate = {true}
          zoomSpeed ={0.6}
          panSpeed={0.5}
          rotateSpeed={0.5}
          zoom={0.1}
          />
        <ambientLight intensity={0.9}/>
    <pointLight color={"#f6f3ea"} position ={[-50,0,0]} />

        <MyAsteroid  />


      </Suspense>
    </Canvas>
    </div>
  )
}
export{
  AnimationContainer,
  AnimationContainerMars,
  AnimationContainerAsteroid,

}