'use client';
import { motion } from 'framer-motion';

export default function AnimatedCamera() {
    return (
        <motion.div
            className='relative w-full h-screen flex items-center justify-center'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            {/* Camera Body */}
            <motion.div
                className='relative w-48 h-screen bg-black rounded-lg shadow-xl'
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
            >
                {/* Camera Lens */}
                <motion.div
                    className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gray-800 rounded-full border-4 border-gray-700'
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                        delay: 0.6,
                        duration: 0.8,
                        type: 'spring',
                        stiffness: 200,
                    }}
                >
                    {/* Inner Lens */}
                    <motion.div
                        className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gray-900 rounded-full border-2 border-gray-800'
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                    >
                        {/* Lens Glass */}
                        <motion.div
                            className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-70'
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 1, duration: 0.5 }}
                        >
                            {/* Lens Reflection */}
                            <motion.div
                                className='absolute top-1 right-1 w-2 h-2 bg-white rounded-full opacity-80'
                                animate={{
                                    opacity: [0.8, 1, 0.8],
                                    scale: [1, 1.2, 1],
                                }}
                                transition={{
                                    repeat: Number.POSITIVE_INFINITY,
                                    duration: 2,
                                    repeatType: 'reverse',
                                }}
                            />
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Camera Top */}
                <motion.div
                    className='absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-4 bg-gray-800 rounded-t-md'
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                    {/* Flash */}
                    <motion.div
                        className='absolute top-0 right-4 w-6 h-2 bg-gray-300 rounded-sm'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2, duration: 0.3 }}
                    />

                    {/* Button */}
                    <motion.div
                        className='absolute top-0 left-4 w-4 h-2 bg-[#D72638] rounded-full'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2, duration: 0.3 }}
                        whileHover={{ scale: 1.2 }}
                    />
                </motion.div>

                {/* Camera Grip */}
                <motion.div
                    className='absolute -right-6 top-1/2 -translate-y-1/2 w-6 h-20 bg-gray-800 rounded-r-lg'
                    initial={{ x: 10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                />
            </motion.div>

            {/* Red Recording Light */}
            <motion.div
                className='absolute top-4 right-4 w-3 h-3 bg-[#D72638] rounded-full'
                animate={{
                    opacity: [1, 0.3, 1],
                    boxShadow: [
                        '0 0 5px 2px rgba(215, 38, 56, 0.3)',
                        '0 0 8px 4px rgba(215, 38, 56, 0.6)',
                        '0 0 5px 2px rgba(215, 38, 56, 0.3)',
                    ],
                }}
                transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 2,
                    repeatType: 'loop',
                }}
            />
        </motion.div>
    );
}
