import React from 'react'
import {Canvas, useFrame} from '@react-three/fiber'
import {Suspense} from "react";
import Earth1 from "../earth/Earth1.jsx"
import * as THREE from "three"

const ZoomIn = () =>{
  const vec = new THREE.Vector3(2, 15, 30)
  return useFrame(({ camera }) => camera.position.lerp(vec, 1))
}
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
        <Earth1 position={[1,200,1]} />


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
        <Earth1  />
        

      </Suspense>
     
    </Canvas>
    </div>
  )
}
export{
  AnimationContainer,
  AnimationContainerAsteroid,

}