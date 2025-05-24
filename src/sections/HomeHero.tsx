import React from 'react';
import { motion } from 'framer-motion';
import Button from '@mui/material/Button';
import Link from 'next/link';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';
import { Typography } from '@mui/material';

const HomeHero: React.FC = () => {
  return (
    <Typography sx={{
    }}>

      <section
        className="relative min-h-screen h-full bg-cover bg-center"
        style={{ backgroundImage: "url('/images/990.jpg')" }}
      >
        <Typography className='seperator' sx={{
          height: {
            xs: '250px',
            sm: '200px',
            md: '100px',
            lg: '50px',
          }
        }} />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Layout Container */}
        <div className="relative z-10 container mx-auto px-4 min-h-screen h-full flex flex-col lg:flex-row items-center justify-center">
          {/* Left Content */}
          <motion.div
            initial={{ x: -120, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 text-white text-left space-y-6"
          >
            <motion.h1
              initial={{ y: -40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-6xl font-extrabold leading-tight"
            >
              Crafting Visual Stories,
              <br /> Capturing Audiences
            </motion.h1>

            <motion.p
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-xl max-w-md"
            >
              Inkwell Media is your end-to-end partner for next-level video
              production—whether you’re selling real estate, launching a
              startup, or sharing your brand story.
            </motion.p>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6, type: 'spring', stiffness: 120 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <Link href="/contact" passHref>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    startIcon={<RocketLaunchIcon />}
                    variant="contained"
                    color='secondary'
                    className="bg-gradient-to-r from-accent to-accent-dark hover:from-accent-dark hover:to-accent text-white rounded-full px-8 py-4 shadow-2xl"
                  >
                    Let&apos;s Create Together
                  </Button>
                </motion.div>
              </Link>

              <Link href="/contact#callback" passHref>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    startIcon={<PhoneCallbackIcon />}
                    variant="contained"
                    color='warning'
                    className="border-white text-white hover:bg-white hover:text-gray-800 rounded-full px-8 py-4"
                  >
                    Request a Callback
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Video (YouTube Short) */}
          <motion.div
            initial={{ x: 120, opacity: 0, scale: 0.8 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.8, type: 'spring', stiffness: 100 }}
            className="w-full lg:w-1/2 mt-12 lg:mt-0 flex justify-center"
          >
            <div
              className="relative overflow-hidden rounded-3xl shadow-2xl w-full max-w-[360px]"
              style={{ aspectRatio: '9 / 16' }}
            >
              <iframe
                src="https://www.youtube.com/embed/u0piiakIDyk?autoplay=1&mute=1&loop=1"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
              {/* Floating play icon */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 text-white opacity-80 animate-pulse"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </Typography>

  );
};

export default HomeHero;
