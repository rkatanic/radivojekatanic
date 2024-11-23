"use client";

import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// The RippleEffect component
const RippleEffect: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const meshRef = useRef<THREE.Mesh>(null);
  const mousePos = useRef(new THREE.Vector2(0.5, 0.5)); // Store mouse position

  const vertexShader = `
    varying vec2 vUv;
    uniform float uTime;
    uniform vec2 uMouse;
    uniform bool uHovered;

    void main() {
      vUv = uv;

      // Apply displacement based on distance from the mouse
      if (uHovered) {
        float dist = distance(vUv, uMouse); // Get distance from the mouse
        float ripple = sin(dist * 10.0 - uTime * 3.0) * 0.1 / dist; // Create ripple effect
        vec3 displacedPosition = position + normal * ripple; // Apply ripple effect to the geometry
        gl_Position = projectionMatrix * modelViewMatrix * vec4(displacedPosition, 1.0);
      } else {
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); // Default position
      }
    }
  `;

  const fragmentShader = `
    varying vec2 vUv;
    uniform sampler2D uTexture;

    void main() {
      vec4 color = texture2D(uTexture, vUv); // Sample the image texture
      gl_FragColor = color;
    }
  `;

  // Update uniforms on each frame (mouse position and time)
  useFrame(({ clock, mouse }) => {
    if (materialRef.current) {
      const time = clock.getElapsedTime();
      const normalizedMouse = new THREE.Vector2(
        (mouse.x + 1) / 2, // Normalize mouse.x to [0, 1]
        1 - (mouse.y + 1) / 2, // Normalize mouse.y to [0, 1], flip Y axis
      );

      materialRef.current.uniforms.uTime.value = time;
      materialRef.current.uniforms.uMouse.value = normalizedMouse;
      materialRef.current.uniforms.uHovered.value = isHovered;
    }
  });

  return (
    <mesh
      ref={meshRef}
      onPointerEnter={() => setIsHovered(true)} // Start ripple effect when hovered
      onPointerLeave={() => setIsHovered(false)} // Stop ripple effect when not hovered
    >
      <planeGeometry args={[4, 3]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{
          uTexture: {
            value: new THREE.TextureLoader().load("/abstract-bg.jpg"),
          }, // Image path
          uMouse: { value: new THREE.Vector2(0.5, 0.5) },
          uTime: { value: 0 },
          uHovered: { value: false },
        }}
        transparent={true}
      />
    </mesh>
  );
};

// The Portfolio component where Canvas is rendered
const Portfolio: React.FC = () => {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Canvas>
        <RippleEffect />
      </Canvas>
    </div>
  );
};

export default Portfolio;
