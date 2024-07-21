import { useFormContext } from 'react-hook-form';
import { InputBaseForm } from '../InputBase/InputBaseForm';
import './TextInput.css'
import { useEffect } from 'react';

interface TextInputProps {
    name: string;
    img?: string;
    alt?: string;
    placeholder?: string;
    active?: boolean;
}

export const TextInput = ({ img, alt, name, placeholder, active = true }: TextInputProps) => {
    const { register, reset } = useFormContext()

    useEffect(() => {
        if (!active) {
            reset()
        }
    }, [active, reset])

    return (
        <InputBaseForm name={name} active={active}>
            <div className="input-container">
                {img &&
                    <div className="max-w-[47px] w-fit">
                        <img
                            src={img}
                            alt={alt || "Imágen en referencia al ínput"}
                            // width={47}
                            className='object-contain'
                        />
                    </div>
                }
                <div className="w-full">
                    <input
                        className="custom-input"
                        placeholder={placeholder}
                        disabled={!active}

                        {...register(name)}
                    />
                </div>
            </div>
        </InputBaseForm>
    )
}