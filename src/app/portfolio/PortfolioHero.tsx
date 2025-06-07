// components/PortfolioHero.tsx
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Button from '@mui/material/Button';
import StarIcon from '@mui/icons-material/Star';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import Image from 'next/image';

const highlights = [
  {
    icon: StarIcon,
    title: 'Diverse Industries',
    text: 'From real estate walkthroughs to startup launches and NGO campaigns, our portfolio spans every sector.',
  },
  {
    icon: ThumbUpIcon,
    title: 'Proven Impact',
    text: 'After measuring the results of market performance, each project displayed growth in boosting engagement, conversions, and brand recall.',
  },
  {
    icon: TrendingUpIcon,
    title: 'Not just upholding the trend, but creative visionary beyond setting',
    text: 'After reading the measures of market settings and understanding the factors that come into play, we’re profound in going beyond the following current trends, into formulating new trends.',
  },
  {
    icon: TrendingUpIcon,
    title: 'Mastery of cinematic arts',
    text: 'We blend cutting-edge visuals and storytelling techniques that position you ahead of the curve..',
  },
];

const listItemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay:0, duration: 0.6, ease: 'easeOut' },
  }),
};

const PortfolioHero: React.FC = () => (
  <section className="relative overflow-hidden py-24">
    {/* Background Gradient */}
    <div
      className="absolute inset-0 -z-10"
      style={{
        background: "linear-gradient(to right, #000, #002147)",
      }}
    />

    {/* Decorative Shapes */}
    <motion.div
      className="absolute top-16 left-16 w-12 h-12 bg-[#FF6A3D]/50 rounded-full"
      animate={{ scale: [1, 1.4, 1] }}
      transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
    />
    <motion.div
      className="absolute bottom-20 right-20 w-20 h-20 border-4 border-[#FF6A3D] rounded-full"
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
    />

    <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center gap-12">
      {/* Text Column */}
      <motion.div
        className="lg:w-2/3 space-y-6"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        // viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
          Portfolio: how we forged steps to success
        </h2>
        <p className="text-white/80 text-lg max-w-2xl">
          When we take any project work in our hands, we put efforts not just for our clients, but for our own improvement as well. We exalt our work as innovation- because we wish to give individuality to each and every distinctive asset.  Every frame in our portfolio is crafted with precision, creativity, and strategy: guaranteeing content that not only amazes the viewers but delivers measurable results.
        </p>

        <motion.ul
          className="space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {highlights.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.li
                key={item.title}
                custom={i}
                variants={listItemVariants}
                className="flex items-start gap-4"
              >
                <Icon className="text-4xl text-[#FF6A3D] mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-white/75">{item.text}</p>
                </div>
              </motion.li>
            );
          })}
        </motion.ul>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link href="/portfolio" passHref>
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
              View Our Work
            </Button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Illustration Column */}
      <motion.div
        className="lg:w-1/2 w-full flex justify-center"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        // viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="relative w-full max-w-sm">
          <Image
            src="/images/portfolio.png"
            alt="Portfolio Illustration"
            width={500}
            height={700}
            objectFit="contain"
            className="rounded-xl shadow-2xl"
          />
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

export default PortfolioHero;
