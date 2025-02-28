'use client';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Image from 'next/image';

const brands = [
    { src: '/dreamland.png', width: 150, height: 200 },
    { src: '/landson.png', width: 120, height: 200 },
    { src: '/matrubhumi.png', width: 150, height: 200 },
    { src: '/navya.png', width: 100, height: 200 },
    { src: '/pz.png', width: 140, height: 200 },
    { src: '/sahyadri.png', width: 140, height: 200 },
    { src: '/venkatesha.png', width: 170, height: 200 },
];

export default function BrandsCarousel() {
    return (
        // <div className='w-full py-10 bg-black overflow-hidden'>

        
        <div className='w-96 py-10 bg-black overflow-hidden'>
            <h2 className='text-center text-3xl font-bold text-white mb-6'>
                Our Clients
            </h2>
            <div className='relative w-full overflow-hidden'>
                <div className='scrolling-wrapper flex'>
                    {[...brands, ...brands].map(
                        (
                            brand,
                            index // Duplicate for seamless loop
                        ) => (
                            <div key={index} className='flex-shrink-0 px-6'>
                                <Image
                                    src={brand.src}
                                    alt='Brand Logo'
                                    width={brand.width}
                                    height={brand.height}
                                    className='grayscale hover:grayscale-0 transition duration-300'
                                />
                            </div>
                        )
                    )}
                </div>
            </div>

            {/* CSS for Infinite Scrolling */}
            <style jsx>{`
                .scrolling-wrapper {
                    display: flex;
                    width: max-content;
                    animation: scroll 20s linear infinite;
                }

                @keyframes scroll {
                    from {
                        transform: translateX(0%);
                    }
                    to {
                        transform: translateX(-50%);
                    }
                }
            `}</style>
        </div>
        // </div>
    );
}
