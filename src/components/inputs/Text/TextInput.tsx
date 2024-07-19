import { useFormContext } from 'react-hook-form';
import { InputBaseForm } from '../InputBaseForm';
import './TextInput.css'
import { useEffect } from 'react';

interface TextInputProps {
    name: string;
    img?: string;
    alt?: string;
    placeholder?: string;
    active?: boolean;
}

export const TextInput = ({ img, alt, name, placeholder, active=true }: TextInputProps) => {
    const { register, reset } = useFormContext()

    useEffect(() => {
        if(!active){
            reset()
        }
    }, [active, reset])

    return (
        <InputBaseForm name={name} active={active}>
            <div className="flex gap-8">
                {img &&
                    <img
                        src={img}
                        alt={alt || "Imágen en referencia al ínput"}
                        width={47}
                        className='object-contain'
                    />
                }
                <input
                    className="custom-input"
                    placeholder={placeholder}
                    disabled={!active}

                    {...register(name)}
                />
            </div>
        </InputBaseForm>
    )
}