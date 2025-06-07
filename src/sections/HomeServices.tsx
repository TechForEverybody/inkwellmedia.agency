// components/HomeServices.tsx
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Button from '@mui/material/Button';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import ShareIcon from '@mui/icons-material/Share';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import { Typography } from '@mui/material';

interface Service {
    id: string;
    title: string;
    Icon: React.ComponentType<any>;
    description: string;
    tags: string[];
    image?: string; // Optional image property
}

const servicesData: Service[] = [
    {
        id: 'video',
        title: 'Video production and content creation',
        Icon: VideoLibraryIcon,
        description: `Our expertise of video production and creativity varies from ranges such as commercials ads to full-length youtube videos, shorts and reels and many more customized content. We create content with a strategic approach helpful for generating your sales & boosts your brand awareness. Our production facility extends from scripting to finalization of the video projects, so you could enjoy the fruition of your vision..`,
        tags: ['4K', 'Cinematic', 'Broadcast'],
        image: "/images/349081852_23b4457e-183c-4dd5-a04c-0098853e0bcb.svg"
    },
    {
        id: 'social',
        title: 'Social Media Management',
        Icon: ShareIcon,
        description: ` Inkwell is the best manager for your social media platforms when it comes to keeping your digital platforms and communities engaged and active. We provide performance analytics and campaign optimization for Meta platforms such as Facebook, Instagram, Whatsapp and other various platforms like Youtube, Twitter, Linkedin etc.
Take an approach, and witness the organic  growth of your followers and platform reach through us.
`,
        tags: ['Engagement', 'Analytics', 'Growth'],
        image: "/images/creative-design-illustration-social-media-admin.png"
    },
    {
        id: 'marketing',
        title: 'Influencer marketing',
        Icon: InsertDriveFileIcon,
        description: `leverage your work potential with help of Inkwell in establishing contracts with exclusive influencers : to set up the brand partnership, community engagement and media content publishing. Let Inkwell be the bridge to connect you with the best suited influencers. Whether its social media influencers, bloggers, vloggers, lifestyle persona or food enthusiast- we know who and how to connect you with the influencer who represents you the best.`,
        tags: ['Storytelling', 'Videography', 'Cinematic'],
        image: "/images/loyalty-program-announcement-line-illustration.png"
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const HomeServices: React.FC = () => (
    <section
        className="py-20"
        style={{
            background: "linear-gradient(to right, #000, #002147)", // Dark blue gradient
            position: 'relative',
        }}
    >
        <img className='animate-pulse' style={{
            maxWidth: '300px',
            padding: '10px 50px',
            background: "#ffffff55",
            borderRadius: '20px',
            position: "absolute",
            top: '100px',
            left: '20px',
            rotate: '-30deg',
        }} src="/images/a1-3-removebg-preview.png" alt="" />
        <div className="container mx-auto px-4">
            {/* Header */}
            <motion.div
                className="text-center mb-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
            >
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
        WebkitTextStroke: '2px white',

                }}>Our Services</Typography>
                <p className="mt-4 text-white/80 max-w-2xl mx-auto">
                    We offer premium advertising services tailored to help your brand succeed in the digital space.
                </p>
            </motion.div>

            {/* Services Grid */}
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
            >
                {servicesData.map((svc) => (
                    <motion.div
                        key={svc.id}
                        className="service-card"
                        variants={itemVariants}
                    >
                        <ServiceCard service={svc} />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    </section>
);

function ServiceCard({ service }: { service: Service }) {
    return (
        <div
            className="group w-full max-w-sm mx-auto"
            style={{ perspective: '1000px' }}
        >

            <div
                className="relative w-full h-full transition-transform duration-500"
                style={{ transformStyle: 'preserve-3d' }}
            >
                <div
                    className="  border-2 border-white rounded-2xl inset-0 flex flex-col justify-center items-center bg-white/5 backdrop-blur-lg  p-6"
                    style={{ backfaceVisibility: 'hidden' }}
                >
                    <div className="flex justify-center mb-4">
                        <service.Icon className="text-5xl text-[#FF6A3D]" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-4 text-center">
                        {service.title}
                    </h3>
                    {service.image && (
                        <div className="flex justify-center mb-4">
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-auto rounded-lg"
                                style={{ filter: 'invert(1)' }}
                            />
                        </div>
                    )}
                </div>

                <div
                    className="absolute top-0 indent-0 flex flex-col justify-between bg-white/5 backdrop-blur-lg  p-6  border-2 border-white rounded-2xl"
                    style={{
                        transform: 'rotateY(180deg)',
                        backfaceVisibility: 'hidden',
                    }}
                >
                    <h3 className="text-2xl font-semibold text-white mb-4 text-center">
                        {service.title}
                    </h3>
                    {/* Description */}
                    <p className="text-white/80 mb-6 flex-grow">{service.description}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {service.tags.map((tag) => (
                            <span
                                key={tag}
                                className="text-xs bg-[#FF6A3D]/20 text-white px-3 py-1 rounded-full"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* “Know More” Button */}
                    <motion.div whileHover={{ x: 5 }}>
                        <Link href="/services" passHref>
                            <Button
                                component="a"
                                variant="outlined"
                                sx={{
                                    borderColor: '#FF6A3D',
                                    color: '#FF6A3D',
                                    py: 1,
                                    px: 4,
                                    borderRadius: '9999px',
                                    ':hover': {
                                        background: '#FF6A3D',
                                        color: '#fff',
                                    },
                                }}
                            >
                                Know More
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Hover-triggered rotation */}
            <style jsx>{`
        .group:hover > div {
          transform: rotateY(180deg);
        }
      `}</style>
        </div>
    );
}



export default HomeServices;
