import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'
import ReactModel from '../3d-models/React-logo'

const Reactjs = () => {
  return (
    <Canvas>
      <OrbitControls enableZoom={false} autoRotate={true}/>
      <Stage environment="city" intensity={0} adjustCamera={1.7}>
        <ReactModel />
      </Stage>
    </Canvas>
  )
}

export default Reactjs