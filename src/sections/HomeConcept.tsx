import React from 'react';
import { motion } from 'framer-motion';
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import VideocamIcon from '@mui/icons-material/Videocam';
import EditIcon from '@mui/icons-material/Edit';
import VideoProductionAnimation from './VideoProductionAnimation';

const steps = [
    {
        title: 'Pre-Production',
        icon: PlaylistAddCheckIcon,
        description:
            'Ideas take shape, budgets get set, schedules are planned, scripts written, and locations scouted before the cameras roll.',
        tags: ['Planning', 'Budgeting', 'Scheduling'],
    },
    {
        title: 'Production',
        icon: VideocamIcon,
        description:
            'Cameras roll, talent steps into their roles, and every shot captures the essence of your creative vision on set.',
        tags: ['Filming', 'Direction', 'On-Set'],
    },
    {
        title: 'Post-Production',
        icon: EditIcon,
        description:
            'Raw footage is transformed with editing, color grading, sound design, and visual effects into a polished final product.',
        tags: ['Editing', 'Color Grading', 'Sound Mix'],
    },
];

export default function Concept() {
    return (
        <section className="relative py-16 overflow-hidden" style={{
            background: "linear-gradient(to left, #4F1C51, #000000)",
        }}>
            <div className="container mx-auto px-4 flex flex-col lg:flex-row items-start">
                {/* Left Panel */}
                
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="w-full lg:w-1/3 mb-8 lg:mb-0"
                >
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <VideoProductionAnimation />

                        </motion.div>
                    <motion.h2
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
                        className="text-4xl font-bold mb-4"
                    >
                        From Concept To Creation
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="mb-6 text-gray-300"
                    >
                        We guide you through every stage of video production, ensuring your vision is expertly realized.
                    </motion.p>
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                    >
                        
                    </motion.div>
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                    >
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button
                                variant="contained"
                                endIcon={<ArrowForwardIosIcon />}
                                className="bg-red-500 hover:bg-red-600 py-2 px-6 rounded-full"
                            >
                                Explore Services
                            </Button>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Right Timeline */}
                <div className="w-full lg:w-2/3 relative">
                    {/* Vertical line */}
                    <div className="hidden lg:block absolute top-0 left-1/2 transform -translate-x-1/2 h-full border-l-2 border-gray-700" />

                    {steps.map((step, idx) => {
                        const Icon = step.icon;
                        return (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ type: 'spring', stiffness: 80, delay: idx * 0.4 }}
                                className="relative mb-12 lg:mb-16 lg:pl-12"
                            >
                                {/* Dot on line */}
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ type: 'spring', stiffness: 200, delay: idx * 0.4 + 0.2 }}
                                    className="absolute left-1/2 transform -translate-x-1/2 bg-red-500 rounded-full w-5 h-5"
                                />

                                <div className="border border-gray-700 rounded-2xl p-6 backdrop-filter backdrop-blur-sm bg-white/5">
                                    <motion.div
                                        initial={{ scale: 0.5, opacity: 0 }}
                                        whileInView={{ scale: 1, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.4 + 0.3, type: 'spring', stiffness: 150 }}
                                        className="flex items-center mb-3 text-red-500"
                                    >
                                        <Icon className="text-3xl mr-3" />
                                        <h3 className="text-2xl font-semibold">{step.title}</h3>
                                    </motion.div>

                                    <motion.p
                                        initial={{ y: 20, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.4 + 0.4, duration: 0.5 }}
                                        className="text-gray-300 mb-4"
                                    >
                                        {step.description}
                                    </motion.p>

                                    {/* Tags */}
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.4 + 0.5, staggerChildren: 0.1 }}
                                        className="flex flex-wrap gap-2 mb-6"
                                    >
                                        {step.tags.map((tag) => (
                                            <motion.span
                                                key={tag}
                                                initial={{ scale: 0.5, opacity: 0 }}
                                                whileInView={{ scale: 1, opacity: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: idx * 0.4 + 0.6 }}
                                                className="text-sm bg-red-500 bg-opacity-20 px-3 py-1 rounded-full"
                                            >
                                                {tag}
                                            </motion.span>
                                        ))}
                                    </motion.div>

                                    <motion.div
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        whileInView={{ scale: 1, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.4 + 0.7, type: 'spring', stiffness: 120 }}
                                    >
                                        <motion.div whileHover={{ x: 5 }}>
                                            <Button
                                                variant="contained"
                                                color='secondary'
                                                endIcon={<ArrowForwardIosIcon />}
                                                className="border-gray-500 text-gray-200 hover:border-white hover:text-white rounded-full"
                                            >
                                                Learn More
                                            </Button>
                                        </motion.div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
