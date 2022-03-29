import React from 'react'
import { BoxBufferGeometry } from 'three'

export default function Box() {
  return (
    <mesh rotation={[90,0,20]}>
        <boxBufferGeometry attach='geometry' args={[2,2,2]}/>
        <meshLambertMaterial attach='material' color='blue'/>
    </mesh>
  )
}
