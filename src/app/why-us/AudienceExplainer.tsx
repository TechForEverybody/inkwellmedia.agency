// components/AudienceExplainer.tsx
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Button from '@mui/material/Button';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import PublicIcon from '@mui/icons-material/Public';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import SchoolIcon from '@mui/icons-material/School';
import GroupIcon from '@mui/icons-material/Group';
import Image from 'next/image';

interface AudienceExplainerItem {
    title: string;
    description: string;
    features: string[];
    tags: string[];
    Icon: React.ComponentType<any>;
    image: string;
}

const audienceExplainer: AudienceExplainerItem[] = [
    {
        title: 'Real Estate',
        description:
            'In today’s competitive property market, video walkthroughs and location explainers aren’t just nice to have—they’re essential. A cinematic property tour immerses prospective buyers in the space, letting them explore every corner from the comfort of their phone or laptop. Investor-pitch videos combine high-energy editing with data-driven visuals to articulate ROI and neighborhood trends. And detailed connectivity explainers visually map transit, schools, and amenities, giving buyers confidence in both the home and its surroundings. Together, these assets accelerate decision-making, shorten sales cycles, and elevate your brand above static listings.',
        features: [
            'Cinematic Property Tours',
            'Investor-Ready Pitches',
            'Geo-Map Explainers',
        ],
        tags: ['#RealEstate', '#Walkthrough', '#Explainers'],
        Icon: HomeWorkIcon,
        image: '/images/paper-style-building-with-people.png',
    },
    {
        title: 'E-commerce',
        description:
            'Online shoppers demand rich, interactive experiences that go beyond still photos. Polished product demo videos highlight features, build trust through close-up details, and reduce returns by setting clear expectations. Authentic customer testimonial reels—filmed, edited, and color-graded for maximum impact—leverage real voices to overcome skepticism. Finally, bite-sized promotional clips optimized for social platforms combine motion graphics and sound design to capture attention in the first three seconds. These videos drive click-throughs, boost conversion rates, and power viral campaigns across Instagram, Facebook, and YouTube Shorts.',
        features: [
            'Product Demo Videos',
            'Customer Testimonials',
            'Promotional Reels',
        ],
        tags: ['#Ecommerce', '#Demo', '#Reels'],
        Icon: ShoppingCartIcon,
        image: '/images/ecommerce.png',
    },
    {
        title: 'Corporate',
        description:
            'Large organizations need consistent, professional content to train teams, profile leadership, and document live events. Our staff-training modules blend on-screen talent with animated overlays to simplify complex processes and reduce onboarding time. Executive profile films showcase your leadership’s vision and humanize your brand for internal and external audiences. During conferences, trade shows, and town halls, we capture every keynote, panel discussion, and networking moment with multi-camera setups, then deliver highlight reels that extend your event’s reach well beyond the venue.',
        features: [
            'Staff Training Modules',
            'Executive Profiles',
            'Live Event Coverage',
        ],
        tags: ['#Corporate', '#Training', '#Events'],
        Icon: BusinessCenterIcon,
        image: '/images/managers-are-discussing-business-issues.png',
    },
    {
        title: 'Startups',
        description:
            'A startup’s first video can set the tone for its entire brand. Our launch films craft compelling narratives around your founding story, product benefits, and vision—complete with motion design and original music. We then repurpose that footage into social-friendly clips, infusing platform-specific hooks and captions to maximize shareability. Targeted ads leverage A/B tested thumbnails and call-to-action overlays, ensuring every dollar spent on paid campaigns delivers measurable ROI. This end-to-end approach positions you as both innovative and professional from day one.',
        features: ['Brand Launch Films', 'Social Media Clips', 'Targeted Ads'],
        tags: ['#Startups', '#BrandLaunch', '#Social'],
        Icon: RocketLaunchIcon,
        image: '/images/laptop-with-connectivity-5g-tech.png',
    },
    {
        title: 'NGOs & Government',
        description:
            'Non-profits and public agencies rely on video to educate, inspire, and mobilize communities. Our awareness campaigns pair emotive storytelling with clear statistics, leveraging on-camera interviews and animated infographics. For informational videos—whether explaining new regulations or promoting public health measures—we combine motion graphics with live-action b-roll to maintain engagement and clarity. We ensure all messaging aligns with accessibility standards and can be subtitled or dubbed for multilingual reach, maximizing both impact and compliance.',
        features: ['Awareness Campaigns', 'Educational Videos', 'Policy Explainers'],
        tags: ['#NGO', '#Awareness', '#Info'],
        Icon: PublicIcon,
        image: '/images/ngo.png',
    },
    {
        title: 'Content Creators',
        description:
            'Whether you’re a budding YouTuber or established influencer, polished editing and on-shoot support can transform raw footage into professional content. We handle multi-angle synchronization, color grading, and sound mixing, freeing you to focus on creativity. On-set assistance covers lighting setups, camera operation, and pro tips for engaging delivery. Post-production turnaround times are optimized to keep your upload schedule tight, helping you build audience trust and platform momentum with consistent, high-quality videos.',
        features: ['Video Editing', 'On-Set Assistance', 'Post-Production'],
        tags: ['#Creators', '#Editing', '#Support'],
        Icon: VideoLibraryIcon,
        image: '/images/hand-drawn-male-reporter-character-flat-style-isolated-background.png',
    },
    {
        title: 'Healthcare',
        description:
            'Medical facilities and practitioners need clear, trustworthy video guides—for patients and staff alike. Our patient education series breaks down procedures, post-op care, and wellness tips using friendly presenters and simple graphics. Clinic walkthroughs highlight safety protocols, facility features, and wayfinding, improving patient comfort and reducing no-shows. Staff training modules cover equipment operation, emergency drills, and compliance topics, delivered in bite-sized segments that can be revisited on demand—enhancing retention and improving patient outcomes.',
        features: ['Patient Education', 'Clinic Tours', 'Staff Training Videos'],
        tags: ['#Healthcare', '#PatientCare', '#Training'],
        Icon: LocalHospitalIcon,
        image: '/images/digital-health-concept.png',
    },
    {
        title: 'Education',
        description:
            'From K-12 to higher ed, institutions succeed by showcasing their campuses and programs. We produce immersive campus tours—complete with drone aerials and interactive maps—to attract out-of-state and international students. Course introduction videos pair subject-matter experts with animated callouts, giving prospects a sneak peek at your curriculum. For recruitment campaigns, we craft short-form reels optimized for TikTok and Instagram Stories, leveraging authentic student testimonials to drive inquiries and applications.',
        features: ['Campus Tours', 'Course Intros', 'Promo Reels'],
        tags: ['#Education', '#Campus', '#Courses'],
        Icon: SchoolIcon,
        image: '/images/Education.png',
    },
    {
        title: 'Agencies',
        description:
            'Advertising and creative agencies often need white-label production partners to scale client work. We slot seamlessly into your workflow, delivering everything from sizzle reels and brand films to product showcase videos. Our team adapts to your style guides, pitch decks, and client briefs—providing raw footage, rough cuts, and final masters under NDA as required. This flexibility lets you expand your service offerings without the overhead of in-house production, all while maintaining consistent quality and turnaround.',
        features: ['White-Label Services', 'Custom Campaigns', 'Brand Management'],
        tags: ['#Agencies', '#WhiteLabel', '#Creative'],
        Icon: GroupIcon,
        image: '/images/agencies.png',
    },
];

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.7, ease: 'easeOut' },
    }),
};

