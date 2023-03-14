import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import PhotoFrame from "./3d-models/Photo-frame";

const MyProfile = () => {
  return (
    <Canvas>
      <OrbitControls enableZoom={false} autoRotate={true}/>
      <Stage environment="city" intensity={1} adjustCamera={1.7}>
        <PhotoFrame />
      </Stage>
    </Canvas>
  );
};

export default MyProfile;
