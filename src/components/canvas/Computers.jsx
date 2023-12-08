import React, { Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { AnimationMixer } from 'three';

import CanvasLoader from '../Loader';

let mixer = null;

const Computers = () => {
  const gltf = useGLTF('./goku/scene.gltf');

  useEffect(() => {
    const model = gltf.scene;
    const animations = gltf.animations;

    if (model && animations && mixer === null) {
      mixer = new AnimationMixer(model);

      const action = mixer.clipAction(animations[0]);
      action.play();
    }
  }, [gltf]);

  useFrame((_, delta) => {
    if (mixer) {
      mixer.update(delta);
    }

    gltf.scene.rotation.y += .7 * delta;
  });

  return (
    <mesh>
      <hemisphereLight intensity={1.5} groundColor="black" />
      <pointLight intensity={1} />
      <primitive 
        object={gltf.scene}
        scale={1.13}
        position={[1.5,-1.5,0.08]}
        rotation={[-0.3,-0.5,0]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load('./robot_playground/scene.gltf', (gltf) => {
      const model = gltf.scene;
      const animations = gltf.animations;

      if (model && animations && mixer === null) {
        mixer = new AnimationMixer(model);

        const action = mixer.clipAction(animations[0]);
        action.play();
      }
    });
  }, []);

  return (
    <Canvas
    shadows
    camera={{ position: [0, 1.5, 3], fov: 65 }}
    gl={{ preserveDrawingBuffer: true }}
  >
    <Suspense>
      <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2 - 0.1} 
        minPolarAngle={Math.PI / 4} 
      />
      <Computers />
    </Suspense>
  
    <Preload all />
  </Canvas>  
  );
};

export default ComputersCanvas;