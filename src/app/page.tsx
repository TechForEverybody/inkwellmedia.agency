// 'use client';
// import { useState, useEffect } from 'react';
// import { AnimatePresence, motion } from 'framer-motion';
// // import AnimatedCamera from './components/camera';

// const words = [
//     'Creative Ads',
//     'Engaging Campaigns',
//     'Impactful Branding',
//     'Viral Marketing',
// ];

// export default function HeroSection() {
//     const [mouseX, setMouseX] = useState(0);
//     const [mouseY, setMouseY] = useState(0);

//     useEffect(() => {
//         const handleMouseMove = (e: MouseEvent) => {
//             setMouseX((e.clientX / window.innerWidth - 0.5) * 20);
//             setMouseY((e.clientY / window.innerHeight - 0.5) * 20);
//         };
//         window.addEventListener('mousemove', handleMouseMove);
//         return () => window.removeEventListener('mousemove', handleMouseMove);
//     }, []);

//     const [index, setIndex] = useState(0);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setIndex((prevIndex) => (prevIndex + 1) % words.length);
//         }, 2500); // Change text every 2 seconds

//         return () => clearInterval(interval);
//     }, []);

//     return (
//         <>
//             <section className='relative flex items-center justify-center h-screen bg-gradient-to-b from-black via-[#111] to-[#222] text-white overflow-hidden'>
//                 {/* Background Animated Particles */}
//                 <motion.div
//                     className="absolute inset-0 bg-[url('/bg-pattern.svg')] bg-cover opacity-10"
//                     animate={{ opacity: [0.1, 0.2, 0.1] }}
//                     transition={{
//                         repeat: Infinity,
//                         duration: 5,
//                         ease: 'easeInOut',
//                     }}
//                 />

//                 {/* Hero Content */}
//                 <motion.div
//                     className='relative text-center max-w-2xl'
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 1 }}
//                     style={{ transform: `translate(${mouseX}px, ${mouseY}px)` }}
//                 >
//                     <h1 className='text-6xl font-bold mb-4 tracking-wide'>
//                         Elevate Your Brand with{' '}
//                         <span className='inline-block'>
//                             <AnimatePresence mode='wait'>
//                                 <motion.span
//                                     key={words[index]}
//                                     initial={{
//                                         y: 50,
//                                         opacity: 0,
//                                         scale: 0.8,
//                                         filter: 'blur(10px)',
//                                     }}
//                                     animate={{
//                                         y: 0,
//                                         opacity: 1,
//                                         scale: 1,
//                                         filter: 'blur(0px)',
//                                     }}
//                                     exit={{
//                                         y: -50,
//                                         opacity: 0,
//                                         scale: 1.1,
//                                         filter: 'blur(10px)',
//                                     }}
//                                     transition={{
//                                         duration: 1,
//                                         ease: 'easeInOut',
//                                     }}
//                                     className='w-full text-[#D72638]'
//                                 >
//                                     {words[index]}
//                                 </motion.span>
//                             </AnimatePresence>
//                         </span>
//                     </h1>

//                     <p className='text-lg text-gray-300 max-w-lg mx-auto'>
//                         We craft stunning, high-converting advertisements that
//                         make your brand shine.
//                     </p>

//                     {/* <AnimatedCamera /> */}

//                     {/* CTA Button */}
//                     <div className='flex justify-evenly md:justify-between max-w-sm mx-auto mt-2'>
//                         <motion.button
//                             whileHover={{
//                                 scale: 1.1,
//                                 boxShadow: '0px 0px 20px rgba(255, 0, 0, 0.7)',
//                             }}
//                             whileTap={{ scale: 0.95 }}
//                             className='mt-6 px-6 py-3 text-lg font-semibold text-white bg-white/10 backdrop-blur-lg border border-white/20 rounded-full shadow-lg transition-all duration-300 hover:bg-[#D72638] hover:border-[#D72638]'
//                         >
//                             Get Started
//                             <motion.svg
//                                 xmlns='http://www.w3.org/2000/svg'
//                                 fill='none'
//                                 viewBox='0 0 24 24'
//                                 stroke='currentColor'
//                                 className='w-6 h-4 mr-2 inline-block'
//                                 animate={{ x: [0, 10, 0] }}
//                                 transition={{ repeat: Infinity, duration: 1.5 }}
//                             >
//                                 <path
//                                     strokeLinecap='round'
//                                     strokeLinejoin='round'
//                                     strokeWidth={2}
//                                     d='M9 5l7 7-7 7'
//                                 />
//                             </motion.svg>
//                         </motion.button>
//                         <motion.button
//                             whileHover={{
//                                 scale: 1.1,
//                                 boxShadow: '0px 0px 20px rgba(255, 0, 0, 0.7)',
//                             }}
//                             whileTap={{ scale: 0.95 }}
//                             className='flex justify-center items-center mt-6 px-6 py-3 text-lg font-semibold text-white backdrop-blur-lg border rounded-full shadow-lg transition-all duration-300 border-[#d72638]'
//                         >
//                             Our Portfolio{' '}
//                             <motion.div
//                                 animate={{ opacity: [0.2, 1, 0.2] }}
//                                 transition={{ repeat: Infinity, duration: 1 }}
//                                 className='w-2 h-2 bg-red-500 rounded-full ml-1'
//                             ></motion.div>
//                         </motion.button>
//                     </div>

