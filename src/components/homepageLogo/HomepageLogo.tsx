import './HomepageLogo.css'
import phoneLogo from '../../assets/Telefono-01.png'
import { useEffect, useRef } from 'react'
import { useAnimationContext } from '@/context/AnimationContext'

interface HomepageLogoProps extends React.HTMLAttributes<HTMLDivElement> {
    width?: number
}

export const HomepageLogo = ({ width = 1280, ...props }: HomepageLogoProps) => {
    const { isMainAnimation } = useAnimationContext()
    const imgRef = useRef<HTMLImageElement>(null)
    const foregroundTextRef = useRef<HTMLHeadingElement>(null)

    useEffect(() => {
        if(isMainAnimation && imgRef.current && foregroundTextRef.current){
            imgRef.current.style.animationName = 'move-up'
            foregroundTextRef.current.style.animationName = 'move-down-logo-text'
        }else if(imgRef.current && foregroundTextRef.current){
            imgRef.current.style.animationName = ''
            foregroundTextRef.current.style.animationName = ''
        }
    }, [isMainAnimation])

    return (
        <div
            {...props}
            className={`main-logo ${props.className}`}
            style={{ maxWidth: width, width: "100%" }}
        >
            <h2 className='logo-text background-text text-[1em]'>BIENVENIDO A</h2>
            <img
                ref={imgRef}
                src={phoneLogo}
                alt="Ilustración de un télefono haciendo alusión a la empresa"
                className='z-10 h-full'
            />
            <h2 ref={foregroundTextRef} className='logo-text foreground-text text-[.65em] -mt-[.8em]'>MONITORING INNOVATION</h2>
        </div>
    )
}