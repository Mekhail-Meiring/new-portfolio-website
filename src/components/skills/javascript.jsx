import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import JavascriptLogo from '../3d-models/Javascript'	

const Javascript = () => {
  return (
    <Canvas>
      <OrbitControls enableZoom={false} autoRotate={true}/>
      <Stage environment="city" intensity={0} adjustCamera={1.7}>
        <JavascriptLogo />
      </Stage>
    </Canvas>
  )
}

export default Javascript