//                     {/* <AnimatedCamera /> */}
//                     {/* <AnimatedButton
//                     className='mt-6 px-6 py-3 text-lg font-semibold text-white bg-white/10 backdrop-blur-lg border border-white/20 rounded-full shadow-lg transition-all duration-300 hover:bg-[#D72638] hover:border-[#D72638]'
//                     text='Learn More'
//                     onClick={() => alert('Clicked!')}
//                     /> */}
//                 </motion.div>

//                 {/* Floating Shapes */}
//                 <motion.div
//                     className='absolute bottom-10 right-10 w-16 h-16 bg-[#D72638] rounded-full opacity-50 blur-3xl'
//                     animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
//                     transition={{
//                         repeat: Infinity,
//                         duration: 5,
//                         ease: 'easeInOut',
//                     }}
//                 />

//                 <div className='absolute -top-20 right-10 w-32 h-32 bg-[#D72638] opacity-20 blur-2xl rounded-full animate-pulse'></div>
//                 <div className='absolute bottom-0 -left-20 w-32 h-32 bg-[#D72638] opacity-20 blur-3xl rounded-full animate-pulse'></div>
//                 <div className='absolute bottom-0 w-full h-24 bg-gradient-to-t from-[#222] to-transparent'></div>
//             </section>
//         </>
//     );
// }

'use client';

import { LucidePhoneCall } from 'lucide-react';
import { motion } from 'framer-motion';
// import ModelViewer from './components/3dView';
import ServicesPage from './services/page';
import PortfolioPage from './portfolio/page';
import PricingPage from './pricing/page';
import ContactPage from './contact/page';
import { useRouter } from 'next/navigation';

export default function HeroSection() {
    const router = useRouter();
    return (
        // <section className='relative flex items-center justify-between h-screen bg-[#0b344a] text-white px-12 overflow-hidden'>
        //     {/* Grid Background */}
        <>
            <section className='relative flex items-center justify-center h-full md:h-screen bg-[#000433] text-white px-6 md:px-12 overflow-hidden py-28 md:py-0'>
                {/* Grid Background */}
                {/* <div className='absolute inset-0 bg-[url(/grid.svg)] opacity-20'></div> */}

                <div className='absolute z-0 mix-blend-screen h-screen w-screen bg-cover inset-0 bg-[url(/grid-black.jpg)] opacity-20'></div>
                {/* Left Content */}
                <motion.div
                    className='text-center max-w-4xl'
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className='text-[66px] font-bold mb-2 tracking-normal leading-tight'>
                        Grow Your Brand with {''}
                        <span className='text-[#fa8128]'>Creative Vision</span>
                    </h1>
                    <p className='text-lg text-gray-300 font-roboto-light tracking-wider max-w-lg text-center mx-auto'>
                        We craft stunning, high-converting advertisements that
                        make your brand shine.
                    </p>
                    <div className='flex justify-evenly md:justify-between max-w-sm mx-auto mt-2'>
                        <motion.button
                            whileHover={{
                                scale: 1.1,
                                boxShadow: '0px 0px 20px #fa8128',
                            }}
                            onClick={() =>
                                (window.location.href = 'tel:+919082531628')
                            }
                            whileTap={{ scale: 0.95 }}
                            className='mt-6 flex items-center justify-center px-3 md:px-6 py-3 text-sm md:text-lg font-semibold text-white backdrop-blur-lg border border-white/20 bg-[#fa8128] rounded-full shadow-lg transition-all duration-300 hover:bg-[#fa8128] hover:border-[#fa8128]'
                        >
                            Book a Call{' '}
                            <LucidePhoneCall className='w-4 h-4 ml-2' />
                        </motion.button>
                        <motion.button
                            whileHover={{
                                scale: 1.1,
                                boxShadow: '0px 0px 20px #fa8128',
                            }}
                            onClick={() => router.push('/portfolio')}
                            whileTap={{ scale: 0.95 }}
                            className='flex justify-center items-center mt-6 px-3 md:px-6 py-3 text-sm md:text-lg font-semibold text-white backdrop-blur-lg border rounded-full shadow-lg transition-all duration-300 border-[#fa8128]'
                        >
                            Our Portfolio{' '}
                            <motion.svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                                className='w-6 h-4 mr-2 inline-block'
                                animate={{ x: [0, 10, 0] }}
                                transition={{ repeat: Infinity, duration: 1.5 }}
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={2}
                                    d='M9 5l7 7-7 7'
                                />
                            </motion.svg>
                        </motion.button>
                    </div>
                    {/* <div className='mt-6 flex space-x-4 justify-center'>
                        <button className='px-6 py-3 text-lg font-semibold text-white bg-[#fa8128] rounded-full shadow-lg transition-all'>
                            Book a Call
                        </button>
                        <button className='px-6 py-3 text-lg font-semibold text-white border border-[#fa8128] rounded-full shadow-lg transition-all hover:bg-[#D72638]'>
                            Our Portfolio
                        </button>
                    </div> */}
                </motion.div>
                {/* Right - Floating 3D Studio Setup */}
                {/* <motion.div
                    className='relative w-1/2 h-full flex items-center justify-center'
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <div className='w-full h-full max-w-2xl max-h-[600px] bg-transparent rounded-xl flex items-center justify-center'>
                        <ModelViewer modelPath='/model.glb' />
                    </div>
                </motion.div> */}

                <div className='absolute -top-20 right-10 w-32 h-32 bg-[#000080] opacity-20 blur-2xl rounded-full animate-pulse'></div>
                <div className='absolute bottom-0 -left-20 w-32 h-32 bg-[#000800] opacity-20 blur-3xl rounded-full animate-pulse'></div>
                <div className='absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#00080050] to-transparent'></div>
            </section>
            {/* <section className='relative flex items-center justify-between h-screen bg-[#fff] text-white px-12 overflow-hidden border-t-4 border-[#000433]'> */}
            <ServicesPage />
            <PortfolioPage />
            <PricingPage />
            <ContactPage />
            {/* </section> */}
        </>
    );
}

