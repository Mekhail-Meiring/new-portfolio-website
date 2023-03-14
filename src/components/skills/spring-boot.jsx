import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import SpringLogo from '../3d-models/Spring-boot'


const SpringBoot = () => {
  return (
    <Canvas>
      <OrbitControls enableZoom={false} autoRotate={true}/>
      <Stage environment="city" intensity={0} adjustCamera={1.7}>
        <SpringLogo />
      </Stage>
    </Canvas>
  )
}

export default SpringBoot