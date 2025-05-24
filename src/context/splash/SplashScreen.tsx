import React from 'react';
import { motion } from 'framer-motion';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Clouds from './Clouds';

const SplashScreen: React.FC = () => {
    return (
        <div style={containerStyle}>
            <Clouds />
            <motion.h1
                style={textStyle}
                initial={{ scale: 1 }}
                animate={{ scale: 100 }}
                transition={{ duration: 3.5, ease: 'easeInOut' }}
            >
                INKWELL MEDIA
            </motion.h1>
            <div
                style={{
                    width: 'max(80%,780px)',
                    zIndex: 99999999
                }}
            >
                <DotLottieReact
                    src="/animations/animations-1.lottie"
                    loop
                    autoplay
                />
            </div>
        </div>
    );
};

const containerStyle: React.CSSProperties = {
    backgroundColor: '#7B1FA2',
    width: '100vw',
    height: '100vh',
    margin: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
};

const textStyle: React.CSSProperties = {
    color: '#FFFFFF',
    fontSize: '2rem',
    fontWeight: 700,
};

export default SplashScreen;
