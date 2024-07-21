import './InputBaseForm.css'
import { useFormContext } from "react-hook-form"

interface InputBaseFormProps {
    children: React.ReactNode
    name: string
    active?: boolean
}

export const InputBaseForm = ({ children, name, active }: InputBaseFormProps) => {
    const { formState } = useFormContext()

    const error = formState.errors[name!]

    return (
        <div className="base">
            {children}
            <div
                className="text-red1 text-sm font-semibold mt-1 ml-20"
                style={{ display: active ? "block" : "none" }}
            >
                {error?.message?.toString()}
            </div>
        </div>
    )
}