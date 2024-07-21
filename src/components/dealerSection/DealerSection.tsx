import { CardForm } from "../../components/cardForm/CardForm"
import { SubmitHandler } from "react-hook-form"
import { createDealer, editDealer, getDealerData } from "../../services/dealer.service"
import { forwardRef, useEffect, useState } from "react"
import { IDealer } from "../../types/dealer"
import { TableSection } from "./TableSection"

interface DealerSectionProps {
    isAnimationActive: boolean
}

export const DealerSection = forwardRef<HTMLElement, DealerSectionProps>(
    ({
    isAnimationActive,
    ...props
}, ref
) => {
    const [areEditButtonsActive, setAreEditButtonsActive] = useState(false)
    const [dealerEditActive, setDealerEditActive] = useState<number | null>(null)
    const [currentDealer, setCurrentDealer] = useState<IDealer | null>(null)
    const [dealerData, setDealerData] = useState<Array<IDealer>>([])

    const handleActiveEditButtons = () => {
        setAreEditButtonsActive(!areEditButtonsActive)
    }

    const handleEditActive = (idx: number, dealer: IDealer) => {
        setAreEditButtonsActive(!areEditButtonsActive)
        setDealerEditActive(idx)
        setCurrentDealer(dealer)
    }

    const refreshData = () => {
        getDealerData().then(data => setDealerData(data))
    }

    const handleAddSubmit: SubmitHandler<IDealer> = async (dealer) => {
        console.log("From add: ", dealer)
        await createDealer(dealer)
        refreshData()
    }

    const handleEditSubmit: SubmitHandler<IDealer> = async (dealer) => {
        if (handleActiveEditButtons)
            handleActiveEditButtons()
        console.log("From edit: ", dealer)
        await editDealer(currentDealer!.id!, dealer)
        refreshData()
    }

    useEffect(() => {
        refreshData()
    }, [])


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