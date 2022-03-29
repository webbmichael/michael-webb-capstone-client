import React from 'react'
import {Canvas} from '@react-three/fiber'
import {Suspense} from "react";
import Earth1 from "../earth/Earth1.jsx"



const AnimationContainer = () => {
  return (
    <div className='canvasContainer'>
     
    <Canvas className='big'>
      <Suspense fallback={null}>
        <Earth1 />

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
        <Earth1 />

      </Suspense>
    </Canvas>
    </div>
  )
}
export{
  AnimationContainer,
  AnimationContainerAsteroid,

}