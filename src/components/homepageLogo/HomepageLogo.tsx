import './HomepageLogo.css'
import phoneLogo from '../../assets/Telefono-01.png'

interface HomepageLogoProps extends React.HTMLAttributes<HTMLDivElement> {
    width?: number
}

export const HomepageLogo = ({ width = 1280, ...props }: HomepageLogoProps) => {

    return (
        <div
            {...props}
            className={`main-logo ${props.className}`}
            style={{ width }}
        >
            <h2 className='logo-text background-text text-[1em]'>BIENVENIDO A</h2>
            <img
                src={phoneLogo}
                alt="Ilustración de un télefono haciendo alusión a la empresa"
                className='z-10 h-full'
            />
            <h2 className='logo-text foreground-text text-[.65em] -mt-[.8em]'>MONITORING INNOVATION</h2>
        </div>
    )
}