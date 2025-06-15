"use client";
import Header from '@/components/Header';
import React from 'react'
import PortfolioHero from './PortfolioHero';
import Footer from '@/components/Footer';
import Asker from '@/sections/Asker';
import PortfolioStats from './PortfolioStats';


function PortfolioPage() {
  return (
    <div style={{
      background: "linear-gradient(to right, #09316E, #00DAFE)", // Dark blue gradient
      position: 'relative',
      minHeight: '100vh',
      color: '#FFFFFF',
      fontFamily: 'Elecrolize, sans-serif',
    }}>
      <Header />
      
      <PortfolioHero />
      <PortfolioStats />

      <Asker />
      <Footer />

    </div>
  )
}

export default PortfolioPage