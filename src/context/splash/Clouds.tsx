import React, { useState, useEffect } from 'react';

// Define cloud properties type
interface Cloud {
    id: number;
    top: string;
    left: string;
    opacity: number;
    scale: number;
    speed: number;
    rotation: number;
}

interface CloudsProps {
    count?: number; // Number of clouds to render (optional, defaults to 10)
}

const Clouds: React.FC<CloudsProps> = ({ count = 10 }) => {
    const [clouds, setClouds] = useState<Cloud[]>([]);

    // Generate initial clouds on component mount
    useEffect(() => {
        const generatedClouds: Cloud[] = [];

        for (let i = 0; i < count; i++) {
            generatedClouds.push(generateCloud(i));
        }

        setClouds(generatedClouds);

        // Set up cloud movement animation
        const animationInterval = setInterval(() => {
            setClouds(prevClouds =>
                prevClouds.map(cloud => {
                    // Move cloud slightly to the right, wrap around if it reaches the edge
                    const newLeftPercent = parseFloat(cloud.left) + (cloud.speed * 0.1);
                    return {
                        ...cloud,
                        left: newLeftPercent > 120 ? '-20%' : `${newLeftPercent}%`
                    };
                })
            );
        }, 100);

        return () => clearInterval(animationInterval);
    }, [count]);

    // Generate a single cloud with random properties
    const generateCloud = (id: number): Cloud => {
        return {
            id,
            top: `${Math.random() * 70}%`,  // Random vertical position (0-70%)
            left: `${Math.random() * 100}%`, // Random horizontal position (0-100%)
            opacity: 0.8 + Math.random() * 0.2, // Random opacity (0.8-1.0)
            scale: 0.5 + Math.random() * 1.5,   // Random size (0.5-2.0 scale)
            speed: 0.05 + Math.random() * 0.15, // Random movement speed
            rotation: Math.random() * 360,      // Random rotation (0-360 degrees)
        };
    };

    // We'll use several different cloud shapes for variety
    const renderCloud = (cloud: Cloud) => {
        const cloudTypes = [
            // Cloud Type 1: Fluffy cumulus
            <svg key={"1"} viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                <path d="M47.2,66.4c0,11.4,9.2,20.6,20.6,20.6h70.3c16,0,29-13,29-29s-13-29-29-29c-0.9,0-1.9,0-2.8,0.1
        c-3.8-13.2-15.9-22.9-30.2-22.9c-14.4,0-26.6,9.6-30.4,22.8c-0.7-0.1-1.5-0.1-2.2-0.1c-11.4,0-20.6,9.2-20.6,20.6
        C52.2,54.2,50.3,60.1,47.2,66.4z" fill="#fff" />
            </svg>,

            // Cloud Type 2: Wide spread cloud
            <svg key="2" viewBox="0 0 240 120" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                <path d="M25,75 Q40,55 60,65 Q70,40 100,50 Q125,30 150,50 Q170,35 190,55 Q215,45 225,65 Q240,75 225,90 Q180,110 100,100 Q40,110 25,75 Z" fill="#fff" />
            </svg>,

            // Cloud Type 3: Small puffy cloud
            <svg key="3" viewBox="0 0 180 100" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                <path d="M35,60 Q45,30 75,50 Q90,20 115,40 Q140,20 155,50 Q180,50 170,70 Q180,90 150,85 Q130,100 100,90 Q70,100 50,80 Q20,80 35,60 Z" fill="#fff" />
            </svg>
        ];

        // Select a cloud type based on the cloud's id
        const cloudIndex = cloud.id % cloudTypes.length;

        return (
            <div
                key={cloud.id}
                style={{
                    position: 'absolute',
                    top: cloud.top,
                    left: cloud.left,
                    width: '200px',
                    height: '120px',
                    opacity: cloud.opacity,
                    filter: 'drop-shadow(0px 10px 8px rgba(0, 0, 0, 0.1))',
                    transform: `scale(${cloud.scale}) rotate(${cloud.rotation}deg)`,
                    transition: 'left 0.5s linear',
                    zIndex: Math.floor(cloud.scale * 10) % 5
                }}
                className="cloud"
            >
                {cloudTypes[cloudIndex]}
            </div>
        );
    };

    return (
        <div className="clouds-container" style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            pointerEvents: 'none', // Clouds don't interact with mouse events
            zIndex: 0 // Place clouds behind other content
        }}>
            {clouds.map(cloud => renderCloud(cloud))}
        </div>
    );
};

export default Clouds;