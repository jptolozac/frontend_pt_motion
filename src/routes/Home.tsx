import { HomepageLogo } from "../components/homepageLogo/HomepageLogo"

export const Home = ({ ...props }: React.HTMLAttributes<HTMLElement>) => {
    return (
        <section id="home" {...props} className={`overflow-x-clip ${props.className}`}>
            <HomepageLogo />
            <div className="flex justify-between mt-8 mx-4 gap-8">
                <a href="https://monitoringinnovation.com/" target="_blank">MONITORINGINNOVATION</a>
                <a href="https://gpscontrol.co/" target="_blank">GPS CONTROL</a>
                <a href="" target="_blank">Link repo front</a>
                <a href="" target="_blank">Link repo back</a>
            </div>
        </section>
    )
}