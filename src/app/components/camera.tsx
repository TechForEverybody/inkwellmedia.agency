'use client';
import { motion } from 'framer-motion';

export default function AnimatedCamera() {
    return (
        <div className='flex items-center justify-center h-16 bg-black'>
            <motion.svg
                width='inherit'
                height='inherit'
                viewBox='0 0 100 120'
                fill='none'
                stroke='white'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='stroke-current text-[#D72638]'
            >
                {/* Camera Body */}
                <motion.rect
                    x='20'
                    y='30'
                    width='60'
                    height='40'
                    rx='5'
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{
                        duration: 2,
                        ease: 'easeInOut',
                        // repeat: Infinity,
                    }}
                />
                {/* Lens */}
                <motion.circle
                    cx='50'
                    cy='50'
                    r='12'
                    fill='none'
                    stroke='white'
                    strokeWidth='2.8'
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{
                        duration: 1.5,
                        ease: 'easeInOut',
                        // repeat: Infinity,
                    }}
                />
                {/* Flash */}
                <motion.line
                    x1='30'
                    y1='25'
                    x2='40'
                    y2='10'
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{
                        duration: 1.2,
                        ease: 'easeInOut',
                        // repeat: Infinity,
                    }}
                />
                {/* Recording Light */}
                <motion.circle
                    cx='68'
                    cy='38'
                    r='3'
                    fill='red'
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{
                        repeat: Infinity,
                        duration: 1,
                    }}
                />
                {/* Tripod Stand */}
                {/* <motion.line
                    x1='50'
                    y1='70'
                    x2='50'
                    y2='100'
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{
                        duration: 2,
                        ease: 'easeInOut',
                        repeat: Infinity,
                    }}
                /> */}
                <motion.line
                    x1='50'
                    y1='70'
                    x2='30'
                    y2='120'
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{
                        duration: 2,
                        ease: 'easeInOut',
                        // repeat: Infinity,
                    }}
                />
                <motion.line
                    x1='50'
                    y1='70'
                    x2='50'
                    y2='120'
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{
                        duration: 2,
                        ease: 'easeInOut',
                        // repeat: Infinity,
                    }}
                />
                <motion.line
                    x1='50'
                    y1='70'
                    x2='70'
                    y2='120'
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{
                        duration: 2,
                        ease: 'easeInOut',
                        // repeat: Infinity,
                    }}
                />
            </motion.svg>
        </div>
    );
}
