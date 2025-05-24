// components/ServicesFullContent.tsx
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Button from '@mui/material/Button';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import ShareIcon from '@mui/icons-material/Share';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

interface ServiceItem {
    title: string;
    description: string;
    features: string[];
    tags: string[];
    Icon: React.ComponentType<any>;
}

const services: ServiceItem[] = [
    {
        title: 'Content Creation',
        description: `Transform ideas into captivating stories with our end-to-end Content Creation. We start by defining your brand voice and target audience, then develop storyboards and shot lists tailored to your objectives. On set, we capture 4K footage with professional lighting and audio. In post-production, our editors add motion graphics, sound design, and color grading to produce versatile assets—long-form explainers, social clips, and promotional reels—optimized for YouTube, Instagram, and TikTok.`,
        features: [
            'Brand Voice Workshops',
            '4K Filming & Audio Capture',
            'Motion Graphics & Color Grading',
        ],
        tags: ['#Storytelling', '#Videography', '#SocialContent'],
        Icon: InsertDriveFileIcon,
    },
    {
        title: 'Social Media Management',
        description: `Amplify your online presence with our Social Media Management. We audit your profiles, craft a data-driven content calendar, and produce engaging posts—carousels, Reels, and Stories—designed for each platform. Our team schedules at peak times, monitors engagement, and responds to your audience in real time. Through A/B testing and analytics, we refine visuals, copy, and targeting to boost follower growth, engagement rates, and ROI, turning passive viewers into loyal customers.`,
        features: [
            'Data-Driven Content Calendars',
            'Real-Time Community Engagement',
            'A/B Testing & Performance Reports',
        ],
        tags: ['#Engagement', '#Analytics', '#Growth'],
        Icon: ShareIcon,
    },
    {
        title: 'Video Production',
        description: `Our Video Production service delivers broadcast-quality films, commercials, and training modules. We guide you from concept through final delivery: ideation workshops, location scouting, multi-camera 4K shoots with drones and stabilizers, and professional lighting setups. In post, we edit tight narratives, add animated titles, licensed music, and sound effects. Finally, we encode formats for web, social, and live events. The result is a polished visual experience that captivates and converts.`,
        features: [
            'Concept & Pre-Production',
            '4K Multi-Camera Shoots',
            'Editing, Graphics & Sound Design',
        ],
        tags: ['#4K', '#Cinematic', '#Broadcast'],
        Icon: VideoLibraryIcon,
    },
    {
        title: 'Consultation',
        description: `Get expert guidance with our Consultation service. We audit your existing content, interview stakeholders, and analyze market trends to craft a bespoke media strategy. Your deliverables include content roadmaps, channel recommendations, budget plans, and KPIs. We also offer hands-on workshops, training sessions, and quarterly reviews to keep your campaigns agile. Whether you’re scaling a startup or refining enterprise workflows, our consults ensure measurable growth and sustainable success.`,
        features: [
            'Asset Audits & Stakeholder Interviews',
            'Strategic Roadmaps & KPIs',
            'Workshops & Quarterly Reviews',
        ],
        tags: ['#Strategy', '#Roadmap', '#Workshops'],
        Icon: SupportAgentIcon,
    },
];

const sectionVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.3, duration: 0.8, ease: 'easeOut' },
    }),
};

const ServicesFullContent: React.FC = () => {
    return (
        <section className="py-24 ">
            <div className="container mx-auto px-4 space-y-20">
                {services.map((svc, idx) => {
                    const IconComponent = svc.Icon;
                    const isReversed = idx % 2 === 1;
                    return (
                        <motion.div
                            key={svc.title}
                            className="relative"
                            custom={idx}
                            variants={sectionVariant}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <div
                                className={`flex flex-col lg:flex-row items-center gap-12 ${isReversed ? 'lg:flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Text & Features */}
                                <div className="lg:w-1/2 bg-[#9C27B0] rounded-2xl p-10 relative z-10 shadow-2xl overflow-hidden">
                                    {/* Decorative Blob */}
                                    <motion.div
                                        className="absolute -top-8 -left-8 w-24 h-24 bg-gradient-to-br from-[#FF6A3D] to-[#4E1C50] rounded-full opacity-80"
                                        animate={{ rotate: [0, 360] }}
                                        transition={{ loop: Infinity, duration: 20, ease: 'linear' }}
                                    />

                                    <h3 className="text-3xl font-bold text-white mb-4">
                                        {svc.title}
                                    </h3>
                                    <p className="text-white/80 mb-6">{svc.description}</p>

                                    <div className="flex items-start justify-between mb-6">
                                        <ul className="space-y-3 flex-1">
                                            {svc.features.map((f) => (
                                                <li
                                                    key={f}
                                                    className="flex items-center gap-3 text-white/90"
                                                >
                                                    <CheckCircleIcon className="text-[#FF6A3D]" />{' '}
                                                    <span>{f}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <IconComponent className="text-[#FF6A3D] text-7xl opacity-90" />
                                    </div>

                                    <div className="flex flex-wrap gap-3 mb-8">
                                        {svc.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="text-sm bg-[#FF6A3D]/20 text-white px-4 py-1 rounded-full"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                        <Button
                                            component={Link}
                                            href="/contact-us"
                                            variant="contained"
                                            sx={{
                                                background:
                                                    'linear-gradient(135deg, #FF6A3D 0%, #4E1C50 100%)',
                                                color: '#fff',
                                                py: 1.5,
                                                px: 5,
                                                borderRadius: '9999px',
                                                boxShadow: '0 5px 15px rgba(0,0,0,0.4)',
                                            }}
                                        >
                                            Contact Now
                                        </Button>
                                    </motion.div>
                                </div>

                                {/* Graphical Creative Structure */}
                                <div className="lg:w-1/2 w-full h-80 relative flex items-center justify-center">
                                    <motion.div
                                        className="w-64 h-64 bg-gradient-to-tr from-[#FF6A3D]/50 to-[#4E1C50]/50 rounded-2xl"
                                        initial={{ scale: 0.8, rotate: -10 }}
                                        animate={{ scale: 1, rotate: 0 }}
                                        transition={{ duration: 0.8, ease: 'easeOut' }}
                                    />
                                    <motion.div
                                        className="absolute w-48 h-48 bg-white/10 rounded-full mix-blend-screen"
                                        animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
                                        transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
                                    />
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};

export default ServicesFullContent;
