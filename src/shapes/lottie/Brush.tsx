'use client'

import { useRef, Suspense } from 'react'
import Lottie from 'lottie-react'
import animation from '/public/animations/brush.json'

export default function Brush() {
    const brushRef = useRef(null)

    return (
        <>
            <Suspense fallback={<p>Laden...</p>}>
            <Lottie
                className="ease-in-out duration-300 w-[400px]"
                lottieRef={brushRef}
                animationData={animation}
                loop={true}
                autoplay={true}
                />
            </Suspense>
        </>
    )
}