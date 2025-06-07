"use client";
import Header from '@/components/Header';
import React from 'react'
import ContactForm from './ContactForm';
import { Typography } from '@mui/material';
import Footer from '@/components/Footer';
import ContactHero from './ContactHero';


function ContactUsPage() {
  return (
    <div>
      <Header />

      <ContactHero/>
      <ContactForm />


      <Footer/>
    </div>
  )
}

export default ContactUsPage