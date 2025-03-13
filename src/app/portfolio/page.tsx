// 'use client';
// import { useState } from 'react';
// import Image from 'next/image';
// import { X, PlayCircle } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion';
// import BrandsCarousel from '../components/carousel';

// const portfolioVideos = [
//     { title: 'Riyasat Sankalp', videoId: 'LjptiQ9uraE' },
//     { title: 'Matrubhumi Developers', videoId: 'H6QoS8K_d-E' },
//     { title: 'Sahyadri Infrastructure', videoId: 'Ojaq3k0U8b4' },
//     { title: 'Dreamland Properties', videoId: 'WBrCNJnnmuk' },
//     { title: 'Propzone Mumbai', videoId: '57jgxgvpRsM' },
// ];

// export default function PortfolioPage() {
//     const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

//     return (
//         <div>
//             {/* <section className='min-h-screen bg-gradient-to-b from-black via-[#111] to-[#222] text-white py-16 px-6'> */}
//             <section className='min-h-screen flex items-center justify-between bg-[#fff] text-white px-16 px-6 border-t-4 border-[#000433]'>
//                 <motion.h2
//                     initial={{ opacity: 0, y: 30 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6 }}
//                     className='text-center mt-10 text-5xl font-bold mb-12 text-shadow-custom'
//                 >
//                     Our Portfolio
//                 </motion.h2>

//                 {/* Video Grid */}
//                 <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto'>
//                     {portfolioVideos.map((video, index) => (
//                         <motion.div
//                             key={index}
//                             initial={{ opacity: 0, y: 40 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.5, delay: index * 0.1 }}
//                             className='relative group overflow-hidden rounded-xl shadow-lg border border-gray-700 cursor-pointer hover:scale-105 transition-all duration-300'
//                             onClick={() => setSelectedVideo(video.videoId)}
//                         >
//                             <Image
//                                 src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`}
//                                 alt={video.title}
//                                 width={480}
//                                 height={270}
//                                 className='w-full h-auto object-cover group-hover:opacity-80 transition'
//                             />
//                             <div className='absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-300'>
//                                 <PlayCircle className='h-16 w-16 text-red-600 drop-shadow-lg animate-pulse' />
//                             </div>
//                             <p className='p-4 text-center text-lg font-semibold tracking-wide'>
//                                 {video.title}
//                             </p>
//                         </motion.div>
//                     ))}
//                 </div>

//                 {/* Fullscreen Video Modal */}
//                 <AnimatePresence>
//                     {selectedVideo && (
//                         <motion.div
//                             initial={{ opacity: 0 }}
//                             animate={{ opacity: 1 }}
//                             exit={{ opacity: 0 }}
//                             className='fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50'
//                         >
//                             <motion.div
//                                 initial={{ scale: 0.8, opacity: 0 }}
//                                 animate={{ scale: 1, opacity: 1 }}
//                                 exit={{ scale: 0.8, opacity: 0 }}
//                                 transition={{ duration: 0.3 }}
//                                 className='relative w-full max-w-4xl'
//                             >
//                                 <iframe
//                                     src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1&rel=0&modestbranding=1`}
//                                     allow='autoplay; encrypted-media'
//                                     className='w-full h-[60vh] rounded-lg shadow-xl'
//                                 ></iframe>
//                                 <button
//                                     onClick={() => setSelectedVideo(null)}
//                                     className='absolute -top-12 -right-12 bg-red-600 p-3 rounded-full text-white text-xl hover:bg-red-800 transition'
//                                 >
//                                     <X />
//                                 </button>
//                             </motion.div>
//                         </motion.div>
//                     )}
//                 </AnimatePresence>
//                 <div className='mt-8'>
//                     <BrandsCarousel />
//                 </div>
//             </section>
//         </div>
//     );
// }

'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
    X,
    PlayCircle,
    Instagram,
    Youtube,
    Film,
    ExternalLink,
    YoutubeIcon,
    FilmIcon,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import BrandsCarousel from '../components/carousel';

