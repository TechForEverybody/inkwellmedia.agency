'use client';
import { useState } from 'react';
import Image from 'next/image';
import { LucideX } from 'lucide-react';

const portfolioVideos = [
    { title: 'Riyasat Sankalp', videoId: 'LjptiQ9uraE' },
    { title: 'Matrubhumi Developers', videoId: 'H6QoS8K_d-E' },
    { title: 'Sahyadri Infrastructure', videoId: 'Ojaq3k0U8b4' },
    { title: 'Dreamland Properties', videoId: 'WBrCNJnnmuk' },
    { title: 'Propzone Mumbai', videoId: '57jgxgvpRsM' },
    // { title: 'Samsung New Launch', videoId: 'tgbNymZ7vqY' },
    // { title: 'Adidas Sports Ad', videoId: '5NV6Rdv1a3I' },
    // { title: 'Pepsi Branding', videoId: '0J2QdDbelmY' },
    // { title: 'Tesla Innovation Ad', videoId: 'ktvTqknDobU' },
    // { title: 'Amazon Delivery Ad', videoId: 'Zi_XLOBDo_Y' },
];

export default function PortfolioPage() {
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

    return (
        <div className='min-h-screen bg-black text-white py-12 px-6'>
            <h2 className='text-center mt-16 underline underline-offset-4 decoration-double text-4xl font-bold mb-8 text-white'>
                Our Portfolio
            </h2>

            {/* Video Grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto'>
                {portfolioVideos.map((video, index) => (
                    <div
                        key={index}
                        className='relative group overflow-hidden rounded-xl shadow-lg border border-gray-700 cursor-pointer'
                        onClick={() => setSelectedVideo(video.videoId)}
                    >
                        <Image
                            src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`}
                            alt={video.title}
                            width={480}
                            height={270}
                            className='w-full h-auto object-cover group-hover:opacity-75 transition'
                        />
                        <div className='absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition'>
                            <button className='bg-red-600 p-3 h-20 w-20 rounded-full text-white text-2xl'>
                                ▶
                            </button>
                        </div>
                        <p className='p-4 text-center text-lg font-semibold'>
                            {video.title}
                        </p>
                    </div>
                ))}
            </div>

            {/* Fullscreen Video Modal */}
            {selectedVideo && (
                <div className='fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50'>
                    <div className='relative w-full max-w-4xl'>
                        <iframe
                            src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1&rel=0&modestbranding=1`}
                            allow='autoplay; encrypted-media'
                            className='w-full h-[60vh] rounded-lg shadow-xl'
                        ></iframe>
                        <button
                            onClick={() => setSelectedVideo(null)}
                            className='absolute -top-10 -right-10 bg-red-600 p-3 rounded-full text-white text-xl hover:bg-red-800 transition'
                        >
                            <LucideX />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
