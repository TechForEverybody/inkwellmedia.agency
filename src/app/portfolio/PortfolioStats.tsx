'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  PlayCircle,
  Instagram,
  Youtube,
  Film,
  ExternalLink,
  Grid,
} from 'lucide-react';
import { cn } from '@/lib/utils';

type VideoType = 'youtube' | 'shorts' | 'reel' | 'custom';

interface PortfolioItem {
  id: string;
  title: string;
  type: VideoType;
  thumbnail: string;
  videoUrl: string;
}

const portfolioItems: PortfolioItem[] = [
  { id: '02', title: 'Matrubhoomi Dev', type: 'youtube', thumbnail: 'https://img.youtube.com/vi/fC39o9rfl-g/hqdefault.jpg', videoUrl: 'fC39o9rfl-g' },
  { id: '0', title: 'Propzone',       type: 'youtube', thumbnail: 'https://img.youtube.com/vi/_sWam2SD_XM/hqdefault.jpg', videoUrl: '_sWam2SD_XM' },
  { id: '01', title: 'Matrubhoomi Dev', type: 'youtube', thumbnail: 'https://img.youtube.com/vi/FeVQc7ruivE/hqdefault.jpg', videoUrl: 'FeVQc7ruivE' },
  { id: '03', title: 'Matrubhoomi Dev', type: 'shorts',  thumbnail: 'https://img.youtube.com/vi/-eBeMUjt5k0/hqdefault.jpg', videoUrl: '-eBeMUjt5k0' },
  { id: '04', title: 'Matrubhoomi Dev', type: 'shorts',  thumbnail: 'https://img.youtube.com/vi/pBQidJHykcY/hqdefault.jpg', videoUrl: 'pBQidJHykcY' },
  { id: '007', title: 'Propzone',       type: 'youtube', thumbnail: 'https://img.youtube.com/vi/VEOTMPZFtbc/hqdefault.jpg', videoUrl: 'VEOTMPZFtbc' },
  { id: '008', title: 'Cityprop',       type: 'youtube', thumbnail: 'https://img.youtube.com/vi/dRG5AXarqII/hqdefault.jpg', videoUrl: 'dRG5AXarqII' },
  { id: '3',  title: 'Inkwell Reel',   type: 'reel',    thumbnail: '/logo.jpg?height=270&width=480',         videoUrl: 'https://www.instagram.com/reel/DGnGamVNVLD/' },
  { id: '4',  title: 'Sahyadri Infra', type: 'youtube', thumbnail: 'https://img.youtube.com/vi/Ojaq3k0U8b4/hqdefault.jpg', videoUrl: 'Ojaq3k0U8b4' },
  { id: '6',  title: 'Dreamland Prop', type: 'youtube', thumbnail: 'https://img.youtube.com/vi/WBrCNJnnmuk/hqdefault.jpg', videoUrl: 'WBrCNJnnmuk' },
  { id: '7',  title: 'Propzone Mum',   type: 'youtube', thumbnail: 'https://img.youtube.com/vi/57jgxgvpRsM/hqdefault.jpg', videoUrl: '57jgxgvpRsM' },
  // ...add remaining items here...
];

const filterOptions: (VideoType | 'all')[] = [
  'all',
  'youtube',
  'shorts',
  'reel',
  'custom',
];

const filterIcons: Record<VideoType | 'all', React.ReactNode> = {
  all:   <Grid size={16} className="text-white/80" />,
  youtube: <Youtube size={16} className="text-red-600" />,
  shorts:  <Film size={16} className="text-red-600" />,
  reel:    <Instagram size={16} className="text-pink-500" />,
  custom:  <Film size={16} className="text-blue-500" />,
};

