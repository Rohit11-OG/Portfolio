import { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Dodecahedron, Html, Sphere, Float, OrbitControls } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';

function GlowingNode() {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Group>(null);
  
  // Custom material for the central node
  const material = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#8b5cf6', // Primary Purple
    emissive: '#6366f1', // Accent Indigo
    emissiveIntensity: 0.8,
    roughness: 0.2,
    metalness: 0.8,
    wireframe: true,
  }), []);

  // Animate the core rotation
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
      meshRef.current.rotation.y += 0.01;
    }
    if (ringRef.current) {
      ringRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
      ringRef.current.rotation.y -= 0.005;
      ringRef.current.rotation.z += 0.005;
    }
  });

  return (
    <group>
      {/* Central Dodecahedron (AI Node) */}
      <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
        <Dodecahedron ref={meshRef} args={[1.5, 0]} material={material}>
          {/* Inner glowing sphere */}
          <Sphere args={[0.8, 32, 32]}>
            <meshBasicMaterial color="#a78bfa" />
          </Sphere>
        </Dodecahedron>
      </Float>

      {/* Orbiting Tech Stack Labels */}
      <group ref={ringRef}>
        <OrbitingText text="AI" radius={2.8} offset={0} color="#8b5cf6" />
        <OrbitingText text="ML" radius={2.8} offset={Math.PI / 2} color="#6366f1" />
        <OrbitingText text="CV" radius={2.8} offset={Math.PI} color="#3b82f6" />
        <OrbitingText text="DL" radius={2.8} offset={(Math.PI * 3) / 2} color="#a855f7" />
        
        {/* Outer decorative ring */}
        <mesh rotation-x={Math.PI / 2}>
          <torusGeometry args={[3.5, 0.02, 16, 100]} />
          <meshBasicMaterial color="#6366f1" transparent opacity={0.2} />
        </mesh>

        <mesh rotation-y={Math.PI / 4} rotation-x={Math.PI / 2}>
          <torusGeometry args={[3.2, 0.01, 16, 100]} />
          <meshBasicMaterial color="#8b5cf6" transparent opacity={0.3} />
        </mesh>
      </group>
    </group>
  );
}

// Tech Stack Floating Labels
function OrbitingText({ text, radius, offset, color }: { text: string; radius: number; offset: number; color: string }) {
  const ref = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (!ref.current) return;
    // Calculate orbit position
    const time = state.clock.elapsedTime * 0.5 + offset;
    ref.current.position.x = Math.cos(time) * radius;
    ref.current.position.z = Math.sin(time) * radius;
  });

  return (
    <group ref={ref}>
      <Html center style={{ 
        color: color, 
        fontWeight: 'bold', 
        fontSize: '1.2rem',
        textShadow: `0 0 10px ${color}, 0 0 20px ${color}`,
        pointerEvents: 'none'
      }}>
        {text}
      </Html>
    </group>
  );
}

// Mouse Parallax Effect Wrapper
function SceneControls() {
  const { camera, size } = useThree();
  const mouse = useRef({ x: 0, y: 0 });

  useFrame((state) => {
    // Smooth camera interpolation based on mouse pointer
    const targetX = (state.pointer.x * size.width) / 1000;
    const targetY = (state.pointer.y * size.height) / 1000;
    
    camera.position.x += (targetX - camera.position.x) * 0.05;
    camera.position.y += (targetY - camera.position.y) * 0.05;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

export default function ThreeDElement() {
  return (
    <div 
      className="w-full h-full cursor-grab active:cursor-grabbing"
      data-testid="three-d-element"
    >
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <Suspense fallback={null}>
          {/* Ambient and directional lighting for the glass material */}
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1.5} color="#8b5cf6" />
          <directionalLight position={[-10, -10, -5]} intensity={1} color="#3b82f6" />
          <pointLight position={[0, 0, 0]} intensity={2} color="#a855f7" />
          
          <SceneControls />
          <GlowingNode />
          
          {/* OrbitControls allows the user to manually drag around the object */}
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            autoRotate={false}
            maxPolarAngle={Math.PI / 1.5}
            minPolarAngle={Math.PI / 3}
          />
          
          {/* Post-processing Glowing Effect */}
          <EffectComposer enableNormalPass={false}>
            <Bloom 
              luminanceThreshold={0.2} 
              mipmapBlur 
              intensity={1.2} 
            />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </div>
  );
}