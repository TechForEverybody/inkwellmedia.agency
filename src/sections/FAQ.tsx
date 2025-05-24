import React from 'react';
import { motion } from 'framer-motion';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// FAQ data tailored to Inkwell Media's services
const faqs = [
    {
        question: 'What types of video production services do you offer?',
        answer:
            'We specialize in Real Estate walkthroughs, E-commerce product demos, Corporate training films, Startup brand-launch videos, NGO awareness campaigns, Influencer editing assistance, Healthcare explainers, Educational campus tours, and custom Agency solutions.',
    },
    {
        question: 'Which industries have you worked with?',
        answer:
            'Our portfolio spans Real Estate developers, online retailers, Fortune 500 corporates, high-growth startups, Government & NGOs, YouTubers & influencers, Healthcare providers, educational institutions, and full-service agencies.',
    },
    {
        question: 'How long does a typical project take?',
        answer:
            'Project timelines vary by scope: a social media short can be delivered in as little as one week, while full-scale commercials or corporate films typically take 4–6 weeks from concept to final delivery.',
    },
    {
        question: 'Do you handle scriptwriting and storyboarding?',
        answer:
            'Absolutely. Our end-to-end service includes concept development, scriptwriting, storyboarding, on-site production, motion graphics, and post-production editing.',
    },
    {
        question: 'Can I provide my own footage or script?',
        answer:
            'Yes. We’re happy to integrate your existing scripts, raw footage, or brand guidelines—our team will ensure seamless quality and consistency.',
    },
    {
        question: 'How do I get started?',
        answer:
            'Click our “Connect Now” button or email us at contact@inkwellmedia.agency. We’ll schedule a free consultation to discuss your vision and provide a customized proposal.',
    },
];

export default function FAQ() {
    return (
        <section className="py-16" style={{ backgroundColor: '#4E1C50' }}>
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-8"
                >
                    <Typography variant="h4" className="font-bold text-white">
                        Frequently Asked Questions
                    </Typography>
                    <Typography variant="subtitle1" className="text-white/80 mt-2">
                        Answers to common questions about our video production services and process.
                    </Typography>
                </motion.div>

                {faqs.map((faq, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.2, duration: 0.6 }}
                    >
                        <Accordion
                            sx={{
                                backgroundColor: 'rgba(255,255,255,0.1)',
                                border: '1px solid rgba(255,255,255,0.3)',
                                borderRadius: '12px',
                                mb: 2,
                                color: 'white',
                                backdropFilter: 'blur(8px)',
                            }}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                                sx={{
                                    '& .MuiAccordionSummary-content': { margin: 0 },
                                }}
                            >
                                <Typography sx={{ fontWeight: '600' }}>{faq.question}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography sx={{ color: 'white', opacity: 0.9 }}>
                                    {faq.answer}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
