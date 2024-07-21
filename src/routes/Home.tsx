import { HomepageLogo } from "../components/homepageLogo/HomepageLogo"

export const Home = ({ ...props }: React.HTMLAttributes<HTMLElement>) => {
    return (
        <section id="home" {...props} className={`relative w-full ${props.className}`}>
            <HomepageLogo />
            <div className="flex flex-wrap justify-between mt-8 mx-4 break-all gap-4">
                <a href="https://monitoringinnovation.com/" target="_blank">MONITORINGINNOVATION</a>
                <a href="https://gpscontrol.co/" target="_blank">GPS CONTROL</a>
                <a href="https://github.com/jptolozac/frontend_pt_motion" target="_blank">Link repo front</a>
                <a href="https://github.com/jptolozac/backend_pt_motion" target="_blank">Link repo back</a>
            </div>
        </section>
    )
}