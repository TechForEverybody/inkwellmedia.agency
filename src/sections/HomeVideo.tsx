import { Typography } from '@mui/material';
import React, { useEffect, useState, useRef } from 'react';

const HomeVideo: React.FC = () => {
    // widthPercent starts at 50 (i.e., 50vw) and can animate up to 90 (i.e., 90vw)
    const [widthPercent, setWidthPercent] = useState<number>(10);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const initialScrollYRef = useRef<number | null>(null);
    const isMobile = window.innerWidth <= 768; // Adjust this breakpoint as needed
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && initialScrollYRef.current === null) {
                        // When the container first enters view, record the scrollY baseline
                        initialScrollYRef.current = window.scrollY;
                    }
                });
            },
            {
                root: null,
                threshold: 0, // Trigger as soon as any part is visible
            }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }
        return () => {
            observer.disconnect();
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const initialY = initialScrollYRef.current;
            console.log('Initial Y:', initialY, 'Current Scroll Y:', window.scrollY);

            if (initialY === null) {
                return;
            }

            // How far we've scrolled beyond the point when the container entered view
            const diff = window.scrollY - initialY;
            const viewportHeight = window.innerHeight;

            // Compute a ratio based on diff relative to one full viewport height
            const ratio = Math.min(Math.max(diff / viewportHeight, 0), 1);

            // Interpolate between 50 and 90 based on scroll ratio
            const newWidth = 10 + (90 - 10) * ratio;
            setWidthPercent(newWidth);
        };

        window.addEventListener('scroll', handleScroll);
        // window.requestAnimationFrame(() => {
        //     handleScroll();
        // })
        // Run once in case we're already scrolled past the entry point
        handleScroll();

        return () => {
            // window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            style={{
                minHeight: isMobile?"60vh" : '120vh',
                display: 'flex',
                // justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
                paddingTop: '4rem',
                paddingBottom: '2rem',
                background: "linear-gradient(to right, #000, #002147)", // Dark blue gradient
            }}
        >
            <Typography variant="h1" sx={{
                color: '#FFFFFF',
                fontSize: {
                    xs: '3rem',
                    sm: '4rem',
                    md: '5rem',
                    lg: '8rem',
                },
                fontWeight: 'bold',
                textAlign: 'center',
                marginBottom: '1rem',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                background: 'linear-gradient(to right, #FFF, #FFFFFF33)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
            }}>INKWELL SHOWREEL</Typography>
            <video
                src="/Inkwell media showreel v2.mp4"
                style={{
                    width: `${widthPercent}vw`,
                    maxWidth: '90vw',
                    transition: 'all 0.5s linear',
                    borderRadius: '8px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                }}
                autoPlay
                loop
                muted
            />

        </div>
    );
};

export default HomeVideo;
