import logo from '@/assets/Imagologotipo_motion.svg'

export const Footer = () => {
    return (
        <footer className="sticky z-20 mb-20 w-full">
            <div className='mx-auto w-fit'>
                <img src={logo} alt="Logotipo de la empresa" />
            </div>
        </footer>
    )
}