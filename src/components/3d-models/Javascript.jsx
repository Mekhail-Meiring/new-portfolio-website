/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 javascript.gltf --transform
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('./models/javascript-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Curve.geometry} material={materials['SVGMat.017']} position={[-73.2, 0, 0]} rotation={[1.57, 0, 0]} scale={11366.62}>
        <mesh geometry={nodes.Curve001.geometry} material={materials['SVGMat.018']} />
      </mesh>
    </group>
  )
}

useGLTF.preload('./models/javascript-transformed.glb')
