"use client";
import Header from '@/components/Header';
import React from 'react'
import ServicesHero from './ServicesHero';
import Footer from '@/components/Footer';
import Asker from '@/sections/Asker';
import ServicesFullContent from './ServiceExplainer';


function ServicesPage() {
  return (

    <div style={{
      background: "linear-gradient(to right, #0C0603, #F00B20)", // Dark blue gradient
      position: 'relative',
      minHeight: '100vh',
      color: '#FFFFFF',
      fontFamily: 'Elecrolize, sans-serif',
    }}>
      <Header />
      {/* <Typography className='seperator' sx={{
        height:{
          xs: '50px',
          sm: '70px',
          md: '80px',
        }
      }}/> */}
      <ServicesHero />
      <ServicesFullContent />












      <Asker />
      <Footer />



    </div>
  )
}

export default ServicesPage