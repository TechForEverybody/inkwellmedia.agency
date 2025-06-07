import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Typography } from '@mui/material';

// Define each content type with image, grid spans, descriptions, and tags
const types = [
    {
        title: 'YouTube Videos',
        image: '/images/6865587_23409.jpg',
        col: 'lg:col-span-2',
        row: 'lg:row-span-2',
        description: 'Use the largest video social media to share and publicise your high quality full-length content on a global level.',
        tags: ['YouTube', 'Full-Length', 'HD'],
    },
    {
        title: 'Commercials & Ads',
        image: '/images/modern-design-illustration-web-ad.png',
        col: 'lg:col-span-2',
        row: 'lg:row-span-3',
        description: 'Let the people recognize your brand, through mass communication',
        tags: ['TV Ads', 'Branding', 'Marketing'],
    },
    {
        title: 'Out-of-home (OHH) & kiosk',
        image: '/images/6851375_28339.jpg',
        col: 'lg:col-span-2',
        row: 'lg:row-span-2',
        description: `Whether it's tv monitors or public billboards, these advertisements will never miss the opportunity to grab your potential audience's attention.`,
        tags: ['Social Media', 'Promos'],
    },
    {
        title: 'Shorts & Reels',
        image: '/images/hand-with-phone-video-call-icon-isolated.png',
        col: 'lg:col-span-2',
        row: 'lg:row-span-3',
        description: 'Engage and entertain, this motto works the best when it comes to quickly capturing the audience’ attention and creating attachment.',
        tags: ['Shorts', 'Reels', 'Viral'],
    },
    {
        title: 'Animations ',
        image: '/images/154990.jpg',
        col: 'lg:col-span-2',
        row: 'lg:row-span-3',
        description: 'Fantasies can’t be limited to convey just by words. Let the visuals speak for you.',
        tags: ['Full-Service', 'Script', 'Editing'],
    },
    {
        title: 'Documentaries',
        image: '/images/3806.jpg',
        col: 'lg:col-span-2',
        row: 'lg:row-span-2',
        description: 'Share your story, not just by explanation, but through enacted experience',
        tags: ['Storytelling', 'Long-Form'],
    },
    {
        title: 'User-Generated Content',
        image: '/images/multitasking-businessman-doing-many-tasks-same-time.png',
        col: 'lg:col-span-2',
        row: 'lg:row-span-3',
        description: 'Let your community be the witness and feature of your successful journey, not as a bystander, but as a family.',
        tags: ['UGC', 'Authentic', 'Testimonials'],
    },
    {
        title: 'Walkthrough videos',
        image: '/images/film-camera-geek-cartoon-cartoon-mascot-vector.png',
        col: 'lg:col-span-2',
        row: 'lg:row-span-3',
        description: 'Demonstrate what you want to highlight through the format of a video brochure. Emphasise the exclusivity of your products or services in an informative way. ',
        tags: ['Walkthrough', 'Product', 'Showcase'],
    },
    {
        title: 'Company culture videos ',
        image: '/images/11538.jpg',
        col: 'lg:col-span-2',
        row: 'lg:row-span-3',
        description: 'Your offices and employee management is a testimony of your work. Showcase the management and working ambience, services and employee correlation for people to let them know how you operate.',
        tags: ['Company Culture', 'Behind the Scenes', 'Testimonials'],
    },
];

export default function VariousTypes() {
    return (
        <section className="py-16 text-white">

            <Typography variant="h1" sx={{
                color: '#FFFFFF',
                fontSize: {
                    xs: '2rem',
                    sm: '3rem',
                    md: '4rem',
                    lg: '5rem',
                },
                fontWeight: 'bold',
                textAlign: 'center',
                marginBottom: '1rem',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                background: 'linear-gradient(to right, #FFF, #FFFFFF33)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
            }}>Explore Our Video Production Types</Typography>
            <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
                From YouTube videos and shorts to commercials, documentaries, and user-generated content, our team delivers top-tier production quality across every format.
            </p>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 auto-rows-[300px] md:auto-rows-[150px]">
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
            className={`${type.col} ${type.row} relative overflow-hidden rounded-2xl cursor-pointer border-2 border-white`}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.6, delay: index * 0.01 }}
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
        >
            {/* Background Image */}
            <Image
                src={type.image}
                alt={type.title}
                fill
                sizes="(min-width: 1024px) 50vw, (min-width: 640px) 50vw, 100vw"
                style={{ objectFit: 'cover', opacity: hovered ? 0.1 : 0.8 }}
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
                transition={{ delay: index * 0.05, duration: 0.5 }}
            >
                <span className="text-lg md:text-5xl font-semibold">
                    {type.title}
                </span>
            </motion.div>

            {/* Description */}
            <motion.p
                className="absolute bottom-12 left-4 right-4 text-xl text-gray-200 z-40"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
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
