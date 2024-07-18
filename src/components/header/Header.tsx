import logo from '@/assets/Imagologo_motion.svg'

export const Header = () => {
    return (
        <header className='m-0'>
            <img
                src={logo}
                alt="Logo de la empresa"
                className='mx-10 my-6'
            />
        </header>
    )
}