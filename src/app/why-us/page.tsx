"use client";
import Header from '@/components/Header'
import React from 'react'
import AudienceExplainer from './AudienceExplainer';
import Asker from '@/sections/Asker';
import Footer from '@/components/Footer';
import { Typography } from '@mui/material';
import WhyUsHero from './WhyUsHero';
import TypesAndProcess from './TypesAndProcess';


function WhyUsPage() {
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
      <WhyUsHero />
      <TypesAndProcess />
      <AudienceExplainer />
      <Asker />
      <Footer />
    </div>
  )
}

export default WhyUsPage