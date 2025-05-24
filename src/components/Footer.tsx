'use client'

import React from 'react'
import {
    Box,
    Container,
    Grid,
    Typography,
    Link,
    IconButton
} from '@mui/material'
import {
    Facebook,
    Twitter,
    LinkedIn,
    Email,
    Phone
} from '@mui/icons-material'
import { motion, Variants } from 'framer-motion'

const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: { delay: 0.2 * i, duration: 0.6 },
    }),
}

const logoUrl =
    '/inkwell-logo.svg'

export default function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                color: 'common.white',
                pt: 8,
                pb: 4,
            }}
        >
            <Container maxWidth="lg">
                {/* Logo & Motto */}
                <Box sx={{ mb: 2 }}>
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        custom={1}
                        variants={sectionVariants}
                    >
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                        }}>

                            <Box
                                component="img"
                                src={logoUrl}
                                alt="Innov8r Logo"
                                sx={{ height: 48, mb: 1 }}
                            />
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: 'bold',
                                    textAlign: 'center',
                                    mb: 1,
                                }}
                            >
                                Inkwell Media
                            </Typography>
                        </div>
                        <Typography
                            variant="subtitle1"
                            sx={{ fontStyle: 'italic' }}
                        >
                            Where Vision Meets Execution
                        </Typography>
                    </motion.div>
                </Box>
                <Box
                    height={1}
                    my={2}
                    sx={{ backgroundColor: 'rgba(255,255,255,0.3)' }}
                />

                <Grid container spacing={4} alignItems="center">
                    {/* Contact Info */}
                    <Grid size={{
                        xs: 12,
                        md: 6,
                    }} >
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={5}
                            variants={sectionVariants}
                        >
                            <Typography
                                variant="body1"
                                sx={{ fontWeight: 'bold', mb: 1 }}
                            >
                                Inkwell Media Agency
                            </Typography>
                            <Typography variant="body2">
                                Mumbai, Maharashtra, India
                            </Typography>
                            <Link
                                href="tel:+919082531628"
                                color="inherit"
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    mt: 1,
                                }}
                            >
                                <Phone sx={{ mr: 1 }} /> +91 9082531628
                            </Link>
                            <Link
                                href="mailto:contact@inkwellmedia.agency"
                                color="inherit"
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    mt: 1,
                                }}
                            >
                                <Email sx={{ mr: 1 }} /> contact@inkwellmedia.agency
                            </Link>
                        </motion.div>
                    </Grid>

                    {/* Social Links */}
                    <Grid
                        size={{
                            xs: 12,
                            md: 6,
                        }}
                        sx={{ textAlign: { xs: 'left', md: 'right' } }}
                    >
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={6}
                            variants={sectionVariants}
                        >
                            <Typography variant="body1" sx={{ mb: 1 }}>
                                Connect with us
                            </Typography>
                            <IconButton
                                href="#"
                                sx={{
                                    color: 'common.white',
                                    transform: 'scale(1)',
                                    transition: 'transform 0.2s',
                                    '&:hover': { transform: 'scale(1.2)' },
                                }}
                            >
                                <Facebook />
                            </IconButton>
                            <IconButton
                                href="#"
                                sx={{
                                    color: 'common.white',
                                    transform: 'scale(1)',
                                    transition: 'transform 0.2s',
                                    '&:hover': { transform: 'scale(1.2)' },
                                }}
                            >
                                <Twitter />
                            </IconButton>
                            <IconButton
                                href="https://www.linkedin.com/company/educobot/"
                                sx={{
                                    color: 'common.white',
                                    transform: 'scale(1)',
                                    transition: 'transform 0.2s',
                                    '&:hover': { transform: 'scale(1.2)' },
                                }}
                            >
                                <LinkedIn />
                            </IconButton>
                        </motion.div>
                    </Grid>
                </Grid>

                <Box sx={{ textAlign: 'center', mt: 6 }}>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={7}
                        variants={sectionVariants}
                    >
                        <Typography variant="body2" sx={{ opacity: 0.8 }}>
                            © {new Date().getFullYear()} InkwellMedia. All rights
                            reserved.
                        </Typography>
                    </motion.div>
                </Box>
            </Container>
        </Box>
    )
}
