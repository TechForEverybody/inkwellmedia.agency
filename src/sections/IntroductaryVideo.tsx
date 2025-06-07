import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@mui/material'
import { ContentDialogBox } from '@/components/dialog-box'


function IntroductaryVideo() {
    const [isVideoVisible, setIsVideoVisible] = React.useState(false)
    return (
        <>
            <Button
                variant="contained"
                color="primary"
                onClick={() => setIsVideoVisible(true)}
                className='animate-bounce hover:animate-ping'
                style={{
                    position: 'fixed',
                    top: '50%',
                    right: '20px',
                    zIndex: 1000,
                    borderRadius: '50%',
                    width: '60px',
                    height: '60px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                }}
            >
                <img src="/images/play.png" alt="" />
            </Button>
            <ContentDialogBox
                isOpen={isVideoVisible}
                onClose={() => setIsVideoVisible(false)}
                isTransition={true}
                transitionDirection="down"
                maxWidth="md"
                paperStyle={{
                    backgroundColor: 'transparent',
                    backdropFilter: 'blur(10px)',
                    color: '#FFFFFF',
                    borderRadius: '20px',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                }}
                title={
                    <motion.div
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <h2 className="text-2xl font-bold text-center">Watch Our Introductory Video</h2>
                    </motion.div>
                }
                content={

                    <motion.div
                        initial={{ x: 120, opacity: 0, scale: 0.8 }}
                        animate={{ x: 0, opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8, duration: 0.8, type: 'spring', stiffness: 100 }}
                        className="w-full lg:w-full mt-12 lg:mt-0 flex justify-center"
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
                }
            />
        </>
    )
}

export default IntroductaryVideo