import { Canvas } from '@react-three/fiber'
import React from 'react'
import { OrbitControls, Stage } from '@react-three/drei'
import PythonModel from '../3d-models/Python-logo'


const Python = () => {
  return (
    <Canvas>
      <OrbitControls enableZoom={false} autoRotate={true}/>
      <Stage environment="city" intensity={0} adjustCamera={1.7}>
        <PythonModel />
      </Stage>
    </Canvas>
  )
}

export default Python