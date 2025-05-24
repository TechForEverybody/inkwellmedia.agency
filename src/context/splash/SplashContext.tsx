import React, { useEffect } from 'react'
import SplashScreen from './SplashScreen'

type Props = {
    children?: React.ReactNode
}

function SplashContextProvider({
    children
}: Props) {
    const [isSplashVisible, setIsSplashVisible] = React.useState(true)
    useEffect(() => {
        setTimeout(() => {
            setIsSplashVisible(false)
        }, 3000)
    }, [])
    if(isSplashVisible){
        return <SplashScreen/>
    }
    return children
}

export default SplashContextProvider