const AudienceExplainer: React.FC = () => {
    return (
        <section className="py-20 " style={{ background: 'radial-gradient(to left, #4E1C50, #000)' }}>
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                        Comprehensive Service Suite for many Industries and Audiences
                    </h2>
                    <p className="mt-4 text-white/75 max-w-2xl mx-auto">
                        From real estate walkthroughs to corporate training and social content, each of our services is tailored for maximum impact in today’s market.
                    </p>
                </div>

                {/* Service Blocks */}
                <div className="space-y-16">
                    {audienceExplainer.map((svc, idx) => {
                        const IconComponent = svc.Icon;
                        const isReversed = idx % 2 === 1;
                        return (
                            <motion.div
                                key={svc.title}
                                className="relative overflow-hidden"
                                custom={idx}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0 }}
                                variants={itemVariants}
                            >
                                <div
                                    className={`flex flex-col lg:flex-row items-center gap-8 ${isReversed ? 'lg:flex-row-reverse' : ''
                                        }`}
                                >
                                    {/* Text Content */}
                                    <div className="lg:w-2/3 bg-[#8E24AA] rounded-2xl p-8 space-y-6 relative z-10">
                                        {/* Watermark Icon */}
                                        <IconComponent
                                            className="absolute top-4 right-4 text-white opacity-5 text-9xl"
                                        />

                                        <h3 className="text-2xl font-semibold text-white">
                                            {svc.title}
                                        </h3>
                                        <p className="text-white/80">{svc.description}</p>

                                        <div className="flex items-start justify-between gap-8">
                                            {/* Features List */}
                                            <ul className="space-y-2 flex-1">
                                                {svc.features.map((feat) => (
                                                    <li
                                                        key={feat}
                                                        className="flex items-center gap-3 text-white/90"
                                                    >
                                                        <CheckCircleIcon className="text-[#FF6A3D]" />
                                                        <span>{feat}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                            {/* Service Icon */}
                                            <IconComponent className="text-[#FF6A3D] text-6xl opacity-90" />
                                        </div>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2">
                                            {svc.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="text-sm bg-[#FF6A3D]/20 text-white px-3 py-1 rounded-full"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Contact Now Button */}
                                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                            <Button
                                                component={Link}
                                                href="/contact-us"
                                                variant="contained"
                                                sx={{
                                                    mt: 4,
                                                    background: 'linear-gradient(135deg, #FF6A3D 0%, #4E1C50 100%)',
                                                    color: '#fff',
                                                    py: 1.5,
                                                    px: 5,
                                                    borderRadius: '9999px',
                                                    boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
                                                }}
                                            >
                                                Contact Now
                                            </Button>
                                        </motion.div>
                                    </div>

                                    {/* Image */}
                                    <div className="lg:w-1/3 w-full h-full relative sm:hidden md:block">
                                        <Image
                                            src={svc.image}
                                            alt={`${svc.title} illustration`}
                                            width={500}
                                            height={400}
                                            objectFit="contain"
                                            className="rounded-lg shadow-xl"
                                        />
                                        {/* Decorative overlay */}
                                        <motion.div
                                            className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none"
                                            initial={{ opacity: 0 }}
                                            whileHover={{ opacity: 1 }}
                                            transition={{ duration: 1 }}
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default AudienceExplainer;
