// components/WhyUsHero.tsx
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Button from '@mui/material/Button';
import PublicIcon from '@mui/icons-material/Public';
import BrushIcon from '@mui/icons-material/Brush';
import TimelineIcon from '@mui/icons-material/Timeline';
import BuildIcon from '@mui/icons-material/Build';
import Image from 'next/image';

const reasons = [
  {
    icon: PublicIcon,
    title: 'Deep Domain Expertise',
    text: 'With years of experience across real estate, e-commerce, corporate, and more, we understand your audience, your goals, and the best way to tell your story.',
  },
  {
    icon: BrushIcon,
    title: 'End-to-End Creative Control',
    text: 'From concept and scripting to shooting, editing, and motion-graphics, everything happens under one roof—ensuring consistent vision and faster turnarounds.',
  },
  {
    icon: TimelineIcon,
    title: 'Data-Driven Strategies',
    text: 'We combine analytics with creativity—testing thumbnails, A/B’ing cuts, and optimizing distribution to maximize reach, engagement, and ROI.',
  },
  {
    icon: BuildIcon,
    title: 'Cutting-Edge Production Tech',
    text: 'We leverage 4K cameras, drones, gimbals, and pro lighting, plus studio facilities and advanced post-production workflows, for a polished, cinematic finish.',
  },
];

const listVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.3 + i * 0.2, duration: 0.6, ease: 'easeOut' },
  }),
};

const WhyUsHero: React.FC = () => (
  <section className="relative overflow-hidden py-24">
    {/* Background gradient */}
    <div
      className="absolute inset-0 -z-10"
      style={{
        background: 'radial-gradient(circle at 25% 25%, #4E1C50, #000)',
      }}
    />

    {/* Decorative animated shapes */}
    <motion.div
      className="absolute top-16 left-16 w-12 h-12 bg-[#FF6A3D]/50 rounded-full"
      animate={{ scale: [1, 1.3, 1] }}
      transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
    />
    <motion.div
      className="absolute bottom-20 right-20 w-20 h-20 border-4 border-[#FF6A3D] rounded-full"
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
    />

    <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center gap-12">
      {/* Text Column */}
      <motion.div
        className="lg:w-1/2 space-y-6"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
          Why Choose Inkwell Media?
        </h2>
        <p className="text-white/80 text-lg max-w-2xl">
          At Inkwell Media, we don’t just make videos—we craft experiences. Our holistic approach blends storytelling, technology, and data to deliver content that resonates, engages, and converts. Whether you’re launching a startup, selling real estate, or growing your brand online, here’s why top companies trust us to bring their vision to life.
        </p>

        <motion.ul
          className="space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.li
                key={r.title}
                custom={i}
                variants={listVariants}
                className="flex items-start gap-4"
              >
                <Icon className="text-4xl text-[#FF6A3D] mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {r.title}
                  </h3>
                  <p className="text-white/75">{r.text}</p>
                </div>
              </motion.li>
            );
          })}
        </motion.ul>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link href="/contact-us" passHref>
            <Button
              component="a"
              variant="contained"
              sx={{
                background: 'linear-gradient(135deg, #FF6A3D 0%, #4E1C50 100%)',
                color: '#fff',
                py: 1.5,
                px: 5,
                borderRadius: '9999px',
                boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
              }}
            >
              Get in Touch
            </Button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Illustration Column */}
      <motion.div
        className="lg:w-1/2 w-full flex justify-center"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="relative w-full max-w-sm">
          <Image
            src="/images/why-us.png"
            alt="Why Us Illustration"
            width={400}
            height={600}
            objectFit="contain"
            className="rounded-xl shadow-2xl"
          />
          {/* Subtle overlay dots */}
          <motion.div
            className="absolute -top-4 -right-4 w-6 h-6 bg-[#FF6A3D]/50 rounded-full"
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </div>
  </section>
);

export default WhyUsHero;
