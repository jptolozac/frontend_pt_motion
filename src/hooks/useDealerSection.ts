import { SubmitHandler } from "react-hook-form"
import { createDealer, editDealer, getDealerData } from "@/services/dealer.service"
import { IDealer } from "@/types/dealer"
import { useEffect, useState } from "react"


export const useDealerSection = () => {
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

    return { 
        areEditButtonsActive, 
        handleActiveEditButtons, 
        handleAddSubmit, 
        handleEditSubmit, 
        currentDealer,
        dealerData,
        dealerEditActive,
        handleEditActive,
        refreshData
    }
} 