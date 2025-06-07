import React from 'react';
import { motion } from 'framer-motion';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqs = [
    {
        question: 'What type of video production services do we offer?',
        answer: `We deliver whatever it is that the current marketing scenario requires—it just depends on what you want us to create for you. Our range varies from Real Estate commercials, on-site walkthroughs, E-commerce product demos, Corporate work culture films, Training films, Startup brand-launch videos, NGO campaigns and social awareness promotional videos, Influencer editing assistance, Healthcare explainers, Educational campus tours, and custom Agency solutions. These are just for contextual know-how; if you want something more customized under specified conditions, we are excited to work with you!`
    },
    {
        question: 'What industries have we worked with till now?',
        answer: `While we’ve worked across different sectors, the renowned industries we’ve established ties with include:  
, PropZone: Realtors and Developers  
, Matrubhumi Developers  
, Dreamland Properties  
, Icon Realities  
, Plot Vista  
, Land City Properties  
, City Prop  
, Sahyadri Infrastructure  
, Capital Realities  
, Swarajya Infrastructure  
, Landson Developers  
, Riyasat Sankalp  
, Pioneer Group  
, Choudhary Empire  
, Kshitiraj Group (Project Spring)  
, Destiny Reality  
…etc.  

We’re also currently working to expand our field of expertise by collaborating with different industries, so hopefully you’ll see many more names added to this list!`
    },
    {
        question: 'How long does a typical project take for completion?',
        answer: `It depends? No. That’s the most typical answer. We consult the needs of our clients and clarify the intensity of the deadline—so we assure you one thing: the project scale is divided according to the amount of work we’re assigned. After confirming our client’s requirements and objectives, we formulate a strategy and begin our pre-production phase, then proceed to production. Based on the tier of workload, we deliver our services within the same week, obtain the client’s affirmation, and continue working until they are fully satisfied—because our clients’ satisfaction is our base priority.`
    },
    {
        question: 'What do you have to provide for us to start creating content for you, and to what extent do we work on your projects?',
        answer: `Well, apart from a basic selection of the type of content you want and a simple framework, you don’t really need to do anything—because we will handle everything for you. From planning to execution, our end-to-end service includes concept development, scriptwriting, storyboarding, on-site production, motion graphics, and post-production editing; so all you’ll need to do is relax and enjoy your final product.`
    },
    {
        question: 'Can the client provide their own scripts and footages?',
        answer: `Absolutely, why not? We strive for the perfect representation that suits your vision. We would gladly integrate your existing scripts, raw footage, or brand guidelines into our production format in a way that ensures seamless quality and consistency.`
    },
    {
        question: 'How to get started?',
        answer: `Click our “Connect Now” button or email us at contact@Inkwellmedia.agency. We’ll schedule a free consultation to discuss your vision and provide a customized proposal. We’re happy to answer any queries you have regarding our work. Looking forward to working with you! `
    }
];

export default function FAQ() {
    return (
        <section className="py-16" style={{
            background: "radial-gradient(ellipse at top, #000, #002147)", // Dark blue gradient
        }}>
            <div className="container max-w-7xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-8"
                >

                    <Typography variant="h1" sx={{
                        color: '#FFFFFF',
                        fontSize: {
                            xs: '2rem',
                            sm: '3rem',
                            md: '4rem',
                            lg: '5rem',
                        },
                        fontWeight: 'bold',
                        textAlign: 'center',
                        marginBottom: '1rem',
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                        background: 'linear-gradient(to right, #FFF, #FFFFFF33)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}>Frequently Asked Questions</Typography>
                    {/* <h1 style={{
                        color: '#FFFFFF',
                        fontSize: '5rem',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        marginBottom: '1rem',
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                        background: 'linear-gradient(to right, #FFF, #FFFFFF33)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}></h1> */}
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
                                backgroundColor: 'rgba(255,255,255,0.05)',
                                border: '2px solid rgba(255,255,255)',
                                borderRadius: '12px',
                                mb: 2,
                                color: 'white',
                                backdropFilter: 'blur(8px)',
                                padding: '1rem',
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
