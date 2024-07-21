import { createContext, useContext } from "react";

interface AnimationContextType {
    isMainAnimation: boolean;
    changeMainAnimation: (state: boolean) => void
}

export const AnimationContext = createContext<AnimationContextType>(null!)

export const useAnimationContext = () => {
    const context = useContext(AnimationContext)

    if(!context)
        throw new Error('useAnimationContext debe ser usado en un AnimationContextProvider')

    return context
}