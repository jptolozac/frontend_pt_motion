import { useEffect, useRef, useState } from "react"
import { CircleAnimation } from "../components/circleAnimation/CircleAnimation"
import { DealerSection } from "../components/dealerSection/DealerSection"
import { useAnimationContext } from "@/context/AnimationContext"

export const DealerInformation = ({ ...props }: React.HTMLAttributes<HTMLElement>) => {
    const sectionScroll = useRef<HTMLElement>(null)
    const [isAnimationActive, setIsAnimationActive] = useState(false)
    const { changeMainAnimation } = useAnimationContext()

    const checkIntersection = () => {
        if (sectionScroll.current) {
            const rect = sectionScroll.current.getBoundingClientRect()
            const sectionVisible = rect.top + 100 < window.innerHeight
            setIsAnimationActive(sectionVisible)
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', checkIntersection)
        return () => {
            window.removeEventListener('scroll', checkIntersection)
        }
    }, [])

    useEffect(() => {
        changeMainAnimation(!isAnimationActive)
    }, [changeMainAnimation, isAnimationActive])

    return (
        <>
            <div className="relative">
                <CircleAnimation animationActive={isAnimationActive} />
            </div>
            <DealerSection
                ref={sectionScroll}
                isAnimationActive={isAnimationActive}
                {...props}
            />
        </>
    )
}
