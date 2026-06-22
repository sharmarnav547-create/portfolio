import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Line } from '@react-three/drei';
import * as THREE from 'three';

const Globe = () => {
  const meshRef = useRef();
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.1;
      meshRef.current.rotation.x += delta * 0.05;
    }
  });

  return (
    <group ref={meshRef}>
      {/* Wireframe Sphere */}
      <Sphere args={[2, 32, 32]}>
        <meshBasicMaterial 
          color="#FAFF00" 
          wireframe 
        />
      </Sphere>
      
      {/* Inner Glowing Core */}
      <Sphere args={[1.9, 32, 32]}>
        <MeshDistortMaterial 
          color="#7B5CF0" 
          attach="material" 
          distort={0.4} 
          speed={2} 
          roughness={0.2}
          wireframe
        />
      </Sphere>

      {/* Orbit Rings */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[2.5, 2.52, 64]} />
        <meshBasicMaterial color="#FAFF00" side={THREE.DoubleSide} />
      </mesh>
      
      <mesh rotation={[Math.PI / 4, Math.PI / 4, 0]}>
        <ringGeometry args={[2.8, 2.81, 64]} />
        <meshBasicMaterial color="#7B5CF0" side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
};

export default Globe;
