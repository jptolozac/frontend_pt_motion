import { CardForm } from "../../components/cardForm/CardForm"
import { forwardRef } from "react"
import { TableSection } from "./TableSection"
import { useDealerSection } from "@/hooks/useDealerSection"

interface DealerSectionProps {
    isAnimationActive: boolean
}

export const DealerSection = forwardRef<HTMLElement, DealerSectionProps>(
    ({
    isAnimationActive,
    ...props
}, ref
) => {
    const { 
        areEditButtonsActive, 
        handleActiveEditButtons, 
        handleAddSubmit, 
        handleEditSubmit, 
        currentDealer,
        dealerData,
        dealerEditActive,
        handleEditActive,
        refreshData
    } = useDealerSection()

    return (
        <section
            ref={ref}
            {...props}
            className={`flex flex-wrap justify-around relative z-30 min-h-[70vh] h-[100%] py-12 mx-auto mb-[150px] gap-6 overflow-x-auto`}
            style={{
                opacity: isAnimationActive ? 1 : 0,
                transform: isAnimationActive ? "translatex(0)" : "translatex(100vw)",
                transition: "1.5s",
                transitionBehavior: "-moz-initial",
            }}
        >
            <CardForm
                areEditButtonsActive={areEditButtonsActive}
                handleActiveEditButtons={handleActiveEditButtons}
                handleAdd={handleAddSubmit}
                handleEdit={handleEditSubmit}
                currentRecord={currentDealer!}
            />
            <TableSection 
                areEditButtonsActive={areEditButtonsActive}
                dealerData={dealerData}
                dealerEditActive={dealerEditActive}
                handleEditActive={handleEditActive}
                refreshData={refreshData}
            />
        </section>
    )
})