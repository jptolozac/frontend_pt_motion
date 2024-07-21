import { useCallback, useEffect, useState } from "react"
import { yupResolver } from "@hookform/resolvers/yup"
import { createDealerItem } from "@/helpers/Validations"
import { Resolver, SubmitHandler, useForm } from "react-hook-form"
import { CardFormProps } from "@/components/cardForm/CardForm"
import { IDealer } from "@/types/dealer"



export const useCardForm = ({
    areEditButtonsActive = false,
    handleActiveEditButtons,
    handleAdd,
    currentRecord
}: CardFormProps) => {
    const [areCreateButtonsActive, setAreCreateButtonsActive] = useState(false)
    const [isEditActive, setIsEditActive] = useState(false)

    const handleEditButtonsChange = useCallback(() => {
        // currentRecord = undefined

        if (handleActiveEditButtons)
            handleActiveEditButtons()
        setIsEditActive(!isEditActive)
    }, [handleActiveEditButtons, isEditActive])

    const handleAddSubmit: SubmitHandler<IDealer> = async (data) => {
        await handleAdd(data)
        setAreCreateButtonsActive(false)
    }

    useEffect(() => {
        setIsEditActive(areEditButtonsActive)
    }, [areEditButtonsActive])


    const methods = useForm<IDealer>({
        resolver: yupResolver(createDealerItem) as unknown as Resolver<IDealer>,
    })

    useEffect(() => {
        if(areCreateButtonsActive && isEditActive){
            handleEditButtonsChange()
            setAreCreateButtonsActive(false)
        }
    }, [areCreateButtonsActive, handleEditButtonsChange, isEditActive])

    useEffect(() => {
        if (isEditActive)
            methods.reset(currentRecord)
        else
            methods.reset({
                brand: "",
                branch: "",
                applicant: ""
            })
    }, [currentRecord, isEditActive, methods])

    return {
        methods,
        areCreateButtonsActive,
        isEditActive,
        handleAddSubmit,
        setAreCreateButtonsActive,
        handleEditButtonsChange
    }
}