// components/ServicesFullContent.tsx
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Button from '@mui/material/Button';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import ShareIcon from '@mui/icons-material/Share';
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
        title: 'Video production & Content creation',
        description: `visuals, sounds, entertainment and relativity, these factors could be said as four main pillars when it comes to captivating audiences’ attention.  While media is made to feed information, having versatile media formats plays a huge role in formulation of a brand persona. To enhance your brand, we provide diverse media assets in themes suitable for fulfilling professional, entertainment and infotainment needs. In the services of  content creation, we proceed thoroughly from Brainstorming- to planning, scripting, identifying and utilising conditions. The said can be recreated into scenarios which will definitely help you fulfill your business needs by engaging the right audience and building a desirable brand identity. 
`,
        features: [
            'Brand Voice Workshops',
            '4K Filming & Audio Capture',
            'Motion Graphics & Color Grading',
        ],
        tags: ['Storytelling', 'Videography', 'SocialContent'],
        Icon: InsertDriveFileIcon,
    },
    {
        title: 'Social Media Management',
        description: `In the wake of globalisation, connectivity and engagement goes beyond the scope of community growth- it extends in the form of brand loyalty which directly impacts on brand value and conversion. Understanding the gravity of social media management, the Inkwell implements social media optimization on various social platforms such as Facebook, Instagram, Whatsapp,Youtube, Twitter, linkedin; while providing services of platform optimization, community engagement, strategic formulation, campaign scheduling and management, and result calibration and analytics. Your social media platforms define your image, so let the Inkwell decorate them securely.`,
        features: [
            'Data-Driven Content Calendars',
            'Real-Time Community Engagement',
            'A/B Testing & Performance Reports',
        ],
        tags: ['Engagement', 'Analytics', 'Growth'],
        Icon: ShareIcon,
    },
    {
        title: 'Influencer marketing',
        description: `In the current generation, influencers deal a huge impact over their audience with their specific endorsement, because that places a sense of authenticity of the product or service to the audience and it conveys a message. But of course it's not that easy to find an influencer who matches the identity of your brand, right? Especially when they have to fulfill certain criterias such as-
 i) engagement- not just limited to their followers but the entirety of the mass audience,
 ii) who knows how to stay up to date with ongoing trends, 
iii) manages collaborations suiting the market needs, while 
iv) planning and executing campaigns with your company.
 We understand it very well, so to ease your complications, Inkwell provides services such as contract management in sectors of partnership/ambassadorship, where we look forward to providing organizations with our selection of finest social media influencers.  Whether it's endorsement or collaborations, or promotion over social platforms, we’ve got contacts in the influencer industries from the range of nano influencers even to the stage of mega influencer. We make it our own responsibility to arrange the best influencer for your work, just so we can witness your successful growth alongside us.
`,
        features: [
            'Asset Audits & Stakeholder Interviews',
            'Strategic Roadmaps & KPIs',
            'Workshops & Quarterly Reviews',
        ],
        tags: ['Strategy', 'Roadmap', 'Workshops'],
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
                                <div className="lg:w-3/4  rounded-2xl p-10 relative z-10 shadow-2xl overflow-hidden">
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
                                                color: 'fff',
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
                                <div className="lg:w-1/4 w-full h-80 relative flex items-center justify-center">
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
