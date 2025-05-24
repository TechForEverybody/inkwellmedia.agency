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
      <Typography className='seperator' sx={{
        height:{
          xs: '50px',
          sm: '70px',
          md: '80px',
        }
      }}/>
      <ContactHero/>
      <ContactForm />


      <Footer/>
    </div>
  )
}

export default ContactUsPage