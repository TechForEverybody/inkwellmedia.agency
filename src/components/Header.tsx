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
// import useScrollTrigger from '@mui/material/useScrollTrigger';
// import Slide from '@mui/material/Slide';
import { motion } from 'framer-motion';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import Link from 'next/link';

interface Props { window?: () => Window; }

function HideOnScroll(props: Props & { children: React.ReactElement }) {
    // const { children, window } = props;
    // const trigger = useScrollTrigger({ target: window ? window() : undefined });
    return (
        // <Slide appear={true} direction="down" in={!trigger}>

        <>
            {props.children}
        </>
        // </Slide>
    );
}

const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Why Us', href: '/why-us' },
    { label: 'Contact Us', href: '/contact-us' },
];

const Header: React.FC = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

    const drawer = (
        <Box className="w-full h-full  p-0 flex flex-col" sx={{
            background: "linear-gradient(to right, #000, #002147)", // Dark blue gradient
            backdropFilter: 'blur(50px)',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
            // borderRadius: '20px',
            maxWidth: '90%',
            padding: '20px',
            color: 'white',
            fontFamily: 'Electrolize, sans-serif',
        }}>
            <Box className="mb-6">
                <Link href="/">
                    <Image src="/images/Screenshot_2025-06-06_211644-removebg-preview.png" alt="Logo" width={100} height={30} />
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
                    variant="text"
                    fullWidth
                    className="bg-accent hover:bg-accent-dark text-white rounded-full py-2 w-[200px]"
                >
                    <motion.a
                        href="/contact-us"
                        className="inline-block bg-gradient-to-r from-[#FF6A3D] to-[#FFA62B] text-white rounded-full px-10 p-1 text-xs font-medium shadow-xl w-[200px]"
                        whileHover={{ scale: 1.1, boxShadow: '0px 0px 20px rgba(255,106,61,0.7)' }}
                        transition={{ type: 'spring', stiffness: 200, }}
                    >
                        Connect Now →
                    </motion.a>
                </Button>
            </Box>
        </Box>
    );

    return (
        <>
            <HideOnScroll>
                <AppBar elevation={0} className="backdrop-filter backdrop-blur-lg bg-white bg-opacity-20 text-gray-800" sx={{
                    background: 'linear-gradient(to left, #4F1C5155, #00000055)',
                    backdropFilter: 'blur(50px)',
                    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                    maxWidth: '90%',
                    margin: '10px auto',
                    left: '0',
                    borderRadius: '20px',
                    fontFamily: 'Electrolize, sans-serif',
                }}

                >
                    <Toolbar className="container mx-auto flex justify-between items-center  md:px-0">
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
                                    <Image src="/images/Screenshot_2025-06-06_211644-removebg-preview.png" alt="Inkwell Media Logo" width={120} height={50} priority />
                                </IconButton>
                                {/* <Typography
                                    variant="h6"
                                    noWrap
                                    component="div"
                                    className="hidden md:flex text-white font-bold text-xl"
                                >
                                    Inkwell <span className="text-accent" style={{
                                        textShadow: '2px 2px 4px rgba(255, 255, 255, 0.5)',
                                        fontWeight: 'bold',
                                    }}>Media</span>
                                </Typography> */}
                            </Link>
                        </Box>

                        {/* Desktop nav & button */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.5, type: 'spring', stiffness: 120 }}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                            }}
                        >
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
                                            <span className="cursor-pointer font-medium transition-colors hover:text-accent hover:border-2 hover:border-accent p-2 rounded text-sm">
                                                {item.label}
                                            </span>
                                        </Link>
                                    </motion.div>
                                ))}
                            </motion.nav>
                            <Button
                                component={Link}
                                href="/contact-us"
                                variant="text"
                                color='secondary'
                                className="bg-accent hover:bg-accent-dark text-white rounded-full px-6 py-2 shadow-lg"
                                disableElevation
                            >

                                <motion.a
                                    href="/contact-us"
                                    className="inline-block bg-gradient-to-r from-[#FF6A3D] to-[#FFA62B] text-white rounded-full px-4 md:px-10 py-3  text-[10px]  md:text-sm font-medium shadow-xl"
                                    whileHover={{ scale: 1.1, boxShadow: '0px 0px 20px rgba(255,106,61,0.7)' }}
                                    transition={{ type: 'spring', stiffness: 200 }}
                                >
                                    Connect Now
                                </motion.a>
                            </Button>
                        </motion.div>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Drawer
                anchor="left"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                style={{
                    backdropFilter: 'blur(50px)',
                    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                    background: 'linear-gradient(to right, #000, #002147)', // Dark blue gradient
                }}
                PaperProps={{
                    sx: {
                        background: 'transparent', // Dark blue gradient

                    },
                }}
            // ModalProps={{ keepMounted: true }}
            // PaperProps={{ className: 'backdrop-filter bg-transparent backdrop-blur-lg bg-opacity-80' }}
            >
                {drawer}
            </Drawer>
        </>
    );
};

export default Header;
