"use client";
import Header from '@/components/Header';
import React from 'react'
import PortfolioHero from './PortfolioHero';
import { Typography } from '@mui/material';
import Footer from '@/components/Footer';
import Asker from '@/sections/Asker';
import PortfolioStats from './PortfolioStats';


function PortfolioPage() {
  return (
    <div>
      <Header />
      <Typography className='seperator' sx={{
        height: {
          xs: '50px',
          sm: '70px',
          md: '80px',
        }
      }} />
      <PortfolioHero />
      <PortfolioStats />

      <Asker />
      <Footer />

    </div>
  )
}

export default PortfolioPage