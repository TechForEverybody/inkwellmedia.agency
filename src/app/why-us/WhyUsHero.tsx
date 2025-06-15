// components/WhyUsHero.tsx
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Button from '@mui/material/Button';
import PublicIcon from '@mui/icons-material/Public';
import BrushIcon from '@mui/icons-material/Brush';
import TimelineIcon from '@mui/icons-material/Timeline';
import BuildIcon from '@mui/icons-material/Build';
import { Typography } from '@mui/material';

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
  <section className="relative overflow-hidden py-24 md:py-10" style={{
    background: "url('/images/29.jpg') no-repeat center center/cover",
    backgroundAttachment: "fixed",
    backgroundSize: 'cover',
    minHeight: '100vh',
    fontFamily: 'Elecrolize, sans-serif',
  }}>
    {/* Background gradient */}

    <div
      className="absolute inset-0 -z-10"

    />
    <Typography className='seperator' sx={{
      height: {
        xs: '50px',
        sm: '70px',
        md: '80px',
      }
    }} />
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
        className="lg:w-3/4 space-y-6"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
          What is Inkwell?
        </h2>
        <p className="text-white/80 text-lg max-w-2xl">
          If we’re to answer in a few words? Specialists in the field of media production. But a few words don’t always suffice, right? So let us give you a briefing:
          <br />
          <strong style={{
            color: "yellow"
          }}>Inkwell</strong>- As the name suggests, the metaphorical meaning gives the expression of a well brimming with ink as ideas and creativity, we work in the fields of creativity and production. Turning dreams into visualisation is an ability which we capitalize. Merging skillfully over the last years, we’ve worked with several organizations helping them achieve commercial success. Even now, we’re actively working over the commercial and corporate sector, personal interests and eventful settings.
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

    </div>
  </section>
);

export default WhyUsHero;
