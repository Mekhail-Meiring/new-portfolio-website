import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import KotlinLogo from '../3d-models/Kotlin'

const Kotlin = () => {
  return (
    <Canvas>
      <OrbitControls enableZoom={false} autoRotate={true}/>
      <Stage environment="city" intensity={0} adjustCamera={1.7}>
        <KotlinLogo />
      </Stage>
    </Canvas>
  )
}

export default Kotlin