import { useState } from "react"
import { AnimationContext } from "./AnimationContext"

export const AnimationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isMainAnimation, setMainAnimation] = useState(true)

    const changeMainAnimation = (state: boolean) => {
        setMainAnimation(state)
    }

    return (
        <AnimationContext.Provider value={{isMainAnimation, changeMainAnimation}}>
            {children}
        </AnimationContext.Provider>
    )
}