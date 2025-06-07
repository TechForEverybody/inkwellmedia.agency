import React from 'react';
import { motion } from 'framer-motion';
import Button from '@mui/material/Button';
import Link from 'next/link';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';
import { Typography } from '@mui/material';
import SlotCounter from 'react-slot-counter';

const HomeHero: React.FC = () => {
    return (
        <Typography sx={{
        }}>

            <section
                className="relative min-h-screen h-full bg-cover bg-center pt-20"
                style={{ backgroundImage: "url('/images/kyle-loftus-6oLabfCwBME-unsplash.jpg')", backgroundAttachment:"fixed" }}
            >
                {/* <Typography className='seperator' sx={{
                    height: {
                        xs: '250px',
                        sm: '200px',
                        md: '100px',
                        lg: '50px',
                    }
                }} /> */}
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/60" />

                {/* Layout Container */}
                <div className="relative z-10 container mx-auto px-4 min-h-screen h-full flex flex-col lg:flex-row items-center justify-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ x: -120, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-7xl text-white text-left space-y-6"
                    >
                        <motion.h1
                            initial={{ y: -40, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="text-4xl md:text-6xl text-center font-extrabold leading-tight"
                        >
                            Every brand has its own story,
                            <br /> And we narrate it into visuals
                        </motion.h1>

                        <motion.p
                            initial={{ y: 40, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="text-2xl md:text-xl max-w-7xl text-center"
                        >
                            It's your story, your dream. Let the Inkwell narrate it for you. We work towards elevating your digital footprint, business performance and social standing with implementation of dynamic media.
                        </motion.p>
                        <motion.p
                            initial={{ y: 40, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="text-5xl md:text-xl max-w-7xl flex justify-center flex-wrap gap-2"
                        >
                            <Button style={{
                                backgroundColor: '#00000055', borderRadius: '9999px', padding: '12px 24px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                                textTransform: 'none', fontSize: '1rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0px',
                            }}>

                                <span className='md:text-3xl p-0'><SlotCounter value={1000} /></span>+ Videos
                            </Button>
                            <Button style={{
                                backgroundColor: '#00000055', borderRadius: '9999px', padding: '12px 24px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                                textTransform: 'none', fontSize: '1rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0px',
                            }}>
                                <span className='md:text-4xl p-0'><SlotCounter value={10000000} /></span>+ Views on video
                            </Button>
                        </motion.p>
                        <motion.p
                            initial={{ y: 40, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="text-lg md:text-xl max-w-md"
                        >
                        </motion.p>

                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.6, type: 'spring', stiffness: 120 }}
                            className="flex flex-col sm:flex-row gap-6 justify-center items-center flex-wrap"
                        >
                            <Link href="/contact-us" passHref>
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <motion.a
                                        href="/contact-us"
                                        className="inline-block bg-gradient-to-r from-[#FF6A3D] to-[#FFA62B] text-white rounded-full px-10 py-3 text-sm font-medium shadow-xl"
                                        whileHover={{ scale: 1.1, boxShadow: '0px 0px 20px rgba(255,106,61,0.7)' }}
                                        transition={{ type: 'spring', stiffness: 200 }}
                                    >
                                        <Button
                                            startIcon={<RocketLaunchIcon />}
                                            variant="text"
                                            color='inherit'
                                            className="bg-gradient-to-r from-accent to-accent-dark hover:from-accent-dark hover:to-accent text-white rounded-full px-8 py-4 shadow-2xl"
                                        >
                                            Draw from the Inkwell
                                        </Button>
                                    </motion.a>
                                </motion.div>
                            </Link>

                            {/* <Link href="/contact-us" passHref>
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>

                                    <motion.a
                                        href="/contact-us"
                                        className="inline-block bg-gradient-to-r from-[#FF6A3D] to-[#FFA62B] text-white rounded-full px-10 py-3 text-sm font-medium shadow-xl"
                                        whileHover={{ scale: 1.1, boxShadow: '0px 0px 20px rgba(255,106,61,0.7)' }}
                                        transition={{ type: 'spring', stiffness: 200 }}
                                    >
                                        <Button
                                            startIcon={<PhoneCallbackIcon />}
                                            variant="text"
                                            color='inherit'
                                            className="bg-gradient-to-r from-accent to-accent-dark hover:from-accent-dark hover:to-accent text-white rounded-full px-8 py-4 shadow-2xl"
                                        >
                                            Request a Callback
                                        </Button>
                                    </motion.a>
                                </motion.div>
                            </Link> */}
                        </motion.div>
                    </motion.div>

                    {/* Right Video (YouTube Short) */}

                </div>
            </section>


        </Typography>

    );
};

export default HomeHero;
