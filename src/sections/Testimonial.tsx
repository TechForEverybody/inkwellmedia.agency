import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { ArrowLeftIcon, ArrowRight } from 'lucide-react';
import { Typography } from '@mui/material';

// Dummy testimonial data
const testimonials = [
    {
        id: 1,
        name: 'Shrikant Rathod',
        role: 'Managing Director, PropZone',
        title: 'Trusted partner for a reason',
        feedback: `It's been over a year that we’ve been working with Inkwell, and I've noticed that not only the quality of their services never deteriorated, but they always improved each and every project! They never delayed, or disoriented their services, and the videos I received from each project always came with a personalised touch aligning with our organization, reasons why I trust and honour our partnership and I wish we keep it this way for a long time.`
    },
    {
        id: 2,
        name: 'Vijay Royput',
        role: 'Managing Director, PlotVisit',
        title: 'A company which is reliable and resourceful',
        feedback: `It was our first time approaching and working with a media production company, but now I can proudly say that relying on this company was assuring, and their products benefitted us even more than we expected. We weren’t sure about what and how we should set our approach, but with Inkwell’s help, we received a pitch of high sales. I am honestly grateful to the entire Inkwell crew.`
    },
    {
        id: 3,
        name: 'Dattatray Dubale',
        role: 'CMD, Sahyadri Infra',
        title: 'Punctual on schedule and delivery',
        feedback: `We were actually planning towards creating the content by ourselves. We went ahead and tried a little, even produced something but the quality of our own videos weren’t up to the market standards. That’s when we decided to hire Inkwell Media as our media production company. And the differences were very clear—letting the media experts do their own thing feels just akin to a jeweller crafting his art with precision. Now whenever we have to do something regarding creating videos, our first choice lies on Inkwell, because we are confident that everyone has their own expertise.`
    },
    {
        id: 4,
        name: 'Rajneesh Agarwal',
        role: 'Managing Director, Kshitij Group',
        title: 'A good guide with extensive research, even for beginners',
        feedback: `When we started approaching the production team to create videos for our properties, we weren’t aware of what we should go for and what things we should advertise. But Inkwell not only recommended and advised on the particular matter, but even followed throughout the situation and compiled a research of their own that would promote our work in the best ways. The property walkthrough video they made for our Project Spring acted as a convincing attraction point for our customers. I wish the best for Inkwell just as they have done for us.`
    },
    {
        id: 5,
        name: 'Chandrakant Mane',
        role: 'Managing Director, Matrubhumi Developer',
        title: 'A high caliber company who knows how to function even on a large scale, and delivers satisfaction beyond expectations',
        feedback: `I had a wish to do something extraordinary for my organization. So I contacted Shubham and discussed what I wanted. He immediately scheduled a plan and discussed it with me—then he arranged some contacts, assembled his crew and pitched some well-renowned actors and actresses, and finalized and delivered the project which I had considered to be hard even before the deadline. Looking back, how they managed to do that in a shorter timeframe was truly astonishing. Overall all the investment that went into this was totally worth it, because it turned out to be the best marketing I had ever done for my organization.`
    }
];


export default function Testimonials() {
    const [index, setIndex] = useState(0);
    const length = testimonials.length;
    const next = () => setIndex((prev) => (prev + 1) % length);
    const prev = () => setIndex((prev) => (prev - 1 + length) % length);

    return (
        <section className="py-16 " style={{
            background: "linear-gradient(to right, #000, #002147)", // Dark blue gradient
        }}>
            <div className="container max-w-screen mx-auto px-4 relative">
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
                    WebkitTextStroke: '2px white',

                }}>What Our Clients Say</Typography>
                {/* <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6"></h2> */}
                <p className="text-center text-white/80 mb-12 max-w-full mx-auto">Genuine feedback from our recent partners across industries who have experienced our work first-hand.</p>

                <AnimatePresence initial={false} mode="wait">
                    {testimonials.map((t, i) =>
                        i === index && (
                            <motion.div
                                key={t.id}
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.6 }}
                                className="relative mx-auto max-w-screen backdrop-blur-5xl rounded-2xl p-8 flex flex-col md:flex-row items-center md:items-start shadow-2xl border-4 border-[#fff] bg-white/10"
                            >
                                <div className="w-sm h-[250px] md:w-lg md:h-[500px] rounded-full overflow-hidden flex-shrink-0 mb-6 md:mb-0 md:mr-8 relative">
                                    <Image src="/images/english-alphabet-with-people-characters.png" alt={t.name} fill style={{ objectFit: 'cover' }} />
                                </div>
                                <div className="flex-1 text-left">
                                    <FormatQuoteIcon className="text-[#fff] text-8xl mb-2" />
                                    <div className="flex items-center justify-between mb-2">
                                        <div>
                                            <h3 className="text-5xl md:text-6xl font-semibold ">{t.name}</h3>
                                            <p className=" text-2xl py-5">{t.role}</p>
                                        </div>
                                        {/* <div className="flex space-x-1">
                                            {Array.from({ length: t.rating }).map((_, idx) => <StarIcon key={idx} className="text-yellow-400" />)}
                                        </div> */}
                                    </div>
                                    <h4 className=" text-2xl md:text-5xl font-bold  mb-2">{t.title}</h4>
                                    <p className=" mb-4 leading-relaxed text-lg md:text-3xl">{t.feedback}</p>

                                    {/* Dots */}
                                    <div className="flex space-x-2 mb-4 justify-center md:justify-start">
                                        {testimonials.map((_, dotIdx) => (
                                            <button key={dotIdx} onClick={() => setIndex(dotIdx)} className={`w-4 h-1 rounded-full transition-all ${dotIdx === index ? 'bg-white' : 'bg-white/40'}`} />
                                        ))}
                                    </div>
                                </div>

                                {/* Prev Button */}
                                <button onClick={prev} className="absolute left-0 bottom-0 transform -translate-y-1/2 bg-black/30 hover:bg-violet rounded-full p-2 z-50 cursor-pointer border-2 border-white">
                                    <ArrowLeftIcon className="text-white" size={30} />
                                </button>
                                {/* Next Button */}
                                <button onClick={next} className="absolute right-0 bottom-0 transform -translate-y-1/2 bg-black/30 hover:bg-violet rounded-full p-2 z-50 cursor-pointer border-2 border-white">
                                    <ArrowRight className="text-white" size={30} />
                                </button>
                            </motion.div>
                        )
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
