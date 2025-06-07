import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

const ScrollButton = () => {
    const [isAtBottom, setIsAtBottom] = useState(false);

    const checkIfAtBottom = () => {
        const scrollY = window.scrollY || window.pageYOffset;
        const viewportHeight = window.innerHeight;
        const fullHeight = document.documentElement.scrollHeight;
        if (scrollY + viewportHeight >= fullHeight - 2) {
            setIsAtBottom(true);
        } else {
            setIsAtBottom(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', checkIfAtBottom);
        checkIfAtBottom();
        return () => {
            window.removeEventListener('scroll', checkIfAtBottom);
        };
    }, []);

    const handleScrollDown = () => {
        window.scrollBy({
            top: window.innerHeight,
            behavior: 'smooth',
        });
    };

    const handleScrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 999999999 }}>
            {isAtBottom ? (
                <Button
                    variant="text"
                    color='inherit'
                    onClick={handleScrollTop}
                    sx={{ boxShadow: 3 }}
                    className=' animate-bounce z-[9999999]'
                >
                    <KeyboardDoubleArrowDownIcon fontSize={"large"} style={{
                        fontSize: '3rem',
                    }} />
                </Button>
            ) : (
                <Button
                    variant="text"
                    color='inherit'
                    onClick={handleScrollDown}
                    sx={{ boxShadow: 3 }}
                    className=' animate-bounce z-[9999999]'
                >
                    <KeyboardDoubleArrowDownIcon fontSize={"large"} style={{
                        fontSize: '3rem',
                    }} />
                </Button>
            )}
        </div>
    );
};

export default ScrollButton;
