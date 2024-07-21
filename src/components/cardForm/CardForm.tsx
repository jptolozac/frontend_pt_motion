import { TextInput } from "../inputs/Text/TextInput"
import carIcon from "@/assets/Icon_vehiculo.svg"
import locationIcon from "@/assets/Icon_puntoubicacion.svg"
import personIcon from "@/assets/Icon_persona.svg"
import carIconActive from "@/assets/Icon_vehiculo1.svg"
import locationIconActive from "@/assets/Icon_puntoubicacion1.svg"
import personIconActive from "@/assets/Icon_persona1.svg"
import createIcon from "@/assets/Icon_crear.svg"
import cancelIcon from "@/assets/Icon_cancelar.svg"
import confirmIcon from "@/assets/Icon_confirmar.svg"
import { useEffect, useState } from "react"
import './CardForm.css'
import { FormProvider, Resolver, SubmitHandler, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { IDealer } from "../../types/dealer"
import { createDealerItem } from "../../helpers/Validations"

interface CardFormProps {
    areEditButtonsActive?: boolean;
    handleActiveEditButtons?: () => void;
    handleAdd: SubmitHandler<IDealer>;
    handleEdit: SubmitHandler<IDealer>;
    currentRecord?: IDealer
}

export const CardForm = ({ 
    areEditButtonsActive = false, 
    handleActiveEditButtons, 
    handleAdd, 
    handleEdit,
    currentRecord
}: CardFormProps) => {
    const [areCreateButtonsActive, setAreCreateButtonsActive] = useState(false)
    const [isEditActive, setIsEditActive] = useState(false)

    const handleEditButtonsChange = () => {
        currentRecord = undefined

        if (handleActiveEditButtons)
            handleActiveEditButtons()
        setIsEditActive(!isEditActive)
    }

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
        if(isEditActive)
            methods.reset(currentRecord)
        else
            methods.reset({
                brand: "",
                branch: "",
                applicant: ""
            })
    }, [currentRecord, isEditActive, methods])

    return (
        <FormProvider {...methods}>
            <form
                onSubmit={methods.handleSubmit(
                    areCreateButtonsActive && !isEditActive
                        ? handleAddSubmit
                        : handleEdit
                    )}
                className="shadow-custom-md px-16 py-2 rounded-xl h-fit w-[650px] relative"
            >
                <button
                    type="button"
                    className="absolute top-4 left-6"
                    onClick={() => setAreCreateButtonsActive(true)}
                    disabled={areCreateButtonsActive}
                >
                    <img src={createIcon} alt="Botón para crear un registro" />
                </button>
                <TextInput
                    name="brand"
                    img={areCreateButtonsActive || isEditActive ? carIconActive : carIcon}
                    placeholder="Mazda"
                    active={areCreateButtonsActive || isEditActive}
                />
                <TextInput
                    name="branch"
                    img={areCreateButtonsActive || isEditActive ? locationIconActive : locationIcon}
                    placeholder="Chapinero"
                    active={areCreateButtonsActive || isEditActive}
                />
                <TextInput
                    name="applicant"
                    img={areCreateButtonsActive || isEditActive ? personIconActive : personIcon}
                    placeholder="David Sandoval"
                    active={areCreateButtonsActive || isEditActive}
                />
                <div
                    className="button-section create-buttons"
                    style={{
                        animationName: areCreateButtonsActive
                            ? "incoming-segment"
                            : "hide-segment"
                    }}>
                    <button
                        type="button"
                        onClick={() => setAreCreateButtonsActive(false)}
                        className="border-2 border-red1 px-6 py-1 text-3xl text-grey1 font-[500] rounded-xl min-w-[175px]"
                    >Cancelar</button>
                    <button
                        className="border-2 border-blue2 px-6 py-1 text-3xl text-grey1 font-[500] rounded-xl min-w-[175px]"
                    >Crear</button>
                </div>
                <div
                    className="button-section flex justify-end gap-4"
                    style={{
                        animationName: isEditActive
                            ? "show-segment"
                            : "hide-segment"
                    }}>
                    <button
                        type="button"
                        onClick={handleEditButtonsChange}
                    >
                        <img src={cancelIcon} alt="Ícono de cancelación" />
                    </button>
                    <button>
                        <img src={confirmIcon} alt="Ícono de confirmación" />
                    </button>
                </div>
            </form>
        </FormProvider>
    )
}