// Define types for different video sources
type VideoType = 'youtube' | 'shorts' | 'reel' | 'custom';

interface PortfolioItem {
    id: string;
    title: string;
    type: VideoType;
    thumbnail: string;
    videoUrl: string;
    aspectRatio?: string; // For custom aspect ratios
}

// Sample portfolio data with different video types
const portfolioItems: PortfolioItem[] = [
    {
        id: '02',
        title: 'Matrubhoomi Developers',
        type: 'youtube',
        thumbnail: 'https://img.youtube.com/vi/fC39o9rfl-g/hqdefault.jpg',
        videoUrl: 'fC39o9rfl-g',
    },
    {
        id: '0',
        title: 'Propzone',
        type: 'youtube',
        thumbnail: 'https://img.youtube.com/vi/_sWam2SD_XM/hqdefault.jpg',
        videoUrl: '_sWam2SD_XM',
    },
    {
        id: '01',
        title: 'Matrubhoomi Developers',
        type: 'youtube',
        thumbnail: 'https://img.youtube.com/vi/FeVQc7ruivE/hqdefault.jpg',
        videoUrl: 'FeVQc7ruivE',
    },

    {
        id: '03',
        title: 'Matrubhoomi Developers',
        type: 'shorts',
        thumbnail: 'https://img.youtube.com/vi/-eBeMUjt5k0/hqdefault.jpg',
        videoUrl: '-eBeMUjt5k0',
    },
    {
        id: '04',
        title: 'Matrubhoomi Developers',
        type: 'shorts',
        thumbnail: 'https://img.youtube.com/vi/pBQidJHykcY/hqdefault.jpg',
        videoUrl: 'pBQidJHykcY',
    },
    {
        id: '05',
        title: 'Matrubhoomi Developers',
        type: 'shorts',
        thumbnail: 'https://img.youtube.com/vi/isivFDOGemY/hqdefault.jpg',
        videoUrl: 'isivFDOGemY',
    },
    {
        id: '06',
        title: 'Matrubhoomi Developers',
        type: 'shorts',
        thumbnail: 'https://img.youtube.com/vi/zFL4Yeh_8Qc/hqdefault.jpg',
        videoUrl: 'zFL4Yeh_8Qc',
    },
    {
        id: '07',
        title: 'Matrubhoomi Developers',
        type: 'shorts',
        thumbnail: 'https://img.youtube.com/vi/vqn5NRrcm6g/hqdefault.jpg',
        videoUrl: 'vqn5NRrcm6g',
    },
    {
        id: '007',
        title: 'Propzone',
        type: 'youtube',
        thumbnail: 'https://img.youtube.com/vi/VEOTMPZFtbc/hqdefault.jpg',
        videoUrl: 'VEOTMPZFtbc',
    },
    {
        id: '008',
        title: 'Cityprop',
        type: 'youtube',
        thumbnail: 'https://img.youtube.com/vi/dRG5AXarqII/hqdefault.jpg',
        videoUrl: 'dRG5AXarqII',
    },
    {
        id: '009',
        title: 'Cityprop',
        type: 'youtube',
        thumbnail: 'https://img.youtube.com/vi/h5wFxHRaoqk/hqdefault.jpg',
        videoUrl: 'h5wFxHRaoqk',
    },
    {
        id: '08',
        title: 'Matrubhoomi Developers',
        type: 'shorts',
        thumbnail: 'https://img.youtube.com/vi/BNWG7Nu0L1M/hqdefault.jpg',
        videoUrl: 'BNWG7Nu0L1M',
    },
    {
        id: '09',
        title: 'Matrubhoomi Developers',
        type: 'shorts',
        thumbnail: 'https://img.youtube.com/vi/bnHKNPTXT6s/hqdefault.jpg',
        videoUrl: 'bnHKNPTXT6s',
    },
    {
        id: '10',
        title: 'Matrubhoomi Developers',
        type: 'shorts',
        thumbnail: 'https://img.youtube.com/vi/jHP95mpSAmk/hqdefault.jpg',
        videoUrl: 'jHP95mpSAmk',
    },
    {
        id: '11',
        title: 'Matrubhoomi Developers',
        type: 'shorts',
        thumbnail: 'https://img.youtube.com/vi/OvuRPvj4Q7c/hqdefault.jpg',
        videoUrl: 'OvuRPvj4Q7c',
    },
    {
        id: '12',
        title: 'Matrubhoomi Developers',
        type: 'shorts',
        thumbnail: 'https://img.youtube.com/vi/4HsAAXdavIA/hqdefault.jpg',
        videoUrl: '4HsAAXdavIA',
    },
    {
        id: '13',
        title: 'Propzone',
        type: 'shorts',
        thumbnail: 'https://img.youtube.com/vi/wjFY_h5R-s0/hqdefault.jpg',
        videoUrl: 'wjFY_h5R-s0',
    },
    {
        id: '14',
        title: 'Propzone',
        type: 'shorts',
        thumbnail: 'https://img.youtube.com/vi/NPo7JnVoINk/hqdefault.jpg',
        videoUrl: 'NPo7JnVoINk',
    },
    {
        id: '15',
        title: 'Propzone',
        type: 'shorts',
        thumbnail: 'https://img.youtube.com/vi/v-5lj2KO6tE/hqdefault.jpg',
        videoUrl: 'v-5lj2KO6tE',
    },
    {
        id: '16',
        title: 'Propzone',
        type: 'shorts',
        thumbnail: 'https://img.youtube.com/vi/1gpw6RQQ5KQ/hqdefault.jpg',
        videoUrl: '1gpw6RQQ5KQ',
    },
    {
        id: '1',
        title: 'Riyasat Sankalp',
        type: 'youtube',
        thumbnail: 'https://img.youtube.com/vi/LjptiQ9uraE/hqdefault.jpg',
        videoUrl: 'LjptiQ9uraE',
    },
    {
        id: '2',
        title: 'Matrubhumi Developers',
        type: 'youtube',
        thumbnail: 'https://img.youtube.com/vi/H6QoS8K_d-E/hqdefault.jpg',
        videoUrl: 'H6QoS8K_d-E',
    },
    {
        id: '3',
        title: 'Inkwellmedia Agency',
        type: 'reel',
        thumbnail: '/placeholder.svg?height=270&width=480',
        videoUrl: 'https://www.instagram.com/reel/DGnGamVNVLD/',
    },
    {
        id: '4',
        title: 'Sahyadri Infrastructure',
        type: 'youtube',
        thumbnail: 'https://img.youtube.com/vi/Ojaq3k0U8b4/hqdefault.jpg',
        videoUrl: 'Ojaq3k0U8b4',
    },
    // {
    //     id: '5',
    //     title: 'Custom Project Showcase',
    //     type: 'custom',
    //     thumbnail: '/placeholder.svg?height=270&width=480',
    //     videoUrl: 'https://example.com/videos/custom-video.mp4',
    // },
    {
        id: '6',
        title: 'Dreamland Properties',
        type: 'youtube',
        thumbnail: 'https://img.youtube.com/vi/WBrCNJnnmuk/hqdefault.jpg',
        videoUrl: 'WBrCNJnnmuk',
    },
    {
        id: '7',
        title: 'Propzone Mumbai',
        type: 'youtube',
        thumbnail: 'https://img.youtube.com/vi/57jgxgvpRsM/hqdefault.jpg',
        videoUrl: '57jgxgvpRsM',
    },
    // {
    //     id: '8',
    //     title: 'Instagram Promotion',
    //     type: 'reel',
    //     thumbnail: '/placeholder.svg?height=270&width=480',
    //     videoUrl: 'https://www.instagram.com/reel/another-sample/',
    // },
];

