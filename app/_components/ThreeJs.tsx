"use client";

import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

export default function ThreeJs() {
  return (
    <Suspense fallback={<span>loading...</span>}>
      <Canvas className="my-6 !h-96" camera={{ position: [0, 1, 3], fov: 25 }}>
        <directionalLight position={[10, 10, 0]} intensity={1.5} />
        <directionalLight position={[-10, 10, 5]} intensity={1} />
        <directionalLight position={[-10, 20, 0]} intensity={1.5} />
        <directionalLight position={[0, -10, 0]} intensity={0.25} />
        <Rotate position-y={-0.275} scale={1}>
          <Model url="retro_computer.glb" />
        </Rotate>
      </Canvas>
    </Suspense>
  );
}

function Model({ url }: { url: string }): React.JSX.Element {
  // useGLTF suspends the component, it literally stops processing
  const { scene } = useGLTF(url) as any;
  // By the time we're here the model is gueranteed to be available
  return <primitive object={scene} />;
}

function Rotate(props: any) {
  const ref = useRef<any>();
  useFrame((state) => (ref.current.rotation.y = state.clock.elapsedTime * 0.1));
  return <group ref={ref} {...props} />;
}
