import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

export default function Asker() {
    const controls = useAnimation();
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-100px' });

    useEffect(() => {
        if (inView) {
            controls.start({ scale: 1, opacity: 1, rotate: 0, transition: { duration: 0.8 } });
        }
    }, [controls, inView]);

    return (
        <motion.section
            ref={ref}
            className="py-20 relative overflow-hidden"
            style={{ background: 'radial-gradient(circle at top left, #9C27B0, #4E1C50)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <div className="container mx-auto px-4">
                <motion.div
                    className="relative bg-[rgba(255,255,255,0.05)] backdrop-blur-lg border border-white/20 rounded-3xl p-12 overflow-hidden hover:shadow-2xl"
                    initial={{ scale: 0.8, opacity: 0, rotate: 5 }}
                    animate={controls}
                    whileHover={{ scale: 1.02, rotate: 0 }}
                >
                    {/* Decorative accents */}
                    <motion.span
                        className="absolute top-6 left-6 w-5 h-5 rounded-full bg-gradient-to-tr from-[#FF6A3D] to-[#FFA62B]"
                        animate={{ y: [-10, 10, -10] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                    />
                    <motion.span
                        className="absolute bottom-6 right-6 w-6 h-6 border-2 border-white rounded-full"
                        animate={{ x: [10, -10, 10] }}
                        transition={{ repeat: Infinity, duration: 3 }}
                    />

                    {/* Main Heading */}
                    <motion.h2
                        className="text-4xl md:text-6xl font-bold text-white text-center mb-4"
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        Beyond Videos, We Build Experiences
                    </motion.h2>

                    {/* Subheading */}
                    <motion.p
                        className="text-center text-white/80 mb-8 text-lg max-w-3xl mx-auto"
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        From cinematic films and dynamic animations to immersive brand activations, our studio is your partner in telling stories that captivate and inspire.
                    </motion.p>

                    {/* Call to Action */}
                    <motion.div
                        className="flex justify-center"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.6, type: 'spring', stiffness: 120 }}
                    >
                        <motion.a
                            href="/contact"
                            className="inline-block bg-gradient-to-r from-[#FF6A3D] to-[#FFA62B] text-white rounded-full px-10 py-4 text-lg font-medium shadow-xl"
                            whileHover={{ scale: 1.1, boxShadow: '0px 0px 20px rgba(255,106,61,0.7)' }}
                            transition={{ type: 'spring', stiffness: 200 }}
                        >
                            Get Started →
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    );
}
