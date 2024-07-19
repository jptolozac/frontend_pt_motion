import { useEffect, useRef } from 'react'
import './CircleAnimation.css'

interface CircleAnimationProps {
    animationActive?: boolean
}

export const CircleAnimation = ({ animationActive=false }: CircleAnimationProps) => {
    const circleElement = useRef<HTMLDivElement>(null)
    // console.log(animationActive);
    useEffect(() => {
        if(animationActive && circleElement.current){
            circleElement.current.style.animation = "short-lived-expansion 1s normal both ease-in"
        }else if(circleElement.current){
            circleElement.current.style.animation = "short-lived-contraction 1s normal both ease-out"
        }
    }, [animationActive])
    
    return (
        <div ref={circleElement} className="circle"></div>
    )
}