'use client';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactPage() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setSuccess(false);

        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form),
        });

        if (response.ok) {
            setSuccess(true);
            setForm({ name: '', email: '', message: '' });
        }
        setLoading(false);
    };

    return (
        <section className='relative flex items-center justify-between h-screen bg-[#fff] text-white px-12 overflow-hidden'>
            <div className='max-w-6xl mx-auto text-center'>
                <h1 className='text-5xl mt-10 text-[#fa8128] font-bold mb-8 text-shadow-custom'>
                    Contact Us
                </h1>
                <p className='text-gray-800 max-w-2xl mx-auto mb-12'>
                    Reach out to us for inquiries, collaborations, or any
                    questions!
                </p>

                <div className='grid md:grid-cols-2 gap-12'>
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        // className='bg-[#1a1a1a] p-6 rounded-xl shadow-lg border border-gray-700'
                        className='bg-[#000433] backdrop-blur-lg p-6 rounded-xl shadow-lg text-center transition-all duration-300 border border-gray-700 hover:border-[#fa8128]'
                    >
                        <div className='flex items-center space-x-4 mb-6'>
                            <Mail className='text-[#fa8128]' size={28} />
                            <p className='text-gray-300 text-lg'>
                                contact@inkwellmedia.agency
                            </p>
                        </div>
                        <div className='flex items-center space-x-4 mb-6'>
                            <Phone className='text-[#fa8128]' size={28} />
                            <p className='text-gray-300 text-lg'>
                                +919172695325
                            </p>
                        </div>
                        <div className='flex items-center space-x-4'>
                            <MapPin className='text-[#fa8128]' size={28} />
                            <p className='text-gray-300 text-lg'>
                                Mumbai, Maharashtra, India
                            </p>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.form
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        onSubmit={handleSubmit}
                        // className='bg-[#1a1a1a] p-6 rounded-xl shadow-lg border border-gray-700'
                        className='bg-[#000433] backdrop-blur-lg p-6 rounded-xl shadow-lg text-center transition-all duration-300 border border-gray-700 hover:border-[#fa8128]'
                    >
                        <div className='mb-4'>
                            <label className='block text-gray-400 text-left'>
                                Name
                            </label>
                            <input
                                type='text'
                                name='name'
                                value={form.name}
                                onChange={handleChange}
                                required
                                className='w-full mt-1 p-3 rounded-lg bg-white/10 text-white border border-gray-600 focus:border-[#fa8128] outline-none'
                            />
                        </div>

                        <div className='mb-4'>
                            <label className='block text-gray-400 text-left'>
                                Email
                            </label>
                            <input
                                type='email'
                                name='email'
                                value={form.email}
                                onChange={handleChange}
                                required
                                className='w-full mt-1 p-3 rounded-lg bg-white/10 text-white border border-gray-600 focus:border-[#fa8128] outline-none'
                            />
                        </div>

                        <div className='mb-4'>
                            <label className='block text-gray-400 text-left'>
                                Message
                            </label>
                            <textarea
                                name='message'
                                value={form.message}
                                onChange={handleChange}
                                required
                                className='w-full mt-1 p-3 rounded-lg bg-white/10 text-white border border-gray-600 focus:border-[#fa8128] outline-none h-28'
                            ></textarea>
                        </div>

                        <button
                            type='submit'
                            className='w-full flex items-center justify-center space-x-2 px-6 py-3 text-lg font-semibold text-white border border-[#fa8128] rounded-lg hover:bg-[#fa8128] transition-all duration-300'
                            disabled={loading}
                        >
                            <Send size={20} />
                            <span>
                                {loading ? 'Sending...' : 'Send Message'}
                            </span>
                        </button>

                        {success && (
                            <p className='text-green-400 mt-3'>
                                Message sent successfully!
                            </p>
                        )}
                    </motion.form>
                </div>
            </div>
        </section>
    );
}
