'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className='fixed top-4 left-0 w-full z-50'>
            <motion.nav
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`relative flex items-center justify-between px-6 py-4 ${
                    isScrolled
                        ? 'bg-[#000433] backdrop-blur-md'
                        : 'bg-[#181e5a] backdrop-blur-lg'
                } shadow-lg rounded-b-2xl border border-white/20 max-w-7xl mx-auto transition-all duration-300`}
            >
                {/* Logo with Animated Camera */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className='text-white text-2xl font-bold flex items-center space-x-2'
                >
                    {/* Floating Camera Icon */}
                    {/* <motion.div
                        className='text-[#D72638]'
                        animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
                        transition={{
                            repeat: Infinity,
                            duration: 3,
                            ease: 'easeInOut',
                        }}
                    >
                        <Camera size={50} />
                    </motion.div> */}
                    <Link
                        href='/'
                        className='flex items-center space-x-1 cursor-pointer'
                    >
                        Inkwell Media
                    </Link>
                    {/* <motion.div
                        animate={{ opacity: [0.2, 1, 0.2] }}
                        transition={{ repeat: Infinity, duration: 1 }}
                        className='w-2 h-2 bg-red-500 rounded-full ml-1'
                    ></motion.div> */}
                    {/* Blinking Red Light */}
                </motion.div>

                {/* Desktop Menu */}
                <ul className='hidden md:flex space-x-8 text-gray-200'>
                    {[
                        'Home',
                        'Services',
                        'Portfolio',
                        'Pricing',
                        'Contact',
                    ].map((item, index) => (
                        <motion.li
                            key={item}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className='hover:text-[#D72638] transition-all duration-300'
                        >
                            <Link
                                href={
                                    item === 'Home'
                                        ? '/'
                                        : `/${item.toLowerCase()}`
                                }
                            >
                                {item}
                            </Link>
                        </motion.li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className='md:hidden text-white'
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={30} /> : <Menu size={30} />}
                </button>

                {/* Mobile Menu */}
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className='absolute top-full left-0 w-full bg-[#1B1B1B] p-6 flex flex-col items-center space-y-4 shadow-lg border border-white/10 rounded-b-2xl md:hidden'
                    >
                        {[
                            'Home',
                            'Services',
                            'Portfolio',
                            'Pricing',
                            'Contact',
                        ].map((item) => (
                            <Link
                                key={item}
                                href={
                                    item === 'Home'
                                        ? '/'
                                        : `/${item.toLowerCase()}`
                                }
                                className='text-gray-200 text-lg hover:text-[#D72638] transition-all duration-300'
                                onClick={() => setIsOpen(false)}
                            >
                                {item}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </motion.nav>
        </header>
    );
}
