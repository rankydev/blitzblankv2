'use client'

import { useRef, Suspense } from 'react'
import Lottie from 'lottie-react'
import animation from '../../../public/animations/spray.json'

export default function Spray() {
    const sprayRef = useRef(null)

    return (
        <>
            <Suspense fallback={<p>Laden...</p>}>
            <Lottie
                className="ease-in-out duration-300 w-[400px]"
                lottieRef={sprayRef}
                animationData={animation}
                loop={true}
                autoplay={true}
                />
            </Suspense>
        </>
    )
}