import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ReactPlayer from 'react-player/youtube';
import useMediaQuery from '@mui/material/useMediaQuery';
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ShortTextIcon from '@mui/icons-material/ShortText';
import Image from 'next/image';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Typography } from '@mui/material';

export interface PortfolioItem {
    id: string;
    title: string;
    type: 'youtube' | 'shorts';
    thumbnail: string;
    videoUrl: string;
}

const portfolioItems: PortfolioItem[] = [
    { id: '02', title: 'Matrubhoomi Developers', type: 'youtube', thumbnail: 'https://img.youtube.com/vi/fC39o9rfl-g/hqdefault.jpg', videoUrl: 'fC39o9rfl-g' },
    { id: '04', title: 'Matrubhoomi Developers', type: 'shorts', thumbnail: 'https://img.youtube.com/vi/pBQidJHykcY/hqdefault.jpg', videoUrl: 'pBQidJHykcY' },
    { id: '03', title: 'Matrubhoomi Developers', type: 'shorts', thumbnail: 'https://img.youtube.com/vi/-eBeMUjt5k0/hqdefault.jpg', videoUrl: '-eBeMUjt5k0' },
    { id: '01', title: 'Matrubhoomi Developers', type: 'youtube', thumbnail: 'https://img.youtube.com/vi/FeVQc7ruivE/hqdefault.jpg', videoUrl: 'FeVQc7ruivE' },
    { id: '0', title: 'Propzone', type: 'youtube', thumbnail: 'https://img.youtube.com/vi/_sWam2SD_XM/hqdefault.jpg', videoUrl: '_sWam2SD_XM' },

];

const getDescription = (type: PortfolioItem['type']) =>
    type === 'youtube'
        ? 'Full-length project showcase on YouTube.'
        : 'Short-form promotional reel.';

export default function Portfolio() {
    const isDesktop = useMediaQuery('(min-width:1024px)');
    // group into pairs of two
    const rows: PortfolioItem[][] = [];
    for (let i = 0; i < portfolioItems.length; i += 3) {
        rows.push(portfolioItems.slice(i, i + 3));
    }

    return (
        <Typography className="py-16" sx={{
            background: "linear-gradient(to right, #4F1C51, #000000)",
        }}>


            <div className="container mx-auto px-4 space-y-12">
                <div className="text-center mb-12 px-4">
                    <h2 className="text-3xl md:text-4xl font-bold">Our Portfolio</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto mt-4">
                        Explore a curated selection of our video production work, from full-length YouTube showcases to short-form reels that captivate audiences.
                    </p>
                </div>
                {rows.map((pair, idx) => {
                    // determine columns for this row
                    let cols = '1fr 1fr 1fr';
                    if (pair.length === 3) {
                        if (pair[0].type === 'youtube' && pair[1].type === 'shorts' && pair[2].type === 'shorts') cols = '2fr 1fr 1fr';
                        else if (pair[0].type === 'shorts' && pair[1].type === 'youtube' && pair[2].type === 'shorts') cols = '1fr 2fr 1fr';
                        else if (pair[0].type === 'shorts' && pair[1].type === 'shorts' && pair[2].type === 'youtube') cols = '1fr 1fr 2fr';
                        else if (pair[0].type === 'youtube' && pair[1].type === 'youtube') cols = '2fr 2fr';
                    }
                    else if (pair.length === 2) {
                        if (pair[0].type === 'youtube' && pair[1].type === 'shorts') cols = '2fr 1fr';
                        else if (pair[0].type === 'shorts' && pair[1].type === 'youtube') cols = '1fr 2fr';
                        else if (pair[0].type === 'shorts' && pair[1].type === 'shorts') cols = '1fr 1fr';
                        else if (pair[0].type === 'youtube' && pair[1].type === 'youtube') cols = '2fr 2fr';
                    } else {
                        cols = '1fr';
                    }
                    return (
                        <motion.div
                            key={idx}
                            className="grid gap-3"
                            style={{ gridTemplateColumns: isDesktop ? cols : '1fr' }}
                        >
                            {pair.map(item => (
                                <VideoCard key={item.id} item={item} isDesktop={isDesktop} />
                            ))}
                        </motion.div>
                    );
                })}
            </div>
        </Typography>
    );
}

interface VideoCardProps { item: PortfolioItem; isDesktop: boolean }
function VideoCard({ item, isDesktop }: VideoCardProps) {
    const [hovered, setHovered] = useState(false);
    const [manualPlay, setManualPlay] = useState(false);
    const playing = manualPlay || (isDesktop && hovered);
    const Icon = item.type === 'youtube' ? YouTubeIcon : ShortTextIcon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-xl overflow-hidden shadow-lg"
        >
            <div
                className="relative"
                onMouseEnter={() => !manualPlay && isDesktop && setHovered(true)}
                onMouseLeave={() => !manualPlay && isDesktop && setHovered(false)}
            >
                <div className="relative w-full h-[350px] ">
                    {playing ? (
                        <ReactPlayer
                            url={`https://www.youtube.com/watch?v=${item.videoUrl}`}
                            playing
                            muted
                            loop
                            width="100%"
                            height="100%"
                            style={{ position: 'absolute', top: 0, left: 0 }}
                        />
                    ) : (
                        <>
                            <Image
                                src={item.thumbnail}
                                alt={`${item.title} thumbnail`}
                                layout="fill"
                                objectFit="cover"
                            />
                            <motion.div
                                className="absolute inset-0 flex items-center justify-center bg-black/25"
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                            >
                                <motion.button
                                    onClick={() => setManualPlay(true)}
                                    whileHover={{ scale: 1.2 }}
                                    className="bg-white/80 text-black rounded-full p-3"
                                >
                                    <PlayArrowIcon fontSize="large" />
                                </motion.button>
                            </motion.div>
                        </>
                    )}
                </div>
            </div>

            <div className="p-6 bg-white">
                <div className="flex items-center gap-2 mb-2">
                    <Icon className="text-red-500" />
                    <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                </div>
                <p className="text-gray-700 mb-4">{getDescription(item.type)}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full">#{item.type}</span>
                    <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">#Video</span>
                </div>
                <motion.div whileHover={{ x: 4 }}>
                    <Button
                        href={`https://www.youtube.com/watch?v=${item.videoUrl}`}
                        target="_blank"
                        variant="outlined"
                        endIcon={<ArrowForwardIosIcon />}
                        className="rounded-full text-sm text-gray-700 border-gray-300 hover:bg-gray-100"
                    >
                        Watch Now
                    </Button>
                </motion.div>
            </div>
        </motion.div>
    );
}
