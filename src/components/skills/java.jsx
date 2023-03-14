import { Canvas } from '@react-three/fiber'
import React from 'react'
import { OrbitControls, Stage } from '@react-three/drei'
import JavaModel from '../3d-models/Java-logo'

const Java = () => {
  return (
    <Canvas>
      <OrbitControls enableZoom={false} autoRotate={true}/>
      <Stage environment="city" intensity={0} adjustCamera={1.7}>
        <JavaModel />
      </Stage>
    </Canvas>
  )
}

export default Java
