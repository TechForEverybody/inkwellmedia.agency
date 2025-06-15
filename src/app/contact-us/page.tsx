"use client";
import Header from '@/components/Header';
import React from 'react'
import ContactForm from './ContactForm';
import Footer from '@/components/Footer';
import ContactHero from './ContactHero';


function ContactUsPage() {
  return (
    <div style={{
      background: "linear-gradient(to right, #A000F8, #2B1047)", // Dark blue gradient
    }}>
      <Header />

      <ContactHero/>
      <ContactForm />


      <Footer/>
    </div>
  )
}

export default ContactUsPage