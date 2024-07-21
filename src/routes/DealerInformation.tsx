import { useDealerInformation } from "@/hooks/useDealerInformation"
import { CircleAnimation } from "../components/circleAnimation/CircleAnimation"
import { DealerSection } from "../components/dealerSection/DealerSection"

export const DealerInformation = ({ ...props }: React.HTMLAttributes<HTMLElement>) => {
    const {isAnimationActive, sectionScroll} = useDealerInformation()

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
