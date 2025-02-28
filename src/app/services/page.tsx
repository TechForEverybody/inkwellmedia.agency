'use client';
import { motion } from 'framer-motion';
import {
    BarChart3,
    Camera,
    FileText,
    Lightbulb,
    LineChart,
    MessagesSquare,
} from 'lucide-react';

const services = [
    {
        name: 'Social Media Management',
        icon: MessagesSquare,
        desc: "Grow your brand's presence with strategic social media campaigns.",
    },
    {
        name: 'Videography',
        icon: Camera,
        desc: 'High-quality video production to captivate your audience.',
    },
    {
        name: 'Content Management',
        icon: FileText,
        desc: 'Engaging content to keep your brand fresh and relevant.',
    },
    {
        name: 'Brand Strategy',
        icon: Lightbulb,
        desc: 'A clear vision to make your brand stand out from competitors.',
    },
    {
        name: 'Analytics',
        icon: BarChart3,
        desc: 'Data-driven insights to optimize your marketing strategies.',
    },
    {
        name: 'Consultation',
        icon: LineChart,
        desc: 'Expert guidance to help grow and scale your business.',
    },
];

export default function ServicesPage() {
    return (
        <section className='min-h-screen bg-gradient-to-b from-black via-[#111] to-[#222] text-white py-20 px-6'>
            <div className='max-w-6xl mx-auto text-center'>
                <h1 className='text-5xl mt-10 font-bold mb-8 text-shadow-custom'>
                    Our Services
                </h1>
                <p className='text-gray-400 max-w-2xl mx-auto mb-12'>
                    We offer premium advertising services tailored to help your
                    brand succeed in the digital space.
                </p>

                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            //                             className='group relative bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg transition-transform hover:-translate-y-3'
                            className='bg-[#1a1a1a] backdrop-blur-lg p-6 rounded-xl shadow-lg text-center transition-all duration-300 border border-gray-700 hover:border-[#D72638]'
                        >
                            <service.icon
                                size={40}
                                className='text-[#D72638] mx-auto mb-4'
                            />
                            <h3 className='text-2xl font-semibold mb-2'>
                                {service.name}
                            </h3>
                            <p className='text-gray-400 text-sm'>
                                {service.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
