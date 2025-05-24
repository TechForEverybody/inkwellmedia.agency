"use client";
import Header from '@/components/Header';
import React from 'react'
import ServicesHero from './ServicesHero';
import Footer from '@/components/Footer';
import Asker from '@/sections/Asker';
import ServicesFullContent from './ServiceExplainer';
import { Typography } from '@mui/material';


function ServicesPage() {
  return (
        <div>
      <Header />
            <Typography className='seperator' sx={{
        height:{
          xs: '50px',
          sm: '70px',
          md: '80px',
        }
      }}/>
      <ServicesHero/>
      <ServicesFullContent/>












      <Asker/>
      <Footer/>



    </div>
  )
}

export default ServicesPage