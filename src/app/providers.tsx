"use client";

import SplashContextProvider from '@/context/splash/SplashContext';
import React from 'react'

type Props = {
    children:React.ReactNode
}

function ContextProviders({ children }: Props) {
    return (
        <SplashContextProvider>
            {children}
        </SplashContextProvider>
    )
}

export default ContextProviders