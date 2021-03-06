/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: kayra23 (https://sketchfab.com/kayra23)
license: CC-BY-SA-4.0 (http://creativecommons.org/licenses/by-sa/4.0/)
source: https://sketchfab.com/3d-models/asteroid-d3b95b50c02a482d927f224b623bb83d
title: Asteroid
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/myAsteroid.gltf')
  useFrame(({clock}) =>{
    const elapsedTime = clock.getElapsedTime();
    group.current.rotation.y = elapsedTime/6;
  
  })
  return (
    <group ref={group} {...props} dispose={null}>
      <group scale={1.5}rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.material_0} />
      </group>
    </group>
  )
}

useGLTF.preload('/myAsteroid.gltf')
