import React from "react";
import {Sphere, MeshDistortMaterial} from "@react-three/drei"
import { Mesh } from "three";


export default function AnimatedSphere() {
  return (
      <>
    <Sphere  visible args= {[1,100,200]} scale={2}>
    <MeshDistortMaterial color={"#8352fd"} attach="marerial" distort={1}/>
    </Sphere>
    </>
  )
}
