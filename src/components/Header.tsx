"use client";
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import { motion } from 'framer-motion';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import Link from 'next/link';
import { Typography } from '@mui/material';

interface Props { window?: () => Window; }

function HideOnScroll(props: Props & { children: React.ReactElement }) {
    const { children, window } = props;
    const trigger = useScrollTrigger({ target: window ? window() : undefined });
    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

const navItems = [
    { label: 'Services', href: '/services' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Why Us', href: '/why-us' },
    { label: 'Contact Us', href: '/contact-us' },
];

const Header: React.FC = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

    const drawer = (
        <Box className="w-64 h-full bg-white p-4 flex flex-col">
            <Box className="mb-6">
                <Link href="/">
                    <Image src="/inkwell-logo.svg" alt="Logo" width={100} height={30} />
                </Link>
            </Box>
            <Divider />
            <List className="flex-grow">
                {navItems.map((item) => (
                    <ListItem disablePadding key={item.label}>
                        <ListItemButton component={Link} href={item.href} onClick={handleDrawerToggle}>
                            <ListItemText primary={item.label} className="font-medium" />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Box className="mt-auto">
                <Button
                    component={Link}
                    href="/contact-us"
                    variant="contained"
                    fullWidth
                    className="bg-accent hover:bg-accent-dark text-white rounded-full py-2"
                >
                    Connect Now
                </Button>
            </Box>
        </Box>
    );

    return (
        <>
            <HideOnScroll>
                <AppBar elevation={0} className="backdrop-filter backdrop-blur-lg bg-white bg-opacity-20 text-gray-800" sx={{
                    background: 'linear-gradient(to left, #4F1C51, #000000)',
                    backdropFilter: 'blur(10px)',
                    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                }}
                >
                    <Toolbar className="container mx-auto flex justify-between items-center px-4 md:px-0">
                        {/* Mobile menu button */}
                        <Box sx={{
                            display: "flex",
                            alignItems: "center",
                        }}>

                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                                className="md:hidden"
                                sx={{
                                    display: {
                                        xs: 'flex',
                                        md: 'none',
                                    }
                                }}
                            >
                                <MenuIcon />
                            </IconButton>

                            {/* Logo */}
                            <Link href="/" style={{
                                display: 'flex',
                                alignItems: 'center',
                            }}>
                                <IconButton edge="start" disableRipple aria-label="Inkwell Media" className="md:mx-0 mx-auto">
                                    <Image src="/inkwell-logo.svg" alt="Inkwell Media Logo" width={80} height={20} priority />
                                </IconButton>
                                <Typography
                                    variant="h6"
                                    noWrap
                                    component="div"
                                    className="hidden md:flex text-white font-bold text-xl"
                                >
                                    Inkwell <span className="text-accent" style={{
                                        textShadow: '2px 2px 4px rgba(255, 255, 255, 0.5)',
                                        fontWeight: 'bold',
                                    }}>Media</span>
                                </Typography>
                            </Link>
                        </Box>

                        {/* Desktop nav & button */}
                        <motion.nav
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            className="hidden md:flex items-center space-x-8"
                        >
                            {navItems.map((item, idx) => (
                                <motion.div
                                    key={item.label}
                                    initial={{ y: -10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: idx * 0.12, duration: 0.4 }}
                                    whileHover={{ scale: 1.1 }}
                                >
                                    <Link href={item.href}>
                                        <span className="cursor-pointer font-medium transition-colors hover:text-accent hover:border-b-2 hover:border-accent pb-1">
                                            {item.label}
                                        </span>
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.nav>
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.5, type: 'spring', stiffness: 120 }}
                        >
                            <Button
                                component={Link}
                                href="/contact-us"
                                variant="contained"
                                color='secondary'
                                className="bg-accent hover:bg-accent-dark text-white rounded-full px-6 py-2 shadow-lg"
                                disableElevation
                            >
                                Connect Now
                            </Button>
                        </motion.div>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Drawer
                anchor="left"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{ keepMounted: true }}
                PaperProps={{ className: 'backdrop-filter backdrop-blur-lg bg-white bg-opacity-80' }}
            >
                {drawer}
            </Drawer>
        </>
    );
};

export default Header;
