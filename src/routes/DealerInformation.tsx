import { useEffect, useRef, useState } from "react"
import { CardForm } from "../components/cardForm/CardForm"
import { CircleAnimation } from "../components/circleAnimation/CircleAnimation"
import { Table } from "../components/table/Table"
import { TableRow } from "../components/table/TableRow"
import { IDealer } from "../types/dealer"
import { TableData } from "../components/table/TableData"
import { getDealerData } from "../services/dealer.service"
import editIcon from '@/assets/Icon_editar1.svg'
import deleteIcon from '@/assets/Icon_eliminar1.svg'

export const DealerInformation = ({ ...props }: React.HTMLAttributes<HTMLElement>) => {
    const sectionScroll = useRef<HTMLElement>(null)
    const [isAnimationActive, setIsAnimationActive] = useState(false)
    const [dealerData, setDealerData] = useState<Array<IDealer>>([])

    const checkScroll = (event: WheelEvent) => {
        setIsAnimationActive(event.deltaY > 0)
    }

    useEffect(() => {
        getDealerData().then(data => setDealerData(data))

        window.addEventListener('wheel', checkScroll)
        return () => {
            window.removeEventListener('wheel', checkScroll)
        }
    }, [])

    return (
        <>
            <div className="overflow-hidden">
                <CircleAnimation animationActive={isAnimationActive} />
            </div>
            <section
                {...props}
                className={`grid relative z-30 h-[100%] py-12 mx-auto mb-[150px] gap-2 ${props.className}`}
                ref={sectionScroll}
                style={{
                    opacity: isAnimationActive ? 1 : 0,
                    transform: isAnimationActive ? "translatex(0)" : "translatex(100vw)",
                    transition: "1.5s",
                    transitionBehavior: "-moz-initial",
                    gridTemplateColumns: "repeat(auto-fill, minmax(600px, 1fr))"
                }}
            >
                <CardForm />
                <Table headers={["Marca", "Sucursal", "Aspirante"]}>
                    <tbody className="pt-8">
                        {dealerData.map((dealer, idx) => (
                            <TableRow key={idx}>
                                <TableData>{dealer.brand}</TableData>
                                <TableData className="text-center">{dealer.branch}</TableData>
                                <TableData className="flex justify-between items-center gap-12">
                                    {dealer.applicant}
                                    <div className="flex gap-4">
                                        <button><img src={editIcon} alt="Botón de edición" width="38px" /></button>
                                        <button><img src={deleteIcon} alt="Botón de edición" width="38px" /></button>
                                    </div>
                                </TableData>
                            </TableRow>
                        ))}
                    </tbody>
                </Table>
            </section>
        </>
    )
}
