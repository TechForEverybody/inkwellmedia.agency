// 'use client';

// import { useRef } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';
// import {
//     useGLTF,
//     Environment,
//     Float,
//     PresentationControls,
//     ContactShadows,
//     Html,
// } from '@react-three/drei';
// import { motion } from 'framer-motion';
// import { Camera, Video, ImageIcon } from 'lucide-react';
// // import robot from '../assets/3d/utility_robot.glb'

// function Model() {
//     const { scene } = useGLTF('/utility_robot.glb');
//     const modelRef = useRef(null);

//     useFrame((state) => {
//         if (modelRef.current) {
//             modelRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
//         }
//     });

//     return (
//         <primitive
//             // ref={modelRef}
//             object={scene}
//             scale={[0.5, 0.5, 0.5]}
//             dispose={null}
//             position={[0, -1, 0]}
//         />
//     );
// }

// function FloatingIcons() {
//     return (
//         <>
//             <Float
//                 speed={1.5}
//                 rotationIntensity={1}
//                 floatIntensity={2}
//                 position={[-2, 1, 0]}
//             >
//                 <Html
//                     transform
//                     distanceFactor={10}
//                     position={[0, 0, 0]}
//                     className='pointer-events-none'
//                 >
//                     <motion.div
//                         initial={{ scale: 0.8, opacity: 0 }}
//                         animate={{ scale: 1, opacity: 1 }}
//                         transition={{ delay: 0.5, duration: 0.5 }}
//                         className='w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#D72638] to-[#ff4d6d] shadow-lg'
//                     >
//                         <Camera className='w-8 h-8 text-white' />
//                     </motion.div>
//                 </Html>
//             </Float>

//             <Float
//                 speed={1.5}
//                 rotationIntensity={1}
//                 floatIntensity={2}
//                 position={[2, -1, 1]}
//             >
//                 <Html
//                     transform
//                     distanceFactor={10}
//                     position={[0, 0, 0]}
//                     className='pointer-events-none'
//                 >
//                     <motion.div
//                         initial={{ scale: 0.8, opacity: 0 }}
//                         animate={{ scale: 1, opacity: 1 }}
//                         transition={{ delay: 0.7, duration: 0.5 }}
//                         className='w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#2a2a2a] to-[#3a3a3a] shadow-lg'
//                     >
//                         <Video className='w-8 h-8 text-white' />
//                     </motion.div>
//                 </Html>
//             </Float>

//             <Float
//                 speed={1.5}
//                 rotationIntensity={1}
//                 floatIntensity={2}
//                 position={[1.5, 2, -1]}
//             >
//                 <Html
//                     transform
//                     distanceFactor={10}
//                     position={[0, 0, 0]}
//                     className='pointer-events-none'
//                 >
//                     <motion.div
//                         initial={{ scale: 0.8, opacity: 0 }}
//                         animate={{ scale: 1, opacity: 1 }}
//                         transition={{ delay: 0.9, duration: 0.5 }}
//                         className='w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#2a2a2a] to-[#3a3a3a] shadow-lg'
//                     >
//                         <ImageIcon className='w-8 h-8 text-white' />
//                     </motion.div>
//                 </Html>
//             </Float>
//         </>
//     );
// }

// function StudioScene() {
//     return (
//         <>
//             <ambientLight intensity={0.5} />
//             <spotLight
//                 position={[10, 10, 10]}
//                 angle={0.15}
//                 penumbra={1}
//                 intensity={1}
//                 castShadow
//             />

//             <PresentationControls
//                 global
//                 rotation={[0.13, 0.1, 0]}
//                 polar={[-0.4, 0.2]}
//                 azimuth={[-1, 0.75]}
//                 config={{ mass: 2, tension: 400 }}
//                 snap={{ mass: 4, tension: 400 }}
//                 cursor={true}
//             >
//                 <Float rotationIntensity={0.4}>
//                     <Model />
//                     <FloatingIcons />
//                 </Float>
//             </PresentationControls>

//             <ContactShadows
//                 position={[0, -1.5, 0]}
//                 opacity={0.4}
//                 scale={10}
//                 blur={1.5}
//             />
//         </>
//     );
// }

// export default function Scene3D() {
//     return (
//         <div className='w-full h-screen inset-0'>
//             <Canvas
//                 camera={{ position: [0, 0, 8], fov: 25 }}
//                 className='w-full h-full'
//                 style={{ position: 'absolute', top: 0, left: 0 }}
//             >
//                 <color attach='background' args={['#111']} />
//                 <StudioScene />
//                 <Environment preset='city' />
//             </Canvas>

//             {/* Decorative Elements */}
//             <div className='absolute bottom-10 left-10 w-32 h-32 rounded-full bg-gradient-to-r from-[#D72638]/20 to-[#D72638]/5 blur-2xl' />
//             <div className='absolute top-10 right-10 w-24 h-24 rounded-full bg-gradient-to-r from-[#D72638]/20 to-[#D72638]/5 blur-2xl' />
//         </div>
//     );
// }
