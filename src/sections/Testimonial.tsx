import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import StarIcon from '@mui/icons-material/Star';

// Dummy testimonial data
const testimonials = [
    { id: 1, name: 'Alice Johnson', role: 'Real Estate Developer', title: 'Stunning Property Videos', feedback: 'Inkwell Media transformed our property listings with cinematic walkthroughs that truly resonated with buyers. Sales increased 30%!', rating: 5 },
    { id: 2, name: 'Ravi Patel', role: 'E-commerce Manager', title: 'Boosted Conversions', feedback: 'Their product demo videos and customer testimonials elevated our brand and drove significant traffic to our online store.', rating: 5 },
    { id: 3, name: 'Sunita Rao', role: 'Corporate HR Lead', title: 'Engaging Training Content', feedback: 'The internal training videos crafted by Inkwell Media were engaging and informative—our onboarding satisfaction soared!', rating: 4 },
    { id: 4, name: 'Karan Mehta', role: 'Startup Founder', title: 'Brand Launch Success', feedback: 'Our brand launch video went viral—props to Inkwell Media for their creativity and execution. Incredible ROI!', rating: 5 },
    { id: 5, name: 'Priya Singh', role: 'NGO Outreach Coordinator', title: 'Powerful Campaigns', feedback: 'The awareness videos they produced helped us connect with donors on an emotional level. Donations increased by 50%.', rating: 5 },
];

export default function Testimonials() {
    const [index, setIndex] = useState(0);
    const length = testimonials.length;
    const next = () => setIndex((prev) => (prev + 1) % length);
    const prev = () => setIndex((prev) => (prev - 1 + length) % length);

    return (
        <section className="py-16 bg-[#4E1C50]">
            <div className="container max-w-5xl mx-auto px-4 relative">
                <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">What Our Clients Say</h2>
                <p className="text-center text-white/80 mb-12 max-w-2xl mx-auto">Real feedback from real partners across industries who&apos;ve experienced our work first-hand.</p>

                <AnimatePresence initial={false} mode="wait">
                    {testimonials.map((t, i) =>
                        i === index && (
                            <motion.div
                                key={t.id}
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.6 }}
                                className="relative mx-auto max-w-4xl bg-[#9C27B0] rounded-2xl p-8 flex flex-col md:flex-row items-center md:items-start shadow-2xl border-4 border-[#4E1C50]"
                            >
                                <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden flex-shrink-0 mb-6 md:mb-0 md:mr-8 relative">
                                    <Image src="/images/english-alphabet-with-people-characters.png" alt={t.name} fill style={{ objectFit: 'cover' }} />
                                </div>
                                <div className="flex-1 text-left">
                                    <FormatQuoteIcon className="text-[#4E1C50] text-4xl mb-2" />
                                    <div className="flex items-center justify-between mb-2">
                                        <div>
                                            <h3 className="text-xl font-semibold ">{t.name}</h3>
                                            <p className=" text-sm">{t.role}</p>
                                        </div>
                                        <div className="flex space-x-1">
                                            {Array.from({ length: t.rating }).map((_, idx) => <StarIcon key={idx} className="text-yellow-400" />)}
                                        </div>
                                    </div>
                                    <h4 className="text-2xl font-bold  mb-2">{t.title}</h4>
                                    <p className=" mb-4 leading-relaxed">{t.feedback}</p>

                                    {/* Dots */}
                                    <div className="flex space-x-2 mb-4 justify-center md:justify-start">
                                        {testimonials.map((_, dotIdx) => (
                                            <button key={dotIdx} onClick={() => setIndex(dotIdx)} className={`w-4 h-1 rounded-full transition-all ${dotIdx === index ? 'bg-white' : 'bg-white/40'}`} />
                                        ))}
                                    </div>
                                </div>

                                {/* Prev Button */}
                                <button onClick={prev} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-violet rounded-full p-2 z-50">
                                    ‹
                                </button>
                                {/* Next Button */}
                                <button onClick={next} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-violet rounded-full p-2 z-50">
                                    ›
                                </button>
                            </motion.div>
                        )
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
