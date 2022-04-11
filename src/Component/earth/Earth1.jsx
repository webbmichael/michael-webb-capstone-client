import React, {useRef} from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import EarthDayMap from '../../assets/textures/2k_earth_daymap.jpg'
import EarthNormalMap from '../../assets/textures/2k_earth_normal_map.jpg'
import EarthSpecularMap from '../../assets/textures/2k_earth_specular_map.jpg'
import EarthCloudsMap from '../../assets/textures/2k_earth_clouds.jpg'
import { TextureLoader } from 'three'
import { OrbitControls } from '@react-three/drei';
import * as THREE from "three"

export default function Earth1(props) {
  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader (TextureLoader,[EarthDayMap, EarthNormalMap, EarthSpecularMap,EarthCloudsMap] )
  const earthRef = useRef();
  const cloudsRef = useRef();
// console.log(clock);
  useFrame(({clock}) =>{
    const elapsedTime = clock.getElapsedTime();
    earthRef.current.rotation.y = elapsedTime/6;
    cloudsRef.current.rotation.y = elapsedTime/6;
  })


  return (
    <>
    {/* <ambientLight intensity={1}/> */}
    {/* <Box position={[-1.2, 0, 0]} /> */}
    <mesh ref = {cloudsRef}>
      <sphereGeometry args={[2.5,32,32]} position={[-100,-100,0]} scale={100}/>
      <meshPhongMaterial 
        map={cloudsMap} 
        opacity ={0.4} 
        depthWrite={true} 
        transparent={true} 
        side={THREE.DoubleSide} 
        />
    </mesh>
    <mesh ref={earthRef}>
        <sphereGeometry args = {[2.5, 32, 32]} position={[-100,-100,0]} scale={100}/>
        <meshPhongMaterial color="red"/>
        <meshStandardMaterial map={colorMap} normalMap={normalMap}/>
        <OrbitControls 
          enableZoom ={true} 
          enablePan ={true}
          enableRotate = {true}
          zoomSpeed ={0.6}
          panSpeed={0.5}
          rotateSpeed={0.5}
          zoom={0.1}
          />
       
    </mesh>
    
    </>
  )
}
