// components/CombinedServicesWorkflow.tsx
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import VideocamIcon from '@mui/icons-material/Videocam';
import EditIcon from '@mui/icons-material/Edit';

const types = [
  {
    title: 'YouTube Videos',
    image: '/images/6865587_23409.jpg',
    description: 'Full-length, high-definition videos optimized for YouTube audiences.',
    tags: ['YouTube', 'HD'],
  },
  {
    title: 'Commercials & Ads',
    image: '/images/6851375_28339.jpg',
    description: 'Short-form ads crafted for TV and online distribution.',
    tags: ['TV Ads', 'Branding'],
  },
  {
    title: 'Mid-Level Ads',
    image: '/images/modern-design-illustration-web-ad.png',
    description: 'Balanced-length social media ads that engage and convert.',
    tags: ['Social', 'Promos'],
  },
  {
    title: 'Video Production',
    image: '/images/photographer-character.png',
    description: 'End-to-end filming & editing from concept through delivery.',
    tags: ['Full-Service', 'Editing'],
  },
  {
    title: 'Shorts & Reels',
    image: '/images/hand-with-phone-video-call-icon-isolated.png',
    description: 'Quick, vertical videos designed for social engagement.',
    tags: ['Shorts', 'Reels'],
  },
  {
    title: 'User-Generated Content',
    image: '/images/multitasking-businessman-doing-many-tasks-same-time.png',
    description: 'Authentic footage featuring real customers and advocates.',
    tags: ['UGC', 'Testimonials'],
  },
  {
    title: 'Documentaries',
    image: '/images/film-camera-geek-cartoon-cartoon-mascot-vector.png',
    description: 'Long-form storytelling films that captivate and inform.',
    tags: ['Storytelling', 'Long-Form'],
  },
];

const steps = [
  {
    title: 'Pre-Production',
    Icon: PlaylistAddCheckIcon,
    description: 'Planning, scripting, budgeting & location scouting before the cameras roll.',
    tags: ['Planning', 'Scripting', 'Budget'],
  },
  {
    title: 'Production',
    Icon: VideocamIcon,
    description: 'On-set filming with pro crews, cameras, lighting, and direction.',
    tags: ['Filming', 'Direction', 'On-Set'],
  },
  {
    title: 'Post-Production',
    Icon: EditIcon,
    description: 'Editing, color grading, sound design & VFX to craft the final cut.',
    tags: ['Editing', 'Color-Grade', 'Sound'],
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const CombinedServicesWorkflow: React.FC = () => (
  <section className="py-24 ">
    <div className="container mx-auto px-4 space-y-20">
      
      {/* Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        className="text-center"
      >
        <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-white">
          Our Formats & Workflow
        </motion.h2>
        <motion.p variants={fadeInUp} className="mt-4 text-white/75 max-w-2xl mx-auto">
          From diverse video formats to a transparent three-step production process, here’s how Inkwell Media brings your vision to life.
        </motion.p>
      </motion.div>

      {/* Types Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        {types.map((t, i) => (
          <motion.div
            key={t.title}
            custom={i}
            variants={fadeInUp}
            className="relative overflow-hidden rounded-xl shadow-lg group"
          >
            <Image
              src={t.image}
              alt={t.title}
              fill
              objectFit="cover"
              className="rounded-xl transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm rounded-xl" />
            <div className="relative z-10 p-6 flex flex-col h-full">
              <h3 className="text-xl font-semibold text-white mb-2">{t.title}</h3>
              <p className="text-white/80 mb-4 flex-grow">{t.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {t.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-[#FF6A3D]/20 text-white px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link href="/services" passHref>
                <motion.button
                  whileHover={{ x: 4 }}
                  className="mt-auto inline-block border border-[#FF6A3D] text-[#FF6A3D] px-4 py-2 rounded-full text-sm font-medium hover:bg-[#FF6A3D] hover:text-white transition"
                >
                  Learn More
                </motion.button>
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Workflow Timeline */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
      >
        {steps.map((s, i) => (
          <motion.div
            key={s.title}
            custom={i}
            variants={fadeInUp}
            className="bg-[#8E24AA] rounded-2xl p-8 text-center shadow-2xl flex flex-col"
          >
            <div className="mx-auto mb-4 p-4 bg-[#4E1C50] rounded-full inline-block">
              <s.Icon className="text-3xl text-white" />
            </div>
            <h4 className="text-2xl font-semibold text-white mb-3">{s.title}</h4>
            <p className="text-white/80 mb-4 flex-grow">{s.description}</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {s.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-[#FF6A3D]/20 text-white px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default CombinedServicesWorkflow;
