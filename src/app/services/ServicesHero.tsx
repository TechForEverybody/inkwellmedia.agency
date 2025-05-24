// components/ServicesHero.tsx
import React from 'react';
import { motion } from 'framer-motion';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Link from 'next/link';
import Image from 'next/image';

const features = [
    {
        text: 'Rapid Turnaround & Agile Workflow',
        tags: ['#Speed', '#Efficiency'],
    },
    {
        text: 'Data-Driven Creative Strategies',
        tags: ['#Analytics', '#Creativity'],
    },
    {
        text: 'End-to-End Production Excellence',
        tags: ['#Quality', '#Reliability'],
    },
    {
        text: 'Tailored & Localized Content',
        tags: ['#Custom', '#Localized'],
    },
];

const listItemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const ServicesHero: React.FC = () => (
    <section className="relative overflow-hidden py-24">
        {/* Background gradient */}
        <div
            className="absolute inset-0 -z-10"
            style={{
                background: 'radial-gradient(circle at 20% 20%, #4E1C50, #000)',
            }}
        />

        {/* Decorative shapes */}
        <motion.div
            className="absolute top-10 left-10 w-12 h-12 rounded-full border-2 border-[#FF6A3D]"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
        />
        <motion.div
            className="absolute bottom-20 right-20 w-16 h-16 bg-[#FF6A3D]/20 rounded-full"
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
        />

        <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center gap-12">
            {/* Image Column */}
            <motion.div
                className="lg:w-1/2 w-full flex justify-center"
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <div className="relative w-full max-w-xs lg:max-w-md">
                    <Image
                        src="/images/influencer-broadcasting-podcast-show.png"
                        alt="Our Services"
                        width={400}
                        height={600}
                        objectFit="cover"
                        className="rounded-xl shadow-2xl"
                    />
                    {/* Extra decorative overlays */}
                    <div className="absolute -top-4 -right-4 w-10 h-10 bg-[#FF6A3D] rounded-full mix-blend-screen" />
                    <div className="absolute -bottom-4 -left-4 w-16 h-16 border-4 border-[#FF6A3D] rounded-full animate-pulse" />
                </div>
            </motion.div>
            {/* Text Column */}
            <motion.div
                className="lg:w-1/2 space-y-6"
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
                    Why Our Services Excel Today
                </h2>

                {/* Tags under heading */}
                <div className="flex flex-wrap gap-2">
                    {['#Video', '#Marketing', '#Innovation', '#Branding'].map((tag) => (
                        <Chip
                            key={tag}
                            label={tag}
                            size="small"
                            className="bg-[#FF6A3D]/30 text-white border-white/20"
                            style={{
                                color: "wheat"
                            }}
                        />
                    ))}
                </div>

                <p className="text-white/80 text-lg max-w-2xl">
                    In the ever-evolving media landscape, Inkwell Media makes your brand’s story stand out—combining speed, creativity, and precision to deliver content that resonates.
                </p>

                {/* Feature list */}
                <motion.ul
                    className="space-y-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={{ visible: { transition: { staggerChildren: 0.25 } } }}
                >
                    {features.map((feature, i) => (
                        <motion.li
                            key={i}
                            variants={listItemVariants}
                            className="flex items-start gap-3 text-white/90"
                        >
                            <CheckCircleIcon className="mt-1 text-2xl text-[#FF6A3D]" />
                            <div>
                                <div className="font-medium">{feature.text}</div>
                                <div className="flex flex-wrap gap-2 mt-1">
                                    {feature.tags.map((t) => (
                                        <Chip
                                            key={t}
                                            label={t}
                                            size="small"
                                            className="bg-[#4E1C50]/50 text-white border-white/30"
                                            style={{
                                                color: "wheat"
                                            }}
                                        />
                                    ))}
                                </div>
                            </div>
                        </motion.li>
                    ))}
                </motion.ul>

                {/* Call to Action */}
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link href="/services" passHref>
                        <Button
                            variant="contained"
                            sx={{
                                background:
                                    'linear-gradient(135deg, #FF6A3D 0%, #4E1C50 100%)',
                                color: '#fff',
                                py: 1.5,
                                px: 6,
                                borderRadius: '9999px',
                                boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
                                fontSize: '1rem',
                            }}
                        >
                            Explore All Services
                        </Button>
                    </Link>
                </motion.div>
            </motion.div>


        </div>
    </section>
);

export default ServicesHero;
