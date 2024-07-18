import { TextInput } from "../inputs/Text/TextInput"
import carIcon from "@/assets/Icon_vehiculo.svg"
import locationIcon from "@/assets/Icon_puntoubicacion.svg"
import personIcon from "@/assets/Icon_persona.svg"
import createIcon from "@/assets/Icon_crear.svg"

export const CardForm = () => {

    return (
        <form className="shadow-custom-md px-16 py-2 rounded-xl h-fit w-fit relative">
            <TextInput name="brand" img={carIcon} placeholder="Mazda" />
            <TextInput name="branch" img={locationIcon} placeholder="Chapinero" />
            <TextInput name="applicant" img={personIcon} placeholder="David Sandoval" />
            <button className="absolute top-4 left-6">
                <img src={createIcon} alt="Botón para crear un registro" />
            </button>
        </form>
    )
}