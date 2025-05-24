"use client";
import Header from '@/components/Header';
import React from 'react'
import ServicesHero from './ServicesHero';
import Footer from '@/components/Footer';
import ServiceExplainer from './ServiceExplainer';
import Asker from '@/sections/Asker';


function ServicesPage() {
  return (
        <div>
      <Header />
      <ServicesHero/>

<ServiceExplainer/>












      <Asker/>
      <Footer/>



    </div>
  )
}

export default ServicesPage