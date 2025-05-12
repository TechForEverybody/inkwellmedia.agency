'use client';
import Image from 'next/image';

const brands = [
    { name: 'Dreamlands', src: '/dreamland.png', width: 150, height: 200 },
    {
        name: 'Landson Developers',
        src: '/landson.png',
        width: 150,
        height: 200,
    },
    { name: 'Matrubhumi', src: '/matrubhumi.png', width: 150, height: 200 },
    { name: 'Navya', src: '/navya.png', width: 150, height: 200 },
    { name: 'Propzone', src: '/pz.png', width: 140, height: 200 },
    { name: 'Sahyadri', src: '/sahyadri.png', width: 140, height: 200 },
    { name: 'Venkatesha', src: '/venkatesha.png', width: 200, height: 200 },
    { name: 'Cityprop', src: '/cityprop.png', width: 200, height: 200 },
];

export default function BrandsCarousel() {
    return (
        <div className='flex justify-center'>
            <div className='md:w-2/3 pt-10 bg-inherit overflow-hidden'>
                <h2 className='text-center text-3xl font-bold text-[#fa8128] mb-8'>
                    Trusted By Leading Brands
                </h2>
                <div className='w-full overflow-hidden'>
                    <div className='scrolling-wrapper flex'>
                        {[...brands, ...brands].map(
                            (
                                brand,
                                index // Duplicate for seamless loop
                            ) => (
                                <div
                                    key={index}
                                    className='flex-shrink-0 flex flex-col items-center justify-between font-roboto-light'
                                >
                                    <Image
                                        src={brand.src}
                                        alt='Brand Logo'
                                        width={brand.width}
                                        height={brand.height}
                                        className='transition duration-300 px-6'
                                    />
                                    {brand.name}
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
        </div>
    );
}

// 'use client';

// import { useEffect, useState, useRef } from 'react';
// import Image from 'next/image';
// import { motion } from 'framer-motion';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import { cn } from '@/lib/utils';
// import { useMediaQuery } from '@/hooks/use-mobile';

// // Sample brand data
// const brands = [
//     { id: 1, name: 'Brand 1', logo: '/dreamland.png?height=80&width=180' },
//     { id: 2, name: 'Brand 2', logo: '/landson.png?height=80&width=180' },
//     { id: 3, name: 'Brand 3', logo: '/matrubhumi.png?height=80&width=180' },
//     { id: 4, name: 'Brand 4', logo: '/navya.png?height=80&width=180' },
//     { id: 5, name: 'Brand 5', logo: '/pz.png?height=80&width=180' },
//     { id: 6, name: 'Brand 6', logo: '/sahyadri.png?height=80&width=180' },
//     { id: 7, name: 'Brand 7', logo: '/venkatesha.png?height=80&width=180' },
//     // { id: 8, name: 'Brand 8', logo: '/placeholder.svg?height=80&width=180' },
// ];

// export default function BrandsCarousel() {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const carouselRef = useRef<HTMLDivElement>(null);
//     const isMobile = useMediaQuery('(max-width: 768px)');
//     const isTablet = useMediaQuery('(max-width: 1024px)');

//     // Determine how many items to show based on screen size
//     const itemsToShow = isMobile ? 1 : isTablet ? 1 : 2;

//     const totalSlides = Math.max(0, brands.length - itemsToShow + 1);

//     const nextSlide = () => {
//         setCurrentIndex((prev) => (prev + 1) % totalSlides);
//     };

//     const prevSlide = () => {
//         setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
//     };

//     // Auto-scroll effect
//     useEffect(() => {
//         const interval = setInterval(() => {
//             nextSlide();
//         }, 3000);

//         return () => clearInterval(interval);
//     }, [currentIndex, totalSlides]);

//     return (
//         <div className='relative w-full overflow-hidden py-8 bg-card rounded-xl shadow-md border border-border'>
//             {/* Navigation Buttons */}
//             <div className='absolute left-2 top-1/2 -translate-y-1/2 z-10'>
//                 <button
//                     onClick={prevSlide}
//                     className='bg-primary/10 hover:bg-primary/20 text-primary p-2 rounded-full transition-colors'
//                     aria-label='Previous slide'
//                 >
//                     <ChevronLeft size={24} />
//                 </button>
//             </div>

//             <div className='absolute right-2 top-1/2 -translate-y-1/2 z-10'>
//                 <button
//                     onClick={nextSlide}
//                     className='bg-primary/10 hover:bg-primary/20 text-primary p-2 rounded-full transition-colors'
//                     aria-label='Next slide'
//                 >
//                     <ChevronRight size={24} />
//                 </button>
//             </div>

//             {/* Carousel Track */}
//             <div
//                 ref={carouselRef}
//                 className='flex transition-transform duration-500 ease-out px-12'
//                 style={{
//                     transform: `translateX(-${
//                         currentIndex * (100 / itemsToShow)
//                     }%)`,
//                 }}
//             >
//                 {brands.map((brand) => (
//                     <div
//                         key={brand.id}
//                         className={cn(
//                             'flex-shrink-0 px-4 flex items-center justify-center',
//                             `w-full md:w-1/${Math.min(
//                                 itemsToShow,
//                                 2
//                             )} lg:w-1/${Math.min(itemsToShow, 2)}`
//                         )}
//                     >
//                         <motion.div
//                             whileHover={{ scale: 1.05 }}
//                             className='bg-background rounded-lg p-4 h-24 flex items-center justify-center'
//                         >
//                             <Image
//                                 src={brand.logo || '/placeholder.svg'}
//                                 alt={brand.name}
//                                 width={120}
//                                 height={60}
//                                 className='max-h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300'
//                             />
//                         </motion.div>
//                     </div>
//                 ))}
//             </div>

//             {/* Dots Indicator */}
//             <div className='flex justify-center mt-6 gap-1.5'>
//                 {Array.from({ length: totalSlides }).map((_, index) => (
//                     <button
//                         key={index}
//                         onClick={() => setCurrentIndex(index)}
//                         className={cn(
//                             'w-2 h-2 rounded-full transition-all duration-300',
//                             currentIndex === index
//                                 ? 'bg-primary w-4'
//                                 : 'bg-primary/30 hover:bg-primary/50'
//                         )}
//                         aria-label={`Go to slide ${index + 1}`}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// }
