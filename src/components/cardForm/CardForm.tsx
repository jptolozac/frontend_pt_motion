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
import './CardForm.css'
import { FormProvider, SubmitHandler } from "react-hook-form"
import { IDealer } from "../../types/dealer"
import { useCardForm } from "@/hooks/useCardForm"

export interface CardFormProps {
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
    const {
        methods,
        areCreateButtonsActive,
        isEditActive,
        handleAddSubmit,
        setAreCreateButtonsActive,
        handleEditButtonsChange
    } = useCardForm({
        areEditButtonsActive,
        handleActiveEditButtons,
        handleAdd,
        handleEdit,
        currentRecord
    })

    return (
        <div className="h-fit max-w-full px-4 inline-block card-form">
            <FormProvider {...methods}>
                <form
                    onSubmit={methods.handleSubmit(
                        areCreateButtonsActive && !isEditActive
                            ? handleAddSubmit
                            : handleEdit
                    )}
                    className="shadow-custom-md px-[10%] py-2 rounded-3xl h-fit w-[600px] max-w-full relative"
                >
                    <button
                        type="button"
                        className="floating-button"
                        onClick={() => setAreCreateButtonsActive(true)}
                        disabled={areCreateButtonsActive}
                    >
                        <img src={createIcon} alt="Botón para crear un registro" className="w-fit" />
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
                            className="border-2 border-red1 px-6 text-grey1 font-[500] rounded-xl"
                        >Cancelar</button>
                        <button
                            className="border-2 border-blue2 px-6 text-grey1 font-[500] rounded-xl"
                        >Crear</button>
                    </div>
                    <div
                        className="button-section flex justify-end gap-2"
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
        </div>
    )
}