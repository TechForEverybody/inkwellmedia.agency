import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Define each content type with image, grid spans, descriptions, and tags
const types = [
    {
        title: 'YouTube Videos',
        image: '/images/6865587_23409.jpg',
        col: 'lg:col-span-2',
        row: 'lg:row-span-2',
        description: 'High-quality full-length video showcases optimized for YouTube.',
        tags: ['YouTube', 'Full-Length', 'HD'],
    },
    {
        title: 'Commercials & Ads',
        image: '/images/6851375_28339.jpg',
        col: 'lg:col-span-2',
        row: 'lg:row-span-4',
        description: 'Engaging TV and online commercials tailored to your brand.',
        tags: ['TV Ads', 'Branding', 'Marketing'],
    },
    {
        title: 'Mid-Level Ads',
        image: '/images/modern-design-illustration-web-ad.png',
        col: 'lg:col-span-1',
        row: 'lg:row-span-2',
        description: 'Targeted mid-length advertisements for social media campaigns.',
        tags: ['Social Media', 'Promos'],
    },
    {
        title: 'Video Production',
        image: '/images/photographer-character.png',
        col: 'lg:col-span-1',
        row: 'lg:row-span-3',
        description: 'End-to-end production services from concept to final cut.',
        tags: ['Full-Service', 'Script', 'Editing'],
    },
    {
        title: 'Shorts & Reels',
        image: '/images/hand-with-phone-video-call-icon-isolated.png',
        col: 'lg:col-span-1',
        row: 'lg:row-span-3',
        description: 'Bite-sized, attention-grabbing content for quick engagement.',
        tags: ['Shorts', 'Reels', 'Viral'],
    },
    {
        title: 'User-Generated Content',
        image: '/images/multitasking-businessman-doing-many-tasks-same-time.png',
        col: 'lg:col-span-2',
        row: 'lg:row-span-3',
        description: 'Authentic content featuring your customers and community.',
        tags: ['UGC', 'Authentic', 'Testimonials'],
    },
    {
        title: 'Documentaries',
        image: '/images/film-camera-geek-cartoon-cartoon-mascot-vector.png',
        col: 'lg:col-span-1',
        row: 'lg:row-span-2',
        description: 'Compelling storytelling through long-form documentary films.',
        tags: ['Storytelling', 'Long-Form'],
    },
];

export default function VariousTypes() {
    return (
        <section className="py-16 text-white">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Versatile Video Expertise
            </h2>
            <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
                From YouTube videos and shorts to commercials, documentaries, and user-generated content, our team delivers top-tier production quality across every format.
            </p>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px]">
                    {types.map((type, idx) => (
                        <TypeCard key={idx} type={type} index={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
}

interface TypeCardProps {
    type: typeof types[0];
    index: number;
}
function TypeCard({ type, index }: TypeCardProps) {
    const [hovered, setHovered] = useState(false);

    return (
        <motion.div
            className={`${type.col} ${type.row} relative overflow-hidden rounded-2xl cursor-pointer`}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
        >
            {/* Background Image */}
            <Image
                src={type.image}
                alt={type.title}
                fill
                sizes="(min-width: 1024px) 50vw, (min-width: 640px) 50vw, 100vw"
                style={{ objectFit: 'cover' }}
                className="z-10"
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/30 z-20" />
            {/* Diamond-like shine overlay */}
            <motion.div
                className="absolute inset-0 pointer-events-none z-30"
                style={{
                    background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.6) 50%, transparent 100%)',
                    transform: 'skewX(-25deg)',
                }}
                initial={{ x: '-150%' }}
                animate={{ x: hovered ? '150%' : '-150%' }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
            />
            {/* Shining Border Overlay */}
            <motion.div
                className="absolute inset-0 rounded-2xl pointer-events-none z-35"
                animate={{
                    boxShadow: hovered
                        ? '0 0 20px rgba(255,255,255,0.8)'
                        : '0 0 5px rgba(255,255,255,0.2)'
                }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
            />

            {/* Title */}
            <motion.div
                className="absolute top-4 left-4 z-40"
                initial={{ y: -10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.15 + 0.3, duration: 0.5 }}
            >
                <span className="text-lg md:text-xl font-semibold">
                    {type.title}
                </span>
            </motion.div>

            {/* Description */}
            <motion.p
                className="absolute bottom-12 left-4 right-4 text-sm text-gray-200 z-40"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.15 + 0.4, duration: 0.5 }}
            >
                {type.description}
            </motion.p>

            {/* Tags */}
            <motion.div
                className="absolute bottom-4 left-4 flex flex-wrap gap-2 z-40"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.15 + 0.5, duration: 0.5 }}
            >
                {type.tags.map((tag) => (
                    <span
                        key={tag}
                        className="text-xs bg-white/20 px-2 py-1 rounded-full"
                    >
                        {tag}
                    </span>
                ))}
            </motion.div>
        </motion.div>
    );
}
