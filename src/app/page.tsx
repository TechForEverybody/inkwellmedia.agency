"use client"
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Asker from '@/sections/Asker'
import BrandNames from '@/sections/BrandNames'
import FAQ from '@/sections/FAQ'
import HeroTargetAudience from '@/sections/HeroTargetAudience'
import HomeConcept from '@/sections/HomeConcept'
import HomeHero from '@/sections/HomeHero'
import HomePortfolio from '@/sections/HomePortfolio'
import HomeServices from '@/sections/HomeServices'
import VariousTypes from '@/sections/HomeVariousTypes'
import HomeVideo from '@/sections/HomeVideo'
import IntroductaryVideo from '@/sections/IntroductaryVideo'
import ScrollButton from '@/sections/ScrollButton'
import Testimonials from '@/sections/Testimonial'
import React from 'react'


function HomePage() {
  return (
    <div>
      <Header />
      <HomeHero />
      <HomeVideo/>
      <BrandNames/>
      <HomeServices />
      {/* <HomeConcept /> */}
      <VariousTypes />
      <HomePortfolio />
      <HeroTargetAudience />
      <Testimonials />
      <FAQ />
      <Asker />
      <Footer />
      <IntroductaryVideo />
      <ScrollButton/>
    </div>
  )
}

export default HomePage