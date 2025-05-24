// components/ContactForm.tsx
import React from 'react';
import { motion } from 'framer-motion';
import OfficeIcon from '@mui/icons-material/Business';
import PhoneIcon from '@mui/icons-material/Phone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EmailIcon from '@mui/icons-material/Email';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from 'next/link';

const ContactForm: React.FC = () => {
    return (
        <section className="relative overflow-hidden py-20">
            {/* Background from ContactHero */}
            <div
                className="absolute inset-0 -z-10"
                style={{
                    background: 'radial-gradient(circle at 20% 20%, #4E1C50, #000000)',
                }}
            />
            {/* Decorative animated dots */}
            <motion.div
                className="absolute top-10 left-5 w-3 h-3 bg-accent rounded-full"
                animate={{ y: [0, 20, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            />
            <motion.div
                className="absolute bottom-12 right-10 w-4 h-4 bg-accent/50 rounded-full"
                animate={{ x: [0, -20, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
            />

            <div className="container mx-auto px-4 relative z-10">
                {/* Contact Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {[
                        { Icon: OfficeIcon, label: 'Office', value: 'Panvel, Mumbai' },
                        { Icon: PhoneIcon, label: 'Phone', value: '+91 9082531628' },
                        { Icon: AccessTimeIcon, label: 'Hours', value: 'Sat: 8am–6pm' },
                        { Icon: EmailIcon, label: 'Email', value: 'contact@inkwellmedia.agency' },
                    ].map(({ Icon, label, value }) => (
                        <motion.div
                            key={label}
                            className="bg-white/10 backdrop-blur-md rounded-xl p-6 flex flex-col items-center text-center"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            whileHover={{ rotate: 2, scale: 1.02 }}
                        >
                            <Icon fontSize="large" className="text-white mb-4" />
                            <h4 className="text-lg font-semibold text-white mb-2">{label}</h4>
                            <p className="text-white/80">{value}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Form + Info */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Form */}
                    <motion.form
                        className="space-y-6"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {['email', 'phone', 'name'].map((field) => (
                            <TextField
                                key={field}
                                fullWidth
                                variant="standard"
                                type={field === 'phone' ? 'tel' : 'text'}
                                label={
                                    field === 'email'
                                        ? 'Your Email'
                                        : field === 'phone'
                                            ? 'Your Phone'
                                            : 'Your Name'
                                }
                                InputLabelProps={{ style: { color: '#fff' } }}
                                InputProps={{
                                    style: { color: '#fff' },
                                    disableUnderline: false,
                                }}
                                sx={{
                                    '& .MuiInput-underline:before': { borderBottomColor: '#fff9' },
                                    '& .MuiInput-underline:hover:before': {
                                        borderBottomColor: '#FF6A3D',
                                    },
                                }}
                            />
                        ))}
                        <TextField
                            fullWidth
                            variant="filled"
                            label="Your Message"
                            multiline
                            rows={4}
                            InputLabelProps={{ style: { color: '#fff' } }}
                            InputProps={{
                                style: { color: '#fff', background: 'rgba(255,255,255,0.1)' },
                            }}
                        />
                        <motion.div whileHover={{ scale: 1.05 }}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{
                                    background:
                                        'linear-gradient(135deg, #FF6A3D 0%, #4E1C50 100%)',
                                    color: '#fff',
                                    py: 1.5,
                                    boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
                                }}
                            >
                                Send Message
                            </Button>
                        </motion.div>
                    </motion.form>

                    {/* Info Panel */}
                    <motion.div
                        className="space-y-6 text-white"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <h3 className="text-2xl font-bold">Get in Touch</h3>
                        <p className="text-white/80">
                            Have a project in mind? Our team is ready to bring your vision to life.
                            Fill out the form and we’ll get back to you within 24 hours.
                        </p>
                        <div className="flex space-x-4 mt-4">
                            {['facebook', 'twitter', 'instagram', 'linkedin'].map((platform) => (
                                <Link key={platform} href={`https://${platform}.com/inkwellmedia`} passHref>
                                    <motion.a
                                        className="text-white text-2xl"
                                        whileHover={{ scale: 1.2, color: '#FF6A3D' }}
                                    >
                                        <i className={`ri-${platform}-fill`} />
                                    </motion.a>
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