// 'use client';

// import { useState, useEffect } from 'react';
// import { AnimatePresence, motion } from 'framer-motion';
// import { Play, ChevronRight } from 'lucide-react';
// import Scene3D from './components/scene-3d';

// const words = [
//     'Creative Ads',
//     'Engaging Campaigns',
//     'Impactful Branding',
//     'Viral Marketing',
// ];

// export default function HeroSection() {
//     const [mouseX, setMouseX] = useState(0);
//     const [mouseY, setMouseY] = useState(0);
//     const [index, setIndex] = useState(0);

//     useEffect(() => {
//         const handleMouseMove = (e: MouseEvent) => {
//             setMouseX((e.clientX / window.innerWidth - 0.5) * 10);
//             setMouseY((e.clientY / window.innerHeight - 0.5) * 10);
//         };
//         window.addEventListener('mousemove', handleMouseMove);
//         return () => window.removeEventListener('mousemove', handleMouseMove);
//     }, []);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setIndex((prevIndex) => (prevIndex + 1) % words.length);
//         }, 2500); // Change text every 2.5 seconds

//         return () => clearInterval(interval);
//     }, []);

//     return (
//         <section className='relative flex flex-col lg:flex-row items-center min-h-screen bg-gradient-to-b from-black via-[#111] to-[#222] text-white overflow-hidden px-6 lg:px-16'>
//             {/* Background Elements */}
//             <motion.div
//                 className="absolute inset-0 bg-[url('/bg-pattern.svg')] bg-cover opacity-10"
//                 animate={{ opacity: [0.1, 0.2, 0.1] }}
//                 transition={{
//                     repeat: Number.POSITIVE_INFINITY,
//                     duration: 5,
//                     ease: 'easeInOut',
//                 }}
//             />

//             {/* Floating Shapes */}
//             <motion.div
//                 className='absolute top-1/4 right-1/4 w-64 h-64 bg-[#D72638] rounded-full opacity-10 blur-3xl'
//                 animate={{
//                     scale: [1, 1.2, 1],
//                     x: [0, 20, 0],
//                     y: [0, -20, 0],
//                 }}
//                 transition={{
//                     repeat: Number.POSITIVE_INFINITY,
//                     duration: 8,
//                     ease: 'easeInOut',
//                 }}
//             />
//             <motion.div
//                 className='absolute bottom-1/4 left-1/3 w-48 h-48 bg-[#D72638] rounded-full opacity-10 blur-3xl'
//                 animate={{
//                     scale: [1, 1.3, 1],
//                     x: [0, -20, 0],
//                     y: [0, 20, 0],
//                 }}
//                 transition={{
//                     repeat: Number.POSITIVE_INFINITY,
//                     duration: 10,
//                     ease: 'easeInOut',
//                     delay: 1,
//                 }}
//             />

