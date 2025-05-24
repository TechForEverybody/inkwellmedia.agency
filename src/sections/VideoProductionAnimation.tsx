import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import React from 'react'


function VideoProductionAnimation() {
    return (
        <div
            style={{
                width: '100%',
                // height: 'max(100%,580px)',
                zIndex: 99999999
            }}
        >
            <DotLottieReact
                src="/animations/animations-2.lottie"
                loop
                autoplay
            />
        </div>
    )
}

export default VideoProductionAnimation