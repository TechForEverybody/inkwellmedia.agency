'use client';
import { motion } from 'framer-motion';
import { MessageSquare, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function PricingPage() {
    const pricingPlans = [
        {
            title: 'Basic Package',
            description: 'Perfect for startups & small businesses.',
            features: [
                'Social Media Ads',
                'Basic Video Production',
                'Content Strategy',
            ],
        },
        {
            title: 'Professional Package',
            description: 'Ideal for growing brands & agencies.',
            features: [
                'Advanced Video Ads',
                'Brand Strategy',
                'Analytics & Reporting',
            ],
        },
        {
            title: 'Enterprise Package',
            description: 'For large-scale businesses & corporations.',
            features: [
                'Premium Ads & Campaigns',
                'Dedicated Team Support',
                'Custom Solutions',
            ],
        },
    ];

    return (
        <section className='relative flex items-center justify-between h-full bg-[#fff] text-white px-12 pt-24 overflow-hidden'>
            <div className='max-w-6xl mx-auto text-center'>
                <h1 className='text-5xl mt-10 font-bold mb-8 text-[#fa8128] text-shadow-custom'>
                    Pricing Plans
                </h1>
                <p className='text-gray-800 max-w-2xl mx-auto mb-12 font-roboto'>
                    We provide customized solutions for brands. Contact us for
                    personalized pricing.
                </p>

                <div className='grid md:grid-cols-3 gap-10'>
                    {pricingPlans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            // className='bg-[#1a1a1a] p-6 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition-all duration-300'
                            className='bg-[#000433] backdrop-blur-lg p-6 rounded-xl shadow-lg text-center transition-all duration-300 border border-gray-700 hover:border-[#fa8128]'
                        >
                            <h2 className='text-2xl font-bold text-[#fa8128] mb-3'>
                                {plan.title}
                            </h2>
                            <p className='text-gray-300 mb-5'>
                                {plan.description}
                            </p>
                            <ul className='text-gray-400 space-y-3 mb-6'>
                                {plan.features.map((feature, i) => (
                                    <li
                                        key={i}
                                        className='flex items-center space-x-2'
                                    >
                                        <CheckCircle
                                            // className='text-[#D72638]'
                                            className='text-[#fa8128]'
                                            size={20}
                                        />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link href='/contact'>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className='w-full flex items-center justify-center space-x-2 px-6 py-3 text-lg font-semibold text-white border border-[#fa8128] rounded-lg hover:bg-[#fa8128] transition-all duration-300'
                                    onClick={() => window.location.href = 'tel:+919172695325'}
                                >
                                    <MessageSquare size={20} />
                                    <span>Contact Us</span>
                                </motion.button>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