export default function PortfolioPage() {
  const [selected, setSelected] = useState<PortfolioItem | null>(null);
  const [filter, setFilter] = useState<VideoType | 'all'>('all');

  const filtered =
    filter === 'all'
      ? portfolioItems
      : portfolioItems.filter(item => item.type === filter);

  const getTypeIcon = (type: VideoType) => {
    switch (type) {
      case 'youtube': return <Youtube className="w-5 h-5 text-red-600" />;
      case 'shorts':  return <Film className="w-5 h-5 text-red-600" />;
      case 'reel':    return <Instagram className="w-5 h-5 text-pink-500" />;
      case 'custom':  return <Film className="w-5 h-5 text-blue-500" />;
    }
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-[#4E1C50] to-black overflow-hidden">
      {/* Decorative shapes */}
      <motion.div
        className="absolute top-10 left-10 w-16 h-16 bg-[#FF6A3D]/30 rounded-full"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ loop: Infinity, duration: 6 }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-24 h-24 border-2 border-[#FF6A3D] rounded-full"
        animate={{ rotate: 360 }}
        transition={{ loop: Infinity, duration: 20 }}
      />

      <div className="container mx-auto px-4 text-white">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-extrabold">Our Portfolio</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-white/80">
            Explore our most impactful work—crafted to captivate, convert, and create lasting brand impact.
          </p>
        </motion.div>

        {/* Filter Bar */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filterOptions.map(opt => (
            <motion.button
              key={opt}
              onClick={() => setFilter(opt)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                'flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition',
                filter === opt
                  ? 'bg-[#FF6A3D] text-white'
                  : 'bg-white/20 text-white hover:bg-white/30'
              )}
            >
              {filterIcons[opt]}
              <span>
                {opt === 'all' ? 'All Projects' : opt.charAt(0).toUpperCase() + opt.slice(1)}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Video Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {filtered.map((item, i) => (
            <motion.div
              key={item.id}
              className="group relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden shadow-lg"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } },
              }}
              whileHover={{ translateY: -5 }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  fill
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity"/>
                <div className="absolute top-2 right-2 flex items-center gap-1 bg-white/30 backdrop-blur-sm rounded-full px-2 py-1 text-xs">
                  {getTypeIcon(item.type)}
                  <span className="text-white">{item.type}</span>
                </div>
                <motion.button
                  onClick={() => setSelected(item)}
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{ scale: 1.2 }}
                >
                  <PlayCircle className="w-12 h-12 text-white/90" />
                </motion.button>
              </div>
              <div className="p-4 flex flex-col h-32">
                <h3 className="text-lg font-semibold text-white mb-2 line-clamp-1">
                  {item.title}
                </h3>
                <div className="mt-auto flex items-center justify-between">
                  <motion.div whileHover={{ x: 4 }}>
                    <Link href="#" onClick={() => setSelected(item)}>
                      <span className="text-sm font-medium text-[#FF6A3D] flex items-center gap-1">
                        Watch
                        <ExternalLink className="w-4 h-4" />
                      </span>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Video Modal */}
        <AnimatePresence>
          {selected && (
            <motion.div
              className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            >
              <motion.div
                className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl max-w-3xl w-full"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                transition={{ duration: 0.3 }}
                onClick={e => e.stopPropagation()}
              >
                <div className="flex justify-between items-center p-4 border-b border-white/20">
                  <div className="flex items-center gap-2">
                    {getTypeIcon(selected.type)}
                    <h3 className="text-xl text-white">{selected.title}</h3>
                  </div>
                  <button
                    onClick={() => setSelected(null)}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
                  >
                    <X className="w-6 h-6 text-white" />
                  </button>
                </div>
                <div className="bg-black">
                  {selected.type === 'reel' ? (
                    <div className="p-8 text-center text-white">
                      <p>View this Reel on Instagram</p>
                      <Link
                        href={selected.videoUrl}
                        target="_blank"
                        className="inline-flex items-center gap-2 mt-4 bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 rounded-full text-white"
                      >
                        <Instagram className="w-5 h-5" />
                        Open Instagram
                      </Link>
                    </div>
                  ) : (
                    <iframe
                      src={`https://www.youtube.com/embed/${selected.videoUrl}?autoplay=1&rel=0&modestbranding=1`}
                      allow="autoplay; encrypted-media"
                      className="w-full aspect-video"
                      title={selected.title}
                    />
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
