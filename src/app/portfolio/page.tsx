'use client';
import { useState } from 'react';
import Image from 'next/image';
import { X, PlayCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import BrandsCarousel from '../components/carousel';

const portfolioVideos = [
    { title: 'Riyasat Sankalp', videoId: 'LjptiQ9uraE' },
    { title: 'Matrubhumi Developers', videoId: 'H6QoS8K_d-E' },
    { title: 'Sahyadri Infrastructure', videoId: 'Ojaq3k0U8b4' },
    { title: 'Dreamland Properties', videoId: 'WBrCNJnnmuk' },
    { title: 'Propzone Mumbai', videoId: '57jgxgvpRsM' },
];

export default function PortfolioPage() {
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

    return (
        <div>
            <section className='min-h-screen bg-gradient-to-b from-black via-[#111] to-[#222] text-white py-16 px-6'>
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className='text-center mt-10 text-5xl font-bold mb-12 text-shadow-custom'
                >
                    Our Portfolio
                </motion.h2>

                {/* Video Grid */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto'>
                    {portfolioVideos.map((video, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className='relative group overflow-hidden rounded-xl shadow-lg border border-gray-700 cursor-pointer hover:scale-105 transition-all duration-300'
                            onClick={() => setSelectedVideo(video.videoId)}
                        >
                            <Image
                                src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`}
                                alt={video.title}
                                width={480}
                                height={270}
                                className='w-full h-auto object-cover group-hover:opacity-80 transition'
                            />
                            <div className='absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-300'>
                                <PlayCircle className='h-16 w-16 text-red-600 drop-shadow-lg animate-pulse' />
                            </div>
                            <p className='p-4 text-center text-lg font-semibold tracking-wide'>
                                {video.title}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Fullscreen Video Modal */}
                <AnimatePresence>
                    {selectedVideo && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className='fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50'
                        >
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.8, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className='relative w-full max-w-4xl'
                            >
                                <iframe
                                    src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1&rel=0&modestbranding=1`}
                                    allow='autoplay; encrypted-media'
                                    className='w-full h-[60vh] rounded-lg shadow-xl'
                                ></iframe>
                                <button
                                    onClick={() => setSelectedVideo(null)}
                                    className='absolute -top-12 -right-12 bg-red-600 p-3 rounded-full text-white text-xl hover:bg-red-800 transition'
                                >
                                    <X />
                                </button>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
                <div className='mt-8'>
                    <BrandsCarousel />
                </div>
            </section>
        </div>
    );
}