export default function PortfolioPage() {
    const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(
        null
    );
    const [filter, setFilter] = useState<VideoType | 'all'>('all');

    const filteredItems =
        filter === 'all'
            ? portfolioItems
            : portfolioItems.filter((item) => item.type === filter);

    // Function to render the appropriate video player based on type
    const renderVideoPlayer = () => {
        if (!selectedItem) return null;

        switch (selectedItem.type) {
            case 'youtube':
                return (
                    <iframe
                        src={`https://www.youtube.com/embed/${selectedItem.videoUrl}?autoplay=1&rel=0&modestbranding=1`}
                        allow='autoplay; encrypted-media'
                        className='w-full aspect-video rounded-lg shadow-xl'
                        title={selectedItem.title}
                    />
                );

            case 'shorts':
                return (
                    <iframe
                        src={`https://www.youtube.com/embed/${selectedItem.videoUrl}?autoplay=1&rel=0&modestbranding=1`}
                        allow='autoplay; encrypted-media'
                        className='w-full aspect-video rounded-lg shadow-xl'
                        title={selectedItem.title}
                    />
                );
            case 'reel':
                return (
                    <div className='flex flex-col items-center justify-center'>
                        <p className='text-white mb-4'>
                            Instagram Reel would load here
                        </p>
                        <a
                            href={selectedItem.videoUrl}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-full text-white'
                        >
                            <Instagram size={20} />
                            <span>View on Instagram</span>
                        </a>
                    </div>
                );
            case 'custom':
                return (
                    <video
                        controls
                        autoPlay
                        className='w-full aspect-video rounded-lg shadow-xl'
                    >
                        <source src={selectedItem.videoUrl} type='video/mp4' />
                        Your browser does not support the video tag.
                    </video>
                );
            default:
                return null;
        }
    };

    // Function to get icon based on video type
    const getVideoTypeIcon = (type: VideoType) => {
        switch (type) {
            case 'youtube':
                return <Youtube className='h-5 w-5 text-red-600' />;
            case 'shorts':
                return <YoutubeIcon className='h-5 w-5 text-red-600' />;
            case 'reel':
                return <Instagram className='h-5 w-5 text-pink-500' />;
            case 'custom':
                return <Film className='h-5 w-5 text-blue-500' />;
        }
    };

    return (
        // <div className='bg-gradient-to-b from-primary/5 via-background to-background min-h-screen'>
        <div className='flex bg-[#fff] text-white px-12 pt-24'>
            <section className='container mx-auto py-16 px-4 sm:px-6 lg:px-8'>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className='text-center mb-12'
                >
                    <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-[#fa8128] mb-4'>
                        Our Portfolio
                    </h1>
                    <p className='text-muted-foreground max-w-2xl mx-auto text-lg text-gray-800 font-roboto-light'>
                        Explore our creative work across various platforms and
                        formats
                    </p>
                </motion.div>

                {/* Filter Buttons */}
                <div className='flex flex-wrap justify-center gap-2 mb-10'>
                    <button
                        onClick={() => setFilter('all')}
                        className={cn(
                            'px-4 py-2 rounded-full text-sm font-medium transition-all',
                            filter === 'all'
                                ? 'bg-[#000433] text-white'
                                : 'bg-[#fff] text-[#000433] hover:bg-secondary/80'
                        )}
                    >
                        All Projects
                    </button>
                    <button
                        onClick={() => setFilter('youtube')}
                        className={cn(
                            'px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2',
                            filter === 'youtube'
                                ? 'bg-red-600 text-white'
                                : 'bg-white text-red-600 hover:bg-red-600/10'
                        )}
                    >
                        <Youtube size={16} />
                        YouTube
                    </button>
                    <button
                        onClick={() => setFilter('shorts')}
                        className={cn(
                            'px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2',
                            filter === 'shorts'
                                ? 'bg-red-600 text-white'
                                : 'bg-white text-red-600 hover:bg-red-600/10'
                        )}
                    >
                        <FilmIcon size={16} />
                        Shorts
                    </button>
                    <button
                        onClick={() => setFilter('reel')}
                        className={cn(
                            'px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2',
                            filter === 'reel'
                                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                                : 'bg-white text-[#800080] hover:bg-pink-600/10'
                        )}
                    >
                        <Instagram size={16} />
                        Reels
                    </button>
                    <button
                        onClick={() => setFilter('custom')}
                        className={cn(
                            'px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2',
                            filter === 'custom'
                                ? 'bg-blue-600 text-white'
                                : 'bg-white text-[#2563eb] hover:bg-blue-600/10'
                        )}
                    >
                        <Film size={16} />
                        Custom
                    </button>
                </div>

                {/* Video Grid */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8'>
                    {filteredItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className='group relative overflow-hidden rounded-xl bg-card shadow-lg border border-border hover:shadow-xl transition-all duration-300'
                        >
                            <div className='aspect-video relative overflow-hidden'>
                                <Image
                                    src={item.thumbnail || '/placeholder.svg'}
                                    alt={item.title}
                                    width={480}
                                    height={270}
                                    className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                                />
                                <div
                                    className='absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                  flex flex-col justify-center items-center gap-3'
                                >
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => setSelectedItem(item)}
                                        className='bg-primary/90 hover:bg-primary text-primary-foreground rounded-full p-3 shadow-lg'
                                    >
                                        <PlayCircle className='h-8 w-8' />
                                    </motion.button>
                                    <span className='text-white/90 text-sm font-medium'>
                                        Click to play
                                    </span>
                                </div>

                                {/* Video type badge */}
                                <div className='absolute top-2 right-2 bg-background/80 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1'>
                                    {getVideoTypeIcon(item.type)}
                                    <span className='text-xs font-medium'>
                                        {item.type}
                                    </span>
                                </div>
                            </div>

                            <div className='p-4'>
                                <h3 className='font-semibold text-[#000433] text-card-foreground line-clamp-1'>
                                    {item.title}
                                </h3>
                                <div className='mt-2 flex justify-between items-center'>
                                    <span className='text-xs text-muted-foreground text-gray-600'>
                                        {item.type === 'youtube'
                                            ? 'YouTube Video'
                                            : item.type === 'reel'
                                            ? 'Instagram Reel'
                                            : 'Custom Video'}
                                    </span>
                                    <button
                                        onClick={() => setSelectedItem(item)}
                                        className='text-primary text-orange-950 hover:text-primary/80 text-sm flex items-center gap-1'
                                    >
                                        <span>Watch</span>
                                        <ExternalLink size={14} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Empty state */}
                {filteredItems.length === 0 && (
                    <div className='text-center py-16'>
                        <p className='text-muted-foreground'>
                            No videos found for this filter.
                        </p>
                    </div>
                )}

                {/* Fullscreen Video Modal */}
                <AnimatePresence>
                    {selectedItem && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className='fixed inset-0 bg-black/95 flex justify-center items-center z-50 p-4 sm:p-6 md:p-10'
                            onClick={() => setSelectedItem(null)}
                        >
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.8, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className='relative w-full max-w-5xl'
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className='bg-card rounded-lg overflow-hidden shadow-2xl'>
                                    <div className='p-4 flex justify-between items-center border-b border-border'>
                                        <div className='flex items-center gap-2'>
                                            {getVideoTypeIcon(
                                                selectedItem.type
                                            )}
                                            <h3 className='font-semibold text-card-foreground'>
                                                {selectedItem.title}
                                            </h3>
                                        </div>
                                        <button
                                            onClick={() =>
                                                setSelectedItem(null)
                                            }
                                            className='bg-secondary hover:bg-secondary/80 text-secondary-foreground p-2 rounded-full transition-colors'
                                        >
                                            <X size={20} />
                                        </button>
                                    </div>
                                    <div className='bg-black'>
                                        {renderVideoPlayer()}
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Brands Carousel Section */}
                <div className='mt-20 mb-10'>
                    <BrandsCarousel />
                </div>
            </section>
        </div>
    );
}
