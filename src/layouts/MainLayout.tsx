import { Footer } from "../components/footer/Footer"
import { Header } from "../components/header/Header"

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Header />
            <main className="mx-auto relative overflow-hidden">
                {children}
            </main>
            <Footer />
        </>
    )
}