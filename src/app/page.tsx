"use client"
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Asker from '@/sections/Asker'
import FAQ from '@/sections/FAQ'
import HomeServices from '@/sections/HeroServices'
import HomeConcept from '@/sections/HomeConcept'
import HomeHero from '@/sections/HomeHero'
import HomePortfolio from '@/sections/HomePortfolio'
import VariousTypes from '@/sections/HomeVariousTypes'
import Testimonials from '@/sections/Testimonial'
import React from 'react'


function HomePage() {
  return (
    <div>
      <Header />
      <HomeHero />
      <HomeServices />
      <HomeConcept />
      <HomePortfolio />
      <VariousTypes />
      <Testimonials />
      <FAQ />
      <Asker />
      <Footer />
    </div>
  )
}

export default HomePage