// components/HomeServices.tsx
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Button from '@mui/material/Button';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import ShareIcon from '@mui/icons-material/Share';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

interface Service {
  id: string;
  title: string;
  Icon: React.ComponentType<any>;
  description: string;
  tags: string[];
}

const servicesData: Service[] = [
  {
    id: 'content',
    title: 'Content Creation',
    Icon: InsertDriveFileIcon,
    description: `Transform ideas into captivating stories with our end-to-end content creation. From brand strategy and scripting to 4K filming and dynamic post-production, we deliver versatile assets—long-form explainers, social clips, and promotional reels—optimized for YouTube, Instagram, and TikTok. Engage audiences, enhance SEO, and build lasting brand loyalty.`,
    tags: ['#Storytelling', '#Videography', '#Cinematic'],
  },
  {
    id: 'social',
    title: 'Social Media Management',
    Icon: ShareIcon,
    description: `Amplify your online presence with our Social Media Management. We craft strategic content calendars, schedule platform-specific posts, and actively engage your community. Through A/B testing, performance analytics, and paid campaign optimization, we boost follower growth, engagement rates, and ROI—turning browsers into loyal customers.`,
    tags: ['#Engagement', '#Analytics', '#Growth'],
  },
  {
    id: 'video',
    title: 'Video Production',
    Icon: VideoLibraryIcon,
    description: `Leverage our Video Production for broadcast-quality films, commercials, and training videos. From concept workshops and location scouting to 4K shoots with drones and gimbals, we handle every detail. In post-production, we deliver polished edits with color grading, motion graphics, and sound design—optimized for web, social, and live presentations.`,
    tags: ['#4K', '#Cinematic', '#Broadcast'],
  },
  {
    id: 'consultation',
    title: 'Consultation',
    Icon: SupportAgentIcon,
    description: `Gain expert insights with our Consultation service. We audit your assets, conduct stakeholder interviews, and analyze market trends to craft a detailed media strategy—complete with content roadmaps, budget plans, and KPIs. Through hands-on workshops and quarterly refresh sessions, we ensure your campaigns remain agile and results-driven.`,
    tags: ['#Strategy', '#Roadmap', '#Workshops'],
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
    style={{ background: 'linear-gradient(135deg, #4E1C50 0%, #000000 100%)' }}
  >
    <div className="container mx-auto px-4">
      {/* Header */}
      <motion.div
        className="text-center mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
          Our Services
        </h2>
        <p className="mt-4 text-white/80 max-w-2xl mx-auto">
          We offer premium advertising services tailored to help your brand succeed in the digital space.
        </p>
      </motion.div>

      {/* Services Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {servicesData.map((svc, idx) => (
          <motion.div
            key={svc.id}
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 flex flex-col"
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
          >
            <div className="flex justify-center mb-4">
              <svc.Icon className="text-5xl text-[#FF6A3D]" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4 text-center">
              {svc.title}
            </h3>
            <p className="text-white/80 mb-6 flex-grow">
              {svc.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {svc.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-[#FF6A3D]/20 text-white px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
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
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default HomeServices;
