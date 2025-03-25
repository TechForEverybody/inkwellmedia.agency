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
