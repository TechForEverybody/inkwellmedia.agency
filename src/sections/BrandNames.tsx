import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { keyframes } from '@emotion/react';

const brands = [
  '/images/brands/IMG_20250531_164115.png',
  '/images/brands/Matrubhoomi  Logo.png',
  '/images/brands/SAVE_20250531_163745.png',
  '/images/brands/SAVE_20250531_163809.png',
  '/images/brands/SAVE_20250531_163814.png',
  '/images/brands/Swarajya-logo.png',
];

// Keyframes animation to scroll content from 0 → -50%
const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const BrandNames: React.FC = () => {
  const theme = useTheme();
  const isMobile = window.innerWidth <= 768; // Adjust this breakpoint as needed
  return (
    <div style={{
      minHeight: isMobile ? "20vh" : "30vh",
      margin: isMobile ? '1rem auto' : '4rem auto',
    }}>
      <Typography variant="h1" sx={{
        color: '#FFFFFF',
        fontSize: {
          xs: '2rem',
          sm: '3rem',
          md: '4rem',
          lg: '5rem',
        },
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '1rem',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        background: 'linear-gradient(to right, #FFF, #FFFFFF33)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}>Standing Tall with Our  Clients</Typography>
      <Box
        sx={{
          width: '100%',
          overflow: 'hidden',
          background: "linear-gradient(to right, #000, #002147)", // Dark blue gradient
          borderRadius: '50px',
          border: `3px solid white`,
          py: 2,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            width: '200%', // twice the width of the parent, because we duplicated content
            animation: `${scroll} 20s linear infinite`,
          }}
        >
          {[...brands, ...brands].map((src, idx) => (
            <Box
              key={`${src}-${idx}`}
              sx={{
                flex: '0 0 auto',
                width: { xs: '120px', sm: '160px', md: '200px' },
                mx: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderLeft: idx % brands.length !== 0 ? `1px solid ${theme.palette.divider}` : 'none',
              }}
            >
              <Box
                component="img"
                src={src}
                alt={`Brand logo ${idx + 1}`}
                sx={{
                  maxHeight: { xs: 40, sm: 60, md: 80 },
                  objectFit: 'contain',
                  filter: theme.palette.mode === 'dark' ? 'brightness(0) invert(1)' : 'none',
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </div>
  );
};

export default BrandNames;
