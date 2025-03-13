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
        name: 'Content Creation',
        icon: Camera,
        desc: 'High-quality video production to captivate your audience.',
    },
    {
        name: 'Social Media Management',
        icon: MessagesSquare,
        desc: "Grow your brand's presence with strategic social media campaigns.",
    },
    {
        name: 'Video Production',
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

// function FloatingPaths({ position }: { position: number }) {
//     const paths = Array.from({ length: 36 }, (_, i) => ({
//       id: i,
//       d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
//         380 - i * 5 * position
//       } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
//         152 - i * 5 * position
//       } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
//         684 - i * 5 * position
//       } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
//       color: `rgba(15,23,42,${0.1 + i * 0.03})`,
//       width: 0.5 + i * 0.03,
//     }))

//     return (
//       <div className="absolute inset-0 pointer-events-none">
//         <svg className="w-full h-full text-slate-950 dark:text-white" viewBox="0 0 696 316" fill="none">
//           <title>Background Paths</title>
//           {paths.map((path) => (
//             <motion.path
//               key={path.id}
//               d={path.d}
//               stroke="currentColor"
//               strokeWidth={path.width}
//               strokeOpacity={0.1 + path.id * 0.03}
//               initial={{ pathLength: 0.3, opacity: 0.6 }}
//               animate={{
//                 pathLength: 1,
//                 opacity: [0.3, 0.6, 0.3],
//                 pathOffset: [0, 1, 0],
//               }}
//               transition={{
//                 duration: 20 + Math.random() * 10,
//                 repeat: Number.POSITIVE_INFINITY,
//                 ease: "linear",
//               }}
//             />
//           ))}
//         </svg>
//       </div>
//     )
//   }

export default function ServicesPage() {
    return (
        // <section className='min-h-screen bg-gradient-to-b from-black via-[#111] to-[#222] text-white py-20 px-6'>
        <section className='relative flex items-center justify-between h-full bg-[#fff] text-white px-12 pt-24 overflow-hidden'>
            <div className='max-w-6xl mx-auto text-center'>
                <h1 className='text-5xl mt-10 text-[#fa8128] font-bold mb-8 text-shadow-custom'>
                    Our Services
                </h1>
                <p className='text-gray-800 max-w-2xl mx-auto mb-12'>
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
                            className='bg-[#000433] backdrop-blur-lg p-6 rounded-xl shadow-lg text-center transition-all duration-300 border border-gray-700 hover:border-[#fa8128]'
                        >
                            <service.icon
                                size={40}
                                className='text-[#fa8128] mx-auto mb-4'
                            />
                            <h3 className='text-2xl font-semibold mb-2 underline decoration-[#fa8128] underline-offset-2'>
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
