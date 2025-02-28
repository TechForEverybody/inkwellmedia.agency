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
        <section className='min-h-screen bg-gradient-to-b from-black via-[#111] to-[#222] text-white py-20 px-6'>
            <div className='max-w-6xl mx-auto text-center'>
                <h1 className='text-5xl font-bold mt-10 mb-8 text-shadow-custom'>
                    Contact Us
                </h1>
                <p className='text-gray-400 max-w-2xl mx-auto mb-12'>
                    Reach out to us for inquiries, collaborations, or any
                    questions!
                </p>

                <div className='grid md:grid-cols-2 gap-12'>
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className='bg-[#1a1a1a] p-6 rounded-xl shadow-lg border border-gray-700'
                    >
                        <div className='flex items-center space-x-4 mb-6'>
                            <Mail className='text-[#D72638]' size={28} />
                            <p className='text-gray-300 text-lg'>
                                contact@inkwellmedia.agency
                            </p>
                        </div>
                        <div className='flex items-center space-x-4 mb-6'>
                            <Phone className='text-[#D72638]' size={28} />
                            <p className='text-gray-300 text-lg'>
                                +919172695325
                            </p>
                        </div>
                        <div className='flex items-center space-x-4'>
                            <MapPin className='text-[#D72638]' size={28} />
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
                        className='bg-[#1a1a1a] p-6 rounded-xl shadow-lg border border-gray-700'
                    >
                        <div className='mb-4'>
                            <label className='block text-gray-400 text-left'>Name</label>
                            <input
                                type='text'
                                name='name'
                                value={form.name}
                                onChange={handleChange}
                                required
                                className='w-full mt-1 p-3 rounded-lg bg-[#222] text-white border border-gray-600 focus:border-[#D72638] outline-none'
                            />
                        </div>

                        <div className='mb-4'>
                            <label className='block text-gray-400 text-left'>Email</label>
                            <input
                                type='email'
                                name='email'
                                value={form.email}
                                onChange={handleChange}
                                required
                                className='w-full mt-1 p-3 rounded-lg bg-[#222] text-white border border-gray-600 focus:border-[#D72638] outline-none'
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
                                className='w-full mt-1 p-3 rounded-lg bg-[#222] text-white border border-gray-600 focus:border-[#D72638] outline-none h-28'
                            ></textarea>
                        </div>

                        <button
                            type='submit'
                            className='w-full flex items-center justify-center space-x-2 px-6 py-3 text-lg font-semibold text-white border border-[#D72638] rounded-lg hover:bg-[#D72638] transition-all duration-300'
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
