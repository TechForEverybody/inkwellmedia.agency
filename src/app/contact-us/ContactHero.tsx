import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

export default function ContactHero() {
  const bulletVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: (i: number) => ({ x: 0, opacity: 1, transition: { delay: 0.3 + i * 0.2, type: 'spring', stiffness: 100 } }),
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#4E1C50] to-black text-white overflow-hidden relative">
      {/* Decorative shapes */}
      <motion.div
        className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-[#FF6A3D] opacity-20"
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-48 h-48 rounded-full bg-[#FFA62B] opacity-20"
        animate={{ x: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 7 }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-center mb-6 leading-tight"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Let’s Turn Your Ideas into Reality
        </motion.h1>
        <motion.p
          className="text-center text-lg md:text-xl max-w-3xl mx-auto mb-12"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Reach out today and experience a seamless, collaborative process—crafted to bring your story to life with clarity, creativity, and confidence.
        </motion.p>

        {/* Bullet Points */}
        <div className="max-w-xl mx-auto space-y-6 mb-12">
          {[
            { icon: ChatBubbleIcon, text: 'Fast & Friendly Communication' },
            { icon: RocketLaunchIcon, text: 'Quick Turnaround Times' },
            { icon: ThumbUpIcon, text: 'Guaranteed Satisfaction' },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                className="flex items-center"
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={bulletVariants}
              >
                <Icon className="text-[#FF6A3D] text-3xl mr-4" />
                <span className="text-xl">{item.text}</span>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, type: 'spring', stiffness: 120 }}
        >
          <Link href="/contact">
            <div className="inline-block bg-gradient-to-r from-[#FF6A3D] to-[#FFA62B] hover:opacity-90 text-white rounded-full px-12 py-4 text-lg font-semibold shadow-2xl transition-transform transform hover:scale-105">
              Contact Us Now
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
