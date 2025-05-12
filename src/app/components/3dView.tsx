// 'use client';

// import { useRef, useEffect } from 'react';
// import { Canvas, useFrame, useLoader } from '@react-three/fiber';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import { OrbitControls, Environment, Float } from '@react-three/drei';
// import * as THREE from 'three';

// function Model({ url }: { url: string }) {
//     const gltf = useLoader(GLTFLoader, url);
//     const modelRef = useRef<THREE.Group>(null);

//     useFrame((state) => {
//         if (modelRef.current) {
//             // Gentle rotation
//             modelRef.current.rotation.y = -0.5;
//             // setTimeout(() => {
//             //     if (modelRef.current) {
//             //         modelRef.current.rotation.y = 0.5;
//             //     }
//             // }, 1000);
//         }
//     });

//     useEffect(() => {
//         if (gltf && modelRef.current) {
//             // Calculate bounding box
//             const box = new THREE.Box3().setFromObject(modelRef.current);
//             const size = box.getSize(new THREE.Vector3());
//             const center = box.getCenter(new THREE.Vector3());

//             // Center the model
//             modelRef.current.position.x = -center.x;
//             modelRef.current.position.y = -center.y;
//             modelRef.current.position.z = -center.z;

//             // Adjust scale to fit
//             const maxDim = Math.max(size.x, size.y, size.z);
//             if (maxDim > 2) {
//                 const scale = 2 / maxDim;
//                 modelRef.current.scale.set(scale, scale, scale);
//             }
//         }
//     }, [gltf]);

//     return (
//         <Float
//             speed={1.5}
//             rotationIntensity={0.2}
//             floatIntensity={0.8}
//             floatingRange={[1, 2]}
//         >
//             <primitive
//                 ref={modelRef}
//                 object={gltf.scene}
//                 scale={0.1}
//                 position={[0, 0.5, 0]}
//             />
//         </Float>
//     );
// }

// export default function ModelViewer({ modelPath }: { modelPath: string }) {
//     return (
//         <div className='w-full h-full rounded-xl overflow-hidden'>
//             <Canvas
//                 camera={{ position: [0, 0, 10], fov: 50 }}
//                 style={{ background: 'transparent' }}
//             >
//                 <ambientLight intensity={0.5} />
//                 <spotLight
//                     position={[10, 10, 10]}
//                     angle={0.15}
//                     penumbra={1}
//                     intensity={1}
//                     castShadow
//                 />
//                 <pointLight position={[-10, -10, -10]} intensity={0.5} />
//                 <Model url={modelPath} />
//                 <OrbitControls
//                     enableZoom={false}
//                     enablePan={false}
//                     autoRotate={false}
//                     minPolarAngle={Math.PI / 3}
//                     maxPolarAngle={Math.PI / 1.5}
//                 />
//                 <Environment preset='city' />
//             </Canvas>
//         </div>
//     );
// }
