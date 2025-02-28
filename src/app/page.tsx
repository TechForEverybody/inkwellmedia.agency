'use client';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
// import BrandsCarousel from './components/carousel';
// import Footer from './components/footer';
// import AnimatedCamera from './components/camera';
// import AnimatedButton from './components/button';

const words = [
    'Creative Ads',
    'Engaging Campaigns',
    'Impactful Branding',
    'Viral Marketing',
];

export default function HeroSection() {
    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMouseX((e.clientX / window.innerWidth - 0.5) * 20);
            setMouseY((e.clientY / window.innerHeight - 0.5) * 20);
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 2500); // Change text every 2 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            {/* <section className='relative flex items-center justify-center h-screen bg-black text-white overflow-hidden'> */}
            <section className='relative flex items-center justify-center h-screen bg-gradient-to-b from-black via-[#111] to-[#222] text-white overflow-hidden'>
                {/* <section className="relative flex items-center justify-center h-screen bg-gradient-to-b from-black via-[#111] to-transparent text-white overflow-hidden"> */}
                {/* Background Animated Particles */}
                <motion.div
                    className="absolute inset-0 bg-[url('/bg-pattern.svg')] bg-cover opacity-10"
                    animate={{ opacity: [0.1, 0.2, 0.1] }}
                    transition={{
                        repeat: Infinity,
                        duration: 5,
                        ease: 'easeInOut',
                    }}
                />

                {/* Hero Content */}
                <motion.div
                    className='relative text-center'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    style={{ transform: `translate(${mouseX}px, ${mouseY}px)` }}
                >
                    <h1 className='text-6xl font-bold mb-4 tracking-wide'>
                        Elevate Your Brand with{' '}
                        <span className='inline-block'>
                            <AnimatePresence mode='wait'>
                                <motion.span
                                    key={words[index]}
                                    initial={{
                                        y: 50,
                                        opacity: 0,
                                        scale: 0.8,
                                        filter: 'blur(10px)',
                                    }}
                                    animate={{
                                        y: 0,
                                        opacity: 1,
                                        scale: 1,
                                        filter: 'blur(0px)',
                                    }}
                                    exit={{
                                        y: -50,
                                        opacity: 0,
                                        scale: 1.1,
                                        filter: 'blur(10px)',
                                    }}
                                    transition={{
                                        duration: 1,
                                        ease: 'easeInOut',
                                    }}
                                    className='w-full text-[#D72638]'
                                >
                                    {words[index]}
                                </motion.span>
                            </AnimatePresence>
                        </span>
                    </h1>

                    <p className='text-lg text-gray-300 max-w-lg mx-auto'>
                        We craft stunning, high-converting advertisements that
                        make your brand shine.
                    </p>

                    {/* <AnimatedCamera /> */}

                    {/* CTA Button */}
                    <div className='flex justify-between max-w-sm mx-auto mt-6'>
                        <motion.button
                            whileHover={{
                                scale: 1.1,
                                boxShadow: '0px 0px 20px rgba(255, 0, 0, 0.7)',
                            }}
                            whileTap={{ scale: 0.95 }}
                            className='mt-6 px-6 py-3 text-lg font-semibold text-white bg-white/10 backdrop-blur-lg border border-white/20 rounded-full shadow-lg transition-all duration-300 hover:bg-[#D72638] hover:border-[#D72638]'
                        >
                            Get Started
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
                        <motion.button
                            whileHover={{
                                scale: 1.1,
                                boxShadow: '0px 0px 20px rgba(255, 0, 0, 0.7)',
                            }}
                            whileTap={{ scale: 0.95 }}
                            className='flex justify-center items-center mt-6 px-6 py-3 text-lg font-semibold text-white backdrop-blur-lg border rounded-full shadow-lg transition-all duration-300 border-[#d72638]'
                        >
                            Our Portfolio{' '}
                            <motion.div
                                animate={{ opacity: [0.2, 1, 0.2] }}
                                transition={{ repeat: Infinity, duration: 1 }}
                                className='w-2 h-2 bg-red-500 rounded-full ml-1'
                            ></motion.div>
                        </motion.button>
                    </div>
                    {/* <AnimatedButton
                    className='mt-6 px-6 py-3 text-lg font-semibold text-white bg-white/10 backdrop-blur-lg border border-white/20 rounded-full shadow-lg transition-all duration-300 hover:bg-[#D72638] hover:border-[#D72638]'
                    text='Learn More'
                    onClick={() => alert('Clicked!')}
                    /> */}
                </motion.div>

                {/* Scroll-Based Text Animations */}
                {/* <div className='absolute bottom-20 w-full text-center'>
                    <motion.p
                        className='text-gray-300 text-xl'
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        🚀 Let&apos;s take your brand to the next level!
                    </motion.p>
                </div> */}

                {/* Floating Shapes */}
                <motion.div
                    className='absolute bottom-10 right-10 w-16 h-16 bg-[#D72638] rounded-full opacity-50 blur-3xl'
                    animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
                    transition={{
                        repeat: Infinity,
                        duration: 5,
                        ease: 'easeInOut',
                    }}
                />

                <div className='absolute -top-20 right-10 w-32 h-32 bg-[#D72638] opacity-20 blur-2xl rounded-full animate-pulse'></div>
                <div className='absolute bottom-0 -left-20 w-32 h-32 bg-[#D72638] opacity-20 blur-3xl rounded-full animate-pulse'></div>

                {/* Scroll Down Indicator */}
                {/* <motion.div
                    className='absolute bottom-10 text-center'
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                >
                    <p className='text-gray-400'>Scroll down for more</p>
                    <motion.div
                        className='w-6 h-6 mx-auto mt-2 border-2 border-white rounded-full'
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                    />
                </motion.div> */}
                {/* <div className='absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center'>
                    <BrandsCarousel />
                </div> */}
                <div className='absolute bottom-0 w-full h-24 bg-gradient-to-t from-[#222] to-transparent'></div>
            </section>
            {/* <footer className='w-full py-6 text-center bg-[#111] text-gray-400'>
                &copy; 2025 Inkwell Media. All rights reserved.
            </footer> */}
            {/* <section className='relative flex items-center justify-center h-screen bg-black text-white overflow-hidden'></section> */}
        </>
    );
}
