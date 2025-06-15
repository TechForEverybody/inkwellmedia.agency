"use client";
import Header from '@/components/Header'
import React from 'react'
import Asker from '@/sections/Asker';
import Footer from '@/components/Footer';
import WhyUsHero from './WhyUsHero';
import Concept from '@/sections/HomeConcept';


function WhyUsPage() {
  return (
    <div style={{
          background: "linear-gradient(to right, #56F01C, #16710A)", // Dark blue gradient
        }}>
      <Header />

      <WhyUsHero />
      <Concept />
      {/* <TypesAndProcess /> */}
      {/* <AudienceExplainer /> */}
      <Asker />
      <Footer />
    </div>
  )
}

export default WhyUsPage