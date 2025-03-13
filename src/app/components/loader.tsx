'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface LoaderProps {
    companyName?: string;
    loading: boolean;
    setLoading: (loading: boolean) => void;
}

export default function Loader({
    companyName = 'Inkwellmedia',
    loading,
    setLoading,
}: LoaderProps) {
    // const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Simulate loading progress
        const interval = setInterval(() => {
            setProgress((prev) => {
                const newProgress = prev + Math.random() * 10;
                return newProgress >= 100 ? 100 : newProgress;
            });
        }, 200);

        // Complete loading
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => {
            clearInterval(interval);
            clearTimeout(timer);
        };
    }, [setLoading]);

    if (!loading) return null;

    return (
        <div className='fixed inset-0 w-full flex flex-col items-center justify-center h-full bg-[#000433] z-50 text-white overflow-hidden'>
            {/* Animated background elements */}
            <div className='absolute z-0 mix-blend-multiply h-screen w-screen bg-cover inset-0 bg-[url(/grid-black.jpg)] opacity-20'></div>
            <div className='absolute inset-0 overflow-hidden'>
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className='absolute rounded-full bg-[#fa8128]/20'
                        initial={{
                            x: `${Math.random() * 100}vw`,
                            y: `${Math.random() * 100}vh`,
                            scale: Math.random() * 0.5 + 0.5,
                            opacity: Math.random() * 0.5 + 0.2,
                        }}
                        animate={{
                            x: `${Math.random() * 100}vw`,
                            y: `${Math.random() * 100}vh`,
                            opacity: [
                                Math.random() * 0.5 + 0.2,
                                Math.random() * 0.4 + 0.1,
                                Math.random() * 0.5 + 0.2,
                            ],
                        }}
                        transition={{
                            repeat: Number.POSITIVE_INFINITY,
                            duration: Math.random() * 20 + 10,
                            ease: 'linear',
                        }}
                        style={{
                            width: `${Math.random() * 250 + 50}px`,
                            height: `${Math.random() * 250 + 50}px`,
                        }}
                    />
                ))}
            </div>

            {/* Geometric design elements */}
            <div className='absolute inset-0 flex items-center justify-center'>
                <motion.div
                    className='w-[500px] h-[500px] border-[2px] border-[#fa8128]/30 rounded-full'
                    initial={{ rotate: 0, scale: 0.8 }}
                    animate={{ rotate: 360, scale: [0.8, 0.85, 0.8] }}
                    transition={{
                        duration: 25,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: 'linear',
                    }}
                />
                <motion.div
                    className='absolute w-[400px] h-[400px] border-[2px] border-[#fa8128]/40 rounded-full'
                    initial={{ rotate: 0 }}
                    animate={{ rotate: -360 }}
                    transition={{
                        duration: 20,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: 'linear',
                    }}
                />
                <motion.div
                    className='absolute w-[300px] h-[300px] border-[2px] border-[#fa8128]/50 rounded-full'
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 15,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: 'linear',
                    }}
                />
            </div>

            {/* Main content container */}
            <motion.div
                className='relative z-10 flex flex-col items-center'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                {/* Logo container with 3D effect */}
                <div className='relative mb-12 perspective'>
                    <motion.div
                        className='relative transform-gpu'
                        animate={{
                            rotateY: [0, 10, 0, -10, 0],
                            rotateX: [0, 5, 0, -5, 0],
                        }}
                        transition={{
                            repeat: Number.POSITIVE_INFINITY,
                            duration: 6,
                            ease: 'easeInOut',
                        }}
                    >
                        {/* Logo glow effect */}
                        <div className='absolute inset-0 blur-xl bg-[#fa8128]/40 rounded-full scale-75 -z-10' />

                        {/* Company name/logo with 3D effect */}
                        <h1 className='text-3xl md:text-7xl font-bold text-white tracking-tight'>
                            <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#fa8128] via-white to-[#fa8128]'>
                                {companyName}
                            </span>
                        </h1>

                        {/* Tagline */}
                        <motion.p
                            className='text-center text-white/80 mt-2 text-sm md:text-base tracking-widest uppercase'
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{
                                repeat: Number.POSITIVE_INFINITY,
                                duration: 3,
                            }}
                        >
                            Creative Excellence
                        </motion.p>
                    </motion.div>
                </div>

                {/* Progress indicator */}
                <div className='relative w-80 md:w-96'>
                    {/* Progress percentage */}
                    <motion.p
                        className='absolute -top-6 right-0 text-xs text-white/90 font-mono'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        {Math.round(progress)}%
                    </motion.p>

                    {/* Progress bar background with glass effect */}
                    <div className='h-1.5 w-full bg-white/20 rounded-full backdrop-blur-sm overflow-hidden'>
                        <motion.div
                            className='h-full bg-gradient-to-r from-[#fa8128]/90 to-[#fa8128]'
                            style={{ width: `${progress}%` }}
                            initial={{ width: '0%' }}
                            transition={{ ease: 'easeInOut' }}
                        />
                    </div>

                    {/* Loading text with typewriter effect */}
                    <motion.div
                        className='mt-6 text-center overflow-hidden h-6'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        <motion.p
                            className='text-white/70 text-sm font-mono'
                            animate={{
                                y: [0, -30, -60, -90, -120, -150, 0],
                            }}
                            transition={{
                                duration: 8,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: 'easeInOut',
                                times: [0, 0.1, 0.3, 0.5, 0.7, 0.9, 1],
                            }}
                        >
                            <span className='block h-6'>Initializing...</span>
                            <span className='block h-6'>Loading assets...</span>
                            <span className='block h-6'>
                                Preparing canvas...
                            </span>
                            <span className='block h-6'>
                                Crafting experience...
                            </span>
                            <span className='block h-6'>Almost ready...</span>
                            <span className='block h-6'>Launching...</span>
                        </motion.p>
                    </motion.div>
                </div>
            </motion.div>

            {/* Animated corner accents */}
            <div className='absolute top-0 left-0 w-32 h-32 overflow-hidden'>
                <motion.div
                    className='w-16 h-16 border-t-2 border-l-2 border-[#fa8128] absolute top-8 left-8'
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 20,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: 'linear',
                    }}
                />
            </div>
            <div className='absolute bottom-0 right-0 w-32 h-32 overflow-hidden'>
                <motion.div
                    className='w-16 h-16 border-b-2 border-r-2 border-[#fa8128] absolute bottom-8 right-8'
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 20,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: 'linear',
                    }}
                />
            </div>
        </div>
    );
}
