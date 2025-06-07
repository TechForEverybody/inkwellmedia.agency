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
import { Typography } from '@mui/material';
// import Button from '@mui/material/Button';
// import Link from 'next/link';

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
                background: "linear-gradient(to right, #000, #002147)",

            }}
        >
            <div className="container mx-auto px-4">
                {/* Heading with side lines */}
                <div className="flex items-center justify-center mb-6">
                    <div className="h-1 w-16 bg-accent mx-4"></div>
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
                    }}>Our expertise in diverse fields</Typography>
                    <div className="h-1 w-16 bg-accent mx-4"></div>
                </div>
                <p className="text-center text-gray-300 max-w-7xl mx-auto mb-12">
                    As we can observe, the current generation has technically progressed to the point where it has created different sectors. It resulted in segmented communities and people based on their specific needs. Now, with the right audience in mind, having a unique approach to cater your audience is essential. With the consideration of diversity, we studied the skills of video production, and now we provide the media assets suitable and applicable for all industries, so that you may present yourself before your audience with perfection.
                </p>

                {/* Service Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
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
                                className="border-white border-2 rounded-lg p-2 flex flex-row flex-wrap justify-center items-center text-center hover:shadow-lg transition-shadow duration-300 bg-transparent backdrop-blur-5xl hover:bg-white/10 shadow-lg"
                            >
                                <div className="p-4 rounded-full mb-4 bg-white/10 mr-5">
                                    <Icon className="text-white text-2xl" sx={{ fontSize: 90 }} />
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                                <div className="w-12 h-0.5 bg-accent mb-4"></div>
                                {/* <p className="text-gray-300 mb-4">{service.description}</p> */}
                                <div className="flex flex-wrap  gap-2 mb-6 w-full text-left">
                                    {service.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="w-full text-sm text-white bg-accent/20 px-3 py-1 rounded-full"
                                            style={{
                                                border: '1px solid #fff',
                                                backdropFilter: 'blur(5px)',
                                                textAlign: 'center',
                                                width: 'fit-content',
                                            }}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                {/* <Link href="/why-us" passHref>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        className="rounded-full px-4 py-2"
                                    >
                                        Explore More
                                    </Button>
                                </Link> */}
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default HomeTargetAudience