//             {/* Left Side - 3D Illustration */}
//             <motion.div
//                 className='relative w-full lg:w-1/2 h-[400px] lg:h-full flex items-center justify-center mb-12 lg:mb-0'
//                 initial={{ opacity: 0, x: -50 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 1 }}
//                 style={{
//                     perspective: '1000px',
//                     transform: `translate(${mouseX * 0.5}px, ${
//                         mouseY * 0.5
//                     }px)`,
//                 }}
//             >
//                 <Scene3D />
//             </motion.div>

//             {/* Right Side - Content */}
//             <motion.div
//                 className='relative w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left z-10'
//                 initial={{ opacity: 0, x: 50 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 1, delay: 0.3 }}
//                 style={{
//                     transform: `translate(${mouseX * 0.2}px, ${
//                         mouseY * 0.2
//                     }px)`,
//                 }}
//             >
//                 <motion.div
//                     className='inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6'
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.6 }}
//                 >
//                     <motion.div
//                         className='w-2 h-2 bg-[#D72638] rounded-full mr-2'
//                         animate={{ opacity: [1, 0.4, 1] }}
//                         transition={{
//                             repeat: Number.POSITIVE_INFINITY,
//                             duration: 1.5,
//                         }}
//                     />
//                     <span className='text-sm font-medium'>
//                         Award-winning ad agency
//                     </span>
//                 </motion.div>

//                 <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 tracking-tight'>
//                     Elevate Your Brand with{' '}
//                     <span className='block mt-2'>
//                         <AnimatePresence mode='wait'>
//                             <motion.span
//                                 key={words[index]}
//                                 initial={{
//                                     y: 20,
//                                     opacity: 0,
//                                     filter: 'blur(10px)',
//                                 }}
//                                 animate={{
//                                     y: 0,
//                                     opacity: 1,
//                                     filter: 'blur(0px)',
//                                 }}
//                                 exit={{
//                                     y: -20,
//                                     opacity: 0,
//                                     filter: 'blur(10px)',
//                                 }}
//                                 transition={{
//                                     duration: 0.7,
//                                     ease: 'easeInOut',
//                                 }}
//                                 className='text-[#D72638] inline-block'
//                             >
//                                 {words[index]}
//                             </motion.span>
//                         </AnimatePresence>
//                     </span>
//                 </h1>

//                 <p className='text-lg text-gray-300 max-w-lg mb-8'>
//                     We craft stunning, high-converting advertisements that make
//                     your brand shine in today's competitive digital landscape.
//                 </p>

//                 <div className='flex flex-col sm:flex-row gap-4 w-full sm:w-auto'>
//                     <motion.button
//                         whileHover={{
//                             scale: 1.05,
//                             boxShadow: '0px 0px 20px rgba(215, 38, 56, 0.4)',
//                         }}
//                         whileTap={{ scale: 0.95 }}
//                         className='px-8 py-4 text-lg font-semibold text-white bg-[#D72638] rounded-full shadow-lg transition-all duration-300 flex items-center justify-center'
//                     >
//                         Get Started
//                         <motion.div
//                             animate={{ x: [0, 5, 0] }}
//                             transition={{
//                                 repeat: Number.POSITIVE_INFINITY,
//                                 duration: 1.5,
//                             }}
//                             className='ml-2'
//                         >
//                             <ChevronRight className='w-5 h-5' />
//                         </motion.div>
//                     </motion.button>

//                     <motion.button
//                         whileHover={{
//                             scale: 1.05,
//                             boxShadow: '0px 0px 20px rgba(255, 255, 255, 0.1)',
//                         }}
//                         whileTap={{ scale: 0.95 }}
//                         className='px-8 py-4 text-lg font-semibold text-white bg-white/10 backdrop-blur-lg border border-white/20 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center'
//                     >
//                         <Play className='w-5 h-5 mr-2 text-[#D72638]' />
//                         Watch Showreel
//                     </motion.button>
//                 </div>

//                 <div className='mt-12 flex items-center'>
//                     <div className='flex -space-x-2'>
//                         {[1, 2, 3, 4].map((i) => (
//                             <div
//                                 key={i}
//                                 className='w-10 h-10 rounded-full border-2 border-[#111] overflow-hidden'
//                             >
//                                 <img
//                                     src={`/placeholder.svg?height=40&width=40`}
//                                     alt={`Client ${i}`}
//                                     className='w-full h-full object-cover'
//                                 />
//                             </div>
//                         ))}
//                     </div>
//                     <div className='ml-4'>
//                         <div className='text-sm text-gray-400'>Trusted by</div>
//                         <div className='text-sm font-medium'>
//                             500+ brands worldwide
//                         </div>
//                     </div>
//                 </div>
//             </motion.div>

//             {/* Bottom Gradient */}
//             <div className='absolute bottom-0 w-full h-24 bg-gradient-to-t from-[#222] to-transparent' />
//         </section>
//     );
// }
