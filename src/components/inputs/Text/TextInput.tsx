import './TextInput.css'

interface TextInputProps {
    name: string;
    img?: string;
    alt?: string;
    placeholder?: string;
}

export const TextInput = ({ img, alt, name, placeholder}: TextInputProps) => {

    return (
        <div className="flex gap-8 my-8">
            {img &&
                <img
                    src={img}
                    alt={alt || "Imágen en referencia al ínput"}
                    width={47}
                    className='object-contain'
                />
            }
            <input
                type="text"
                name={name}
                placeholder={placeholder}
                className="custom-input"
            />
        </div>
    )
}