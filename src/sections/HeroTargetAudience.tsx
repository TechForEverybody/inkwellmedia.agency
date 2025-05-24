import React from 'react';
import { motion } from 'framer-motion';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import PublicIcon from '@mui/icons-material/Public';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import SchoolIcon from '@mui/icons-material/School';
import GroupIcon from '@mui/icons-material/Group';
import Button from '@mui/material/Button';
import Link from 'next/link';

// Service data with extended descriptions and tags
const TargetAudienceData = [
    {
        title: 'Real Estate',
        icon: HomeWorkIcon,
        description:
            'From cinematic property walkthroughs to investor-ready pitch videos and detailed location explainers, we elevate your listings.',
        tags: ['Walkthroughs', 'Pitch Videos', 'Explainers'],
    },
    {
        title: 'E-commerce',
        icon: ShoppingCartIcon,
        description:
            'Boost conversions with polished product demos, authentic customer testimonials, and eye-catching promotional reels.',
        tags: ['Product Demos', 'Testimonials', 'Reels'],
    },
    {
        title: 'Corporate',
        icon: BusinessCenterIcon,
        description:
            'Strengthen internal training, showcase corporate profiles, and capture event highlights with our professional touch.',
        tags: ['Training', 'Profile Films', 'Event Coverage'],
    },
    {
        title: 'Startups',
        icon: RocketLaunchIcon,
        description:
            'Launch your brand with dynamic videos that resonate on social media and beyond, positioning you for growth.',
        tags: ['Brand Launch', 'Social Content', 'Ads'],
    },
    {
        title: 'NGOs & Gov',
        icon: PublicIcon,
        description:
            'Drive impact through powerful awareness campaigns and clear informational videos tailored to your mission.',
        tags: ['Awareness', 'Informational'],
    },
    {
        title: 'Creators',
        icon: VideoLibraryIcon,
        description:
            'Transform your raw footage into polished content with expert editing and hands-on shoot assistance.',
        tags: ['Editing', 'Shoot Assist'],
    },
    {
        title: 'Healthcare',
        icon: LocalHospitalIcon,
        description:
            'Educate patients and staff with clear, concise video guides, clinic tours, and training modules.',
        tags: ['Patient Guides', 'Clinic Tours'],
    },
    {
        title: 'Education',
        icon: SchoolIcon,
        description:
            'Engage learners with compelling course intros, campus tours, and promotional reels for institutions.',
        tags: ['Course Reels', 'Campus Tours'],
    },
    {
        title: 'Agencies',
        icon: GroupIcon,
        description:
            'Partner with us for bespoke media solutions that amplify your agency’s creative vision and deliver results.',
        tags: ['Custom Solutions'],
    },
];

const HomeTargetAudience: React.FC = () => {
    return (
        <section
            className="py-16"
            style={{
                background: 'linear-gradient(to right, #4F1C51, #000000)',
            }}
        >
            <div className="container mx-auto px-4">
                {/* Heading with side lines */}
                <div className="flex items-center justify-center mb-6">
                    <div className="h-1 w-16 bg-accent mx-4"></div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Target Audience</h2>
                    <div className="h-1 w-16 bg-accent mx-4"></div>
                </div>
                <p className="text-center text-gray-300 max-w-7xl mx-auto mb-12">
                    Our end-to-end service suite adapts to the unique needs of each audience—delivering tailored storytelling, data-driven strategies, and production values that resonate with your customers, stakeholders, and communities. Whether you’re targeting homebuyers in Mumbai, global e-commerce shoppers, or students around the world, Inkwell Media crafts every frame to speak directly to your market
                </p>

                {/* Service Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {TargetAudienceData.map((service, idx) => {
                        const Icon = service.icon;
                        // Random off-screen start positions
                        const initialX = (Math.random() < 0.5 ? -1 : 1) * (Math.random() * 1200 + 200);
                        const initialY = (Math.random() < 0.5 ? -1 : 1) * (Math.random() * 800 + 200);

                        return (
                            <motion.div
                                key={service.title}
                                initial={{ x: initialX, y: initialY, opacity: 0 }}
                                animate={{ x: 0, y: 0, opacity: 1 }}
                                transition={{ delay: 2 + idx * 0.1, type: 'spring', stiffness: 60 }}
                                whileHover={{ translateY: -5 }}
                                className="border border-gray-700 rounded-lg p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300 bg-[#4F1C51]"
                            >
                                <div className="p-4 rounded-full mb-4 bg-white/10">
                                    <Icon className="text-white text-4xl" sx={{ fontSize: 60 }} />
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                                <div className="w-12 h-0.5 bg-accent mb-4"></div>
                                <p className="text-gray-300 mb-4">{service.description}</p>
                                <div className="flex flex-wrap justify-center gap-2 mb-6">
                                    {service.tags.map(tag => (
                                        <span
                                            key={tag}
                                            className="text-sm text-white bg-accent/20 px-3 py-1 rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <Link href="/why-us" passHref>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        className="rounded-full px-4 py-2"
                                    >
                                        Explore More
                                    </Button>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default HomeTargetAudience
